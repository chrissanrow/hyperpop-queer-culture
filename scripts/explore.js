document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animation");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.dataset.animation;
          entry.target.classList.add(animationClass);
        }
      });
    },
    { rootMargin: "0px", threshold: 0.2 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});

const woodside1 = document.getElementById("woodside1");
woodside1.addEventListener("loadedmetadata", () => {
    woodside1.currentTime = 52; // Start at 30 seconds
});

const woodside2 = document.getElementById("woodside2");
woodside2.addEventListener("loadedmetadata", () => {
    woodside2.currentTime = 84; // Start at 30 seconds
});
