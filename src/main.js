import { createApp } from "vue";
import App from './App.vue';
import router from "./router";
import filters from './mixins.js';
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

import "./assets/js/vendor/modernizr-3.5.0.min.js";

const app = createApp(App);
app.config.globalProperties.$filters = filters;
app.use(router);

app.mount("#app");
