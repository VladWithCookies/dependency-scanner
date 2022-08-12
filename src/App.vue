<script>
import { RouterView } from 'vue-router';
import { ElConfigProvider } from 'element-plus';

import Home from './components/pages/Home.vue';
import MainLayout from './components/templates/MainLayout.vue';

export default {
  components: {
    RouterView,
    ElConfigProvider,
    Home,
    MainLayout,
  },
};
</script>

<template>
  <el-config-provider>
    <main-layout>
      <router-view />
    </main-layout>
  </el-config-provider>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
