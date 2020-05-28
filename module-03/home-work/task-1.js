'use strict';

console.log('========================================');
console.log('| task 1');
console.log('========================================');

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

// eslint-disable-next-line
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
