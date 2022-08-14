import Home from '@/components/pages/Home.vue';
import Report from '@/components/pages/Report.vue';

export default [
  { path: '/', component: Home },
  { path: '/reports/:ciUploadId', component: Report },
];
