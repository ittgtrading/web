document.addEventListener('DOMContentLoaded', function () {
  var brand = document.querySelector('header .brand');
  if (!brand) return;

  // If already an anchor on home, normalize its href
  if (brand.tagName.toLowerCase() === 'a') {
    if (!brand.getAttribute('href')) brand.setAttribute('href', 'index.html');
    if (brand.getAttribute('href') !== 'index.html') brand.setAttribute('href', 'index.html');
    brand.setAttribute('aria-label', 'Go to home');
    brand.style.cursor = 'pointer';
    return;
  }

  // If it is a div, replace it with an anchor, keep the same class and children
  var link = document.createElement('a');
  link.className = brand.className;          // preserves "brand" styling
  link.href = 'index.html';
  link.setAttribute('aria-label', 'Go to home');
  link.style.cursor = 'pointer';

  // Move all children across
  while (brand.firstChild) {
    link.appendChild(brand.firstChild);
  }

  // Replace in the DOM
  brand.parentNode.replaceChild(link, brand);
});
