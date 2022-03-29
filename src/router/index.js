import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

//importaciones componentes

import Estudiantes from '../components/Estudiantes.vue'
import Club from '../components/Club.vue'
import RegistroAlumno from '../components/registro/RegistroAlumno.vue'
import RegistroPago from '../components/registro/RegistroPago.vue'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/club',
    name: 'Clubs',
    component: Club
  },
  {
    path: '/estudiantes',
    name: 'Estudaintes',
    component: Estudiantes
  },
  {
    path: '/registro_alumno',
    name: 'RegistroAlumno',
    component: RegistroAlumno
  },
  {
    path: '/registro_pago',
    name: 'RegistroPago',
    component: RegistroPago
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
