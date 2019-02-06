#include <stdio.h>

#define MAX 4000000

int main() {
  // Project Euler states to start with 1 and 2.
  int sum = 2, pre1 = 1, pre2 = 2;
  int next;

  while (pre2 <= MAX) {
    next = pre1 + pre2;

    if (next % 2 == 0) {
      sum = sum + next;
    }

    pre1 = pre2;
    pre2 = next;
  }

  printf("Sum of even Fibonacci numbers <= 4,000,000: %d\n", sum);

  return 0;
}
