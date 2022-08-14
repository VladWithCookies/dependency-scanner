<script>
import { uploadDependencyFile, scanDependencies } from '@/api';
import FileUploader from '@/components/organisms/FileUploader.vue';

export default {
  components: {
    FileUploader,
  },
  data: () => ({
    files: [],
    error: null,
    loading: false,
  }),
  methods: {
    async handleSubmit() {
      this.error = null;
      this.loading = true;

      const [file, ...files] = this.files;

      try {
        const { data: { ciUploadId } } = await uploadDependencyFile(file.raw);
        const promises = files.map((file) => uploadDependencyFile(file.raw, ciUploadId));

        await Promise.all(promises);
        await scanDependencies(ciUploadId);

        this.$router.push(`/reports/${ciUploadId}`);
      } catch (error) {
        this.error = error.response?.data?.message;
      }

      this.loading = false;
    },
  },
};
</script>

<template>
  <file-uploader v-model="files" />
  <el-alert
    v-if="error"
    type="error"
    :title="error"
    :closable="false"
  />
  <div :class="$style.actions">
    <el-button
      type="primary"
      size="large"
      @click="handleSubmit"
      :disabled="loading || !files.length"
    >
      {{ loading ? 'Uploading...' : 'Generate Report'}}
    </el-button>
  </div>
</template>

<style module>
.actions {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
</style>
