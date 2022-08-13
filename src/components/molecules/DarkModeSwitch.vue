<script>
export default {
  data: () => ({
    darkModeEnabled: localStorage.getItem('theme') === 'dark',
  }),
  computed: {
    html() {
      const [html] = document.getElementsByTagName('html');

      return html;
    },
  },
  watch: {
    darkModeEnabled() {
      this.html.classList.toggle('dark');

      if (this.darkModeEnabled) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.removeItem('theme');
      }
    },
  },
  mounted () {
    if (this.darkModeEnabled) {
      this.html.classList.add('dark');
    }
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
