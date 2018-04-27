<template>
  <div class="header">
    <span><img src="../assets/logo.png" alt="" width="40" height="40"></span>
  </div>
</template>

<script>
  export default {
    name:"Header",
    data() {
      return {
      
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .header{
        width: 100%;
        height: 100%;
        background-color: rgb(84, 92, 100)
  }
  .header img{
    padding: 10px 0 0 40px;
  }
</style>
