<template>
    <div>
        <input id="input" v-model="username" placeholder="name"/>
        <!-- <router-link to="/ToDoList">Go to the toDoList</router-link> -->
        <router-link :to="{path: '/ToDoList',query:{'userName':this.username}}">Go to the toDoList</router-link>
    </div>
</template>

<script> 
export default{
    data: function (){
       return{
           username:''
       } 
    }
}
</script>

