export function footsteps_animation() {
  if (document.querySelector("#footsteps-svg")) {
    document.addEventListener("DOMContentLoaded", function () {
      const groups = document.querySelectorAll('#footsteps-svg g[id^="Group_"]');
      let currentStep = 0;
      const trailLength = 2;
      const fadeDelay = 2000;
      let stepsHistory = [];

      // مخفی کردن همه گروه‌ها در ابتدا
      groups.forEach((group) => {
        group.style.opacity = 0;
        group.classList.remove("active");
        group.classList.remove("fade-out");
      });

      function animateNextStep() {
        // اضافه کردن قدم فعلی به تاریخچه
        stepsHistory.push(currentStep);
        
        // نمایش قدم فعلی
        groups[currentStep].style.opacity = ""; // حذف opacity مستقیم
        groups[currentStep].classList.add("active");

        // محو کردن قدم‌های قدیمی
        if (stepsHistory.length > trailLength) {
          const stepToFade = stepsHistory.shift();
          setTimeout(() => {
            groups[stepToFade].classList.remove("active");
            groups[stepToFade].classList.add("fade-out");
            
            // حذف کلاس fade-out بعد از اتمام انیمیشن
            setTimeout(() => {
              groups[stepToFade].classList.remove("fade-out");
              groups[stepToFade].style.opacity = 0;
            }, 2000);
          }, fadeDelay);
        }

        // رفتن به قدم بعدی
        currentStep = (currentStep + 1) % groups.length;

        setTimeout(animateNextStep, 450);
      }

      animateNextStep();
    });
  }
}
footsteps_animation();
