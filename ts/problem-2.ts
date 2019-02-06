const MAX_NUMBER: number = 4000000;

function* fibonacciGenerator() : Iterator<number> {
  let prev: number = 0, cur: number = 1;
  let next: number;

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

const sequence: Iterator<number> = fibonacciGenerator();
let sum_of_evens: number = 0;
let current_fib: IteratorResult<number>;

do {
  current_fib = sequence.next();
  if (current_fib.value % 2 === 0) {
    sum_of_evens += current_fib.value;
  }
} while (!current_fib.done && current_fib.value < MAX_NUMBER)

console.log('Sum of even Fibonacci numbers up to 4000000:', sum_of_evens);
