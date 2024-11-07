type SumArray = (nums: number[]) => number;
const sumArray: SumArray = (nums) => {
  let sum = 0;
  nums.forEach((num, idx) => {
    sum = sum + nums[idx];
  });
  return sum;
};

const sum = sumArray([2, 8, 4, 3, 2, 6, 10, 3, 9, 3, 8]);
console.log(sum, "[1;31msum in problem-1.ts at line 25[0m"); //! 20
