/**
 * Main entry point for the theme's JavaScript.
 * you must add any functions for every javascript file to the import statement below.
 */

import { Modals } from "./functions/modals";
import { PhotoSwipeTheme } from "./functions/photoswipe";
import { ThemePlyr } from "./functions/plyr";
import { Popups } from "./functions/popups";
//import { show_more_btn } from "./functions/show-more-btn";
import swiper from "./functions/swiper";
import "./functions/htmx";
import { footsteps_animation } from "./functions/footsteps-animation";
import { Tabs } from "./functions/tabs";
import { Flip } from "./functions/flip";
import { Lottie } from "./functions/lottie";

swiper();
Modals();
ThemePlyr();
Popups();
PhotoSwipeTheme();
//show_more_btn();
footsteps_animation();
Tabs();
Flip();
Lottie();
