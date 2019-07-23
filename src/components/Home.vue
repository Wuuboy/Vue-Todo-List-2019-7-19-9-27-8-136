<template>
    <div>
        <input type = 'button' value='返回' @click="back"/>
        <!-- <h1> params.username：{{ this.$route.query.username}}</h1> -->
        <h1> params.username：{{ this.$store.state.username}}</h1>
        <ToDoList/>
        <Me/>
    </div>
</template>
<script>
import ToDoList from './ToDoList.vue'
import Me from './Me.vue'
export default {
    components:{ToDoList,Me},
    methods:{
        back:function(){
           if (confirm("确认返回上一个界面？")){
            window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
           }
        }
    }
}
</script>

