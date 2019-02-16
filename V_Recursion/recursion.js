
const fibo = n => {
    if (n > 2) {
        const x = fibo(n - 1);
        const y = fibo(n - 2);
        const result = x + y;
        return result;
    } else {
        return 1;
    }
}

const fiboSeq = n => {
    const seq = []
}

// G(n) = n - G(G(n-1)) for n > 0
// G(0) = 0
const G = n => {
    if (n > 0) {
        const x = G(n - 1);
        const y = G(x);
        const result = n - y;
        return result;
    } else {
        return 0;
    }
}

const interchange = x => n => interchange(x - n) + n;

console.log(fibo(13))