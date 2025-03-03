function calculator(num1, num2, operator) {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    default: return 'Error: Invalid operator';
  }
}

// 🟢 ตัวอย่างการใช้งาน
console.log(calculator(5, 2, '+')); // 7
console.log(calculator(5, 2, '-')); // 3
console.log(calculator(5, 2, '*')); // 10
console.log(calculator(5, 2, '/')); // 2.5
console.log(calculator(5, 0, '/')); // Error: Division by zero
console.log(calculator(5, 2, '&')); // Error: Invalid operator
