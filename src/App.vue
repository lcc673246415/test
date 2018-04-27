<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header/>  
      </el-header>
      <el-container>
        <el-aside ><Aside/></el-aside>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
import Header from "./components/Header"
import Aside from "./components/Aside"
export default {
  name: 'App',
  components:{
    Header,Aside
  }
}
</script>

<style>
  .el-header{
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    height: 100%;
  }
  .el-container{
    height: 100%;
  }
  .el-aside{
    background: rgb(84, 92, 100);;
  }
</style>
