// This is the text editor interface. 
// Anything you type or change here will be seen by the other person in real time.

//Given a set of positive integers, find how many permutations are lower than a given number
const inputSet = [3,4,5];
const number = 400;

DEBUG=true;

/*
Examples: the above should verify the number 3,34,345,
*/
//first algorithm to find all permutations
    //inside the algorithm, check if the permutation is less than the given number and increment count

function permute(S, number){
    if(typeof S == 'undefined'){
        return 0;
    }
    if(S.length==0){
        return 0;
    }
    
    if(S.length==1){
        if(S[0]<number){
            return 1;
        }else{
            return 0;
        }
    }
    let resultCount = 0;
    
    for(let i=0;i<S.length;i++){
        let currentNumber = S[i];
        print(currentNumber);
        let remainingS = S.slice();
        remainingS.splice(i,1)
        print(remainingS);
        resultCount=resultCount+permute(remainingS, number);
    }
    if(DEBUG){
        print(resultCount);
    }
    return resultCount;
}    

function testPermute(){
    let inputSet = [];
    let number = 0;
    
    let checkStartingConditions = (permute(inputSet, number)==0);
    
    if(checkStartingConditions){
        print("All OK");
    }else{
        print("Fail");
    }
}

function print(obj){
    console.log(obj);
}

//invocation
//testPermute(inputSet,number);
permute(inputSet,number);