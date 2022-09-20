import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import Page1 from "@/views/Page1.vue";
import Children1 from "@/views/Children1.vue";
import Children2 from "@/views/Children2.vue";

const routes = [
  { path: '/', component: Home },
  {
    path: '/page1',
    component: {
      default: Page1,
      RightBar: Children1
    },
    children: [
      {
        path: 'children1',
        component: Children1
      },
      {
        path: 'children2',
        component: Children2
      }
    ]
  }
]

const router = createRouter( {
  history: createWebHistory(),
  routes
} )
export default router