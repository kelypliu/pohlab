---
layout: archive
title: "News"
permalink: /news/
author_profile: true
entries_layout: list
published: true
archive_class: center-archive
---

{% include base_path %}

<p class="news-lead">Stay up to date with lab news and announcements.</p>

{% assign news_posts = site.categories.news | default: site.posts %}
{% if news_posts and news_posts.size > 0 %}
  {% for post in news_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% else %}
  <p>No news posts yet. Create a new post in <code>_posts/</code> with <code>categories: news</code> to have it appear here.</p>
{% endif %}

<style>
.news-lead { color: var(--global-text-color); }
</style>
