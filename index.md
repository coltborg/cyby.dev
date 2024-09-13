---
title: index
layout: layout.liquid
---

# Posts

<ul class="post-list">
{%- for post in collections.post reversed -%}
    <li>
        <a href="{{ post.url }}">{{ post.data.title }}</a>
        <time>{{ post.data.date | date: "%Y-%m-%d"}}</time>
        <span>{{ post.data.tags }}</span>
    </li>
{% endfor %}
</ul>
