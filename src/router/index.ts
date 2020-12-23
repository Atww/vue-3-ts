import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import Forms from "@/views/Forms.vue";
import Tables from "@/views/Tables.vue";
import UIElements from "@/views/UIElements.vue";
import Login from "@/views/Login.vue";
import Modal from "@/views/Modal.vue";
import Card from "@/views/Card.vue";
import Blank from "@/views/Blank.vue";
import Post from "@/views/Post.vue";
import IndexNovel from "@/views/​Novel/Index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" }
  },
  {
    path: "/novel",
    name: "Novel",
    meta: { layout: "novel" },
    component: IndexNovel
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank
  },
  {
    path: "/post",
    name: "Post",
    component: Post
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
