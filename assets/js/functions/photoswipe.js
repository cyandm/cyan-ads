import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export function PhotoSwipeTheme() {
  const swiperGroup = document.querySelectorAll(".swiper-gallery");

  swiperGroup.forEach((el) => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: el,
      children: "a",
      pswpModule: () => import("photoswipe"), // بارگذاری داینامیک PhotoSwipe
    });

    lightbox.init();
  });
}
