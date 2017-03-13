//Reading from standard input
process.stdin.resume();
process.stdin.setEncoding("ascii");

var inputStdin = "";
var inputStdinArray = "";
var inputCurrentLine = 0;

process.stdin.on('data',function(data){
    inputStdin += data;
});

process.stdin.on('end',function(){
    inputStdinArray=inputStdin.split("\n");
    main();
});

function readline(){
    return inputStdinArray[inputCurrentLine++];
}

function main(){
    var a = readline();
    console.log(a);
}