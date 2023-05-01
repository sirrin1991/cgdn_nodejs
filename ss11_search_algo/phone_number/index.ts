const arrPhone = [
    "0909999333",
    "0983888777",
    "0943444555"
]
const arrMobi =[];
const arrViettel =[];
const arrVina =[];

arrPhone.forEach(x => {
    if(x.substring(0,3) === "090"){
        arrMobi.push(x);
    }else if(x.substring(0,3) === "098"){
        arrViettel.push(x);
    }else {
        arrVina.push(x);
    }
})
console.log(`Array mobi: ${arrMobi}`);
console.log(`Array viettel: ${arrViettel}`);
console.log(`Array vina: ${arrVina}`);