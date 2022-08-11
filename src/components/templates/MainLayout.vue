<script>
import NavigationBar from '../organisms/NavigationBar.vue';

export default {
  components: {
    NavigationBar,
  },
};
</script>

<template>
  <navigation-bar />
  <el-main>
    <slot></slot>
  </el-main>
</template>
