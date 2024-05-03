<template lang="">
    <Header/>
     <div class="background-img wrapper">
     <img class="logo" src="@/assets/img/logo.png">
     <div class="white-textbox">
         <div class="description">
             <p class="message">ЦЕНТР ВОЕННО-СПОРТИВНОЙ ПОДГОТОВКИ «РУСИЧИ».<br>
             Проект созданный с целью формирования и развития системы военно-прикладной, спортивной, технической подготовки и духовно-нравственного, патриотического воспитания молодёжи.<br>
             ЦВСП «РУСИЧИ» является членом Ассоциации военно-патриотических клубов ДОСААФ России и Российского военно-исторического общества.<br>
             На данный момент на базе Центра реализуется проект военно-патриотического клуба в городе Великий Новгород и ведётся набор детей в военно-патриотический лагерь.<br>
             Хотите узнать подробнее – пишите нам! Мы с радостью ответим на все Ваши вопросы!<br></p>
         </div>
     </div>
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
 background-position: center;
 background-size: cover;
 }
 .wrapper{
 height: 78vh;
 text-align: center;
 }
 .description{
 background-color: white;
 }
 .white-textbox {
     display: flex; /* Устанавливает flex контейнер для дочерних элементов /
     justify-content: center; / Выравнивает дочерние элементы по центру */
     align-items: center;
     height: 100%;
     line-height: 1.5;
 }
 </style>