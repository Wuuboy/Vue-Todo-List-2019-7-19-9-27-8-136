<template>
  <div class="container">
      <div>
          <h2>Jquery To Do List</h2>
          <p>
              <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
      </div>
      <div>
        <input v-model="inputValue" class="input-text" name="ListItem" />

        <button id="button" @click="add">add</button>
      </div>
      <div>
  
        <ol>
        <li v-for="(item,index) in checkboxes" :key="index" v-bind:class="{ checked: item.isChecked }">
            <input type="checkbox" v-model="item.isChecked" >
            <span v-if="!editing" @dblclick="edit(this)">{{item.checkBoxValue}}</span>
            <input type="text" class="form-control" ref="input" v-if="editing"  v-model="item.checkBoxValue" @blur="save">
        </li> 
        </ol>
      </div>
      <br/>
      <div>
          <ul id="filters">
              <li>
                  <a href="#" data-filter="all" @click="showAll">ALL</a>
              </li>
              <li>
                  <a href="#" data-filter="active" @click="showUnchecked">Active</a>
              </li>
              <li>
                  <a href="#" data-filter="complete" @click="showChecked">Complete</a>
              </li>
          </ul>

      </div>
  </div>
</template>


<script>
export default {
  name:'App',
    data(){
      return {
        inputValue:'',
        checkboxes:[],
        checkboxesTemp:[],
        editing: false
      }
    },
    methods: { 
      add(){
        this.checkboxes.push({checkBoxValue:this.inputValue,isChecked:false,updateValue:this.inputValue});
        this.checkboxesTemp = this.checkboxes.slice()
      },
      showAll(){
        this.checkboxes= this.checkboxesTemp
      },
      showUnchecked(){
        this.checkboxes = this.checkboxesTemp.filter(item => item.isChecked==true)
      }
      ,
      showChecked(){
        this.checkboxes = this.checkboxesTemp.filter(item => item.isChecked==false)
      },
      edit(){
        this.editing = true;
        this.$nextTick(function () {
        this.$els.input.focus()
        })
      },
      save() {
        this.editing = false;
      }   
  }
}
</script>

<style>
 @import "assets/css/toDoList.css";
</style>
