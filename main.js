document.addEventListener('DOMContentLoaded', function () {
// Find the brand block in the header
var brand = document.querySelector('header .brand');
if (!brand) return;

// If it is already a link (home page), ensure it points to index.html
if (brand.tagName.toLowerCase() === 'a') {
brand.setAttribute('href', 'index.html');
return;
}

// If it is a div, make clicks go home
brand.addEventListener('click', function () {
var home = new URL('index.html', window.location.href);
window.location.href = home.href;
});
});

Add this one line to each page, before the closing body tag:

<script src="main.js" defer></script>
