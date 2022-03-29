<template>
  <div class="RegistroAlumno">
<div class="container">

    

    <div class="row" >
        <div class="col-md-7">
            <table class="table table-white" >
                <thead class=" text-white " style="background-color:#06244f;">
                    <tr>
                        <th>No.</th>
                        <th>Nombre.</th>
                        <th>Fecha Nacimiento.</th>
                        <th>Edad.</th>
                        <th>Disciplina.</th>
                        <th>Horario.</th>
                        <th>Correo.</th>
                    </tr>
                </thead>
                <tbody v-for='(estuadinte, index) in  Estudiantes' :key="index">
                    <tr>
                        <th>{{index}}</th>
                        <th>{{estuadinte.nombrec}}</th>
                        <th>{{estuadinte.apellidosc}}</th>
                        <th>{{estuadinte.edadc}}</th>
                        <th>{{estuadinte.grupoc}}</th>
                        <th><button class="btn btn-primary btn-md" @click="editarEstudiante(index, estuadinte.nombrec, estuadinte.apellidosc, estuadinte.edadc, estuadinte.grupoc)" >EDITAR</button></th>
                        <th><button class="btn btn-danger btn-md" @click="Eliminar(index)" >ELIMINAR</button></th>
                    </tr>
                </tbody>
			</table>
        </div>
        <div class="col-5 float-righ">
            <div class="card">
                <div class="card-header  text-light" style="background-color:#06244f;">
                    <label class="text-light">Registro de Alumnos</label>
                </div>
                <div class="card-body">
                    <form>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Nombre Completo:</label>
                                <input type="text" class="form-control" placeholder="Nombre Completo..">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Fecha de nacimiento:</label>
                                <input type="date" class="form-control" placeholder="Fecha de Nacimiento..">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Edad:</label>
                                <input type="text" class="form-control" placeholder="Edad..">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Elegir Disciplina:</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Elegir Disciplina...</option>
                                    <option>Futbol</option>
                                    <option>Natación</option>
                                    <option>Futbol</option>
                                    <option>Natación</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Horario:</label>
                                <input type="time" class="form-control" placeholder="Horario..">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Correo:</label>
                                <input type="text" class="form-control" placeholder="Correo..">
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <button class="btn btn-success" type="submit">Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            
    </div>

    
</div>
  </div>
</template>

<script>

export default {
  components: { },
  name: 'RegistroAlumno',
  props: {
    msg: String
  }
}
</script>