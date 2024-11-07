# batch4-assignment-1

## Assignment: Basic Problem Solving with TypeScript

This assignment comprises various problems that demonstrate fundamental TypeScript concepts, including data typing, interfaces for objects, class usage with inheritance, type checking, and manipulation of data structures. The solutions aim to showcase efficient and clear problem-solving techniques using TypeScript, adhering to best coding practices.

Each problem is accompanied by sample input and output, showcasing how TypeScript can be used to solve practical programming challenges effectively.If you have any questions or need further clarification on any problem, please let us know in our facebook group.

## Problem 1:

Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

```tsx
// Sample Input:
sumArray([1, 2, 3, 4, 5]);

// Sample Output:
15;
```

## Problem 2:

Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

```tsx
// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])[
  // Sample Output:
  (1, 2, 3, 4, 5)
];
```

## Problem 3:

Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

```tsx
// Sample Input:
countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

// Sample Output:
2;
```

## Problem 4:

Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

```tsx
// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
24;
```

## Problem 5:

Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

> Hints: Use keyof

```tsx
// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:
Alice;
```

## Problem 6:

Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial<Profile> representing the updates. The function should return the updated profile.

```tsx
// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

// Sample Output:
{
  name: "Alice",
  age: 26,
  email: "alice@example.com"
}
```

## Problem 7:

Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

```tsx
// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

// Sample Output 1:
6 (assuming current year is 2024)
```

## Problem 8:

Create a function validateKeys<T>(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

```tsx
// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));

// Sample Output:
true;
```

</br>

_Note: Please make sure to use the exact **function/property name** provided in the assignment.This will help us evaluate your solution smoothly._

</br>
</br>

## Blog Writing (any one):

Write an impactful blog posts covering the following topics:

1. The significance of union and intersection types in Typescript.
2. How to handle asynchronous operations using `async/await` over `callback/promise` TypeScript.
3. Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

_Note:You will have to choose any **one** blog topic_

</br>
</br>

## Private Repogitory

[https://classroom.github.com/a/xLyOULhz](https://classroom.github.com/a/T1s-cspF)

### Instructions:

- Solve the problems in a separate file. Name the file starting with "problem-" followed by the problem number.
  (For example: problem-1.ts)
- Write the blogs in separate .md files. Name them starting with "blog-" followed by the blog number.
  (For example: blog-1.md / blog-2.md)
- The blog should be written in simple English, providing some code examples.
- Make sure the solution you provide is your own work and doesn't use any AI or machine-generated help. Stick to the rules given.
- Follow standard coding practices to make your code easy to read and understand.
- Don't copy code from other students. If you do, you'll get a score of 0.
- Share the link to your GitHub repository where you've uploaded your submission.

### Assignment Deadlines:

- 60 marks: Nov 8, 2024, 11:59 PM
- 50 marks: Nov 9, 2024, 11:59 PM
- 30 marks: After Nov 9, 11.59 PM
- 30 marks: After Nov 9, 11.59 PM
