import Vue from 'vue'
import Router from 'vue-router'
// import Home from "@/components/Home"
// import ConcatUs from "@/components/ConcatUs";
// import AboutUs from "@/components/AboutUs";
// import Template from "@/components/Template";
// import Cases from '@/components/Cases';
// import Details from "@/components/Details";

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: resolve => require(["@/components/Home"],resolve)
    },
    {
      path: '/concatUs',
      name: 'concatUs',
      component: resolve => require(["@/components/ConcatUs"], resolve)
    },
    {
      path:"/aboutUs",
      name:"aboutUs",
      component: resolve => require(["@/components/AboutUs"], resolve)
    },
    {
      path:"/template",
      name:"template",
      component: resolve => require(["@/components/Template"], resolve)
    },
    {
      path:"/cases",
      name:"cases",
      component: resolve => require(["@/components/Cases"], resolve)
    },
    {
      path:"/details/:Id",
      name:"details",
      props:true,
      component: resolve => require(["@/components/Details"], resolve)
    }
  ]
})
