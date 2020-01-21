import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import top from '@/components/top'
import profile from '@/components/profile'
import skills from '@/components/skills'
import projects from '@/components/projects'
import modal from '@/components/modal'

Vue.use(Router)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/skills',
      name: 'skills',
      component: skills
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/modal',
      name: 'modal',
      component: modal
    }
  ]
})
