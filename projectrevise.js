///

// sum function 

const sum = (num1,num2)=> {
    //console.log(num1+num2);
    let totalSum = num1+num2;
    let sumobj = {result:totalSum , functionName : "sum"}
    return sumobj;
}

// substraction function 

const substraction = (num1,num2)=> {
    //console.log(num1-num2);
    let totalsubstraction = num1-num2;
    let substractionobj = {result:totalsubstraction , functionName : "substraction"}
    return substractionobj; 
}

// Multiflication function 

const Multiflication = (num1,num2)=> {
    //console.log(num1* num2);
    let totalMultiflication = num1*num2;
    let Multiflicationobj = {result:totalMultiflication , functionName : "Multiflication"}
    return Multiflicationobj; 
}

// Divide function 

const Divide = (num1,num2)=> {
    //console.log(num1/num2);
    let totalDivide = num1/num2;
    let Divideobj = {result:totalDivide , functionName : "Divide"}
    return Divideobj; 
}

// // Modulas function 

// const Modulas = (num1,num2)=> {
//     //console.log(num1%num2);
//     let totalModulas = num1%num2;
//     let Modulasobj = {result:totalModulas , functionName : "Modulas"}
//     return Modulasobj; 
// }

// // Exponential function 

// const Exponential = (num1,num2)=> {
//     //console.log(num1**num2);
//     let totalExponential = num1%num2;
//     let Exponentialobj = {result:totalExponential , functionName : "Exponential"}
//     return Exponentialobj; 
// }


let allFunc = [sum, substraction, Multiflication, Divide,];
let num1 = 40;
let num2 = 20;

for(let i = 0; i<allFunc.length ; i++){
    let allResult = allFunc[i](num1,num2)
    if(allResult.functionName == "sum"){
        console.log("This is sum function and result is ;" , allResult.result);
    }else if (allResult.functionName == "substraction"){
        console.log("This is substraction function and result is ;" , allResult.result);
    }
    else if (allResult.functionName == "Multiflication"){
        console.log("This is Multiflication function and result is ;" , allResult.result);
    }
    else{
        console.log("This is Divide function and result is ;" , allResult.result);
    }

    
}
// output : 
// This is sum function and result is ; 60
// This is substraction function and result is ; 20
// This is Multiflication function and result is ; 800
// This is Divide function and result is ; 2