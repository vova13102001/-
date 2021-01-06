"use strict"

//задание 1, 2, 3

let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.c * this.d;
    },

    div() {
        return this.e / this.f;
      },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
      this.c = +prompt('c?', 0);
      this.d = +prompt('d?', 0);
      this.e = +prompt('e?', 0);
      this.f = +prompt('f?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  alert( calculator.div() );

//задание4

  console.log (11);
  console.log (true);
  console.log ("java script");
  console.log ("100");
  
 //задание 5

 let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;