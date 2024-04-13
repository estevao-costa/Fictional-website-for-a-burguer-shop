/*This is practice/study material of a newbie brazilian developer using codeacademy to learn Javascript*/
// console = object, log = method/action que da pra fazer, ( ) = value que vai aparecer no console, ; = ponto e virgula é o fim 
/* console.log(24);
console.log(3);

/*até então os values entre parenteses que são números não precisam de single aspas '' ja strings precisam*/
/*console.log('JavaScript');
console.log(2011);
console.log('i love staying healty!');
console.log(20.49);

/*um operator é um character que faz uma task no code, javascript tem varios mas os principais são as operações básicas  
add + 
subtract - 
multiply * 
divide / 
remainder % */
/*sem single aspas o computer printa o resultado das expressões numéricas se eu quisesse printar os números como string eu teria q encapsular em single aspas ' ' */

/*console.log(5 + 5); // = 10
console.log(5 - 2);
console.log(4 * 2);
console.log(9 / 3);
console.log(15 % 100);

/*Operator tambem pode ser usado em strings para conectar uma frase a outra, tbm conhecido como concatenation. O computador vai printar as strings exatamente como estão em single aspas, então se houver espaços, eles devem ser colocados. */

/*console.log('front' + 'end');
console.log('full ' + 'stack ' + 'engineer ' + 'on ' + 'the ' + 'making.');

/* quando se coloca data em um javascript code o browser que printa o code vai salvar uma instance of the data type, os data types tem acesso a especificas propiedades que são passadas para cada situação ou instance, por exemplo cada situação aonde se tem uma string, havera uma propiedade chamada de length que quer dizer o numero de caracteres q uma string possui. Pode se conseguir informação da property colocando um ponto na string seguido da property name */

//console.log('Hello'.length);

/* Novamente, methods são actions que podemos fazer, data types tem acesso a methods especificos que nos permite manusear instancias do data type, os methods de strings até agora são utilizados da seguinte maneira ;

    um ponto (the dot operator)
    o nome do method
    parentese de abertura e fechamento 

quando se usa console.log, eu estou chamando o method log para o object console. */

//console.log('estevao'.toUpperCase());
//console.log('estevao'.startsWith('e')); // este method aceita values dentro do parenteses como um input ou argument,e vai retornar true/false

// javascript tem mto mais objects do que console, abaixo exemplo do object math

//console.log(Math.random()); // printa numero aleatorio entre 0 e 1 
//console.log(Math.random() * 50); // printa numero aleatorio entre 0 e 1 e multiplica por 50 qse sempre dando um resultado com decimal
//Math.floor(Math.random() * 50); // gera numero aleatorio que é multiplicado por 50 entao e então arrendondado pra um numero inteiro
                                // perceba se que a ordem dos fatores começa por math random
//console.log(Math.floor(Math.random() * 50)); /* "eu quero printar no console um numero inteiro aleatório multiplicado por 50" */
//console.log(Math.floor(Math.random() * 100));
//console.log(Math.ceil(45.6)); // apresenta o menor número que é maior ou igual ao numero decimal
//console.log(Number.isInteger(2020)); // checa se o value dentro do parenteses esta de acordo com o method 

/* var myName = 'Arya';
console.log(myName);

var = variable -> keyword que cria ou declara uma nova variable
myName = o nome da variable, sempre fazer camel case, agrupar as palavras em uma só, com a formatação apresentada ( letra maiuscula )
= -> o assignment operator atribui o value "Arya" ao name da variable, no caso "myName"
"Arya" é o value assigned a variable myName
após a variable ser declarada a string value é printada no console por meio de referência ao name da variable.

name da variable n pode começar com número / evitar usar o mesmo nome em mais de uma variable / os names das variables n podem ser os mesmos de keywords

*/

//var favoriteFood ='hamburguer';
//var numOfBeefs ='3';
//console.log(favoriteFood);
//console.log(numOfBeefs);

/* Variable : " let " ;
let é uma keyword que permite a variable ser reassigned com values diferentes como no exemplo abaixo;

let meal='Enchiladas';
console.log(meal);
meal= 'Burrito'
console.log(meal); */

/*let meal = 'Medium Burguer';
console.log(meal);
meal = 'Big Burguer';
console.log(meal);

// const keyword -> "Introduction / Variables " -> não pode ter values reassigned ao contrario de 'let'

const bestMeat = 'Cupim';
console.log(bestMeat);
console.log(bestMeat);

/* Mathematical Assignment Operators ;
let w = 4;
w = w + 1;

console.log(w);

let w = 4;
w += 1;

console.log(w); // Output: 5 em ambos situações.

também pode ser digitado assim 
let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

*/

/*let valorHamburguer = 20;
valorHamburguer += 5;
valorHamburguer -= 2;
console.log(valorHamburguer); // para add somente 1 ou diminuir 1 pode se usar "++;" "--;"

/*String Concatenation with Variables
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

In the example above, we assigned the value 'armadillo' to the myPet variable. On the second line, the + operator is used to combine three strings: 'I own a pet', the value saved to myPet, and '.'. We log the result of this concatenation to the console as: I own a pet armadillo.
*/

/*let myFavoriteBurguer = 'Gold'
console.log('Eu amo o ' + myFavoriteBurguer + ' demais     ' + 'hehe.');

/*String Interpolation
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo. 

    a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key).
    Inside the template literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.
    When we interpolate `I own a pet ${myPet}.`, the output we print is the string: 'I own a pet armadillo.' */

/*let myName = 'Estevao';
myGoal = 'full stack engineer haha';
console.log(`My name is ${myName} and my goal is to become a ${myGoal}`);

var momName = 'Monica';
var momQuality = 'the best dishes a human being can consume';
console.log(`My mom's name is ${momName} and she has ${momQuality}`);


/*typeof operator 
While writing code, it can be useful to keep track of the data types of the variables in your program. If you need to check the data type of a variable’s value, you can use the typeof operator. 
The typeof operator checks the value to its right and returns, or passes back, a string of the data type. 
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean */

/*let learnJS = 'i have to learn JS';
console.log(typeof learnJS);
learnJS = 100;
console.log(typeof learnJS);

var testeA = 'pizza';
var testeB = 'sorvete';
console.log(testeA,testeB);

// Conditionals // basic if else
let sale = false; // if true = buy my burguers / if set to false = or buy some pizza
if (sale) {
    console.log('Buy my burguers !');
} else {
    console.log('or buy some pizza !');
} 

// comparison operators , <, >, <=, >=, === ( strict equal ), and !== ( not equal ) can compare two values.

let developerSkill = 8;
if (developerSkill >= 10) { // greater than or equal to ?
    console.log('Well done !');
} else {
    console.log('Keep studying !');
}

/* logical operators 
    the and operator (&&) se as DUAS conditions forem true o block de 'if' ira rodar, se uma não for o block de 'else' ira rodar
    the or operator (||) se UMA das conditions for true, o block de 'if' ira rodar, somente se as duas forem false 'else' ira rodar
    the not operator, otherwise known as the bang operator (!) true vira false e false vira true = vai no console log
*/

/*let burguerOpinion = 8;
let qualityOfDelivery = 8;
if (burguerOpinion >= 8 && qualityOfDelivery >= 8 ) {
    console.log('Glad to hear it ! Do you have any suggestions ?');
} else {
    console.log('We are sorry we did not meet your expectations, would you like to offer any advice ?');
}

/* Truthy and Falsy
Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value — you’ll only check to see if the variable has been assigned a value.  
The code block in the if statement will run because myVariable has a truthy value; even though the value of myVariable is not explicitly the value true, when used in a boolean or conditional context, it evaluates to true because it has been assigned a non-falsy value.

So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

    0
    Empty strings like "" or ''
    null which represent when there is no value at all
    undefined which represent when a declared variable lacks a value
    NaN, or Not a Number

*/

/*let randomVariable = 'yeah'// se tem value ent é true, se estiver vazio como no exemplo acima, ent sera false
if (randomVariable) {
    console.log('there is a value here');
} else {
    console.log('nothing here');
}

/*Truthy and Falsy Assignment
value definido = true, value nao definido = false, num contexto de short-circuit evaluation , ent no exemplo abaixo ;
as 'var' sao let que permitem q seus values sejam reassigned, com string interpolation no console log, sera  printado o value de acordo com true ou false, das var, || 'or' operator diz q se uma condition for true sera executado, se ambas forem falsas, 'else' sera executado, é impossivel q ambas sejam falsas no contexto do exemplo visto q o segundo value após || está definido como uma string, portanto sempre haverá um value definido, um value sempre será true, já que || começa a executar da esquerda pra direita, e o value da esquerda esta definido como uma 'var' que tem um value definido, o value sera printado normalmente, se removermos o mesmo value, entao JS vai printar o value de 'pen' pois é o próximo na ordem.
*/

/*let tool = 'marker';
let writingUtensil = tool || 'pen';
console.log(writingUtensil)

console.log(`The ${writingUtensil} is mightier than the sword.`);

/*Ternary Operator

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

----------------------------------------------------- OR -----------------------------------------------------------------------------
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');     ---> substitui o if else padrão
*/

/*let myIfElse = 'standard'
if (myIfElse) {
    console.log('I need to master this');
} else {
    console.log('Now or never');
}

let myTernary = 'study' // tem um value therefore its true, se eu remover o value sera false ent o segundo console.log ira executar
myTernary ? console.log('i am learning') : console.log('slowly but surely');
myTernary ? console.log('forever') : console.log('never ending');

/* Else If Statements

We can add more conditions to our if...else with an else if statement. The else if statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition. Let’s take a look at the syntax:

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed.

In the example above, since stopLight === 'red' evaluates to false and stopLight === 'yellow' evaluates to true, the code inside the first else if statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed. */

/*let burguerSauces = '';

if (burguerSauces === 'ketchup') {
    console.log('Ketchup, a classic !');

}   else if (burguerSauces === 'mayo') {
    console.log('Mayo');

}   else if (burguerSauces === 'barbecue') {
    console.log('Barbecue');

}   else if (burguerSauces === 'supreme') {
    console.log('Supreme');

}   else  {
    console.log('You can always eat it without sauce, and savor the meat best !');
}

// The switch keyword 10/11 pages conditional statements codeacademy

/* let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
} */

/*let typeBread = '';
switch (typeBread) {
    case 'brioche':
        console.log('Brioche, o clássico !');
            break;
    case 'australiano':
        console.log('Australiano, o mais saúdavel !');
            break;
    case 'parmesao':
        console.log('Parmesão, o mais nobre !');
            break;
    case '3queijos':
        console.log('Três queijos, queijo nunca é demais !');
            break;
    default:
        console.log('Por favor escolha um tipo de pão.');
            break;
}

//Control Flow;    ----> abaixo temos algo como um sorteio

/*let buyer = 'Estevao';
buyer ? console.log(`Welcome ${buyer}`) : console.log('Para o acompanhamento de brinde é necessário confirmar um pedido');

console.log('Clique no botão da sorte!');

let randomNumber = Math.floor(Math.random() * 5);
console.log(randomNumber);

let acompanhamentoDeBrinde = '';
    switch(randomNumber) {
        case 0 :
            acompanhamentoDeBrinde = 'Batata Rústica';
            break;
        case 1 :
            acompanhamentoDeBrinde = 'Cookie 50g';
            break;
        case 2 :
            acompanhamentoDeBrinde = 'Ruffles';
            break;
        case 3 :
            acompanhamentoDeBrinde = 'Lays';
            break;
        case 4 :
            acompanhamentoDeBrinde = 'Cebolitos';
            break;
    }

console.log(`O acompanhamento de brinde será ${acompanhamentoDeBrinde} !`);

/* let raceNumber = Math.floor(Math.random() * 1000);
let registrationTime = true;
let runnerAge = 18;

if (registrationTime && runnerAge > 18) {
    raceNumber += 1000;
} 

if (registrationTime && runnerAge > 18) {
    console.log(`You are going to race at 09:30 am and your race number will be ${raceNumber}.`);
}
else if (!registrationTime && runnerAge > 18) {
    console.log(`You are going to race at 11:00 am and your race number will be ${raceNumber}.`);
}

else if (runnerAge < 18) {
    console.log(`You are going to race at 12:30 pm and your race number will be ${raceNumber}.`);
}

else {
  console.log(`Please head to the registration desk.`);
}
*/ 
// exemplo de conditional statements com condições nestadas uma na outra 

/*------------------------------------------------FUNCTIONS / FUNCTIONS DECLARATIONS --------------------------------------------------------
function getReminder() {
  console.log('Water the plants.');
}

function greetInSpanish() {
  console.log('Buenas tardes.');
}

A function declaration consists of:

    The function keyword.
    The name of the function, or its identifier, followed by parentheses.
    A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.

a function declaration does not ask the code inside the function body to run, it just declares the existence of the function. The code inside a function body runs, or executes, only when the function is called.

To call a function in your code, you type the function name followed by parentheses AND A SEMICOLON. like so =

function greetInSpanish() {
  console.log('Buenas tardes.');
}

greetInSpanish();

----------------------------------------------------------------------------------------------------------

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');

some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called. 

----------------------------------------------DEFAULT PARAMETERS-----------------------------------------------------------------
Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!


    In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting!

    When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', will override the default parameter of 'stranger' to log 'Hello, Nick!' to the console.

    When there isn’t an argument passed into greeting(), the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console.

------------------------------------------------RETURN-------------------------------------------------------------------------------
When a function is called, the computer will run through the function’s code and evaluate the result. By default, the resulting value is undefined.

function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

In the code example, we defined our function to calculate the area of a width and height parameter. Then rectangleArea() is invoked with the arguments 5 and 7. But when we went to print the results we got undefined. Did we write our function wrong? No! In fact, the function worked fine, and the computer did calculate the area as 35, but we didn’t capture it. So how can we do that? With the keyword return!

Se eu tivesse que calcular quantos monitores teria q comprar pra um escritorio q tivesse 5 rows e 4 columns, poderia fazer isso 

function monitorCount(rows, columns){
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost); ---------------------- Prints to the console '4000' 

-----------------------------------------------------FUNCTION EXPRESSIONS --------------------------------------------------------------

Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

Consider the following function expression:
To declare a function expression:

    Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

    Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

    To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

    const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
}

plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

----------------------------------------------------Arrow Functions----------------------------------------------------------------------

const plantNeedsWater = (day) =>{
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};   

------------------------------------------------------Concise Body Arrow Functions ---------------------------------------------------------

JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:

    Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

So if we have a function:
const squareNum = (num) => {
  return num * num;
};

We can refactor the function to:
const squareNum = num => num * num;

Notice the following changes:

    The parentheses around num have been removed, since it has a single parameter.
    The curly braces { } have been removed since the function consists of a single-line block.
    The return keyword has been removed since the function consists of a single-line block.
-----------------------------------------       SCOPE                      ----------------------------------------------------------

Basicamente Scope é specifity order, so q em JS, se uma variable está fora de um code block {}, essa variable sempre vai estar rodando e ocupando memoria portanto é bad practice, se uma variable esta dentro de um code block {} ela so ira rodar qnd a function ou outro element pai do code block rodar/ ser chamado, portanto so ocupara espaço qnd necessário.

*/  
/* ----------------------------------------------------------ARRAY (array methods) ----------------------------------------------------

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]

console.log(nestedArr[1][0]); // Output: 2

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

Let’s go over what happened in the example:

    The flowers array that has 3 elements.
    The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
    We call addFlower() with an argument of flowers which will execute the code inside addFlower.
    We check the value of flowers and it now includes the 'lily' element! The array was mutated!

So when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. 
*/
/*
const bestHackSlash = ['Devil May Cry','God of War']

console.log(bestHackSlash); // 0            1         -> (index), prints entire array

console.log(bestHackSlash[1]); // prints only the index 1 */

//let testC = bestHackSlash[0];

//console.log(testC); 

/* let studyTime = ['Morning','Afternoon','Night'];
studyTime[2] = 'Forever';                           // value updated;
console.log(studyTime);        

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';   // change one element in the array
console.log(condiments);

condiments = ['Mayo','Barbecue'];   // because its a let var i can change the entire array
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);   // can change only an element  inside the array which is the value of the const

utensils = ['fail'];
console.log(utensils);  // cant change the value/different array  */

/*const objectives = ['javascript','angular','react','python','C#']; 
console.log(objectives.length);  //property  prints 5

objectives.push('jquery','C++');  //push  is a method/function   prints more 2 elements
console.log(objectives);

objectives.pop();
console.log(objectives); // pop removes the last element

const elementRemoved = objectives.pop();   // the removed element doesnt disappear, you can use it like this 
console.log(elementRemoved);  */


/*
const groceryList = ['apple','banana','rice','pineapple','potato','orange'];
console.log(groceryList);
 
groceryList.shift();  // removes the first element
console.log(groceryList); 

groceryList.unshift('super apple'); // add another element that goes in first
console.log(groceryList);

console.log(groceryList.slice(1, 4)); //   0 ---- 1 ----- 2 ----- 3 ------ 4 ------ 5 
                                    // false   true    true    true    false   false ---- os trues foram printados

const potatoIndex = groceryList.indexOf('potato'); 
console.log(potatoIndex);  */  


/*

const changeArrayWithFunction = ['a','b','c'];
console.log(changeArrayWithFunction);

function increaseArray(arr){
    arr.push('d');
}

increaseArray(changeArrayWithFunction);
console.log(changeArrayWithFunction);  // adds 'd' ;


function changeArray(changeArr){
    changeArr[1] = 'Bb';
}

changeArray(changeArrayWithFunction);
console.log(changeArrayWithFunction); // changes the index 1 which is b ( the second element of the array ) to another value ;


function decreaseArray(decreaseArr){
    decreaseArr.pop();
}

decreaseArray(changeArrayWithFunction);
console.log(changeArrayWithFunction); // removes the last element of the array which is 'd' ;  




const testArray = [1, 2, 3, 4, true];
console.log(testArray);

increaseArray(testArray);
console.log(testArray);

changeArray(testArray);
console.log(testArray);

decreaseArray(testArray);
console.log(testArray);              */



//const testNestedArray = [['i can be'], ['whatever i want']];
//console.log(testNestedArray[0]);
//console.log(testNestedArray[1]);


/*----------------------------------------------------LOOP-----------------------------------------------------------------------------*/

const burguerPrices = [
    {
        name: 'classic',
        price: 14.00,
    },
    {
        name: 'napoleon',
        price: 17.00,
    },
    {
        name: 'private',
        price: 17.90,
    },
    {
        name: 'giant',
        price: 21.90,
    },
    {
        name: 'dprivate',
        price: 20.90,
    },
    {
        name: 'gold',
        price: 20.90,
    },
    {
        name: 'blues',
        price: 21.90,
    },
    {
        name: 'nero',
        price: 22.90,
    },
    {
        name: 'doomsday',
        price: 35.90,
    },
];

