<template>
    <Header/>
    <div class="wrapper">
        <div class="green-box">
            <div class="info-container">
                <div>
                    <img class="avatar-icon" src="@/assets/img/circle.png" alt="">
                
                </div>
                <div class="white-box"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>
<style >
.wrapper{
 height: 100vh;
}
.green-box{
    background-color: #578764;
    background-position: center center;
    height: 50vh;
    padding: 0px;
}
.avatar-icon{
    padding: 0;
    margin: 20px;
    align-self: center;
}
.white-box{
    background-color: white;
    border-radius: 10px;
    height: 200px;
    width: 200px;
    display: flex; /* Устанавливает flex контейнер для дочерних элементов */
    justify-content: right;
    
    margin:10px;
    flex:1;
}
</style>