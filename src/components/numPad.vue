<template lang="">
    <button @click="del" class="delete">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="18" viewBox="0 0 24 18">
            <path id="ic_backspace_24px" d="M22,3H7a1.882,1.882,0,0,0-1.59.88L0,12l5.41,8.11A1.891,1.891,0,0,0,7,21H22a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,22,3ZM19,15.59,17.59,17,14,13.41,10.41,17,9,15.59,12.59,12,9,8.41,10.41,7,14,10.59,17.59,7,19,8.41,15.41,12Z" transform="translate(0 -3)"/>
        </svg>

    </button>
    <div class="body">
        <button class="btn"  @click="act(7)" >7</button>
        <button class="btn" @click="act(8)">8</button>
        <button class="btn" @click="act(9)">9</button>
        <button class="btn" @click="act(4)">4</button>
        <button class="btn" @click="act(5)">5</button>
        <button class="btn" @click="act(6)">6</button>
        <button class="btn" @click="act(1)">1</button>
        <button class="btn" @click="act(2)">2</button>
        <button class="btn" @click="act(3)">3</button>
        <button class="btn" @click="act(0)">0</button>
        <button  @click="$emit('calc')" class="calculer">Calculer</button>
    </div>
</template>
<script>
export default {

    methods:{
        act(number){
            if(this.$root.$refs.input.value.length > 5){
                return;
            }
        
            this.$root.$refs.input.value += number; 
        }, 
        del(){
            let input = this.$root.$refs.input.value; 
            this.$root.$refs.input.value = input.slice(0, input.length - 1);
        }
    },
}
</script>
<style>
    .body{
       
        padding : .5rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height :13rem;
        width: 280px;
        gap:1mm;
        margin: 1.4cm auto;
        background-color: var(--black-color-light);
        box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.27);
        
        border-radius: 11px;

    }
    .calculer{
        background-color: var(--blue-color);
        color:black;
        grid-column:span 2 / 4;
        border:none;
        border-radius: 11px;
        color:white; 
        font-size: 1.5rem;
        cursor: pointer; 
    }
    .calculer:active{
        background-color: #16559c;
    }
    .body .btn{
        border : none ;
        background-color: inherit;
        font-size: 1.5rem;
        color: white;
        cursor:pointer;
        border-radius:11px;
        transition: background-color 200ms ease; 
    }
    .body .btn:active{
        background-color:#343b5d; 
    }
    .delete{
        position: absolute;
        right:1.4rem;
        top:15.4rem;
        width: 2cm;
        height: 1cm;
        border:none;
        border-radius: 11px;
        background-color:#DC3545; 
        cursor:pointer;
    }
    .delete:active{
        
        background-color:#b12734; 
    }
</style>