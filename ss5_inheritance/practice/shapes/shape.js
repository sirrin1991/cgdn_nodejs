"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        if (color === void 0) { color = "red"; }
        if (filled === void 0) { filled = true; }
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setFilled = function (filled) {
        this.filled = filled;
    };
    Shape.prototype.isFilled = function () {
        return this.isFilled;
    };
    Shape.prototype.toString = function () {
        return "A Shape with color of "
            + this.getColor()
            + " and "
            + (this.isFilled() ? "filled" : "not filled");
    };
    return Shape;
}());
exports.default = Shape;
