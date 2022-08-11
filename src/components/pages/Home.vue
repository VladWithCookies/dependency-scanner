<script>
import FileUploader from '../organisms/FileUploader.vue';

export default {
  components: {
    FileUploader,
  },
};
</script>

<template>
  <el-container class="container" direction="vertical">
    <el-row>
      <el-col :span="20" :offset="2">
        <file-uploader />
        <div class="actions">
          <el-button type="primary" size="large">Start Scanning</el-button>
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
  display: flex;
  justify-content: center;
}
</style>
