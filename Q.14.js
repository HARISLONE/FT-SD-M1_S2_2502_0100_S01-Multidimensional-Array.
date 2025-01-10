let N = 5;
for(let i = 1; i <= N; i++){
    let pattern = "";
    for(let j = 1; j <= N; j++){
        if(i === 1 || i === N || j === 1){
            pattern += "* ";
        }
        else{
          pattern += "  ";
        }
    }
    console.log(pattern);
}