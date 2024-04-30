// =============================================
/**
* todo: i will make a arrow function for sum, substractin, multiflication, division,modulas , Exponential use array to variable and use loop 
* todo : task1 : make all function parameter (num1,num2)
* todo : task2 : 
* 
*/
//sum function

const sum = (num1,num2)=>{
    // console.log(num1+num2,"this is sum");
    let totalsum = num1 + num2
    let sumInfo = {result : totalsum , functionName : "sum"}
    return sumInfo;
}

//substractin function

const substractin = (num1,num2)=>{
    // console.log(num1-num2,"this is substraction");
    let totalsubstractin = num1 - num2
    let substractinInfo = {result : totalsubstractin , functionName : "substractin"}
    return substractinInfo;
}

//multiflication function

const multiflication = (num1,num2)=>{
    // console.log(num1*num2,"this is multiflication");
    let totalmultiflication = num1 * num2
    let multiflicatioInfo = {result : totalmultiflication , functionName : "multiflication"}
    return multiflicatioInfo ;
}

//division function

const division = (num1,num2)=>{
    // console.log(num1/num2,"this is division");
    let totaldivision = num1 / num2
    let divisionInfo = {result : totaldivision , functionName : "division"}
    return divisionInfo ;
}



let allFunc = [sum,substractin,multiflication,division]
let num1 = 20;
let num2 = 10

for (let i= 0; i<allFunc.length; i++){
    let allResult = allFunc[i](num1,num2)
    console.log(allResult.functionName);
}