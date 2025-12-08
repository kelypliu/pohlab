---
layout: archive
title: "News"
permalink: /news/
author_profile: true
published: true
archive_class: center-archive

news_items:
  - title: "Tier 1 Canada Research Chair"
    image: /images/news/post_poh_chair.jpg
    text: "We are delighted to share that Dr. Catherine Poh has been appointed a Tier 1 Canada Research Chair."
---

<p class="news-lead">Stay up to date with lab news and announcements.</p>

<div class="news-grid">
{% for item in page.news_items %}
  <div class="news-card">
    {% if item.image %}
      <img class="news-card-img" src="{{ item.image | prepend: base_path }}">
    {% endif %}
    <h3 class="news-card-title">{{ item.title }}</h3>
    <p class="news-card-excerpt">{{ item.text }}</p>
  </div>
{% endfor %}
</div>

<style>
.news-lead {
  color: var(--global-text-color);
  text-align: center;
  margin-bottom: 1.5rem;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.news-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  overflow: hidden;
  padding-bottom: 1rem;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  transition: transform .2s ease, box-shadow .2s ease;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.news-card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.news-card-title {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.8rem 1rem 0 1rem;
  color: var(--global-text-color);
}

.news-card-excerpt {
  padding: 0.4rem 1rem 0 1rem;
  font-size: 0.9rem;
  color: var(--global-text-color);
}

[data-theme="dark"] .news-card {
  background: #1e293b;
  border-color: #334155;
}

[data-theme="dark"] .news-card-title,
[data-theme="dark"] .news-card-excerpt {
  color: #e2e8f0;
}
</style>