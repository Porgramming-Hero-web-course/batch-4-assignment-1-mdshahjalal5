"use strict";
//w: 07/11/2024 10:02 AM Thu GMT+6 Sharifpur, Gazipur, Dhaka
//
// problem-1.ts
function removeDuplicates(nums) {
    return [...new Set(nums)];
}
const res = removeDuplicates([3, 4, 5, 6, 3, 5, 5, 6, 6]);
console.log(res); // Output: [3, 4, 5, 6]
