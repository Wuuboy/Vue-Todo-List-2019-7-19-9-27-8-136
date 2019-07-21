<template>
<div>
   <ol>
        <li v-for="(item,index) in checkBoxes" :key="index" >
            <input type="checkbox" placeholder="0" v-model="item.isChecked">
            <span>{{item.checkBoxValue}}</span>
        </li> 
    </ol>
</div>
</template>

<script>
export default {
  name: 'CheckBox',
  props:['checkBoxes']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
