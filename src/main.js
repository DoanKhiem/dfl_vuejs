import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import "./assets/css/font-awesome.min.css";
import "./assets/css/ionicons.min.css";
import "./assets/css/linearicons.css";
import "./assets/css/nice-select.css";
import "./assets/css/jquery.fancybox.css";
import "./assets/css/jquery-ui.min.css";
import "./assets/css/meanmenu.min.css";
import "./assets/css/nivo-slider.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/default.css";
import "./assets/style.css";
import "./assets/css/responsive.css";

// import "./assets/js/vendor/jquery-3.2.1.min.js";
// import "./assets/js/jquery.countdown.min.js";
// import "./assets/js/jquery.meanmenu.min.js";
// import "./assets/js/jquery.scrollUp.js";
// import "./assets/js/jquery.nivo.slider.js";
// import "./assets/js/jquery.fancybox.min.js";
// import "./assets/js/jquery.nice-select.min.js";
// import "./assets/js/jquery-ui.min.js";
// import "./assets/js/owl.carousel.min.js";
// import "./assets/js/popper.min.js";
// import "./assets/js/bootstrap.min.js";
// import "./assets/js/plugins.js";
// import "./assets/js/main.js";
// import "./assets/js/vendor/jquery-3.2.1.min.js";
// import "./assets/js/jquery.countdown.min.js";
// import "./assets/js/jquery.meanmenu.min.js";
// import "./assets/js/jquery.scrollUp.js";
// import "./assets/js/jquery.nivo.slider.js";
// import "./assets/js/jquery.fancybox.min.js";
// import "./assets/js/jquery.nice-select.min.js";
// import "./assets/js/jquery-ui.min.js";

// import "./assets/js/owl.carousel.min.js";

// import "./assets/js/popper.min.js";

// import "./assets/js/bootstrap.min.js";

// import "./assets/js/plugins.js";

// import "./assets/js/main.js";

const app = createApp(App);

app.use(router);

app.mount("#app");
