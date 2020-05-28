'use strict';

console.log('========================================');
console.log('| task 4');
console.log('========================================');

const countTotalSalary = function(employees) {
  const arrValues = Object.values(employees);
  let totalSalary = 0;
  for (let i = 0; i < arrValues.length; i += 1) {
    totalSalary += Number(arrValues[i]);
  }
  return totalSalary;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
