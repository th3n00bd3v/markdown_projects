// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const yearSpan = document.getElementById("year");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  root.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  root.classList.remove("dark");
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  root.classList.toggle("dark");
  const isDark = root.classList.contains("dark");
  localStorage.theme = isDark ? "dark" : "light";
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// Sticky header shadow
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// Search & Filter
const searchInput = document.getElementById("search");
const filterDropdown = document.getElementById("filterDropdown");
const items = document.querySelectorAll(".project-item");

function filterProjects() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = filterDropdown.value;
  items.forEach(item => {
    const category = item.dataset.category;
    const text = item.textContent.toLowerCase();
    const matchesSearch = text.includes(searchTerm);
    const matchesCategory = selectedCategory === "all" || category === selectedCategory;
    item.style.display = matchesSearch && matchesCategory ? "" : "none";
  });
}

searchInput.addEventListener("input", filterProjects);
filterDropdown.addEventListener("change", filterProjects);

// Footer Year
yearSpan.textContent = new Date().getFullYear();
