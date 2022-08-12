<script>
import NavigationBar from '../organisms/NavigationBar.vue';

export default {
  components: {
    NavigationBar,
  },
};
</script>

<template>
  <navigation-bar />
  <el-container class="container" direction="vertical">
    <el-row>
      <el-col :span="20" :offset="2">
        <el-main>
          <slot></slot>
        </el-main>
      </el-col>
    </el-row>
  </el-container>
</template>
