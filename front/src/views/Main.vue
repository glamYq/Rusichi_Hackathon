<template>
    <header>
        <img class="logo" src="@/assets/img/logo.png">
        <router-link to="/profile">Профиль</router-link>
        <router-link to="/main">Общая статистика</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/contacts">Контакты</router-link>
    </header>
    <body>
        <div class="blue-box">
            <div class="white-box"></div>
            <div class="white-box"></div>
        </div>

    <div>

    </div>

    <div>
        <div></div>
        <div></div>
    </div>
    </body>
    
    <footer>

    </footer>
</template>
<script>
export default {
    
}
</script>
<style>
.blue-box{
    background-color: #79A0C1;
    background-position: center center;
    height: 300px;
    
}
.white-box{
    background-color: white;
    border-radius: 10px;
    height: 280px;
    width: 910px;
    display: inline-block;
    position: relative;
    margin: 10px;
}
</style>