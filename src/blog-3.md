# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

#### Type Guards are an essential concept in TypeScript that helps ensure type safety in a program. By narrowing down the types of variables, Type Guards help developers avoid runtime errors and make the code more reliable. This becomes especially important in real-world applications, such as a Muslim Todo App, where we want to ensure that the data types we are working with are correct at all stages.

#### In this blog post, we’ll discuss the necessity of Type Guards in TypeScript, provide examples, and explore various types of Type Guards using a Bangladeshi Muslim Todo App scenario.

## What Are Type Guards?

Type Guards in TypeScript are methods that help narrow the type of a variable within a certain scope. By using Type Guards, you can check the type of a variable and perform operations accordingly, ensuring that your program handles variables safely based on their type.

## Why Are Type Guards Necessary?

Type Guards are necessary because they allow developers to handle variables that could have multiple types in a safe and efficient way. Without Type Guards, TypeScript would only perform surface-level checks, making it difficult to work with variables that have more complex or varied types. Type Guards ensure that you can make decisions about the specific type of a variable, allowing your code to be more predictable and bug-free.

## Various Types of Type Guards in TypeScript

#### There are several ways to define and use Type Guards in TypeScript, including:

typeof Type Guards
instanceof Type Guards
User-Defined Type Guards

### 1. typeof Type Guards

The typeof operator is used to check the type of a variable. It is most commonly used for primitive types such as string, number, boolean, etc.

## Example: Todo App with typeof

In our Muslim Todo App, we may want to allow users to create tasks for prayer times, like Fajr, Dhuhr, and Isha. We can use a union type to store the tasks in the todo list and use a typeof Type Guard to check whether the task is a string or a number before handling it.

```
type Task = string | number;

const addTask = (task: Task): void => {
  if (typeof task === "string") {
    console.log(`Task added: ${task}`);
  } else if (typeof task === "number") {
    console.log(`Task added with time (in minutes): ${task}`);
  }
};

const task1: Task = "Fajr Prayer";
const task2: Task = 30;  // Time for Dhuhr Prayer

addTask(task1);  // Output: Task added: Fajr Prayer
addTask(task2);  // Output: Task added with time (in minutes): 30

```

#### In this example, task can either be a string (e.g., the name of a prayer) or a number (e.g., the number of minutes for a specific prayer time). Using typeof, we can safely handle each type.

## 2. instanceof Type Guards

#### The instanceof operator is used to check if an object is an instance of a particular class. This is useful for checking types of objects that are derived from classes.

#### Example: Using instanceof with Todo Task Classes

In our app, we might have different types of tasks, such as PrayerTask and ReminderTask, each of which is a class. We can use the instanceof Type Guard to check the task type before performing actions

```
class PrayerTask {
  constructor(public name: string, public time: number) {}
}

class ReminderTask {
  constructor(public message: string) {}
}

type Task = PrayerTask | ReminderTask;

const handleTask = (task: Task): void => {
  if (task instanceof PrayerTask) {
    console.log(`Prayer Task: ${task.name} at ${task.time} minutes.`);
  } else if (task instanceof ReminderTask) {
    console.log(`Reminder Task: ${task.message}`);
  }
};

const task1 = new PrayerTask("Isha Prayer", 10);
const task2 = new ReminderTask("Call for Prayer");

handleTask(task1);  // Output: Prayer Task: Isha Prayer at 10 minutes.
handleTask(task2);  // Output: Reminder Task: Call for Prayer

```
