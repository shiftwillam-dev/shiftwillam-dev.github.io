# BioFusion API Usage

This website calls the BioFusion model API when the user clicks **Calculate Risk Tier** on `m6.html`.

## Base URL

```text
https://tandies-biofusion-api.hf.space
```

Frontend configuration file:

```text
config.js
```

```js
window.M6_API_BASE_URL = "https://tandies-biofusion-api.hf.space";
```

## Health Check

```text
GET /health
```

Expected response:

```json
{ "status": "ok", "model": "BioFusion-22feat" }
```

## Single Prediction

```text
POST /predict
```

The frontend sends the documented BioFusion request fields. Fields not collected by the page are omitted or filled with documented defaults.

Example payload generated from the M6 form:

```json
{
  "age_years": 55,
  "breast_subtype": "HR+/HER2-",
  "tumor_size_log": 2.5,
  "eod_2018_stage_group": "2A",
  "t_recode": "T2",
  "n_recode": "N0",
  "m_recode": "M0",
  "grade_path": "G2",
  "histology_group": "other",
  "race": "White",
  "marital_status": "other",
  "nodes_positive": 0,
  "bone_mets": 0,
  "brain_mets": 0,
  "liver_mets": 0,
  "lung_mets": 0,
  "metro": 0,
  "income_ord": 5
}
```

Response:

```json
{
  "probability": 0.0536,
  "risk_level": "medium"
}
```

Response fields:

| Field | Meaning |
|---|---|
| `probability` | Risk probability from 0 to 1 |
| `risk_level` | `low` for < 5%, `medium` for 5-15%, or `high` for >= 15% |

## Batch Prediction

```text
POST /predict/batch
```

Request body is an array of prediction payloads:

```json
[
  { "age_years": 55, "breast_subtype": "HR+/HER2-", "tumor_size_log": 2.5 },
  { "age_years": 70, "breast_subtype": "TN", "bone_mets": 1 }
]
```

Response:

```json
[
  { "probability": 0.0536, "risk_level": "medium" },
  { "probability": 0.182, "risk_level": "high" }
]
```

## Frontend Mapping Notes

The M6 page keeps the user-facing form compact, then maps it into BioFusion fields in `script.js`:

| Form field | BioFusion field |
|---|---|
| `age` | `age_years` |
| `subtype` | `breast_subtype`; `HR-/HER2-` maps to `TN` |
| `tumorSize` | `tumor_size_log` using `Math.log1p(mm)` |
| `stage` | `eod_2018_stage_group`; also helps derive `m_recode` |
| `grade` | `grade_path` |
| `race` | `race` |
| `income` | `income_ord` |
| `nodesPositive` | `nodes_positive` and derived `n_recode` |
| `mets` | `bone_mets`, `brain_mets`, `liver_mets`, `lung_mets` |

The current BioFusion API response does not include feature-driver explanations, so the result panel displays the submitted API-field summary instead of old `topFactors` data.
