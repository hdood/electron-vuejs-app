<template lang="">
    <nav>
        <div ref="switch" v-on:click="dark" class="switch">
            <div ref="circle" class="circle on" >
                <svg v-if="on" xmlns="http://www.w3.org/2000/svg" width="11.266" height="11.215" id="sun" viewBox="0 0 11.266 11.215">
                    <defs>
                    </defs>
                    <path id="ic_wb_sunny_24px" class="cls-1" d="M3.95,2.747,3.028,1.83l-.722.722.917.917Zm-1.413,2.9H1V6.67H2.536ZM7.145.55H6.121V2.061H7.145V.55Zm3.815,2-.722-.722-.917.917.722.722ZM9.316,9.568l.917.922.722-.722-.922-.917-.717.717ZM10.73,5.645V6.67h1.536V5.645Zm-4.1-2.56A3.073,3.073,0,1,0,9.706,6.157,3.075,3.075,0,0,0,6.633,3.085Zm-.512,8.68H7.145V10.254H6.121Zm-3.815-2,.722.722.917-.922-.722-.722Z" transform="translate(-1 -0.55)"/>
                </svg>
                <svg v-else  xmlns="http://www.w3.org/2000/svg" width="12.829" height="14.851" viewBox="0 0 12.829 14.851">
                    <path id="ic_brightness_3_24px" d="M12.273,2a6.215,6.215,0,0,1,1.882.289,6.273,6.273,0,0,0,0,11.969A6.273,6.273,0,1,1,12.273,2Z" transform="matrix(0.899, -0.438, 0.438, 0.899, -6.27, 4.407)"/>
                </svg>
            </div>
        </div>
    </nav>
</template>
<script>
export default { 
    data(){
        return {
            on:true, 
        }
    }, 
    methods:{
        dark(){
            const sw = this.$refs.switch;
            const circle = this.$refs.circle;
            sw.addEventListener("click", function () {
                
            if (circle.classList.contains("on")) {
                circle.style.left = "50%";
                this.on = false;
            } else {
                circle.style.left = "0";
                this.on = true;
            }
            console.log(this.on)
            circle.classList.toggle("on");
            });
        } 
    }
    
}
</script>
<style>
 .switch {
  background-color: #1abc9c;
  cursor: pointer;
  width: 2cm;
  height: 1cm;
  border-radius: 45px;
  position: relative;
  box-shadow: 1px 1px 5px 1px black inset;
} 
.circle {
    position: absolute;
    background: white;
    height: 0.8cm;
    width: 0.8cm;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    z-index: 2;
    border: 1px solid black;
    transition: all 300ms ease;
    display: grid;
    place-items: center;
}
span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
}
.circle svg{
    transform: scale(2);
}
.cls-1 {
    fill: #2174d1;
}

    
</style>