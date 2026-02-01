document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login_form").addEventListener("submit", function () {
        const btn = document.getElementById("submit");
        const icon = btn.querySelector(".input_icon");
        btn.classList.add("loading");
        btn.disabled = true;
        icon.style.display = "none";
    });
});