//w: 07/11/2024 07:04 PM Thu GMT+6 Sharifpur, Gazipur, Dhaka
//! problem-8
function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
  for (const key of keys) {
    if (!(key in obj)) {
      return false;
    }
  }
  return true;
}
const check = {
  name: "sha",
  age: 3,
};

const reschk = validateKeys(check, ["age"]);
console.log(reschk, "[1;31mreschk in problem-8.ts at line 15[0m");
