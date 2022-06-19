// // importar la función sum del archivo app.js
// const { sum } = require('./app.js');

// // comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     //dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14, 9);

//     // esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("Five dollars should be 532.92 dollars", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    let num = 5 / 1.2 * 127.9 ; 
    const expected = num.toFixed(2); 
    
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(5)).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("Five Yen should be 0,03 Pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    let num = 5 / 127.9 * 0.8;
    const expected = num.toFixed(2); 
    
    // this is the comparison for the unit test
     expect(pound).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("A string should return 'The input is a string'", function(){

    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound('a')
    let msg = 'The input is a string';
    const expected = msg; 
    // this is the comparison for the unit test
     expect(pound).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})