const MAX_NUMBER = 4000000;

function* fibonacciGenerator() {
  let prev = 0, cur = 1;
  let next;

  while (true) {
    next = prev + cur;
    if (next >= cur) {
      yield cur;
    } else {
      return cur;
    }
    
    prev = cur;
    cur = next;
    next = null;
  }
}

const sequence = fibonacciGenerator();
let sum_of_evens = 0;
let current_fib;

do {
  current_fib = sequence.next();
  if (current_fib.value % 2 === 0) {
    sum_of_evens += current_fib.value;
  }
} while (!current_fib.done && current_fib.value < MAX_NUMBER)

console.log('Sum of even Fibonacci numbers up to 4000000:', sum_of_evens);
