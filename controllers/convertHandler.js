/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input.replace(/mi|km|gal|lbs|L|kg/gi,'');
    
    if(parseFloat(result === null)) {
      return "invalid number"
    }

    let count = 0;
    for(let i=0;i<result.length;i++) {
      if(result.charAt(i) === "/") {
        count++;
      }
    }
    if(count >= 2) {
      return "invalid number"
    } else if(count < 2) {
      if(result === "") {
        result = 1
      } else {
         
          if(result.includes("/")) {
            let arr = result.split("/")
            result = arr[0] / arr[1];
          
        }
        
      }
    }
    
    return parseFloat(result);
  };
  
  this.getUnit = function(input) {
    var result = input.replace(/[0-9]|\./g,'');
    result = result.replace(/\//g,'')
    
    if(result == "") {
      return "no unit";
    }
    switch(result.toLowerCase()){
      case 'kg':
        result = 'kg'
        break;
      case 'lbs':
        result = 'lbs'
        break;
      case 'l':
        result = 'l'
        break;
      case 'gal':
        result = 'gal'
        break;
      case 'km':
        result = 'km'
        break;
      case 'mi':
        result = 'mi'
        break;
      case '':
        result = 'no unit'
        break;
      default:
        result = 'invalid unit'
        break;
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    
    var result;
    switch(initUnit.toLowerCase()){
      case 'kg':
        result = 'lbs'
        break;
      case 'lbs':
        result = 'kg'
        break;
      case 'l':
        result = 'gal'
        break;
      case 'gal':
        result = 'l'
        break;
      case 'km':
        result = 'mi'
        break;
      case 'mi':
        result = 'km'
        break;
      default:
        result = 'invalid unit'
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit.toLowerCase()){
      case 'kg':
        result = 'kilograms'
        break;
      case 'lbs':
        result = 'pounds'
        break;
      case 'l':
        result = 'liters'
        break;
      case 'gal':
        result = 'gallons'
        break;
      case 'km':
        result = 'kilometers'
        break;
      case 'mi':
        result = 'miles'
        break;
      default:
        result = 'invalid unit'
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit.toLowerCase()){
      case 'kg':
        result = (initNum / lbsToKg).toFixed(5)
        break;
      case 'lbs':
        result = (initNum * lbsToKg).toFixed(5)
        break;
      case 'l':
        result = (initNum / galToL).toFixed(5);
        break;
      case 'gal':
        result = (initNum * galToL).toFixed(5);
        break;
      case 'km':
        result = (initNum / miToKm).toFixed(5);
        break;
      case 'mi':
        result = (initNum * miToKm).toFixed(5);
        break;
      default:
        result = 'invalid unit'
        break;
    }
    return parseFloat(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    initUnitReturn = this.spellOutUnit(initUnit)
    returnUnitReturn = this.spellOutUnit(returnUnit)
    var result = `${initNum} ${initUnitReturn} converts to ${returnNum} ${returnUnitReturn}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
