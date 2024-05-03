<template>
    <Header/>
    <div class="blue-box">
        <div class="info-container">
            <div class="white-box">
                <img class="avatar-icon" src="@/assets/img/circle.png" alt="">
                <div class="account-info">Старый Тереньтий</div>
                <div class="account-info">Лет: 52</div>
            </div>
            <div class="white-box achievements">
                <div class="achievements-info">Достижения:</div>
                <div class="achievements-info">Награды:</div>
            </div>
        </div>
        <div class="group-container">
            <div class="group-table">Группа</div>
            <div class="group-info">
                <div class="logo-content"><img class="logo" src="@/assets/img/eagle.png"></div>
                <div class="collums">
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
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
}
.info-container{
    color: gray;
    font-size: 24px;

    height: 300px;
    padding:10px;
    margin-bottom: 20px;
    display: flex;
}
.white-box{
    background-color: white;
    border-radius: 10px;
    height: 280px;
    width: 890px;
    display: flex; /* Устанавливает flex контейнер для дочерних элементов */
    justify-content: left;
    
    margin:10px;
    flex:1;

    
}
.avatar-icon{
    padding: 0;
    margin-left: 40px;
    align-self: center;

}
.account-info{
    flex:1;
    padding: 0;
    margin-left: 60px;
    align-self: center;
}
.achievements{
    flex-direction: column;
    padding-top: 65px;
    padding-bottom: 65px;
}
.achievements-info{
    padding: 0;
    margin-top:30px;
    margin-left: 60px;
    align-self: center;
    width: 90%;
}


.group-container{
    background-color: red;
    height: 600px;
}
.group-table{
    height: 80px;
    padding: 20px;
    background-color: #fff;
    font-weight: bold;
}
.group-info{
    background-color: #fff;
    border-radius: 10px;
    width: 930px; 
    height: 235px; 
    margin: 30px auto; /* Устанавливает margin слева и справа на auto */
    display: flex;

    position: relative;

}
.logo-content{
    background: #000;
    height: 100%;
    width: 160px;
}
.logo{
    position: absolute; /* Устанавливает абсолютное позиционирование для изображения */
    top: 0; /* Располагает изображение в верхнем краю */
    left: 0;
    width: 120px;

    margin: 10px;
}
.collums{
    width: 100%;
    display: flex;
    background: #2f0;
}
.col{
    flex:1;
    background-color: aqua;
    margin: 2px;
}

</style>