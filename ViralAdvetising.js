function viralAdvertising(n) {
    let ppl = 5;
    let cumul = 0
    for (let i = 1; i <= n; i++){
        ppl = Math.floor(ppl/2);
        cumul += ppl;
        ppl *= 3;
    }
    return cumul
}
console.log(viralAdvertising(5))