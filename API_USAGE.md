# M6 Demo API Usage

This website calls a backend model API only when the user clicks **Calculate Risk Tier** on `m6.html`.

## API Endpoint

Local backend:

```text
POST http://127.0.0.1:8010/api/predict
```

Frontend configuration file:

```text
website/config.js
```

For local demo:

```js
window.M6_API_BASE_URL = "http://127.0.0.1:8010";
```

For GitHub Pages deployment, replace it with the deployed backend URL:

```js
window.M6_API_BASE_URL = "https://YOUR-API-DOMAIN";
```

The frontend will call:

```text
https://YOUR-API-DOMAIN/api/predict
```

## Request Body

Send JSON with the following fields:

```json
{
  "age": 64,
  "tumorSize": 22,
  "stage": "2A",
  "subtype": "HR+/HER2-",
  "grade": "G2",
  "race": "White",
  "income": "120k+",
  "period": "recent",
  "nodesPositive": 0,
  "mets": []
}
```

## Parameters

| Field | Type | Allowed values / format | Meaning |
|---|---:|---|---|
| `age` | number | 18-90 | Age at diagnosis |
| `tumorSize` | number | 1-150 | Tumor size in millimeters |
| `stage` | string | `1A`, `1B`, `2A`, `2B`, `3A`, `3B`, `3C`, `4` | EOD/AJCC-style stage group |
| `subtype` | string | `HR+/HER2-`, `HR+/HER2+`, `HR-/HER2+`, `HR-/HER2-`, `Unknown` | Breast molecular subtype |
| `grade` | string | `G1`, `G2`, `G3`, `G4`, `Unknown` | Pathological grade |
| `race` | string | `White`, `Black`, `Asian or Pacific Islander`, `American Indian/Alaska Native`, `Unknown` | Race subgroup for demo fairness context |
| `income` | string | `120k+`, `100-119k`, `80-99k`, `60-79k`, `<60k`, `Missing` | Neighborhood income context |
| `period` | string | `pre`, `covid`, `recent` | Diagnosis period: 2018-2019, 2020-2021, or 2022-2023 |
| `nodesPositive` | number | 0-40 | Number of positive lymph nodes |
| `mets` | array of strings | Any of `bone`, `brain`, `liver`, `lung` | Metastatic sites at diagnosis |

## Example Request

```bash
curl -X POST http://127.0.0.1:8010/api/predict \
  -H "Content-Type: application/json" \
  -d '{
    "age": 82,
    "tumorSize": 74,
    "stage": "4",
    "subtype": "HR-/HER2-",
    "grade": "G3",
    "race": "Black",
    "income": "<60k",
    "period": "pre",
    "nodesPositive": 8,
    "mets": ["liver"]
  }'
```

## Response Body

The API returns JSON:

```json
{
  "risk": 0.72,
  "riskPercent": "72.0%",
  "tier": "High risk",
  "recommendation": "High-priority follow-up: discuss intensified review, treatment planning, and resource prioritization.",
  "topFactors": [
    { "label": "Stage 4", "value": 2.55 },
    { "label": "liver metastasis", "value": 0.76 }
  ],
  "model": "backend-demo-estimator-v1",
  "disclaimer": "Course demo only. Not for clinical decision-making."
}
```

## Response Fields

| Field | Meaning |
|---|---|
| `risk` | Numeric risk probability between 0 and 1 |
| `riskPercent` | Human-readable percent shown in the M6 page |
| `tier` | `Low risk`, `Moderate risk`, or `High risk` |
| `recommendation` | Stakeholder-facing interpretation text |
| `topFactors` | Highest-impact feature drivers used for the explanation panel |
| `model` | Backend model identifier |
| `disclaimer` | Safety note for demo use |

## Health Check

```text
GET /api/health
```

Expected response:

```json
{
  "ok": true,
  "service": "m6-risk-api"
}
```

## Important Note

GitHub Pages can only host the static frontend. It cannot run the Python backend. For a public demo URL, deploy:

1. `website/` to GitHub Pages.
2. `api/` to a backend host such as Render, Railway, Fly.io, or another Python server.

Then update `website/config.js` to point to the deployed backend.
