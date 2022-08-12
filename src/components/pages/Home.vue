<script>
import { uploadDependencyFiles } from '../../api/files';
import FileUploader from '../organisms/FileUploader.vue';

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
    handleSubmit() {
      this.error = null;
      this.loading = true;

      const files = this.files.map((files) => files.raw);

      uploadDependencyFiles(files).then(() => {
        this.$router.push('/report');
      }).catch((error) => {
        this.error = error.response?.data?.message;
      }).finally(() => {
        this.loading = false;
      });
    },
  },
};
</script>

<template>
  <el-container class="container" direction="vertical">
    <el-row>
      <el-col :span="20" :offset="2">
        <file-uploader v-model="files" />
        <el-alert
          v-if="error"
          type="error"
          :title="error"
          :closable="false"
        />
        <div class="actions">
          <el-button
            type="primary"
            size="large"
            @click="handleSubmit"
            :disabled="loading || !files.length"
          >
            {{ loading ? 'Uploading...' : 'Generate Report'}}
          </el-button>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<style>
.container {
  margin-top: 80px;
}
.actions {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
</style>
