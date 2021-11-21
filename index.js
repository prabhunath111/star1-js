let c = 8;
let r = 5;
let pattern = ""
for(let i = 1; i <= r; i++){
    for(let j = 1; j<=c;j++){
        pattern = pattern + "*";
    }
    pattern = pattern ;
    console.log(pattern);
    pattern = "";
}
