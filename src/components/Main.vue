<template>
    <div>
        <input id="input" v-model="username" placeholder="name" @on-enter="addUserName"/>
        <Button type="primary" @click="addUserName">start use</Button>
        <!-- <router-link :to="{path: '/Home',query:{'username':this.username}}" @click="addUserName">Go to the Home</router-link> -->
    </div>
</template>

<script> 
export default{
    data: function (){
       return{
           username:''
       } 
    },
    methods:{
        addUserName(){
            this.$router.push({name: 'Home', params: {username: this.username}});
            this.$store.commit('addUserName', this.username);
        }
    }
}
</script>

