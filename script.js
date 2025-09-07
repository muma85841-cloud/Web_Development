// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Handle contact form
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "✅ Message sent successfully!";
  form.reset();
});

// Navbar toggle for mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

