---
layout: default
classess: wide
title: "Research Highlights"
permalink: /research-highlights/
author_profile: true
---

<div class="rh-grid">

  <!-- Highlight 1 -->
  <div class="rh-card">
    <img class="rh-image" src="{{ '/images/research/cytology.png' | relative_url }}">

    <h2 class="rh-title">
      Translating non-invasive oral cancer screening test 
    </h2>

    <p class="rh-citation">Journal of Oral Pathology and Medicine, 2023</p>

    <p class="rh-text">
        We developed a DNA-ploidy–based cytology test (the DOC test) to improve early detection of high-risk oral lesions. Using 569 brushing samples from normal mucosa and biopsy-confirmed reactive, low-grade, or high-grade precancer and cancer, we established a two-step algorithm and verified its performance across independent Test and Validation cohorts. The DOC test demonstrated high sensitivity (0.97 and 0.96) for identifying high-grade lesions and showed strong prognostic value in an independent Outcome cohort, where positive test results were associated with significantly poorer 3-year progression-free survival (p < 0.001). Multivariate analysis confirmed that DOC positivity reflected underlying high-grade pathology rather than patient-related factors. These findings support the DOC test as a promising, non-invasive tool for triaging high-risk oral lesions and identifying patients at elevated risk of disease progression.
    </p>
  </div>

  <!-- Highlight 2 -->
  <div class="rh-card">
    <img class="rh-image" src="{{ '/images/research/p53.jpg' | relative_url }}">

    <h2 class="rh-title">
      Rethinking Dsyplasa: p53 Patterns Reveal Hidden High-Risk Oral Lesions
    </h2>

    <p class="rh-citation">Modern Pathology 2023</p>

    <p class="rh-text">
        The diagnosis of oral epithelial dysplasia traditionally relies on assessing architectural and cytologic atypia using the mild–moderate–severe grading system. However, some lesions classified as low grade still progress rapidly to squamous cell carcinoma (SCC), underscoring the limitations of conventional grading. In this study, we evaluated 203 cases of oral epithelial dysplasia, proliferative verrucous leukoplakia, lichenoid lesions, and reactive mucosal changes to characterize their p53 immunohistochemical (IHC) staining patterns. We identified four wild-type patterns and three abnormal patterns, each reflecting distinct biological behavior. All lichenoid and reactive lesions showed wild-type patterns, while HPV-associated dysplasia presented with null-like/basal-sparing or mid-epithelial/basal-sparing patterns. Notably, 42.5% of oral epithelial dysplasia cases (51/120) exhibited an abnormal p53 pattern, and these lesions had a significantly higher risk of progression to invasive SCC compared with p53 wild-type lesions (21.6% vs. 0%, P < .0001). p53 abnormal dysplasia was also strongly associated with dyskeratosis and/or acantholysis. Based on these findings, we propose the term “p53 abnormal oral epithelial dysplasia” to identify lesions at high malignant potential—regardless of histologic grade—and recommend that such lesions be managed outside the traditional grading system to prevent delayed intervention. 
    </p>
  </div>

</div>

<style>
.rh-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(450px, 1fr));
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.rh-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid var(--card-border);
  box-shadow: 0 4px 14px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
}

.rh-image {
  width: 100%;
  height: 240px;      /* consistent height for both images */
  object-fit: cover;  /* crop nicely, no distortion */
  border-radius: 8px;
  margin-bottom: 1rem;
}

.rh-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: var(--global-text-color);
  text-align: center;
}

.rh-citation {
  text-align: center;
  font-style: italic;
  color: #777;
  margin-bottom: 1rem;
}

.rh-text {
  font-size: 0.8rem;
  color: var(--global-text-color);
  text-align: justify;
}

.rh-link {
  text-align: center;
  margin-top: 1rem;
}

.rh-link a {
  font-weight: bold;
  text-decoration: none;
  color: #1a73e8;
}

.rh-link a:hover {
  text-decoration: underline;
}

/* Dark Mode */
[data-theme="dark"] .rh-card {
  background: #1e293b;
  border-color: #334155;
}

[data-theme="dark"] .rh-title,
[data-theme="dark"] .rh-text,
[data-theme="dark"] .rh-citation {
  color: #e2e8f0;
}
</style>