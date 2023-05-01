function getFibonacci(n:number) {
    if (n==0||n==1){
        return 1
    } else {
        return  getFibonacci(n-1) + getFibonacci(n-2)
    }
}
let sum = 0
for (let i = 0; i <10; i++) {
    sum += getFibonacci(i);
    console.log(getFibonacci(i))
}
console.log('Tong la ' + sum)