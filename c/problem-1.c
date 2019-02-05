#include <stdio.h>

int main() {
  int accumulator = 0, counter;

  for (counter = 0; counter <= 1000; counter = counter + 1) {
    if (counter % 3 == 0 || counter % 5 == 0) {
      accumulator = accumulator + counter;
    }
  }

  printf("Sum: %d\n", accumulator);

  return 0;
}
