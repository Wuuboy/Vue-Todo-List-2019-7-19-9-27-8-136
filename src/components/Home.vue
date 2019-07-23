<template>
    <div>
        <input type = 'button' value='返回' @click="back"/>
        <h1> params.userName：{{ this.$route.query.userName}}</h1>
    </div>
</template>
<script>
export default {
    // props:{
    //     userName
    // },
    methods:{
        back:function(){
           if (confirm("确认返回上一个界面？")){
            this.$router.go(-1)
           }
        }
    }
}
</script>

