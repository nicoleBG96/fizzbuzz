Fizz = function (num) {
  if(num % 3 === 0) {
    return true;
  } 
  else {
    return false;
  }
}

Buzz = function (num){
  if (num % 5 == 0){
    return true;
  }
  else{
    return false;
  }
}

FizzBuzz = function (num){
  if(num % 3 == 0 && num % 5 == 0){
    return true;
  }
  else{
    return false;
  }
}

fizzbuzz()