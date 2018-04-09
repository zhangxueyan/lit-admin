import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Userlist from '@/pages/Userlist'
import Book from '@/pages/book/Book'
import Booklist from '@/pages/book/Booklist'
import Bookcate from '@/pages/book/Bookcate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
     {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
     path: '/userlist',
     name:'userlist',
     component: Userlist
    },
    {
      path: '',
      name: 'book',
      component: Book,
      children: [
        {
          path: '/book/list',
          name:'booklist',
          component: Booklist
        },
        {
          path: '/book/cate',
          name:'bookcate',
          component: Bookcate
        }
      ]
    }
  ]
})
