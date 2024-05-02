<template>
    <div class="background-img wrapper">
      <img class="logo" src="@/assets/img/logo.png">
      <div class="white-box">
        <h1>Вход</h1>
        <form @submit.prevent="loginF">
        <!-- <label>Логин:</label> -->
        <input type="text" placeholder="Логин" required v-model="login">
        <!-- <label>Пароль:</label> -->
        <input type="password" placeholder="Пароль" required v-model="password">
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
      loginF: function(){
        let login = this.login
        let password = this.password
        $store.dispatch('login', {login,password}).then(() => this.$router.push('/main')).catch(err => console.log(err))
      }
    }
  }
</script>

<style scoped>
@font-face {
 font-family: "KyivTypeTitling";
 src: url(../assets/fonts/KyivTypeTitling-VarGX.ttf) format(truetype);
}

.background-img{
 background-image: url("@/assets/img/back.jpg");
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
}
.wrapper{
 height: 100vh;
 text-align: center;
}
.white-box{
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 
 width: 600px;
 height: 700px;
 border-radius: 16px;
 background-color: white;

 padding-left: 140px;
 padding-right: 140px;

}
h1{
 font-family: KyivTypeTitling;
 font-size: 40px;
 font-weight: 300;
 margin-top: 72px;
 margin-bottom: 72px;
 color: #1D443B;
}

input{
 font-family: KyivTypeTitling;
 font-size: 40px;
 display: block; /* Устанавливает каждый элемент формы на новой строке */
 margin: 75px auto 45px; /* Выравнивает элементы по центру и добавляет отступ снизу */
 
 
 width: 340px;
 height: 72px;
 
 border: 0px;
 border-bottom: 2px solid #3A3E38;
}
input::placeholder{
 color: rgba(168, 166, 166, 0.596) /* Полупрозрачный белый текст */
}
button{
 font-family: KyivTypeTitling;
 font-size: 40px;
 font-weight: 350;
 margin: 45px auto 45px;

 width: 340px;
 height: 72px;
 
 background-color: #1D443B;
 color: #fff;
}
button:hover{
  background-color: #193a32;
  scale: 1.05;
}

.logo {
 position: fixed;
 top: 0;
 left: 0;
 padding: 0;
 margin: 0;
 z-index: 1000; 
}
@media screen and (max-width: 1024px) {
 .white-box{
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 300px;
  height: 500px;
  border-radius: 16px;
  background-color: white;
 
  padding-left: 70px;
  padding-right: 70px;
 }
 form{
  margin-left: 10px;
  margin-right: 10px;
 }
input{
  margin: 30px auto 30px;
  font-size: 30px;
  width: 170px;
  height: 36px;
}
 button{
  font-size: 30px;
  width: 170px;
  height: 36px;
}

}
</style>