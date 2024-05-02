<template>
    <Header/>
    <div class="blue-box">
        <div class="white-box">
            <img class="avatar-icon" src="@/assets/img/circle.png" alt="">
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
}
.white-box{
    background-color: white;
    border-radius: 10px;
    height: 280px;
    width: 910px;
    display: inline-block;
    position: relative;
}
</style>