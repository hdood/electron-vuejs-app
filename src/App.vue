<template>  

  <!-- ========== Start betail ========== -->
  
      <div v-if="betail.render" class="betail">
        <typeCard :active="betail.camel.render"  @activate="displayCamel">
          <img src="./assets/camel_white.svg"  v-if="betail.camel.render" alt="" srcset="">
          <img src="./assets/camel.svg" v-else alt="" srcset="">
        </typeCard>
        <typeCard :active="betail.sheep.render"  @activate="displaySheep">
          <img src="./assets/sheep_white.svg"  v-if="betail.sheep.render" alt="" srcset="">
          <img src="./assets/sheep.svg" v-else alt="" srcset="">
        </typeCard>
        <typeCard :active="betail.cow.render" @activate="displayCow">
          <img  src="./assets/cow_white.svg" v-if="betail.cow.render" alt="" srcset="">
          <img  src="./assets/cow.svg" v-else  >
        </typeCard>
      </div>

  <!-- ========== End betail ========== -->

  <!-- ========== Start O're et Argent ========== -->

      <div v-if="gold.render" class="gold">
        <typeCard :active="gold.gold.render"  @activate="displayGold">
          <img src="./assets/gold_white.svg" v-if="gold.gold.render" alt="" srcset="">
          <img src="./assets/gold.svg" v-else alt="" srcset="">
        </typeCard>
        <typeCard :active="gold.silver.render"  @activate="displaySilver">
          <img src="./assets/gold_white.svg" v-if="gold.silver.render" alt="" srcset="">
          <img src="./assets/silver.svg" v-else alt="" srcset="">
        </typeCard>      
      </div>

  <!-- ========== End O're et Argent ========== -->

  <!-- ========== Start Agricultire ========== -->


      
  
  <!-- ========== End Agricultire ========== -->



  <betailScreen>
    <template #input>
      <input ref="input" type="number" name="input" class="input">
    </template>
    <template #output>
      <div ref="output" class="output">0</div>
    </template>
  </betailScreen>

  <numPad @calc="getResult"></numPad>





  <bottomNavbar></bottomNavbar>
</template>

<script>
import betailScreen from './components/betailScreen.vue';
import numPad from "./components/numPad.vue"; 
import typeCard from './components/typeCard.vue';
import { Calculator } from './Calculator';
import bottomNavbar from './components/bottomNavbar.vue';

export default {
  data(){
    return {
      lastOne:"camel", 
      betail : {
        render: false, 
        cow: {
          render:false,
          last: {
            input : "",
            output : "0", 
          },
        },
        sheep : {
          render: false, 
          last: {
            input : "",
            output : "0", 
          },
        },
        camel: {
          render: true, 
          last:{
            input : "",
            output : "0", 
          },
        },
      }, 
      // gold start here 
      gold:{
        render: true, 
        gold :{
          render : true, 
          last : {
            input:"", 
            output :"0", 
          }
        }, 
        silver: {
          render :false, 
          last:{
            input:"", 
            output:"0", 
          }
        }
      }
    } 
  },
  components:{
    betailScreen,
    numPad, 
    typeCard, 
    bottomNavbar
  }, 
  mounted(){
    let that = this;
    document.querySelector(".input").focus();
    document.querySelectorAll("*").forEach((ele) =>{
      ele.addEventListener("click", function(){
        document.querySelector(".input").focus();
      })
    }); 
    document.addEventListener("keydown", function(event){
      if(event.key == "Enter"){
        that.getResult();
      }
      if(event.key == "c"){
        that.clear(); 
      }
    }); 
  }, 
  methods:{
    clear(){
      this.$refs.input.value = ""; 
      this.$refs.output.innerHTML = 0; 
    }, 
    displayCow(){
      if(this.lastOne=="camel"){
        this.betail.camel.last.input = this.$refs.input.value;   
        this.betail.camel.last.output = this.$refs.output.innerHTML;   
      }
      if(this.lastOne == "sheep"){
        this.betail.sheep.last.input = this.$refs.input.value;   
        this.betail.sheep.last.output = this.$refs.output.innerHTML;   
      }

      this.betail.cow.render = true; 
      this.betail.sheep.render = false; 
      this.betail.camel.render = false; 
      this.$refs.output.innerHTML = this.betail.cow.last.output; 
      this.$refs.input.value = this.betail.cow.last.input; 
      this.lastOne = "cow"; 
    },
    displayCamel(){
      if(this.lastOne == "sheep"){
        this.betail.sheep.last.input = this.$refs.input.value;   
        this.betail.sheep.last.output = this.$refs.output.innerHTML;   
      }
      if(this.lastOne == "cow"){
        this.betail.cow.last.input = this.$refs.input.value;   
        this.betail.cow.last.output = this.$refs.output.innerHTML;   
      }

      this.betail.cow.render = false; 
      this.betail.sheep.render = false; 
      this.betail.camel.render = true; 
      this.$refs.output.innerHTML =this.betail.camel.last.output; 
      this.$refs.input.value =this.betail.camel.last.input; 
      this.lastOne = "camel";  
    },
    displaySheep(){
      if(this.lastOne=="camel"){
        this.betail.camel.last.input = this.$refs.input.value;   
        this.betail.camel.last.output = this.$refs.output.innerHTML;   
      }
      if(this.lastOne == "cow"){
        this.betail.cow.last.input = this.$refs.input.value;   
        this.betail.cow.last.output = this.$refs.output.innerHTML;   
      }
      this.betail.cow.render = false; 
      this.betail.sheep.render = true; 
      this.betail.camel.render = false; 
      this.$refs.output.innerHTML =this.betail.sheep.last.output; 
      this.$refs.input.value =this.betail.sheep.last.input; 
      this.lastOne = "sheep";
    },
    getResult(){
      let calc = new Calculator(); 

      console.log(this.gold.gold.render);
      if(this.betail.camel.render){
        this.$refs.output.innerHTML = calc.calcCamel(this.$refs.input.value); 
      }
      if(this.betail.cow.render){
        this.$refs.output.innerHTML = calc.calcCow(this.$refs.input.value); 
      }
      if(this.betail.sheep.render){
        this.$refs.output.innerHTML = calc.calcSheep(this.$refs.input.value); 
      }
      if(this.gold.gold.render){
        this.$refs.output.innerHTML = calc.calcGold({karat:18, value:this.$refs.input.value});
      }
      if(this.gold.silver.render){
        this.$refs.output.innerHTML = calc.calcSilver(this.$refs.input.value);
      }
    },


    // Gold methods start 
      displayGold(){
        if(this.lastOne == "cow"){
            this.betail.cow.last.input = this.$refs.input.value;   
            this.betail.cow.last.output = this.$refs.output.innerHTML;   
        }
        if(this.lastOne == "camel"){
            this.betail.camel.last.input = this.$refs.input.value;   
            this.betail.camel.last.output = this.$refs.output.innerHTML;   
        }
        if(this.lastOne == "sheep"){
            this.betail.sheep.last.input = this.$refs.input.value;   
            this.betail.sheep.last.output = this.$refs.output.innerHTML;   
        }
        if(this.lastOne == "silver"){
          this.gold.silver.last.input = this.$refs.input.value;
          this.gold.silver.last.output = this.$refs.output.innerHTML; 
        }

        this.gold.silver.render = false; 
        this.gold.gold.render = true;
        this.$refs.input.value = this.gold.gold.last.input; 
        this.$refs.output.innerHTML = this.gold.gold.last.output; 

        this.lastOne="gold";

      },
      displaySilver(){
        if(this.lastOne == "cow"){
            this.betail.cow.last.input = this.$refs.input.value;   
            this.betail.cow.last.output = this.$refs.output.innerHTML;   
        }
        if(this.lastOne == "camel"){
            this.betail.camel.last.input = this.$refs.input.value;   
            this.betail.camel.last.output = this.$refs.output.innerHTML;   
        }
        if(this.lastOne == "sheep"){
            this.betail.sheep.last.input = this.$refs.input.value;   
            this.betail.sheep.last.output = this.$refs.output.innerHTML;   
        }
        if(this.lastOne == "gold"){
          this.gold.gold.last.input = this.$refs.input.value;
          this.gold.gold.last.output = this.$refs.output.innerHTML; 
        }
        this.gold.silver.render = true; 
        this.gold.gold.render = false;
        this.$refs.input.value = this.gold.silver.last.input; 
        this.$refs.output.innerHTML = this.gold.silver.last.output; 

        this.lastOne="silver";
    
  },

  }
}



</script>

<style>
body{
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0; 
}
:root{
  --blue-color: #1B71D1; 
  --black-color-light:#161B33;
  --white-color: white;
}
.betail{
  width: 7cm;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  place-items: center;
  margin: 0 auto;
}
.gold{
  width: 1.5cm;
  display: grid;
  grid-template-columns: 1.5cm 1.5cm;
  place-items: center;
  margin: 0 2.2cm;
  gap:0.5cm;
}
.input{
    background-color:var(--blue-color);
    border:none;    
    color: white;
    font-size: 1rem;
    margin-top: 4rem;
}
.input:focus{
  border:none;
  outline: none;
}
.output{
    color: white; 
    font-size: 3rem;
}

</style>
