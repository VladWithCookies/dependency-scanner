<script>
import { ElConfigProvider } from 'element-plus';

import Home from './components/pages/Home.vue';
import MainLayout from './components/templates/MainLayout.vue';

export default {
  components: {
    Home,
    MainLayout,
    ElConfigProvider,
  },
};
</script>

<template>
  <el-config-provider>
    <main-layout>
      <home />
    </main-layout>
  </el-config-provider>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
