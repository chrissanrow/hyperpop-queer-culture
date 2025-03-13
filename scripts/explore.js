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

const audio = document.getElementById("woodside");
audio.addEventListener("loadedmetadata", () => {
    audio.currentTime = 50; // Start at 30 seconds
});