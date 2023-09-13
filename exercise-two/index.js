function sum(a, b) {
  return a + b;
}

let add = sum(3, 6);

let sum2 = sum;

let add2 = sum2(2, 4);

let sum3 = (a, b) => {
  return a + b;
};

alert(sum3(1, 1));
