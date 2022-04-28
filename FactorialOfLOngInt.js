function extraLongFactorials(n) {

    var bigInt = BigInt(n);
    var factorial = 1n;

    for (let i = 0n; i < bigInt ; i++) {
        factorial *= bigInt - i;
    }
    
    console.log(factorial.toString());
}
extraLongFactorials(25)