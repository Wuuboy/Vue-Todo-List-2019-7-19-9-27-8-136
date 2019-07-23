<template>
    <div id="app">
        <div class="container">
            <h1> params.userName：{{ this.$route.query.userName}}</h1>
            <Header/>
            <List/>
            <Button/>
            <!-- <test/> -->

        </div>
    </div>
</template>
<script>
    import Header from "./Header";
    import List from "./List";
    import Button from './Button'
// import { constants } from 'buffer';
    export default {
        name: 'ToDoList',
        components: {Header,List,Button},
    }

</script>
<style>
 @import "../assets/css/toDoList.css";
</style>
