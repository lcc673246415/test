<template>
  <div class="Aside">
   <el-row class="tac">
 
  <el-col :span="24">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router    @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff"  active-text-color="#ffd04b" >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/1-1" >信息</el-menu-item>
          <el-menu-item index="/1-2">任务派发</el-menu-item>
           <el-menu-item index="/1-3">报警信息处理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>历史记录管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/2-1" >历史派发记录</el-menu-item>
          <el-menu-item index="/2-2">历史报警</el-menu-item>
           <el-menu-item index="/2-3">历史轨迹</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>设备管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/3-1" >烟感管理</el-menu-item>
          <el-menu-item index="/3-2">锚点管理</el-menu-item>
           <el-menu-item index="/3-3">TAG管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>消防员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/4-1" >人员录入</el-menu-item>
          <el-menu-item index="/4-2">TAG绑定</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/5-1" >U3D管理</el-menu-item>
          <el-menu-item index="/5-2">建筑物管理</el-menu-item>
           <el-menu-item index="/5-3">管理员设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     
    </el-menu>
  </el-col>
</el-row>
  </div>
</template>


<script>
  export default {
    name: 'Aside',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
