var arrPhone = [
    "0909999333",
    "0983888777",
    "0943444555"
];
var arrMobi = [];
var arrViettel = [];
var arrVina = [];
arrPhone.forEach(function (x) {
    if (x.substring(0, 3) === "090") {
        arrMobi.push(x);
    }
    else if (x.substring(0, 3) === "098") {
        arrViettel.push(x);
    }
    else {
        arrVina.push(x);
    }
});
console.log("Array mobi: ".concat(arrMobi));
console.log("Array viettel: ".concat(arrViettel));
console.log("Array vina: ".concat(arrVina));
