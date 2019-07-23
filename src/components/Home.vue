<template>
    <div>
        <input type = 'button' value='返回' @click="back"/>
        <h1> params.userName：{{ this.$route.query.userName}}</h1>
        <ToDoList/>
    </div>
</template>
<script>
import ToDoList from './ToDoList.vue'
export default {
    
    // props:{
    //     userName
    // },
    components:{ToDoList},
    methods:{
        back:function(){
           if (confirm("确认返回上一个界面？")){
            this.$router.go(-1)
           }
        }
    }
}
</script>

