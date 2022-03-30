<template>

  <div class="wrapper">
      <div class="row">
        <form class="form">
          <div class="from-group">
            <img src='../assets/col22.jpg' class="img-thumbnail" height="400px" width="600px">
          </div>
          <br>
          <br>
          <div class="form-group">
            <h4  for="exampleInputEmail1">Email:</h4>
            <input type="email" class="form-control" placeholder="Correo Electrónico" v-model="email" />
          </div>
          <div class="form-group">
            <h4  for="exampleInputPassword1">Password</h4>
            <input type="password" class="form-control" placeholder="Contraseña" v-model="password.password" />
          </div>

          <button class="btn btn-success btn-lg" @click="submitForm">Ingresar</button>
        </form>
        <!--<div class="form">
          <img src='../assets/col22.jpg' height="300px" width="500px">
          <h4>Iniciar Sesión</h4>
          <p>
            <input type="text" placeholder="Correo Electrónico" v-model="email" />
          </p>
          <p>
            <input type="password" placeholder="Contraseña" v-model="password.password" />
          </p>
          <button @click="submitForm">Ingresar</button>
        </div>-->
    </div>
  </div>      
  
</template>

<script>
// import useValidate from "@vuelidate/core";
// import { required } from "@vuelidate/validators";

export default {
  name: 'VLogin',
  data() {
    return {
      // v$: useValidate(),
      email: '',
      password: {
        password: '',
        confirm: '',
      },
    };
  },
  validations() {
    // return {
    //   email: { required },
    //   password: {
    //     password: { required },
    //     confirm: { required },
    //   }
    // }
  },
  methods: {
    submitForm() {
        if (!this.v$.$error) { 
          alert('No has llenado los campus aún.')
        } else {
          alert('No has llenado los campus aún')
        }
    },
  },
};

</script>

<style lang="css">
  .form {
    width: 700px;
    margin: 0 auto;
    background-color: #023047;
    padding: 10px;
    border-radius: 15px;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid #ddd;
    font-size: 1em;
    padding: 20px 0;
    margin: 10px 0 5px 0;
    width: 100%;
    border-radius: 2px;
  }

  button {
    
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    color: white;
    border-radius: 2px;
  }

  h4 {
    color: #ffffff;
    text-align: left;
  }
  @import url('https://fonts.googleapis.com/css?family=Lobster&display=swap') repeat scroll 0 0 rgba(0, 0, 0 , 0);

  body {
    background: #fff;
  }

  .title {
    font-size: 5.6rem;
    font-family: 'Lobster', cursive;
  }

  .wrapper {
    background: url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80");
    color: #eee;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
    perspective-origin: 50% 50%;
    animation: animation 100s linear infinite;
  }

  @keyframes animation {
    100%{
      background-position:0px -3000px;
    }
  }

</style>