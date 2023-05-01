"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(name, color) {
        this.name = name;
        this.color = color;
    }
    Shape.prototype.setName = function (name) {
        this.name = name;
    };
    Shape.prototype.getName = function () {
        return this.name;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.toString = function () {
        return "A Shape with name is ".concat(this.name, " and color is ").concat(this.color);
    };
    return Shape;
}());
exports.default = Shape;
