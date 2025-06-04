function toggleTheme() {
    const currentTheme = localStorage.getItem("preferred-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    if (window.jtd) { // just-the-docs theme switcher
      jtd.setTheme(newTheme);
    }

    // save preference and update button
    localStorage.setItem("preferred-theme", newTheme);
    updateToggleButton(newTheme);
}

function updateToggleButton(theme) {
    const btn = document.getElementById("mode-toggle");
    if (btn) {
      btn.innerHTML = theme === "dark" ? "⏾" : "☼";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("preferred-theme") || "light";

    if (window.jtd) {
      jtd.setTheme(savedTheme);
    }

    updateToggleButton(savedTheme);
});
