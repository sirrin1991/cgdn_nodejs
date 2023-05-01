var ValidatePhoneNumber = /** @class */ (function () {
    function ValidatePhoneNumber() {
        this.PATTERN = /^\(\d{2}\)-\(0\d{9}/;
    }
    ValidatePhoneNumber.prototype.validate = function (phoneNumber) {
        return this.PATTERN.test(phoneNumber);
    };
    return ValidatePhoneNumber;
}());
var va = new ValidatePhoneNumber();
console.log(va.validate("(84)-(0978489648)"));
console.log(va.validate("(a8)-(22222222)"));
