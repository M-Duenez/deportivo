import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clubs: [
      {nombrec:'Futbol', horarioc:'09:00 - 17:00', diasc:'lunes a viernes'},
      {nombrec:'BasquetBall', horarioc:'07:00 - 12:00', diasc:'lunes a viernes'},
      {nombrec:'Natacion', horarioc:'08:00 - 19:00', diasc:'lunes a viernes'},
    ],
    Estudiantes: [
      {nombrec:'Juan', apellidosc:'Perez', edadc:'20', fechanc: '20/11/1996', diciplinac:'Futbol', horarisoc:'Futbol', correoc: "@"},
      {nombrec:'Jose', apellidosc:'Dueñez', edadc:'20', fechanc: '20/11/1996', diciplinac:'Futbol', horarioc:'Futbol', correoc: "@"},
      {nombrec:'Miguel', apellidosc:'Palomo', edadc:'20', fechanc: '20/11/1996', diciplinac:'BasquetBal', horarioc:'Futbol', correoc: "@"},
      {nombrec:'Juan', apellidosc:'Perez', edadc:'20', fechanc: '20/11/1996', diciplinac:'BasquetBal', horarioc:'Futbol', correoc: "@"},
      {nombrec:'Jose', apellidosc:'Dueñez', edadc:'20', fechanc: '20/11/1996', diciplinac:'Natacion', horarioc:'Futbol', correoc: "@"},
      {nombrec:'Miguel', apellidosc:'Palomo', edadc:'20', fechanc: '20/11/1996', diciplinac:'Natacion', horarioc:'Futbol', correoc: "@"},
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
