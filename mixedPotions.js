/*
Mix Potions 
Write a function mixPotions that accepts one argument, an array of potion objects, and returns the  potion that is produced when they are mixed. 
A potion is represented in the following format: 
{ 
volume: x, 
ingredients: { ingredient1: a, ingredient2: b, ingredientA: c 
} } 

Where x is a positive number representing the volume of the potion and a, b, and c are positive numbers  
representing the concentrations of the corresponding ingredients in the potion. 
In the above example, the potion has three different ingredients, but a potion can have any number of  different ingredients. 
The function should accept any positive number of potions. Each potion can have  any non-negative number of different ingredients. 
After mixing, the resulting potion should have a volume equal to the sum of the volumes of the input  potions. 
Also, the resulting potion should have volume-weighted concentrations of each ingredient in  the input potions. 

Example: 
mixPotions([ 
 {volume: 100, 
 ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }},  {volume: 300, 
 ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }}, ]) 

The above should return: 
{ volume: 400, 
 ingredients: { ingredient1: 125, ingredient2: 5, ingredientA: 350, ingredientB: 712.5 
} } 
The result's volume is 400 because 100 + 300 = 400. 
The result's concentration of ingredient1 is 125. We can determine this because first potion has 50 units  
of concentration in 100 units of volume and the second potion has 125 units of concentration in 300  units of volume, and (50*100 + 150*300)/(100 + 300) = 125. 
*/


//Not fully debugged...

const potionArr = [
    {
        volume: 100, 
        ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }
    },  
    {   volume: 300, 
        ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }
    }
];

const mixedPotions = (potionArr) => {
    let concen = {
        vol: 0,
        ingredients: {}
    };
    
    //loop through the potion array
    for (let i = 0; i < potionArr.length; i++) {
        let potion = potionArr[i];
        //console.log(potion)

        let ingredKeys = Object.keys(potion.ingredients); //returns an array whose elements are strings corresponding to the enumerable properties found directly upon object
        //add the potion volume to the concentration volume
        concen.vol += potion.vol;

        //loop through the ingredient keys
        for (let j = 0; j < ingredKeys.length; j++) {
            let ingredientName = ingredKeys[j];
            let conUnit = potion.ingredients[ingredientName];
            let concenProd = conUnit * potion.vol;
            //console.log(concenProd)
            
            //if else to add to the concenProd
            if (concen.ingredients[ingredientName]) {
                concen.ingredients[ingredientName] += concenProd;
            } else {
                concen.ingredients[ingredientName] = concenProd;
            }
        }
    }

    let resultObjKeys = Object.keys(concen.ingredients);
    console.log(resultObjKeys)

    for (let i = 0; i < resultObjKeys.length; i++) {
        concen.ingredients[resultObjKeys[i]] /= concen.vol;
    }
    return concen;
};
console.log(mixedPotions(potionArr));