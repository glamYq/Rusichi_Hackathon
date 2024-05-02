<template>
    <Header/>
    <div class="blue-box">
        <div class="white-box">
            <!-- <img class="avatar-icon" src="@/assets/img/circle.png" alt=""> -->
        </div>
        <div class="white-box"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.blue-box{
    background-color: #79A0C1;
    background-position: center center;
    height: 100vh;
    padding: 0px;
    display: flex; /* Устанавливает flex контейнер для дочерних элементов */
    justify-content: center; /* Выравнивает дочерние элементы по центру */
    align-items: center;
}
.white-box{
    background-color: white;
    border-radius: 10px;
    height: 280px;
    width: 890px;
    display: inline-block;
    position: relative;

    margin:15px
}
img{
    padding: 0;
    margin: 0;
}
</style>