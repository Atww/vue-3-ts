import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import DashboardLayout from "./components/Screen/DashboardLayout.vue";
import EmptyLayout from "./components/Screen/EmptyLayout.vue";

const app = createApp(App);

app.component("default-layout", DashboardLayout);
app.component("empty-layout", EmptyLayout);

app.use(store);
app.use(router);
app.mount("#app");
// createApp(App)
//   .use(store)
//   .use(router)
//   .mount("#app");
