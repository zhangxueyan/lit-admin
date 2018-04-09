<template>
  <div class="slider">
      <el-menu
      class="el-menu-vertical-demo">
        <div v-for="item in items" :key="item.key">
          <el-submenu :index="item.index"  v-if="item.subts">
            <template slot="title">
              <i :class="{'el-icon-menu':item.type ==='type1','el-icon-date':item.type ==='type2','el-icon-edit':item.type ==='type3'}"></i>
             <span>{{item.titl}}</span>
            </template>
            <el-menu-item :index="childItem.index" v-for="childItem in item.subts" :key="childItem.key">
              <router-link :to="{name:childItem.name}">{{childItem.subt}}</router-link>
            </el-menu-item>
          </el-submenu>

          <el-menu-item :index="item.index" v-else>
            <i :class="{'el-icon-menu':item.type ==='type1','el-icon-date':item.type ==='type2','el-icon-info':item.type ==='type3'}"></i>
            <router-link :to="{name:item.name}">{{item.titl}}</router-link>
          </el-menu-item>

        </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your slider',
      items:[
        {index:"1",titl:"首页",name:'home',type:"type1"},
        {index:"2",titl:"用户列表",name:'userlist',type:"type2"},
        {index:"3",titl:"图书管理",type:"type3",
         subts:[
         {index:"3-1",subt:"图书列表",name:'booklist'},
         {index:"3-2",subt:"图书分类",name:'bookcate'}
         ]
        }
      ]
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider{
  width: 15%;
  height: 100%;
  background:#eef1f6;
  position: fixed;
  left: 0;
  top: 50px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  z-index: 100;
}
.slider a{
  color: #333;
}
</style>
