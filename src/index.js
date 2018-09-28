const calcRoots = (a, b, c) => {
  const d = Math.pow(b, 2) - 4 * a * c;
  
  const x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
  const x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
  
  return [x1, x2].sort((val1, val2) => val1 - val2);
  }
  
  module.exports = function solveEquation(equation) {
  const regA = equation.match(/^(-?)(\d*)/);
  const regB = equation.match(/\s(-|\+)\s(\d+)\s\*\sx\s/);
  const regC = equation.match(/\s(-|\+)\s(\d+)$/);
  
  const a = Number(regA[1] + regA[2]);
  const b = Number(regB[1] + regB[2]);
  const c = Number(regC[1] + regC[2]);
  
  return calcRoots(a, b, c);
  }