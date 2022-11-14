'use strict';

/*
Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

/*

const calcAverage = (a,b,c)=>{return (a+b+c)/3};
// const dolphAvrg = calcAverage(44,23,71);
// const koalaAvrg = calcAverage(66,54,49);
const dolphAvrg = calcAverage(85,54,41);
const koalaAvrg = calcAverage(23,34,27);
console.log(dolphAvrg,koalaAvrg);

const checkWinner = function(dolphAvrg,koalaAvrg){
    const dolphinDouble = dolphAvrg*2;
    const koalasDouble = koalaAvrg*2;
    if(dolphAvrg>koalasDouble){
        return `dolphin win (${dolphAvrg} vs. ${koalasDouble})`
    }else if(koalaAvrg>dolphinDouble){
        return `koalas win (${koalaAvrg} vs. ${dolphinDouble})`
    }else{
        return `no team wins!`
    }
}
console.log(checkWinner(dolphAvrg,koalaAvrg));

*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/


/*
let bills = [125,555,44];

const calcTip = bills=> bills>50 && bills<300? bills*0.15:bills*0.20;

const tips = [];
const totals =[];
for(let i =0; i<bills.length;i++){
    tips[i]=calcTip(bills[i])
    totals[i]=tips[i]+bills[i]
}
console.log(...bills  ,'bills');
console.log(...tips, 'tips');
console.log(...totals, 'total bills');

*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
*/


/*
const marks ={
    fullName : 'Mark Miller',
    weight : 78,
    height :1.68,

    calcBMI : function(){
        this.marksBMI = this.weight / this.height**2;
        return this.marksBMI
    }
}

const johns ={
    fullName : 'johns Smith',
    weight : 92,
    height :1.95,

    calcBMI : function(){
        this.johnsBMI = this.weight / this.height**2;
        return this.johnsBMI
    }
}
marks.calcBMI()
johns.calcBMI()

let heigherBMI;

if(marks.marksBMI>johns.johnsBMI){
    heigherBMI = `marks BMI ${(marks.marksBMI)} is higher than johns ${(johns.johnsBMI)}`
}else{
    heigherBMI = `johns BMI ${(johns.johnsBMI)} is higher than marks ${(marks.marksBMI)}`
}

console.log(heigherBMI);

*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays 
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. 

*/

/*
let bills = [22,295,176,440,37,105,10,1100,86,53];

let calcTip1 =bills=> bills>50 && bills<300?(bills*0.15)+bills:(bills*0.20)+bills;

let tips=[],totals=[];

for(let i = 0;i<bills.length;i++){
    totals[i]=calcTip1(bills[i]);
    tips[i]=totals[i]-bills[i]
}
console.log(tips);
console.log(totals);

let sum = 0;
const  calcAverage = function(arr){
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum /arr.length;
}
console.log(calcAverage(bills),"total bills");
console.log(calcAverage(tips), "total tips");
console.log(calcAverage(totals), "total values");

*/