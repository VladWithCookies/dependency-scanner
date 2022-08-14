<script>
import NavigationBar from '@/components/organisms/NavigationBar.vue';

export default {
  components: {
    NavigationBar,
  },
};
</script>

<template>
  <navigation-bar />
  <el-container :class="$style.container" direction="vertical">
    <el-row>
      <el-col :span="20" :offset="2">
        <el-main>
          <slot></slot>
        </el-main>
      </el-col>
    </el-row>
  </el-container>
</template>

<style module>
.container {
  margin-top: 80px;
}
</style>
