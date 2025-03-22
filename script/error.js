const person ={
    name:'hero',
    age: 15,
    ispassed : true,
    conuntry : 'USA'
}
console.log(person);
console.error('hellow');
console.warn('hi');
console.dir(person);
console.table(person);

const colors = ['white','green','red','purple','pink','gold','silver','blue','yellow','black']
console.table(colors);
console.log(colors[9]);
// debugging
const num1 = 10;
const num2 = '20';
console.log(num1,num2);
const result = num1+ num2;
console.log(result);
// for loop
for(let i = 0; i<5; i++){
const element = i;
console.log(element);
}
for(let j = 1; j<10; j++){
    const tag = j;
    debugger
    console.log(tag);
    
}

/**  conde ka debugge kore dekher jono amera jigula babher korta pare
 * console
 *  line ar maja debugger kore
 * browser a giya sourse thaka debugge 
 * forword traking
*/