---
layout: default
title: "Alumni"
permalink: /alumni/
alumni:
  - name: "Sample Alum"
    role: "Former role at Poh Lab (years here)"
    focus: "Brief highlight of their work or project focus."
    current: "Current position title, Organization"
  - name: "Another Alum"
    role: "Former role at Poh Lab"
    focus: "Optional note on impact or area they supported."
    current: "Current position title, Organization"
---

<div class="page-wide page-top alumni-page">

<section class="alumni-hero hero-centered">
  <h1>Alumni</h1>
  <p>Past members who contributed to Poh Lab research and have continued on to new roles.</p>
</section>

<div class="alumni-grid">
  {% for person in page.alumni %}
  <article class="alumni-card">
    <h3>{{ person.name }}</h3>
    {% if person.role %}<p class="role">{{ person.role }}</p>{% endif %}
    {% if person.focus %}<p class="focus">{{ person.focus }}</p>{% endif %}
    {% if person.current %}<p class="current"><strong>Current position:</strong> {{ person.current }}</p>{% endif %}
  </article>
  {% endfor %}
</div>

</div>

{% unless page.alumni and page.alumni.size > 0 %}
<p class="alumni-empty">Add alumni entries in the front matter above to populate this page.</p>
{% endunless %}

<style>
:root {
  --alumni-bg: #f8fbff;
  --alumni-border: #e1edf7;
  --alumni-text: #1f2937;
  --alumni-subtext: #4a5568;
  --alumni-role: #1c73a6;
  --alumni-shadow: 0 8px 20px rgba(28,115,166,0.08);
}
[data-theme="dark"] {
  --alumni-bg: #0f172a;
  --alumni-border: #1f2a44;
  --alumni-text: #e2e8f0;
  --alumni-subtext: #cbd5e1;
  --alumni-role: #7dd3fc;
  --alumni-shadow: 0 10px 26px rgba(0,0,0,0.35);
}
.alumni-hero h1 { color: var(--alumni-text); }
.alumni-hero p { color: var(--alumni-subtext); }
.alumni-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.alumni-card { background: var(--alumni-bg); border: 1px solid var(--alumni-border); border-radius: 12px; padding: 1rem 1.1rem; box-shadow: var(--alumni-shadow); color: var(--alumni-text); }
.alumni-card h3 { margin: 0 0 0.15rem; font-size: 1.05rem; }
.alumni-card .role { margin: 0 0 0.35rem; color: var(--alumni-role); font-weight: 600; letter-spacing: 0.01em; }
.alumni-card .focus { margin: 0 0 0.5rem; color: var(--alumni-text); line-height: 1.45; }
.alumni-card .current { margin: 0; color: var(--alumni-subtext); font-size: 0.95rem; }
.alumni-empty { margin-top: 1rem; color: var(--alumni-subtext); text-align: center; }
@media (max-width: 900px) { .alumni-grid { grid-template-columns: 1fr; } }
</style>
