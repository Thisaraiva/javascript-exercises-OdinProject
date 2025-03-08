const fibonacci = function(n) {
    /* Solução utilizando recursão
    n = parseInt(n);
    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    if (n === 1) return 1;    
    return fibonacci(n - 1) + fibonacci(n - 2);*/

    
    n = parseInt(n);
    if (isNaN(n) || n < 0) return "OOPS";
    if (n === 0) return 0;

    let prev = 1; // Fibonacci(1)
    let curr = 1; // Fibonacci(2)

    for (let i = 2; i < n; i++) {        
        [prev, curr] = [curr, prev + curr];
        console.log(`i = ${i}`, prev, curr, prev + curr);        
    }

    return curr;

};

// Do not edit below this line
module.exports = fibonacci;
console.log(fibonacci("15"));