function toggleSkill(element) {
    element.classList.toggle('selected');
}

document.getElementById('next-button').addEventListener('click', function() {
    window.location.href = "landing.html"; // Replace with your target page URL
});
