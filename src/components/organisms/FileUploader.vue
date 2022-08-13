<script>
import { UploadFilled } from '@element-plus/icons-vue';

export default {
  props: ['value'],
  emits: ['update:modelValue'],
  components: {
    UploadFilled,
  },
  computed: {
    files: {
      get() {
        return this.value;
      },
      set(files) {
        this.$emit('update:modelValue', files);
      },
    },
  },
};
</script>

<template>
  <el-upload
    drag
    multiple
    v-model:file-list="files"
    :auto-upload="false"
>
    <el-icon class="el-icon--upload">
      <upload-filled />
    </el-icon>
    <p class="el-upload__text">
      Drop package-lock.json or yarn.lock file here or <em>click to upload</em>
    </p>
  </el-upload>
</template>
