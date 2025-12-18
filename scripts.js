const CATEGORIES = [
  {
    title: "Web Crawler",
    badge: "Automation",
    desc: "AI can help scale data collection, summarization, and targeting from public web content.",
    risk: "Mass collection of public signals can enable targeted social engineering and fraud workflows.",
    defensive: "Rate-limiting, bot management, anomaly detection, and minimizing exposed metadata."
  },
  {
    title: "CAPTCHA",
    badge: "Abuse",
    desc: "Attackers may attempt to bypass anti-bot controls using automation and outsourced solving.",
    risk: "Account creation abuse, scraping, credential stuffing attempts, and spam amplification.",
    defensive: "Layered bot defenses (behavioral signals, device fingerprinting), step-up verification, and throttling."
  },
  {
    title: "Exploit Generation",
    badge: "Dual-use",
    desc: "AI can be misused to accelerate vulnerability research discussions at a high level (dual-use risk).",
    risk: "Lower friction in turning known weaknesses into harmful tooling if misapplied.",
    defensive: "Secure SDLC, rapid patching, exposure reduction, vulnerability management, and segmentation."
  },
  {
    title: "Pentest",
    badge: "Legit / Dual-use",
    desc: "AI can assist authorized security testing by summarizing findings and suggesting defensive priorities.",
    risk: "If abused, similar workflows could be used for unauthorized reconnaissance.",
    defensive: "Strong authorization boundaries, logging, monitoring, and internal red-team governance."
  },
  {
    title: "Fuzzing",
    badge: "Testing",
    desc: "AI can help generate test inputs and triage crashes at a high level (especially for QA/security teams).",
    risk: "More vulnerabilities discovered faster — defenders must keep pace with remediation.",
    defensive: "Continuous patch pipelines, crash triage, safe disclosure processes, and dependency hygiene."
  },
  {
    title: "Phishing Attacks",
    badge: "Social engineering",
    desc: "AI improves writing quality, personalization, translation, and iteration of scam messages.",
    risk: "More convincing lures, fewer obvious mistakes, higher success rates against humans.",
    defensive: "MFA, safe workflows (call-back rules), secure email controls, and training on verification behaviors."
  },
  {
    title: "Fraud Attacks",
    badge: "Business abuse",
    desc: "AI can help craft plausible vendor/customer narratives and automate back-and-forth conversations.",
    risk: "Invoice fraud, account takeover monetization, and support-channel manipulation.",
    defensive: "Payment change verification, dual approvals, KYC/AML controls, and support-channel hardening."
  }
];

const elCards = document.getElementById("cards");
const elSearch = document.getElementById("search");
const btnExpand = document.getElementById("btnExpand");
const btnQuick = document.getElementById("btnQuick");
const toast = document.getElementById("toast");
const toastClose = document.getElementById("toastClose");
const btnTheme = document.getElementById("btnTheme");

let expandedAll = false;

function cardTemplate(item, idx){
  const id = `details-${idx}`;
  return `
    <article class="card" data-title="${escapeHtml(item.title)}" data-badge="${escapeHtml(item.badge)}">
      <div class="card-top">
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <span class="badge">${escapeHtml(item.badge)}</span>
      </div>

      <p class="card-desc">${escapeHtml(item.desc)}</p>

      <div class="details" id="${id}">
        <div class="kv">
          <div class="row">
            <div class="k">Risk (high-level)</div>
            <div class="v">${escapeHtml(item.risk)}</div>
          </div>
          <div class="row">
            <div class="k">Defensive focus</div>
            <div class="v">${escapeHtml(item.defensive)}</div>
          </div>
        </div>
      </div>

      <div class="card-actions">
        <button class="small" data-toggle="${id}" type="button">Details</button>
        <button class="small" data-copy="${idx}" type="button">Copy summary</button>
      </div>
    </article>
  `;
}

function render(list){
  elCards.innerHTML = list.map(cardTemplate).join("");
}

function setExpandedAll(state){
  expandedAll = state;
  document.querySelectorAll(".details").forEach(d => d.classList.toggle("show", expandedAll));
  btnExpand.textContent = expandedAll ? "↕ Collapse all" : "↕ Expand all";
}

function showToast(){
  toast.classList.add("show");
  window.clearTimeout(window.__toastTimer);
  window.__toastTimer = window.setTimeout(() => toast.classList.remove("show"), 6500);
}
function hideToast(){ toast.classList.remove("show"); }

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function copySummary(item){
  const text =
`AI-Enabled Attack Surface — ${item.title}
- What it is: ${item.desc}
- Risk (high-level): ${item.risk}
- Defensive focus: ${item.defensive}
`;
  navigator.clipboard?.writeText(text).then(() => {
    toast.querySelector(".toast-title").textContent = "Copied";
    toast.querySelector(".toast-text").textContent = `${item.title} summary copied to clipboard.`;
    showToast();
    window.setTimeout(() => {
      toast.querySelector(".toast-title").textContent = "Quick Summary";
      toast.querySelector(".toast-text").textContent =
        "AI can increase the realism and scale of attacks (especially social engineering and automation). Defenders win by hardening identity, verifying sensitive workflows, containing blast radius, and improving monitoring.";
    }, 1200);
  }).catch(() => {
    toast.querySelector(".toast-title").textContent = "Copy failed";
    toast.querySelector(".toast-text").textContent = "Your browser blocked clipboard access. Select and copy manually.";
    showToast();
  });
}

function filterCards(q){
  const query = q.trim().toLowerCase();
  const filtered = CATEGORIES.filter(x =>
    x.title.toLowerCase().includes(query) ||
    x.badge.toLowerCase().includes(query) ||
    x.desc.toLowerCase().includes(query)
  );
  render(filtered);
  // re-apply expand state on new DOM
  setExpandedAll(expandedAll);
}

function initTheme(){
  const saved = localStorage.getItem("theme");
  if(saved === "light" || saved === "dark"){
    document.documentElement.dataset.theme = saved;
  }
}
function toggleTheme(){
  const cur = document.documentElement.dataset.theme;
  const next = (cur === "light") ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
}

render(CATEGORIES);
initTheme();

document.addEventListener("click", (e) => {
  const t = e.target;

  if(t?.dataset?.toggle){
    const id = t.dataset.toggle;
    const el = document.getElementById(id);
    if(el) el.classList.toggle("show");
  }

  if(t?.dataset?.copy){
    const idx = Number(t.dataset.copy);
    const item = CATEGORIES[idx];
    if(item) copySummary(item);
  }
});

elSearch.addEventListener("input", (e) => filterCards(e.target.value));

btnExpand.addEventListener("click", () => setExpandedAll(!expandedAll));

btnQuick.addEventListener("click", showToast);
toastClose.addEventListener("click", hideToast);

btnTheme.addEventListener("click", () => {
  if(!document.documentElement.dataset.theme){
    document.documentElement.dataset.theme = "dark";
  }
  toggleTheme();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click", (e)=>{
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:"smooth", block:"start"});
    history.pushState(null, "", id);
  });
});
