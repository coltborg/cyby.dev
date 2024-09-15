---
date: 2019-12-07
tags: javascript
title: Make node list into an array
description: "Make iterating through a set of DOM nodes easy by turning a Node List into an array."
---

# {{ title }}

Most of the time when I'm coding with [node lists](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), I want to iterate through each of them and preform some action. My first thought is, "Node lists are _like_ arrays, I should be able to use the array methods like `.map()` or `.filter()` right?" 🤔

But every time it backfires because Node lists are actually objects.

```javascript
const nodeArray = document.querySelectorAll('p');

nodeArray.map(node => console.log(node);
// ❗️TypeError: nodeArray.map is not a function
```

To quickly fix this, I could either use the `.forEach()` method instead of `.map()`.

```javascript
const nodeArray = document.querySelectorAll('p');

nodeArray.forEach(node => console.log(node);
// ✅ That works!
```

Or I could quickly turn the node list into an array using the `spread operator`.

```javascript
const nodeArray = document.querySelectorAll('p');
const realArray = [...nodeArray];

realArray.map(node => console.log(node);
// ✅ That works!
```
