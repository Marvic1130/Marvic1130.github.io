---
layout: page
permalink: /publications/
title: publications
description: publications in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="category">International</h2>

{% bibliography --query @*[category=international] %}

<br>
<br>
<br>


<h2 class="category">Domestic Journal</h2>

{% bibliography --query @*[category=domestic-journal] %}

<br>
<br>
<br>

<h2 class="category">Domestic Conference</h2>

{% bibliography --query @*[category=domestic-conference] %}

</div>
