/* =a=========================================================
   DATA — single source of truth, also powers the JSON panel
   ========================================================== */
const PROFILE = {
  name: "V. Surya Kala",
  role: "Senior PHP Developer / Team Lead",
  location: "Pallikaranai, Chennai, IN",
  experience_years: 8,
  current_company: "Amorio Technologies Pvt Ltd",
  core_stack: ["PHP", "Laravel", "CodeIgniter", "MySQL", "AWS"],
  status: "open_to_opportunities",
};

const EDUCATION = [
  {
    degree: "Bachelor of Electrical and Electronics Engineering",
    school: "SCAD College of Engineering and Technology, Cheranmahadevi, Tirunelveli",
    period: "2011 — 2015",
  },
  {
    degree: "Higher Secondary Education",
    school: "Sarah Tucker Higher Secondary School, Cheranmahadevi, Tirunelveli",
    period: "2010 — 2011",
  },
];

const SKILLS = [
  {
    group: "Languages & Frameworks",
    items: [
      { name: "PHP", level: 95 },
      { name: "Laravel", level: 88 },
      { name: "CodeIgniter", level: 85 },
      { name: "JavaScript / jQuery / AJAX", level: 78 },
    ],
  },
  {
    group: "Data & Cloud",
    items: [
      { name: "MySQL — schema design & optimization", level: 90 },
      { name: "AWS — deploy, live & UAT server mgmt", level: 82 },
      { name: "REST API design & integration", level: 88 },
      { name: "Flutter (hands-on, mobile)", level: 65 },
    ],
  },
  {
    group: "Leadership & Delivery",
    items: [
      { name: "Sprint planning & Jira", level: 90 },
      { name: "Code review & GitHub standards", level: 88 },
      { name: "Agile / Scrum", level: 85 },
      { name: "UAT strategy & release management", level: 87 },
    ],
  },
  {
    group: "Domains Shipped",
    items: [
      { name: "Hospitality & booking systems", level: 90 },
      { name: "Healthcare / clinic workflow", level: 85 },
      { name: "Payroll & finance (US-based client)", level: 82 },
      { name: "ERP & inventory systems", level: 80 },
      { name: "E-commerce & multi-warehouse platforms", level: 85 },
    ],
  },
];

const INTEGRATIONS = ["Payment Gateway", "Exotel", "Pabbly", "Collect.chat", "Bizmagnet", "Gallabox"];

const EXPERIENCE = [
  {
    role: "PHP Developer — Team Lead",
    org: "Amorio Technologies Pvt Ltd, Gopalapuram, Chennai",
    period: "Aug 2022 — Present",
    bullets: [
      "Lead and mentor a team of developers, raising productivity and technical depth across the group.",
      "Own Jira sprint planning, ticket allocation, and release cycles end-to-end.",
      "Set technical direction and enforce coding standards through GitHub code review.",
      "Maintain Live and UAT environments — server monitoring and deployments on AWS.",
      "Coordinate directly with stakeholders to turn requirements into technical plans.",
      "Built out Laravel modules (1+ year) and contributed to Flutter mobile development alongside the web stack.",
      "Run technical interviews and onboard new team members.",
    ],
  },
  {
    role: "Programmer",
    org: "Tamil Virtual Academy, Kotturpuram, Chennai",
    period: "Oct 2016 — Aug 2022",
    bullets: [
      "Scoped projects and designed scalable software architecture from the ground up.",
      "Built and maintained web applications on PHP and MySQL.",
      "Owned functional and performance testing across releases.",
      "Worked every phase of the SDLC — planning through deployment.",
      "Proposed and shipped system enhancements for performance and usability.",
    ],
  },
];

const PROJECTS = [
  {
    id: "PROJ-01",
    slug: "hotel-resort-management",
    title: "Hotel & Resort Management Software",
    tags: ["PHP", "MySQL", "Reporting"],
    desc: "End-to-end room booking system spanning restaurant and banquet hall reservations, with GST-compliant financial reporting.",
    features: [
      "Real-time room, restaurant & banquet hall booking engine",
      "GST-compliant reports with Tally export / import",
      "Admin dashboards with billing modules",
      "Detailed financial reporting suite",
    ],
  },
  {
    id: "PROJ-02",
    slug: "skin-hair-clinic",
    title: "Skin & Hair Clinic Management System",
    tags: ["PHP", "Workflow", "CRM"],
    desc: "Full clinic operations platform covering the patient journey from first enquiry to booked appointment.",
    features: [
      "Enquiry → follow-up → appointment → booking pipeline",
      "Patient / customer record management",
      "Appointment scheduling with conflict handling",
      "Reporting across every customer touchpoint",
    ],
  },
  {
    id: "PROJ-03",
    slug: "court-booking",
    title: "Court Booking Software",
    tags: ["PHP", "Scheduling"],
    desc: "Online booking platform for sports courts with maintenance-aware availability.",
    features: [
      "Customer-facing online court booking",
      "Maintenance scheduling to block courts on set dates",
      "Automated availability calculation",
      "Real-time schedule management",
    ],
  },
  {
    id: "PROJ-04",
    slug: "payroll-us",
    title: "Payroll Software (US-Based Client)",
    tags: ["PHP", "MySQL", "Finance"],
    desc: "Timesheet-driven payroll platform built for a US-based client, from employee master data to payslip.",
    features: [
      "Employee master and profile management",
      "Timesheet-based payroll processing",
      "Automatic payslip generation",
      "Payroll reporting for compliance and audit",
    ],
  },
  {
    id: "PROJ-05",
    slug: "stone-erp",
    title: "Stone Industry ERP Application",
    tags: ["PHP", "Inventory", "ERP"],
    desc: "ERP system for a stone industry client covering sales, inventory, and vendor relationships.",
    features: [
      "Sales and expense management modules",
      "Real-time inventory / stock tracking",
      "In-built email notifications",
      "Customer and vendor record management",
    ],
  },
  {
    id: "PROJ-06",
    slug: "lms",
    title: "Learning Management System (LMS)",
    tags: ["PHP", "MySQL", "EdTech"],
    desc: "Student registration through to instant results, with a two-level verification workflow.",
    features: [
      "Student registration and document upload",
      "Two-level admin verification workflow",
      "Exam scheduling triggered post-verification",
      "Online examinations with instant result display",
    ],
  },
  {
    id: "PROJ-07",
    slug: "multi-company-billing",
    title: "Multi-Company Billing Application",
    tags: ["PHP", "GST", "Billing"],
    desc: "Single billing application serving three separate companies from one codebase.",
    features: [
      "One application supporting three companies",
      "GST and non-GST billing modes",
      "Centralized customer management",
      "Consolidated cross-company reporting",
    ],
  },
  {
    id: "PROJ-08",
    slug: "ecommerce-backend-api",
    title: "E-Commerce Platform — Backend API Development",
    tags: ["PHP", "REST API", "MySQL", "Multi-Warehouse"],
    desc: "Backend REST API suite powering a dynamic e-commerce website — products, multi-warehouse inventory, orders, promotions, and catalog.",
    features: [
      "Product, category & brand management APIs",
      "Multi-warehouse inventory with real-time stock allocation",
      "Order creation, order status & full lifecycle workflows",
      "Promotion / campaign engine for dynamic discounts and offers",
      "Secure, scalable API architecture built for high-traffic load",
    ],
  },
  {
    id: "PROJ-09",
    slug: "payroll-mobile-app-api",
    title: "Payroll Mobile App — Backend API Development",
    tags: ["PHP", "REST API", "Mobile", "Auth"],
    desc: "Backend REST APIs powering a Payroll mobile application across both Employee and Admin sides.",
    features: [
      "Employee-side APIs — timesheets, payslip access, profile management",
      "Admin-side APIs — payroll processing, approvals, employee master data",
      "Payroll reporting endpoints for admin oversight",
      "Role-based authentication between employee and admin experiences",
    ],
  },
  {
    id: "PROJ-10",
    slug: "fullstack-website-admin-panel",
    title: "Full-Stack Website Development with Admin Panel",
    tags: ["PHP", "MySQL", "Admin Dashboard"],
    desc: "End-to-end websites built with dedicated admin panels for content, user, and data management.",
    features: [
      "Admin dashboards for business operations and activity monitoring",
      "CRUD-based content and user management modules",
      "Role-based access control and secure login",
      "Reporting tools for administrators",
    ],
  },
];

const CONTACT = {
  name: "V. Surya Kala",
  email: "suryavenkatesh3093@gmail.com",
  phone: "+91 95660 84864",
  status: "open_to_opportunities",
};

/* JSON payloads shown in the response panels, keyed to match data-json attrs */
const JSON_REGISTRY = {
  profile: PROFILE,
  education: EDUCATION,
  skills: SKILLS.map((g) => ({ group: g.group, items: g.items.map((i) => ({ name: i.name, level: i.level })) })),
  integrations: INTEGRATIONS,
  experience: EXPERIENCE.map((e) => ({ role: e.role, org: e.org, period: e.period })),
  projects: PROJECTS.map((p) => ({ id: p.id, title: p.title, tags: p.tags, status: "DEPLOYED" })),
  contact: { message: "202 Accepted — reach out any time.", ...CONTACT },
};

/* ==========================================================
   JSON SYNTAX HIGHLIGHTER
   ========================================================== */
function syntaxHighlight(obj) {
  const json = JSON.stringify(obj, null, 2)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false)\b|\bnull\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    (match) => {
      let cls = "json-number";
      if (/^"/.test(match)) {
        cls = /:$/.test(match) ? "json-key" : "json-string";
      } else if (/true|false/.test(match)) {
        cls = "json-boolean";
      } else if (/null/.test(match)) {
        cls = "json-null";
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
}

function renderAllJsonTargets() {
  Object.keys(JSON_REGISTRY).forEach((key) => {
    document.querySelectorAll(`[data-json-target="${key}"]`).forEach((el) => {
      el.innerHTML = syntaxHighlight(JSON_REGISTRY[key]);
    });
  });
}

/* ==========================================================
   HERO REQUEST / RESPONSE DEMO
   ========================================================== */
function initHeroDemo() {
  const btn = document.getElementById("sendBtn");
  const panel = document.getElementById("heroResponse");
  const badge = document.getElementById("statusBadge");
  const time = document.getElementById("responseTime");
  const body = document.getElementById("responseBody");

  btn.addEventListener("click", () => {
    btn.disabled = true;
    btn.textContent = "Sending…";
    badge.className = "status-badge";
    badge.textContent = "···";
    panel.classList.remove("show");
    time.textContent = "";
    body.innerHTML = "";

    setTimeout(() => {
      panel.classList.add("show");
      badge.className = "status-badge status-ok";
      badge.textContent = "200 OK";
      time.textContent = (18 + Math.floor(Math.random() * 30)) + "ms";
      body.innerHTML = syntaxHighlight({
        message: "Hi, I'm Surya — thanks for checking out the API.",
        ...PROFILE,
      });
      btn.disabled = false;
      btn.textContent = "Send";
    }, 550);
  });
}

function initContactDemo() {
  const btn = document.getElementById("contactSendBtn");
  const panel = document.getElementById("contactResponse");
  const badge = document.getElementById("contactStatusBadge");
  const time = document.getElementById("contactResponseTime");
  const body = document.getElementById("contactResponseBody");

  btn.addEventListener("click", () => {
    btn.disabled = true;
    btn.textContent = "Sending…";
    panel.classList.remove("show");

    setTimeout(() => {
      panel.classList.add("show");
      badge.className = "status-badge status-created";
      badge.textContent = "201 Created";
      time.textContent = (20 + Math.floor(Math.random() * 25)) + "ms";
      body.innerHTML = syntaxHighlight({
        message: "Message received. I'll get back to you within 24 hours.",
        next_step: "Use the buttons below to email or call directly.",
      });
      btn.disabled = false;
      btn.textContent = "Send";
    }, 550);
  });
}

/* ==========================================================
   STAT COUNTERS
   ========================================================== */
function animateStats() {
  document.querySelectorAll(".stat-num").forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ==========================================================
   RENDER: EDUCATION, SKILLS, INTEGRATIONS, TIMELINE, PROJECTS
   ========================================================== */
function renderEducation() {
  document.getElementById("eduGrid").innerHTML = EDUCATION.map(
    (e) => `
    <div class="edu-card">
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-school">${e.school}</div>
      <div class="edu-period">${e.period}</div>
    </div>`
  ).join("");
}

function renderSkills() {
  document.getElementById("skillsGrid").innerHTML = SKILLS.map(
    (group) => `
    <div class="skill-group">
      <h3>${group.group}</h3>
      ${group.items
        .map(
          (s) => `
        <div class="skill-row">
          <div class="skill-row-top"><span>${s.name}</span><span>${s.level}%</span></div>
          <div class="gauge"><div class="gauge-fill" data-level="${s.level}"></div></div>
        </div>`
        )
        .join("")}
    </div>`
  ).join("");
}

function renderIntegrations() {
  document.getElementById("integrationChips").innerHTML = INTEGRATIONS.map(
    (c) => `<span class="chip">${c}</span>`
  ).join("");
}

function renderTimeline() {
  document.getElementById("timeline").innerHTML = EXPERIENCE.map(
    (job) => `
    <div class="tl-item">
      <span class="tl-dot"></span>
      <div class="tl-head">
        <span class="tl-role">${job.role}</span>
        <span class="tl-period">${job.period}</span>
      </div>
      <div class="tl-org">${job.org}</div>
      <ul class="tl-list">${job.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
    </div>`
  ).join("");
}

function renderProjects() {
  const list = document.getElementById("projectList");
  list.innerHTML = PROJECTS.map(
    (p, idx) => `
    <button class="project-row" data-index="${idx}">
      <span class="project-row-id">${p.id}</span>
      <span class="project-row-main">
        <span class="project-row-title">${p.title}</span>
        <span class="project-row-desc">${p.desc}</span>
      </span>
      <span class="project-row-arrow">GET →</span>
    </button>`
  ).join("");

  list.querySelectorAll(".project-row").forEach((row) => {
    row.addEventListener("click", () => openProject(PROJECTS[row.dataset.index]));
  });
}

function openProject(p) {
  document.getElementById("modalPath").textContent = `/v1/projects/${p.slug}`;
  document.getElementById("modalTime").textContent = (12 + Math.floor(Math.random() * 20)) + "ms";
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalMeta").innerHTML = p.tags.map((t) => `<span>${t}</span>`).join("");
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalFeatures").innerHTML = p.features.map((f) => `<li>${f}</li>`).join("");
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ==========================================================
   SCROLLSPY — sync sidebar active state + right JSON panel
   ========================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll(".doc-section");
  const navRows = document.querySelectorAll(".nav-row");
  const panelMethod = document.getElementById("panelMethod");
  const panelPath = document.getElementById("panelPath");
  const panelBody = document.getElementById("panelBody");

  function updatePanel(target) {
    const id = target.id;
    const method = target.dataset.method;
    const path = target.dataset.path;
    const jsonKey = target.dataset.json;

    navRows.forEach((row) => row.classList.toggle("active", row.dataset.target === id));

    if (panelMethod && panelPath && panelBody) {
      panelMethod.textContent = method;
      panelMethod.className = "method " + (method === "POST" ? "method-post" : "method-get");
      panelPath.textContent = path;
      panelBody.innerHTML = syntaxHighlight(JSON_REGISTRY[jsonKey]);
    }
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) updatePanel(entry.target);
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((sec) => io.observe(sec));

  // Default panel state before any section crosses the scrollspy line
  if (sections.length) updatePanel(sections[0]);
}

/* ==========================================================
   GAUGE FILL ON SCROLL
   ========================================================== */
function initGaugeReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level + "%";
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll(".gauge-fill").forEach((g) => io.observe(g));
}

/* ==========================================================
   MOBILE SIDEBAR DRAWER
   ========================================================== */
function initMobileNav() {
  const sidebar = document.getElementById("sidebar");
  const scrim = document.getElementById("sidebarScrim");
  const hamburger = document.getElementById("hamburger");

  function open() {
    sidebar.classList.add("open");
    scrim.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
  }
  function close() {
    sidebar.classList.remove("open");
    scrim.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }

  hamburger.addEventListener("click", () => {
    sidebar.classList.contains("open") ? close() : open();
  });
  scrim.addEventListener("click", close);
  sidebar.querySelectorAll(".nav-row").forEach((a) => a.addEventListener("click", close));
}

/* ==========================================================
   INIT
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderEducation();
  renderSkills();
  renderIntegrations();
  renderTimeline();
  renderProjects();
  renderAllJsonTargets();

  initHeroDemo();
  initContactDemo();
  initScrollSpy();
  initGaugeReveal();
  initMobileNav();
  animateStats();

  document.getElementById("modalClose").addEventListener("click", closeProject);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeProject();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProject();
  });
});
