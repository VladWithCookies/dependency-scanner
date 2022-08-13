<script>
import { getCIStatus } from '../../api';
import VulnerabilityStats from '../organisms/VulnerabilityStats.vue';

export default {
  components: {
    VulnerabilityStats,
  },
  data: () => ({
    polling: null,
    progress: 0,
    vulnerabilityCount: null,
  }),
  methods: {
    pollCIStatus () {
      this.polling = setInterval(() => {
        getCIStatus(this.$route.params.ciUploadId).then((response) => {
          this.progress = response.data.progress;

          if (this.progress  === 100) {
            this.vulnerabilityCount = response.data.vulnerabilitiesFound;

            clearInterval(this.polling);
          }
        });
      }, 1000);
    },
  },
  mounted () {
    this.pollCIStatus();
  },
  beforeUnmount () {
	  clearInterval(this.polling);
  },
};
</script>

<template>
  <div class="progress" v-if="progress < 100">
    <el-progress type="circle" :percentage="progress" />
    <p>Generating report...</p>
  </div>
  <vulnerability-stats v-else :count="vulnerabilityCount" />
</template>

<style>
.progress {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
