var a = [1,2,3,4,5];

print(a.splice(2,1,7));
print(a);

var x = 3.14;
var y = 34;
var z = 234e5;


print(x);
print(y);
print(z);

print(Number.MAX_VALUE);
print(Number.MIN_VALUE);
print(Infinity);
print(-Infinity);
print(NaN);

print(Number.isFinite(123));
print(Number.isInteger("hello"));
print(Number.isNaN(234));

function print(s){
    console.log(s);
}