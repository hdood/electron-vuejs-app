<template lang="">
    <div v-if="active" class="active">
        <slot></slot>   
    </div>
    <div v-else class="wra" @click="$emit('activate')">
        <slot></slot>    
    </div>
</template>
<script>
export default {
    props:["active"]
}
</script>
<style>

.wra{
    width: 1.5cm;
    height: 1.5cm;
    position: relative;
    border-radius: 11px;
    border: 2px solid var(--blue-color); 
    cursor: pointer;
}
.wra img{
    position: absolute;
    left: 0.4cm;
    top:0.4cm;
    transform: scale(1.5);
    width: 50%; 
    height: 50%;
}

.active{
    display: grid;
    width: 1.5cm;
    height: 1.5cm;
    position: relative;
    border-radius: 11px;
    background-color: var(--blue-color);
}
.active img {
    position: absolute;
    left: 0.4cm;
    top:0.4cm;
    transform: scale(1.5);
    width: 50%; 
    height: 50%;
}


    
</style>