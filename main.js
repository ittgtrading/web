document.addEventListener('DOMContentLoaded', function () {
var header = document.querySelector('header')
if (!header) return

header.addEventListener('click', function (e) {
var brand = e.target.closest('.brand')
if (!brand) return
window.location.href = 'index.html'
})
})

