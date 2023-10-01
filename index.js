const { returns } = require("chai-spies");

function receivesAFunction(callback){
    console.log(callback());
}

receivesAFunction(function () { return "I called back something!" });


function returnsANamedFunction() {
    return receivesAFunction;
  }
  
  setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);

function returnsAnAnonymousFunction(x) {
    return setTimeout
}


