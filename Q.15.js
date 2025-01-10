let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

let coords = [
    [2, 0],  // 7
    [1, 0],  // 4
    [0, 0],  // 1
    [0, 1],  // 2
    [0, 2],  // 3
    [1, 2],  // 6
    [2, 2],  // 9
    [2, 1]   // 8
  ];
  
let result = [];

for (let i = 0; i < coords.length; i++) {
    let row = coords[i][0];
    let col = coords[i][1];
    // Push the matrix value at (row, col) into the result
    result.push(matrix[row][col]);
  }
  
let finalResult = "";
for (let i = 0; i < result.length; i++) {
    finalResult += result[i] + " ";
  }
console.log(finalResult);