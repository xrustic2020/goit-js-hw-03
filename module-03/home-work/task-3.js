'use strict';

console.log('========================================');
console.log('| task 3');
console.log('========================================');

const findBestEmployee = function(employees) {
  let result;
  const MaxEffective = Math.max(...Object.values(employees));
  const arrKeys = Object.keys(employees);

  for (let i = 0; i < arrKeys.length; i += 1) {
    const key = employees[arrKeys[i]];
    if (key === MaxEffective) {
      result = arrKeys[i];
    }
  }
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
