import lottie from "lottie-web";

export function Lottie() {
  lottie.loadAnimation({
    container: document.getElementById("phone-animation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `/wp-content/themes/cyan-ads/assets/image/calling-phone.json`,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });
}
