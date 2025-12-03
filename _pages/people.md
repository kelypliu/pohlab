---
layout: default
title: "People"
permalink: /people/
---

<section class="people-hero">
  <h1>People</h1>
  <p>Clinical scientists, pathologists, and trainees advancing early oral cancer detection.</p>
</section>

<h2>Principal Investigator</h2>
<div class="people-grid">
  <article class="person-card">
    <img src="{{ '/images/people/catherine_poh.png' | relative_url }}" alt="Catherine Poh">
    <div>
      <h3>Dr. Catherine Poh</h3>
      <p class="role">Professor, Oral Oncology & Translational Research</p>
      <p class="bio">Canada Research Chair (Tier 1), clinician-scientist leading early detection and biomarker-based diagnostics for premalignant oral lesions; Director of the Oral Medicine & Pathology Residency Program at UBC.</p>
      <p class="meta"><strong>Email:</strong> cpoh@bccrc.ca</p>
    </div>
  </article>
</div>

<h2>Staff</h2>
<div class="people-grid">
  <article class="person-card">
    <img src="{{ '/images/people/sarah_zhu.png' | relative_url }}" alt="Sarah Zhu">
    <div>
      <h3>Dr. Sarah Zhu, MD</h3>
      <p class="role">Genomic & Histological Technician</p>
      <p class="bio">Senior technician with 20+ years handling oral tissues and producing high-quality materials for genomic and histopathology protocols.</p>
      <p class="meta"><strong>Email:</strong> szhu@bccrc.ca</p>
    </div>
  </article>
  <article class="person-card">
    <img src="{{ '/images/people/tony_han.png' | relative_url }}" alt="Tony Han">
    <div>
      <h3>Tony Han</h3>
      <p class="role">Clinical Research Coordinator</p>
      <p class="bio">Coordinates patient screening, recruitment, and data collection while triaging referrals between community dentists, surgeons, oral medicine specialists, and oncologists.</p>
      <p class="meta"><strong>Email:</strong> than@bccrc.ca</p>
    </div>
  </article>
</div>

<h2>Trainees</h2>
<div class="people-grid">
  <article class="person-card">
    <img src="{{ '/images/people/kelly_liu.png' | relative_url }}" alt="Kelly Liu">
    <div>
      <h3>Dr. Kelly YP Liu, MSc, PhD</h3>
      <p class="role">Post-Doctoral Research Fellow</p>
      <p class="bio">Focuses on oral cancer and cervical lymph node metastasis, integrating biomarker discovery, spatial biology, and reproducible analytical pipeline development.</p>
      <p class="meta"><strong>Email:</strong> keliu@bccrc.ca</p>
    </div>
  </article>
  <article class="person-card">
    <img src="{{ '/images/people/matthew_novello.png' | relative_url }}" alt="Matthew Novello">
    <div>
      <h3>Dr. Matthew Novello, DDS</h3>
      <p class="role">Orthodontics Program Master's Student</p>
      <p class="bio">Orthodontics program master's student contributing to collaborative research.</p>
    </div>
  </article>
  <article class="person-card">
    <img src="{{ '/images/people/Chai, Renee lab profile picture.jpeg' | relative_url }}" alt="Renee Chai">
    <div>
      <h3>Renee Chai</h3>
      <p class="role">Research Assistant</p>
      <p class="bio">Role and bio forthcoming.</p>
    </div>
  </article>
  <article class="person-card">
    <img class="michael"
     src="{{ '/images/people/Vins_Michael.jpg' | relative_url }}"
     alt="Michael Vins">
    <div>
      <h3>Michael Vins</h3>
      <p class="role">Co-op Student</p>
      <p class="bio">Biochemistry student assisting with spatial analysis workflows using pathology software (e.g., QuPath) and machine learning.</p>
      <p class="meta"><strong>Email:</strong> mvins@bccrc.ca</p>
    </div>
  </article>
  <article class="person-card">
    <img src="{{ '/images/people/Lam_Justin.jpg' | relative_url }}" alt="Justin Lam">
    <div>
      <h3>Justin Lam</h3>
      <p class="role">Co-op Student</p>
      <p class="bio">Bio forthcoming.</p>
      <p class="meta"><strong>Email:</strong> julam@bccrc.ca</p>
    </div>
  </article>
</div>

<style>
.people-hero { max-width: 820px; margin: 0 auto 2.5rem; text-align: center; }
.people-hero p { color: #4a5568; margin: 0.5rem 0 0; }
.people-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; }
.person-card { background: #f8fbff; border: 1px solid #e1edf7; border-radius: 14px; padding: 1.1rem; display: grid; grid-template-columns: 110px 1fr; gap: 1rem; align-items: start; box-shadow: 0 6px 18px rgba(28,115,166,0.08); }
.person-card img { width: 110px; height: 110px; object-fit: cover; border-radius: 50%; border: 3px solid #d7eaf7; }
.person-card h3 { margin: 0 0 0.15rem; font-size: 1.1rem; }
.role { margin: 0 0 0.5rem; color: #1c73a6; font-weight: 600; letter-spacing: 0.02em; }
.bio { margin: 0 0 0.5rem; color: #2d3748; line-height: 1.5; }
.meta { margin: 0; color: #4a5568; font-size: 0.95rem; }
@media (max-width: 900px) { .people-grid { grid-template-columns: 1fr; } }
@media (max-width: 640px) { .person-card { grid-template-columns: 1fr; text-align: center; } .person-card img { margin: 0 auto; } }
.person-card img.michael {
  object-position: center 35%; /* tweak % until it looks right */
}
</style>