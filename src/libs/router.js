import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Page1 from '@/views/Page1.vue';
import Children2 from '@/views/Children2.vue';

const routes = [
  { path: '/', name: 'home', component: Home, meta: { isAuthenticated: false } },
  {
    path: '/page1',
    name: 'page',
    components: {
      default: Page1,
      rightBar: Children2,
    },
    meta: { isAuthenticated: true },
    // children: [
    //   {
    //     path: 'children1',
    //     component: Children1
    //   },
    //   {
    //     path: 'children2',
    //     component: Children2
    //   }
    // ]
  },
];

const router = createRouter( {
  history: createWebHistory(),
  routes,
} );
router.beforeEach( ( to, from ) => {
  /*  if( to.meta.isAuthenticated ) {
      console.log( to.meta.isAuthenticated );
      return {
        path: '/',
        query: { redirect: to.fullPath },
      };
    }*/
} );
export default router;