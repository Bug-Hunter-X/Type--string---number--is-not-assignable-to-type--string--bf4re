function printString(str: string): void {
  console.log(str);
}

function printNumber(num: number): void {
  console.log(num);
}

function processValue(value: string | number): void {
  if (typeof value === 'string') {
    printString(value);
  } else if (typeof value === 'number') {
    printNumber(value);
  } else {
    console.log("Unexpected value type");
  }
}

processValue('hello');
processValue(123);
processValue(true); //handles unexpected type 