//w: 07/11/2024 01:59 PM Thu GMT+6 Sharifpur, Gazipur, Dhaka
//problem-5.ts
//
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "sj", age: 20 };
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));
