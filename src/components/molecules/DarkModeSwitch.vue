<script>
import { THEMES } from '@/constants';

export default {
  data: () => ({
    darkModeEnabled: localStorage.getItem('theme') === THEMES.DARK,
  }),
  computed: {
    html() {
      const [html] = document.getElementsByTagName('html');

      return html;
    },
  },
  watch: {
    darkModeEnabled() {
      this.html.classList.toggle(THEMES.DARK);

      if (this.darkModeEnabled) {
        localStorage.setItem('theme', THEMES.DARK);
      } else {
        localStorage.removeItem('theme');
      }
    },
  },
  mounted () {
    if (this.darkModeEnabled) {
      this.html.classList.add(THEMES.DARK);
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
