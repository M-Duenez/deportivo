<template>
  <div class="RegistroAlumno">
    <br>
    <div class="row">		
		<div v-if="validation == true" class="alert alert-warning alert-dismissible fade show" role="alert">
			<strong>Advertencia!!!</strong> No Puede haber campos ni espacions vacios.
			<button type="button" @click="dissmis()" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	</div>

    <div class="row" >
        <div class="col-md-8">
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
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody v-for='(estuadinte, index) in  Estudiantes' :key="index">
                    <tr>
                        <th>{{index}}</th>
                        <th>{{estuadinte.nombrec + " " + estuadinte.apellidosc}}</th>
                        <th>{{estuadinte.fechanc}}</th>
                        <th>{{estuadinte.edadc}}</th>
                        <th>{{estuadinte.diciplinac}}</th>
                        <th>{{estuadinte.horarioc}}</th>
                        <th>{{estuadinte.correoc}}</th>
                        <th><button class="btn btn-primary btn-md" @click="editarEstudiante(index, estuadinte.nombrec, estuadinte.apellidosc, estuadinte.edadc, estuadinte.diciplinac, estuadinte.horarioc, estuadinte.correoc)" > <span class="fas fa-duotone fa-pen"></span> </button></th>
                        <th><button class="btn btn-danger btn-md" @click="Eliminar(index)" > <span class="fas fa-trash"></span>  </button></th>
                    </tr>
                </tbody>
			</table>
        </div>

        <div class="col-4 float-righ">
            <div class="card">
                <div class="card-header  text-light" style="background-color:#06244f;">
                    <label class="text-light">Registro de Alumno</label>
                </div>
                <div class="card-body">
                    <form>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Nombres:</label>
                                <input v-model="nombre" type="text" class="form-control" placeholder="Nombres..">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Apellidos:</label>
                                <input v-model="apellidos" type="text" class="form-control" placeholder="Apellidos..">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label for="inputEmail4">Fecha de nacimiento:</label>
                                <input v-model="fechan" type="date" class="form-control" placeholder="Fecha de Nacimiento..">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Edad:</label>
                                <input v-model="edad" type="text" class="form-control" placeholder="Edad..">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Elegir Disciplina:</label>
                                <select v-model="diciplina" id="inputState" class="form-control">
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
                                <input v-model="horario" type="time" class="form-control" placeholder="Horario..">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Correo:</label>
                                <input v-model="correo" type="email" class="form-control" placeholder="Correo..">
                            </div>
                        </div>
                        
                        <div class="form-row">
                           
                        </div>
                    </form>
                    <button v-if="btn_a == true" @click="validaciones(nombre, apellidos, edad, grupo)" class="btn btn-success btn-block">
						AGREGAR
					</button>
					<button v-if="btn_e == true" @click="clicEditar(index,nombre, apellidos, edad, grupo)" class="btn btn-primary btn-block">
						EDITAR
					</button>
                </div>
            </div>
        </div>
            
    </div>
  </div>
</template>

<script>

    import {mapState} from 'vuex';
    console.log(mapState);

    export default {
        components: { },
        name: 'RegistroAlumno',
        computed:{
                ...mapState(['Estudiantes'])
            },
        data:()=>{
            return{
                validation: false,
                nombre:'',
                apellidos:'',
                edad: '',
                diciplina:'',
                horario: '',
                correo: '',
                btn_a: true,
                btn_e: false,
            }
        },
        methods:{
            validaciones(nombre, apellidos, edad, diciplina){
                if (nombre && apellidos && edad && diciplina) {
                    this.agregarEstudiante(nombre, apellidos, edad, diciplina);
                }
                else(
                    this.validation= true
                )
            },
            agregarEstudiante(nombre, apellidos, edad, diciplina){
                //console.log('diste click');
                this.Estudiantes.push({
                    nombrec:nombre, apellidosc:apellidos, edadc:edad, diciplinac:diciplina
                });
                this.nombre='';
                this.apellidos='';
                this.diciplina='';
                this.edad= '';
                this.validation = false;
            },
            editarEstudiante(index, nombrec, apellidosc, edadc, diciplinac){
                /*for (club in clubs) {
                    this.nombre = club.nombrec;
                    this.horario = club.horarioc;
                    this.dias = club.diasc;
                    
                }*/
                console.log(index);
                this.index = index;
                this.nombre = nombrec;
                this.apellidos = apellidosc;
                this.edad = edadc;
                this.diciplina = diciplinac;
                
                this.funcion_texto= "EDITAR";
                this.btn_a = false;
                this.btn_e = true;

                
            },
            clicEditar(index, nombre, apellidos, edad, diciplina){
                /*for (club of this.clubs) {
                    this.nombre = club.nombrec;
                    this.horario = club.horarioc;
                    this.dias = club.diasc;
                    
                }*/
                //console.log(index);
                this.Estudiantes[index].nombrec = nombre;
                this.Estudiantes[index].apellidosc = apellidos;
                this.Estudiantes[index].edadc = edad;
                this.Estudiantes[index].diciplinac = diciplina;
                
                this.funcion_texto= "AGREGAR";
                this.nombre='';
                this.apellidos='';
                this.diciplina='';
                this.edad= '';
                this.btn_a = true;
                this.btn_e = false;

            },
            Eliminar(index){
                console.log(index);
                this.Estudiantes.splice(index, 1);

            },
            dissmis(){
                this.validation = false;
            },
        },
        props: {
            msg: String
        }
    }
</script>