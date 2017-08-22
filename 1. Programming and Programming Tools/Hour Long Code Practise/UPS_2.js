function TaskRunner(concurrency) {
    /* TODO */
    var upperLimit = concurrency;
    var concurr = 0;
    var taskQueue = [];
    function incrementCocurr(){
        concurr++;
    }
    function decrementConcurr(){
        concurr--;
    }
}
TaskRunner.prototype.push = function push(task) {
    /* TODO */
    incrementConcurr();
    if(concurr>=upperLimit){
        //wait
        taskQueue.shift(task);
        
    }else{
        task();
        //execute
        var newTask = Queue.unshift(task);
        newTask();
    }
}


function exampleTask(done) { /* calls done() at some point */ }

function exampleSimpleTask(done) {
  setTimeout(done, Math.random() * 1000);
}

function exampleXhrTask(done) {
  makeARequestSomehow('http://website.api/foo', function (err, res) {
    doSomethingWithRes(res);
    done();
  });
}

var r = new TaskRunner(3);
// use the exampleSimpleTask from above;

r.push(exampleSimpleTask); // executes immediately
r.push(exampleSimpleTask); // executes immediately
r.push(exampleSimpleTask); // executes immediately
r.push(exampleSimpleTask); // should wait until one of the running tasks completes
r.push(exampleSimpleTask); // should wait until one of the running tasks completes