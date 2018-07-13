const parsePercent = percentString =>{
    const num = Number(percentString);
    if(num>1){
        return num/100;
    }
    else{
        return parseFloat(percentString);
    }
    
} 

const roundToDecimal = value => Math.round(value * 100) / 100;


module.exports = {parsePercent,roundToDecimal}