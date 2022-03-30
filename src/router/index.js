import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

//importaciones componentes

import Estudiantes from '../components/Estudiantes.vue'
import Club from '../components/Club.vue'
import RegistroAlumno from '../components/registro/RegistroAlumno.vue'
import RegistroPago from '../components/registro/RegistroPago.vue'

import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/clubs',
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
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
