import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "primevue/resources/themes/saga-blue/theme.css";
// import "primevue/resources/primevue.min.css";
// import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import Calendar from "primevue/calendar";

import DashboardLayout from "./components/Screen/DashboardLayout.vue";
import EmptyLayout from "./components/Screen/EmptyLayout.vue";
import NovelLayout from "./components/Novel/Layout.vue";

const app = createApp(App);

app.component("default-layout", DashboardLayout);
app.component("empty-layout", EmptyLayout);
app.component("novel-layout", NovelLayout);

app.use(PrimeVue);
app.use(store);
app.use(router);
app.component("Calendar", Calendar);

app.mount("#app");
// createApp(App)
//   .use(store)
//   .use(router)
//   .mount("#app");
