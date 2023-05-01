"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    Shape.prototype.setName = function (name) {
        this.name = name;
    };
    Shape.prototype.getName = function () {
        return this.name;
    };
    Shape.prototype.toString = function () {
        return ", which is a subclass of Shape with name is ".concat(this.name);
    };
    return Shape;
}());
exports.Shape = Shape;
