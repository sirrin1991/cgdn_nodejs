function countTimeAppear(numbers, ele) {
    var tempArr;
    tempArr = numbers.filter(function (x) { return x == ele; });
    return tempArr.length;
}
var arr = [1, 2, 2, 2, 3, 2, 1];
console.log(countTimeAppear(arr, 2));
