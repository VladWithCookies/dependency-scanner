<script>
import DarkModeSwitch from '@/components/molecules/DarkModeSwitch.vue';

export default {
  components: {
    DarkModeSwitch,
  },
};
</script>

<template>
  <el-header>
    <el-row justify="space-between" align="middle">
      <el-col :span="20">
        <p>Dependency Scanner</p>
      </el-col>
      <el-col :span="4">
        <dark-mode-switch />
      </el-col>
    </el-row>
  </el-header>
</template>
