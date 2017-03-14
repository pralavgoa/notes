var a = ["this","is","a", "test", 1];
var b = ["test2", "this", "is"];

print(a);
print(a[3]);
print(a.constructor);
print(a.prototype);
print(a.length);
print(a.concat(b));
print(a.copyWithin(2,0,2));
print(a.every(function(a){a.lenght>2}));
print(a.fill("hello"));
print(a);
a = ["this","is","a", "test"];
print(a.filter(function(x){return x.length>2}));
print(a.filter(function(x,i){return x.length>i}));
print(a.filter(function(x,i){return x.length>i}));
print(a.filter(function(x,i,arr){return x.length==arr.length}));
print(a);
print(a.find(function(x){return x.length>2}));
print(a.findIndex(function(x){return x.length<3}));

var c = [];
a.forEach(function(x){c.push(x.length)});
print(c);

print(c.indexOf(2));
print(Array.isArray(c));

print(a.join());
print(c.lastIndexOf(4));

print(a.map(function(x){return x.length}));

print(c.pop());
print(c);

print(c.push(5));
print(c);

print(c.reduce(function(total,x){return total+=x}));
print(c.reduceRight(function(total,x){return total+=x}));

print(c.reverse());
print(c);

print(c.shift());
print(c);

print(c.slice(1,4));
print(c.some(function(x){return x===2}));

print(c.sort());
print(c);

print(c.unshift(5,4,5));
print(c);

print(c.splice(4,5));
print(c);

print(c.toString());

print(c.valueOf());

function print(s){
    console.log(s);
}