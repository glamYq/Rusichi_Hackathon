<template>
    <div>
        <img class="logo" src="@/assets/img/logo.png">
        <router-link to="/profile">Профиль</router-link>
        <router-link to="/main">Общая статистика</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/contacts">Контакты</router-link>
    </div>
    
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style>
    
</style>