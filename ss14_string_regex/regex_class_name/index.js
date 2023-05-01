var ValidateClassName = /** @class */ (function () {
    function ValidateClassName() {
        this.PATTERN = /^[CPA]\d{4}[GHIKLM]$/;
    }
    ValidateClassName.prototype.validate = function (className) {
        return this.PATTERN.test(className);
    };
    return ValidateClassName;
}());
var va = new ValidateClassName();
console.log(va.validate("A"));
console.log(va.validate("C1234G"));
