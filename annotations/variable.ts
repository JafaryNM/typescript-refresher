const apple: number = 5;

let appleTest: number = 28;

//  You can change  value
appleTest = 78;

// Not allowed in typescript if

appleTest = "Apple";

let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//  Builting objects

let now: Date = new Date();

//  Arrays

let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [3, 94, 95];
let truths: boolean[] = [true, false, true];

//  Classes

class Car {}

const newCar: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 40,
  y: 50,
};
