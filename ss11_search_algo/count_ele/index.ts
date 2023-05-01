function countTimeAppear(numbers: number[], ele: number): number {
    let tempArr: number[];
    tempArr = numbers.filter(x => x == ele);
    return tempArr.length;
}

const arr = [1,2,2,2,3,2,1];
console.log(countTimeAppear(arr,2));