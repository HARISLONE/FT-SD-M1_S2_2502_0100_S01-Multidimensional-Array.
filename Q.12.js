let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let N = arr.length;
let M = arr[0].length;

for(let i = 0; i < N; i++){
   let rowSum = "";
   for(let j = 0; j < M; j++){
    let sumIndexes = i + j;
    rowSum += sumIndexes;
   } 
   console.log(rowSum);
}