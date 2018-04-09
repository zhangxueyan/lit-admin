<template>
  <div class="topfixed clearfix">
     <div class="top-left fl">coral</div>
     <div class="top-right fr">那年夏天coarl</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'top'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topfixed{
  width: 100%;
  height: 50px;
  background: #333744;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  color: #fff;
  position: fixed;
  top:0;
  z-index: 100;
  border-bottom: 2px solid #4e4c4c;
 }
 .top-left{
  width: 180px;
  border-right: 2px solid #4e4c4c;
 }
  .top-right{
  width: 180px;
  border-left: 2px solid #4e4c4c;
  }
</style>
