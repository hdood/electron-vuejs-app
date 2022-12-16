<template lang="">
    <div class="screen">


        <div class="additional-info">
        </div>
        <slot name="input"></slot>
        <slot name="output"></slot>
        <button class="errase"></button>
    </div>
</template>
<script>
export default {
  
    
}
</script>
<style scoped>

.screen{
    width:280px;
    height:150px;
    margin : 0 auto ;
    background-color:var(--blue-color);
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.27);
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    position :relative;
    padding: 5px; 
    margin-top: 0.3cm;
}
.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.erase{
    position:absolute; 
    border : none; 
    display: block;
    width: 1cm; 
    height: 1cm;
    right: 0; 
    bottom: 0;
}





</style>