"use strict";
function checkStringForDuplicates(s){
    var charCountMap = {};
    var i = 0;
    var len = s.length;
    for(;i<len;i++){
        if(charCountMap[s[i]]){
            charCountMap[s[i]]++;
        }else{
            charCountMap[s[i]]=1;
        }
    }
    for(var c in charCountMap){
        console.log(c+":"+charCountMap[c]);
    }
}

var count=checkStringForDuplicates("HelloWordsPeople");

"use strict";
print(typeof("Hello"));
print("Hello" instanceof(String));
print(new String("Hello") instanceof(String));

try{
a=10
var b="20";
var c=a+b;
}catch(err){
    console.log(err.message);
}
function print(s){
    console.log(s);
}

var car = {make:"Ford",model:"Taurus", year:2004, mileage:150000, getMilesPerYear: function(){return 150000/10}};
print(car.getMilesPerYear())

function Car(make,model,year,mileage){
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.getMilesPerYear = function(){return 150000/10}
}

var car1= new Car("Ford", "Taurus", 2004, 150000);
print(car1.make);
print(car1["model"]);
print(car1["getMilesPerYear"]());

car1.mpg = 20;
print(car1.mpg);