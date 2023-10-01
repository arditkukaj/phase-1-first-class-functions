const { returns } = require("chai-spies");

function receivesAFunction(callback){
    console.log(callback());
}

receivesAFunction(function () { return "I called back something!" });


function returnsANamedFunction() {
    return receivesAFunction
  }
  
function returnsAnAnonymousFunction(thing){
return thing();
    
}
returnsAnAnonymousFunction(function (thing) { return 4+5;});