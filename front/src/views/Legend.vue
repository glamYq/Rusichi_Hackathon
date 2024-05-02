<template>
  <div class="background-img wrapper">
    <img class="logo" src="@/assets/img/logo.png">
    <div class="white-box">
      <form @submit.prevent="next" >
        <div v-if="counter == 0">
          <input type="text" placeholder="Имя" required v-model="legend.name">
          <input type="number" placeholder="Возраст" required v-model="legend.age">
        </div>
        <div v-if="counter == 1">
          <input type="text" placeholder="Достижения" required v-model="legend.awards">
        </div>
        <div v-if="counter == 2">
          <input type="text" placeholder="Награды" required v-model="legend.achieve">
        </div>
      <button type="submit">Далее</button>
      </form>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      legend:{
        name: '',
        age: 0,
        awards: '',
        achieve: ''
      }
      
    }
  },
  methods: {
    next(){
      $http.
      this.counter+=1
      if(this.counter == 3){

      }
    }
  },
}
</script>

<style scoped>
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
font-size: 40px;
margin-top: 72px;
margin-bottom: 72px;
color: #1D443B;
}
form{
display: block;
margin-left: 45px;
margin-right: 45px;
}
input, select, button {
margin-top: 45px; /* Добавляет отступ между элементами формы */
margin-bottom: 45px; /* Добавляет отступ между элементами формы */
}

.logo {
position: fixed;
top: 0;
left: 0;
padding: 0;
margin: 0;
z-index: 1000; /* Устанавливает z-index, чтобы логотип был выше других элементов */
}
@media screen and (max-width: 768px) {
.logo {
  padding: 5px; /* Изменение отступов для более компактного отображения на маленьких экранах */
}
}
</style>