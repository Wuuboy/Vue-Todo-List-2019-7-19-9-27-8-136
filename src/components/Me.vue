<template>

    <div >
        
         <div style="float:left">
            <ul class="ulClass">
            <li class="liClass"><router-link to="/ToDoList">toDoList</router-link></li>
            <!-- <li class="liClass"><a href="#news" >我的<Me/></a></li> -->
            <li class="liClass"><router-link to="/Me">我的</router-link></li>
        </ul>
        </div>
        <div style="   margin-left: 613px; margin-top: 100px;">
        <img  src="https://i.loli.net/2017/08/21/599a521472425.jpg" style="top: 20px; right: 10px;border-radius:100px;border: none;" width="100px" height="100px">
        <div>用户名:{{this.$store.state.username}}</div>
        <div>Phone:18075525725</div>
        </div>
    </div>

 
</template>
<script>
export default {
   
}
</script>
<style>
@import "../assets/css/toDoList.css";
</style>
