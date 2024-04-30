///

/// object start

///tyoe of object

// 1 .literal syntax
const myobj = {}
console.log(myobj);

// 2.another way to construct object
// we dont use that method
const anotherobj = new Object()
console.log(anotherobj);

// object 2ta jinis sobsoomoy thake 
// key and value
const person = {
    // Here FirstName : is the key , value is  "Nishat"
    FirstName : "Nishat",
    lastname : 69,
    height : 175,
    weight : 70,
    age : 23,

}
console.log(person);

// when we use function (annoninimous jar name nai) inside object this called method
const person2 = {
    // Here FirstName : is the key , value is  "Nishat"
    FirstName : "Mahmudur",
    lastname : 69,
    height : 175,
    weight : 70,
    age : 23,
    // function ke jokon object er maje amra likbo tokon func ke bole method
    canDo: function(){
        console.log("Mahmudur can be a Frontend developer");
    },
    canLove: function(){
        console.log("Mahmudur love cats");
    }

}

// 1  onbjet er value dorte hole just key dore kaj koren
console.log(person2["FirstName"]);

// 2  another way to show value of key in object
console.log(person2.age);

/// we can call function in this method
console.log(person2.canDo());

console.log(person2.canLove());
//========================= we can use object inside object ======================
const person3 = {
    // Here FirstName : is the key , value is  "Nishat"
    FirstName : "Mahmudur",
    lastname : 69,
    height : 175,
    weight : 70,
    age : 23,
    // function ke jokon object er maje amra likbo tokon func ke bole method
    canDo: function(){
        console.log("Mahmudur can be a Frontend developer");
    },
    canLove: function(){
        console.log("Mahmudur love cats");
    },
    aboutcar: function (){
        console.log("This car " + this.weight + "is" + this.FirstName);
    },
    bike: {
        bikeName: "tvs apache",
        cc : "160",
        Model : 2019,
        color: "madRed",
        canRun: function(Hello){
            console.log("yes this bike can run ",Hello);
        },
        ColorChoice : ["white", "blue", "black" ],

    }

}

console.log(person3.bike.Model);
console.log(person3.bike.ColorChoice[2]);
console.log(person3.bike.canRun());
console.log(person3.bike.canRun("Hello"));


/// ========================= this method ==========================
const person4 = {
    // Here FirstName : is the key , value is  "Nishat"
    FirstName : "Mahmudur",
    lastname : 69,
    height : 175,
    weight : 70,
    age : 23,
    // function ke jokon object er maje amra likbo tokon func ke bole method
    canDo: function(){
        console.log("Mahmudur can be a Frontend developer");
    },
    canLove: function(){
        console.log("Mahmudur love cats");
    },
    // this refer to object // maane this tar parent object ke refer kore // this er pita holo person4
    aboutcar: function (){
        console.log("This car " + this.weight + " " +  "is" + " " + this.FirstName);
    },
    bike: {
        bikeName: "tvs apache",
        cc : "160",
        Model : 2019,
        color: "madRed",
        canRun: function(){
            console.log("yes this bike can run " + this.cc + "km " + "bike model is" + this.Model);
        },
        canRun: function(){
            console.log("yes this bike can run " + this.cc + "km " + "bike model is" + this.Model);
        },
        ColorChoice : ["white", "blue", "black" ],

    }

}

person4.aboutcar()
person4.bike.canRun()

//================================================

const person5 = {
    FirstName : "Mahmudur",
    lastname : 69,
    height : 175,
    weight : 70,
    age : 23,
    bike: {
        bikeName: "tvs apache",
        cc : "160",
        Model : 2019,
        color: "madRed",
        canRun: function(){
            console.log("yes this bike can run " + this.cc + "km " + "bike model is" + this.Model);
        },
        // another this method//
        canDo: function(){
            console.log("this bike" + this.color + "is my favourite color and" + this.bikeName + "isBest" );
        },
        ColorChoice : ["white", "blue", "black" ],

    }
}

person5.bike.canDo()

// =================================== How to add blank object value ======================

const taufik = {};
/// key and value assign korte parci
taufik.name = "Taufik"
taufik.district = "Noakhali"
taufik.village = "Sonapur"
taufik.run = function () {
    console.log("Hello Nishat");
}
console.log (taufik)
// access korte just
taufik.run()
console.log(taufik.village)

// ciele return o korte pari 
const taufiks = {};
/// key and value assign korte parci
taufiks.name = "Taufik"
taufiks.run = function () {
    return("Hello Nishat");
}
console.log(taufiks.run())

// ============================== alapahbet looping

let alapahbet = "abcdefghijklmnopqrstuvwxyz"

for (let i = 0 ; i<alapahbet.length ; i++){
    console.log(alapahbet[i]);
}
// output : a to z 

// ============================== alapahbet looping reversing

let alapahbets = "abcdefghijklmnopqrstuvwxyz"

for (let i = 26 ; i>=0 ; i--){
    console.log(alapahbet[i]);
    // we can use charAt also 
   //  console.log(alapahbets.charAt(i))
}
// output : z to a 

// ================ constractor function : function dea object toiri kora
/**
 * todo : make a object using function
 */

    // 1 constructor function for person objects 
    function Name(First,last, hobby ){
        this.FirstName = First;
        this.LastName = last;
        this.Hobby = hobby;
    }
    const myfather = new Name("Noorun","Nabi","Talking") // just new sobdo ta constructor function log korter lage
    console.log(myfather);

    // 2 Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  console.log(myFather);

  /// 3 function dea object create kora
  function Login(Password,Setting, Signup,Frontview){
    this.Password = Password;
    this.Setting = Setting;
    this.Signup = Signup
    this.Frontview = Frontview;
  }
  const newlogin = new Login("Nishat",758,"yes","aside")
  console.log(newlogin);

 /// most important ///

 const x = new Object ("Nishat",758,"yes","aside") // jokon e new object bolse tokon e se uporer function er kase chole jai

 console.log(x);


// or aetao sane 
const x = {
   Password : Nishat;
   Setting : 758;
   Signup : yes;
   Frontview : aside;
}
console.log(x)

//==============================================
// thik ak e baabe array one kind of object
function Array(){

}
let arrays = new Array ()
//jokon e new Array te call korci tokon e by default tar ekta constructor function neawwa thake setar theke se nei ..
//===========================object itreate , object e kibabe looping kore access 

const person6 = {
    names : "nishat",
    profession : "Frontend",
    loction : "Dhaka"
}

for ( let x in person6){
    console.log(x);
}
//output : names,profession,loction

const person7 = {
    names : "nishat",
    profession : "Frontend",
    loction : "Dhaka"
}

for ( let x in person7){
    console.log(person7[x]); // value ke iterate korar jonno person ke call korte hoi
}
//output : 
/***
 * nishat
Frontend
Dhaka
 */

// javascript info te gia // object ta deken
