<template>
    <div id="app">
        <div class="container">
            <Header/>
            <List/>
            <Button/>
        </div>
    </div>
</template>
<script>
    import Header from "./Header";
    import List from "./List";
    import Button from './Button'
    export default {
        name: 'ToDoList',
        components: {Header,List,Button},
    }
</script>
<style>
 @import "../assets/css/toDoList.css";
</style>
