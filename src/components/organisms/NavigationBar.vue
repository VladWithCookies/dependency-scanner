<template>
  <el-header class="header">
    <el-row justify="space-between" align="middle">
      <el-col :span="4">
        <p>Dependency Scanner</p>
      </el-col>
      <el-col :span="2">
        <el-switch active-icon="Moon" inactive-icon="Sunny" />
      </el-col>
    </el-row>
  </el-header>
</template>

<style>
.header {
  padding: 0 20px;
}
</style>
