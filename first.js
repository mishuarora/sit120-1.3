import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const Home = { template: '<div>Home Page</div>' };
const Portfolio = { template: '<div>Portfolio Page</div>' };
const About = { template: '<div>About Page</div>' };
const Contact = { template: '<div>Contact Page</div>' };

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp({});
app.use(router);

app.mount('#app');


