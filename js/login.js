document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login_form").addEventListener("submit", function () {
        const btn = document.getElementById("submit");
        btn.classList.add("loading");
        btn.disabled = true;
    });
});
