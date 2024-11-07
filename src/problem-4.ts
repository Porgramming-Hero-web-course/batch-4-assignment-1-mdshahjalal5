//w: 07/11/2024 12:04 PM Thu GMT+6 Sharifpur, Gazipur, Dhaka
// ! problem-4

type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
  if (shape.shape === "circle") {
    return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
  } else {
    return shape.width * shape.height;
  }
}

const circle: Circle = { shape: "circle", radius: 5 };
const rectangle: Rectangle = { shape: "rectangle", width: 4, height: 6 };

console.log(calculateShapeArea(circle)); // 78.54
console.log(calculateShapeArea(rectangle)); // 24
