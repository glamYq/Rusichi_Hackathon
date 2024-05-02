<template>
    <div class="background-img wrapper">
      <form @submit.prevent="login">
        <label>Логин:</label>
        <input type="text" id="username">
        <label>Пароль:</label>
        <input type="password" id="password">
        <button type="submit">Войти</button>
      </form>
    </div>
  </template>
  
<script>
  export default {
    
  }
</script>

<style scoped>
.background-img{
  background-image: url("@/assets/img/back.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  
}
.wrapper{
  margin: 10px;
  height: 100vh;
  text-align: center;
}

</style>