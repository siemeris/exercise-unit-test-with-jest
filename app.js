// // esta es mi función que suma dos números
// const sum = (a,b) => {
//     return a + b
// }

// // solo un registro en consola para nosotros.
// console.log(sum(7,3))

// // exporta la función para usarla en otros archivos 
// // (similar a la palabra clave `export` cuando se usa webpack)
// module.exports = { sum };

// one euro is:
const oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro){
    return dollars = euro * oneEuroIs.USD;
}


function fromDollarToYen(dollar){
    //dollar a euro
    let euro = dollar * (1 / oneEuroIs.USD);
    let Yen = euro * oneEuroIs.JPY;
    return Yen.toFixed(2)
};

function fromYenToPound(Yen){
    if(typeof Yen == "string"){
        let msg = "The input is a string"
        return msg
    }
    else{
    let euro = Yen * (1/oneEuroIs.JPY); 
    let Pound = euro * oneEuroIs.GBP; 
    return Pound.toFixed(2) 
    }
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};