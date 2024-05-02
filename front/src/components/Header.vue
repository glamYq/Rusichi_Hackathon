<template>
    <div>
        <div class="container">
            <img class="logo" src="@/assets/img/logo.png">
            <router-link id="frame" to="/profile">Профиль</router-link>
            <router-link id="frame" to="/main">Общая статистика</router-link>
            <router-link id="frame" to="/about">О нас</router-link>
            <router-link id="frame" to="/contacts">Контакты</router-link>
        </div>
    </div>
    
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style>
@font-face {
    font-family: "KyivTypeTitling";
    src: url(../assets/fonts/KyivTypeTitling-VarGX.ttf) format(truetype);
   }
body{
    font-family: KyivTypeTitling;
    font-size: 32px;
    font-weight: 300;
    color: #3A3E38;
}
.logo {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    z-index: 1000; 
   }
.container {
    display: flex; /* Устанавливает flex контейнер для дочерних элементов */
    justify-content: center; /* Выравнивает дочерние элементы по центру */
    align-items: center;

    height: 168px;
  }
  
  #frame {
    margin: 0 32px; 

    text-decoration: none;
    color:#3A3E38
  }
  #frame:hover{
    text-decoration:none;
    scale: 1.1;
    color:#3A3E38
  }
  @media screen and (max-width: 1600px) {
    body{
        font-size: 24px;
    }
    #frame {
        margin: 0 12px; 
    
      }
   
   }
   @media screen and (max-width: 900px) {
    body{
        font-size: 16px;
    }
    #frame {
        margin: 0 8px; 
      }
   
   }
</style>