<script>
export default {
  data: () => ({
    darkModeEnabled: false
  }),
  watch: {
    darkModeEnabled() {
      const [html] = document.getElementsByTagName('html');

      html.classList.toggle('dark');
    },
  },
};
</script>

<template>
  <el-switch
    active-icon="Moon"
    inactive-icon="Sunny"
    v-model="darkModeEnabled"
  />
</template>
