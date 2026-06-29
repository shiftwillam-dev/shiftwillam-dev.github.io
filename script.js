const iconSprite = `
<svg class="svg-sprite" aria-hidden="true" focusable="false">
  <symbol id="fa-dna" viewBox="0 0 448 512"><path d="M416 32c17 0 32 15 32 32 0 112-58 176-116 233 54 55 100 111 100 207h-64c0-42-12-75-31-104H111c-19 29-31 62-31 104H16c0-96 46-152 100-207C58 240 0 176 0 64c0-17 15-32 32-32s32 15 32 32c0 54 19 93 47 128h226c28-35 47-74 47-128 0-17 15-32 32-32zM164 256l60 58 60-58H164zm-18-128h156c12-16 22-34 28-54H118c6 20 16 38 28 54zm170 224c-10-12-21-23-32-34H164c-11 11-22 22-32 34h184z"/></symbol>
  <symbol id="fa-molecule" viewBox="0 0 512 512"><path d="M184 104a80 80 0 1 1-96-78 80 80 0 0 1 96 78zm-64 40a40 40 0 1 0 0-80 40 40 0 0 0 0 80zm312 48a80 80 0 1 1-56 137l-98 57a80 80 0 1 1-32-55l98-57a80 80 0 0 1 88-82zm0 120a40 40 0 1 0 0-80 40 40 0 0 0 0 80zM192 408a40 40 0 1 0 80 0 40 40 0 0 0-80 0zM192 135l154 78-29 57-154-78 29-57z"/></symbol>
  <symbol id="fa-microscope" viewBox="0 0 512 512"><path d="M160 32h96v64h-24v64h56l80 139-55 32-71-123h-74l-64 111 55 32 31-55h66l29 50c28 48 79 78 135 78h32v64H64v-64h93a146 146 0 0 1-12-237l23-40V96h-8V32zm160 96h64v96h-64v-96zM64 448h384v32H64v-32z"/></symbol>
  <symbol id="fa-stethoscope" viewBox="0 0 512 512"><path d="M112 32h32v144a96 96 0 0 0 192 0V32h32v144a128 128 0 0 1-112 127v57a88 88 0 1 0 176 0v-40a64 64 0 1 1 64 64h-16a120 120 0 1 1-240-24v-57A128 128 0 0 1 112 176V32zm-48 0h32v80H64V32zm320 0h32v80h-32V32zm64 256a32 32 0 1 0 0 64 32 32 0 0 0 0-64z"/></symbol>
  <symbol id="fa-syringe" viewBox="0 0 512 512"><path d="M462 50l-62 62 48 48-45 45-32-32-91 91 32 32-45 45-32-32-96 96-45-45 96-96-32-32 45-45 32 32 91-91-32-32 45-45 48 48 62-62 33 33zM98 362l52 52-74 74H24v-52l74-74zM180 183l149 149-45 45-149-149 45-45z"/></symbol>
  <symbol id="fa-cell" viewBox="0 0 512 512"><path d="M256 32c124 0 224 100 224 224S380 480 256 480 32 380 32 256 132 32 256 32zm0 64a160 160 0 1 0 0 320 160 160 0 0 0 0-320zm0 64a96 96 0 1 1 0 192 96 96 0 0 1 0-192zm0 56a40 40 0 1 0 0 80 40 40 0 0 0 0-80z"/></symbol>
  <symbol id="fa-chart" viewBox="0 0 512 512"><path d="M64 432h384v48H16V32h48v400zm80-48H96V224h48v160zm96 0h-48V128h48v256zm96 0h-48V176h48v208zm96 0h-48V80h48v304z"/></symbol>
  <symbol id="fa-bolt" viewBox="0 0 320 512"><path d="M296 184H187L222 24c3-14-14-23-24-12L24 280c-9 14 1 32 17 32h109l-35 176c-3 15 15 24 25 12l174-284c8-14-2-32-18-32z"/></symbol>
</svg>`;

const backgroundIcons = `
<div class="medical-background" aria-hidden="true">
  <svg class="med-bg-icon i1 spin"><use href="#fa-dna"></use></svg>
  <svg class="med-bg-icon i2"><use href="#fa-molecule"></use></svg>
  <svg class="med-bg-icon i3 spin"><use href="#fa-microscope"></use></svg>
  <svg class="med-bg-icon i4"><use href="#fa-stethoscope"></use></svg>
  <svg class="med-bg-icon i5 spin"><use href="#fa-syringe"></use></svg>
  <svg class="med-bg-icon i6"><use href="#fa-cell"></use></svg>
  <svg class="med-bg-icon i7 spin"><use href="#fa-dna"></use></svg>
  <svg class="med-bg-icon i8"><use href="#fa-molecule"></use></svg>
  <svg class="med-bg-icon i9 spin"><use href="#fa-cell"></use></svg>
  <svg class="med-bg-icon i10"><use href="#fa-microscope"></use></svg>
  <svg class="med-bg-icon i11 spin"><use href="#fa-stethoscope"></use></svg>
  <svg class="med-bg-icon i12"><use href="#fa-syringe"></use></svg>
  <svg class="med-bg-icon i13 spin"><use href="#fa-dna"></use></svg>
  <svg class="med-bg-icon i14"><use href="#fa-cell"></use></svg>
  <svg class="med-bg-icon i15 spin"><use href="#fa-molecule"></use></svg>
  <svg class="med-bg-icon i16"><use href="#fa-microscope"></use></svg>
  <svg class="med-bg-icon i17 spin"><use href="#fa-syringe"></use></svg>
  <svg class="med-bg-icon i18"><use href="#fa-stethoscope"></use></svg>
</div>`;

const decor = document.querySelector("#decor");
if (decor) {
  decor.innerHTML = iconSprite + backgroundIcons;
}

document.querySelectorAll("[data-tab-group]").forEach((group) => {
  const buttons = group.querySelectorAll("[data-tab]");
  const panels = group.querySelectorAll("[data-tab-panel]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;
      buttons.forEach((item) => item.classList.toggle("active", item === button));
      panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.tabPanel === target));
    });
  });
});

document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".accordion-item");
    item.classList.toggle("open");
  });
});

document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const buttons = gallery.querySelectorAll("[data-gallery-target]");
  const image = gallery.querySelector("[data-gallery-image]");
  const caption = gallery.querySelector("[data-gallery-caption]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.toggle("active", item === button));
      image.src = button.dataset.src;
      image.alt = button.dataset.alt;
      caption.textContent = button.dataset.caption;
    });
  });
});

const form = document.querySelector("#riskForm");
if (form) {
  initPredictor(form);
}

function initPredictor(riskForm) {
  const age = document.querySelector("#age");
  const tumorSize = document.querySelector("#tumorSize");
  const ageValue = document.querySelector("#ageValue");
  const tumorValue = document.querySelector("#tumorValue");
  const riskScore = document.querySelector("#riskScore");
  const riskTier = document.querySelector("#riskTier");
  const riskFill = document.querySelector("#riskFill");
  const factorList = document.querySelector("#factorList");
  const recommendation = document.querySelector("#recommendation");
  const apiStatus = document.querySelector("#apiStatus");
  const apiBase = (window.M6_API_BASE_URL || "http://127.0.0.1:8010").replace(/\/$/, "");
  let requestId = 0;
  const presets = {
    low: {
      age: 58,
      tumorSize: 12,
      stage: "1A",
      subtype: "HR+/HER2-",
      grade: "G1",
      race: "White",
      income: "120k+",
      period: "recent",
      nodesPositive: 0,
      mets: [],
    },
    moderate: {
      age: 71,
      tumorSize: 38,
      stage: "2B",
      subtype: "HR+/HER2+",
      grade: "G3",
      race: "Black",
      income: "60-79k",
      period: "covid",
      nodesPositive: 2,
      mets: [],
    },
    high: {
      age: 82,
      tumorSize: 74,
      stage: "4",
      subtype: "HR-/HER2-",
      grade: "G3",
      race: "Black",
      income: "<60k",
      period: "pre",
      nodesPositive: 8,
      mets: ["liver"],
    },
  };

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function getFormData() {
    const data = new FormData(riskForm);
    return {
      age: Number(data.get("age")),
      tumorSize: Number(data.get("tumorSize")),
      stage: data.get("stage"),
      subtype: data.get("subtype"),
      grade: data.get("grade"),
      race: data.get("race"),
      income: data.get("income"),
      period: data.get("period"),
      nodesPositive: Number(data.get("nodesPositive") || 0),
      mets: data.getAll("mets"),
    };
  }

  function syncLabels() {
    ageValue.textContent = age.value;
    tumorValue.textContent = tumorSize.value;
  }

  function setField(name, value) {
    const field = riskForm.elements[name];
    if (!field) return;
    field.value = value;
  }

  function applyPreset(name) {
    const preset = presets[name];
    if (!preset) return;
    setField("age", preset.age);
    setField("tumorSize", preset.tumorSize);
    setField("stage", preset.stage);
    setField("subtype", preset.subtype);
    setField("grade", preset.grade);
    setField("race", preset.race);
    setField("income", preset.income);
    setField("period", preset.period);
    setField("nodesPositive", preset.nodesPositive);
    riskForm.querySelectorAll('input[name="mets"]').forEach((box) => {
      box.checked = preset.mets.includes(box.value);
    });
    markPending();
  }

  function setStatus(message, kind = "pending") {
    if (!apiStatus) return;
    apiStatus.textContent = message;
    apiStatus.dataset.kind = kind;
  }

  function renderPrediction(result) {
    riskScore.textContent = result.riskPercent;
    riskTier.textContent = result.tier;
    riskFill.style.width = `${clamp(Number(result.risk) * 100, 2, 100)}%`;
    recommendation.textContent = result.recommendation;
    factorList.innerHTML = "";
    result.topFactors.forEach((item) => {
      const li = document.createElement("li");
      const value = Number(item.value);
      li.innerHTML = `<span>${item.label}</span><strong>${value >= 0 ? "+" : ""}${value.toFixed(2)}</strong>`;
      factorList.append(li);
    });
  }

  function markPending() {
    syncLabels();
    setStatus("Backend API: ready. Click Calculate Risk Tier to run prediction.", "pending");
  }

  function renderInitialState() {
    syncLabels();
    riskTier.textContent = "Ready to calculate";
    riskScore.textContent = "--";
    riskFill.style.width = "2%";
    factorList.innerHTML = "<li><span>Enter parameters, then click Calculate Risk Tier.</span><strong>↵</strong></li>";
    recommendation.textContent = "The backend model will run only after you submit the completed profile.";
    setStatus("Backend API: ready. Click Calculate Risk Tier to run prediction.", "pending");
  }

  async function requestPrediction() {
    syncLabels();
    const current = ++requestId;
    setStatus("Backend API: requesting prediction...", "pending");
    try {
      const response = await fetch(`${apiBase}/api/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(getFormData()),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = await response.json();
      if (current !== requestId) return;
      renderPrediction(result);
      setStatus(`Backend API: connected (${result.model})`, "ok");
    } catch (error) {
      if (current !== requestId) return;
      setStatus(`Backend API: unavailable at ${apiBase}`, "error");
      riskTier.textContent = "API offline";
      riskScore.textContent = "--";
      riskFill.style.width = "2%";
      factorList.innerHTML = "<li><span>Start the backend API or update config.js.</span><strong>!</strong></li>";
      recommendation.textContent = "Run `python3 api/server.py` locally, or deploy the FastAPI backend and set window.M6_API_BASE_URL in config.js.";
    }
  }

  riskForm.addEventListener("input", markPending);
  riskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    requestPrediction();
  });
  document.querySelectorAll("[data-preset]").forEach((button) => {
    button.addEventListener("click", () => applyPreset(button.dataset.preset));
  });
  renderInitialState();
}
