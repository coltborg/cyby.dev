---
title: index
layout: layout.liquid
---

# Posts

<ul class="post-list">
{%- for post in collections.post %}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a><time>2024-09-07</time></li>
{% endfor %}
</ul>
