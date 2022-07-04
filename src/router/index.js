import { createRouter, createWebHistory } from "vue-router";
import contact from "../components/Contact.vue";
import home from "../components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },

  {
    path: "/contact",
    name: "contact",
    component: contact,
  },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
