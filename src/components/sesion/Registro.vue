<template>
  <div class="form">
    <h2>Registrate</h2>
    <p>
      <input type="text" placeholder="Correo Electrónico" v-model="email" />
    </p>
    <p>
      <input type="password" placeholder="Contraseña" v-model="password.password" />
    </p>
    <p>
      <input type="password" placeholder="Confirmar contraseña" v-model="password.confirm" />
    </p>
    <button @click="submitForm">Registrar</button>
  </div>
</template>

<script>
// import useValidate from "@vuelidate/core";
// import { required } from "@vuelidate/validators";

export default {
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
    width: 400px;
    margin: 0 auto;
    background-color: #023047;
    padding: 30px;
    margin-top: 100px;
    border-radius: 15px;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid #ddd;
    font-size: 1em;
    padding: 5px 0;
    margin: 10px 0 5px 0;
    width: 100%;
    border-radius: 2px;
  }

  button {
    background-color: #6FFA9C;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    color: white;
    border-radius: 2px;
  }

  h2 {
  color: #ffffff;
  }

</style>