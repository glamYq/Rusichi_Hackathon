<template>
    <div class="background-img wrapper">
      <img src="@/assets/img/logo.png">
      <div class="white-box">
        <form @submit.prevent="login">
        <label>Логин:</label>
        <input type="text" required v-model="login">
        <label>Пароль:</label>
        <input type="password" required v-model="password">
        <button type="submit">Войти</button>
      </form>
      </div>
     
    </div>
  </template>
  
<script>
  export default {
    data(){
      return{
        login: "",
      password: ""
      }
    },
    methods:{
      login(){
        let login = this.login
        let password = this.password
        this.$store.dispatch('login', {login,password}).then(() => this.$router.push('/')).catch(err => console.log(err))
      }
    }
  }
</script>

<style scoped>
.background-img{
  background-image: url("@/assets/img/back.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.wrapper{
  height: 100vh;
}
.white-box{
    background-color: white;
    margin: 10px;
    text-align: center;
    width: 600px;
    height: 700px;
}
form{
  margin: auto;
}
</style>