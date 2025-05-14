document.addEventListener("DOMContentLoaded", function () {
  const sliderInput = document.querySelector(
    "#theme-switcher > input[type=checkbox]"
  );
  const slider = document.querySelector("input + .slider");
  const icon = slider?.children[0];
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    icon?.classList.add("fi-ss-moon-stars");
    document.body.setAttribute("data-theme", "dark");
    sliderInput.checked = false;
  } else {
    icon?.classList.add("fi-ss-sun");
    document.body.setAttribute("data-theme", "light");
    sliderInput.checked = true;
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Adiciona um atraso de 1 segundo (1000 ms) antes de adicionar a classe "visible"
          observer.unobserve(entry.target); // só ativa 1x
        }
      });
    },
    {
      threshold: 0.1, // ativa quando 10% do elemento aparece
    }
  );

  document.querySelectorAll(".fade-in-up").forEach((el) => {
    observer.observe(el);
  });

  sliderInput.addEventListener("change", function () {
    setTimeout(() => {
      if (sliderInput.checked) {
        icon?.classList.remove("fi-ss-moon-stars");
        icon?.classList.add("fi-ss-sun");
      } else {
        icon?.classList.remove("fi-ss-sun");
        icon?.classList.add("fi-ss-moon-stars");
      }

      localStorage.setItem("theme", sliderInput.checked ? "light" : "dark");
      document.body.setAttribute(
        "data-theme",
        sliderInput.checked ? "light" : "dark"
      );
    }, 200);
  });
});
