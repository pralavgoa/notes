var x = "234";
var y = "2.34";
var z;
console.log(Number(x));
console.log(parseFloat(y));
console.log(parseInt(x));

if(typeof x!= 'undefined'){
    console.log("all ok");
}

if(typeof z!= 'undefined'){
    console.log("all ok");
}else {
    console.log("not ok");
}

if(typeof a!= 'undefined'){
    console.log("all ok");
}else{
    console.log("not ok");
}