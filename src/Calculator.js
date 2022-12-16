export class Calculator {
    reg = /([0-9]*)a([0-9]*)/; 
    camel = {
        "5a24" : "C",
        "25a35" : "M", 
        "36a45" : "L",
        "46a60" : "H",
        "61a75" : "J",
        "76a90" : "2L",
        "91a120" : "2H"
    };  
    cow = {
      "30a39" : "T",
      "40a59" : "Mo", 
      "60a69" : "2T", 
      "70a79" : "Mo + T", 
      "80a89" : "2 Mo", 
      "90a99" : "3T", 
      "100a119" : "Mo + 2T", 
      "120a129" : "3Mo ou 4T"
    }; 
    sheep = {
      "40a120" : "1C", 
      "121a200" : "2C", 
      "201a399" : "3C"
    }
    calcCamel(input) {
        if(input < 5){
          return 0;
        }
        if(input < 120){
            for(let type in this.camel){
                let camel = type.match(this.reg); 
                if( input >= parseInt( camel[1]) && input <= parseInt(camel[2])){
                    return this.camel[type]; 
                }
            } 
        }
     
        let des = (this._40_50(input).reste > this._50(input).reste); 
        return des ? this._50(input).result : this._40_50(input).result;  
    }
    calcCow(input){
      if(input < 30){
        return 0; 
      }
      if(input < 120){
        for(let type in this.cow){
            let cow = type.match(this.reg); 
            if( input >= parseInt( cow[1] ) && input <= parseInt( cow[2] )){
                console.log(type);
                return this.cow[type]; 
            }
        } 
      }
      let des = (this._30(input).reste > this._40_30(input).reste); 
      return des ? this._40_30(input).result : this._30(input).result;
    }
    calcSheep(input){
      if(input < 40){
        return 0;
      }
      if(input < 400){
        for(let type in this.sheep){
          let sheep = type.match(this.reg); 
          if( input >= parseInt( sheep[1] ) && input <= parseInt( sheep[2] )){
              console.log(type);
              return this.sheep[type]; 
          }
      }
      }
      return Math.floor(input / 100) + "C";
    }
    calcSilver(input){
      if(input < 595){
        return 0; 
      }
      else{
        return input / 40 + "g"; 
      }
    }
    calcGold({karat, value}){
      if(karat == 24){
        if(value < 85){
          return 0; 
        }
      }
      if(karat == 21){
        if(value < 97){
          return 0; 
        }
      }
      if(karat == 18){
        if(value < 113){
          return 0;
        }
      }
      return value / 40 + "g"; 
    }
    











    _50(value){
      let mod = value % 50; 
      let res = Math.floor(value / 50); 

      if( mod < 40){
        return {
          reste : value - (res * 50), 
          result :  res + "H"
        }
      }
      return {
        reste : value - ((res * 50) + 40), 
        result : res + "H + L" 
      }
    }
    _40_50(value){
      let mod = value % 40;
      let res = Math.floor(value / 40); 

      if(mod == 0 || mod + 40 < 50){
        return {
          reste: value - (res * 40),
          result : res + "L"
        }
      }
      return {
        reste : value -  (((res - 1) * 40) + 50 ), 
        result : res + "L + H"
      }
    }
    _40_30(value){
      let mod = value % 40; 
      let res = Math.floor(value / 40);
      
      if(mod < 30){
        return {
          reste : value - (res * 50), 
          result :  res + "Mo"
        }
      }
      return {
        reste : value - ((res * 40) + 30), 
        result : res + "Mo + T" 
      }
    }
    _30(value){
      let mod = value % 30;
      let res = Math.floor(value / 30); 

      if(mod == 0 || mod + 30 < 40){
        return {
          reste: value - (res * 30),
          result : res + "T"
        }
      }
      return {
        reste : value -  (((res - 1) * 30) + 40 ), 
        result : res + "T + Mo"
      }
    }
}