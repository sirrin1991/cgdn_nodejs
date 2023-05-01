"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2D.prototype.setX = function (x) {
        this.x = x;
    };
    Point2D.prototype.getX = function () {
        return this.x;
    };
    Point2D.prototype.setY = function (y) {
        this.y = y;
    };
    Point2D.prototype.getY = function () {
        return this.y;
    };
    Point2D.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Point2D.prototype.getXY = function () {
        return this;
    };
    Point2D.prototype.toString = function () {
        return "A Point2D with x = ".concat(this.x, " and y = ").concat(this.y);
    };
    return Point2D;
}());
exports.default = Point2D;
