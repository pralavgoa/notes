function flatten(array, collector) {
  // TODO: Implement me!
  if(typeof array ==='undefined'){
      return [];
  }
  if(typeof collector === 'undefined'){
      collector = [];
  }
  debug(array);
  debug(collector);
  //start looping through the array
  var i=0;
  var len = array.length;
  for(;i<array.length;i++){
      var cur = array[i];
      debug(cur);
      //if its an array, recurse
      if(checkIfArray(cur)){
          flatten(cur, collector);
      }else{
          debug("ArrayCheckReturn:"+cur);
          collector.push(cur);
      }
  }
    debug(collector);
    return collector;
}

function checkIfArray(a){
    debug('checkArray'+a);
    return Array.isArray(a);
}

function debug(s){
    //console.log(s);
}

var input = [2, 1, [3, [4, 5], 6], 7, [8]];
// Example output: // [2, 1, 3, 4, 5, 6, 7, 8]
console.log(flatten(input));

var input1 = [];

var input2;
var input3 = {};
var input4 = [1];
var input5 = ["hello", 1];
