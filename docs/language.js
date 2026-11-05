
document.addEventListener("DOMContentLoaded", () => {
  const isEnglish = window.location.pathname
    .split("/")
    .includes("en");

  if (!isEnglish) return;

  const translations = {
    "ホーム": "Home",
    "研究": "Research",
    "業績": "Publications",
    "経歴": "CV"
  };

  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    const text = link.textContent.trim();

    if (translations[text]) {
      link.textContent = translations[text];
    }
  });
});
