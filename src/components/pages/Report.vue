<script>
import { POLL_INTERVAL } from '@/constants';
import { getCIStatus } from '@/api';
import VulnerabilityStats from '@/components/organisms/VulnerabilityStats.vue';

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
      }, POLL_INTERVAL);
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
  <div :class="$style.progress" v-if="progress < 100">
    <el-progress type="circle" :percentage="progress" />
    <p>Generating report...</p>
  </div>
  <vulnerability-stats v-else :count="vulnerabilityCount" />
</template>

<style module>
.progress {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
