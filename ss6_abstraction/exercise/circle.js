"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var shape_1 = require("./shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, radius) {
        var _this = _super.call(this, name) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.calculatePerimeter = function () {
        return Math.PI * this.radius * 2;
    };
    Circle.prototype.toString = function () {
        return "Im a circle with radius is ".concat(this.radius, " and area is ").concat(this.calculateArea(), " \n        and perimeter is ").concat(this.calculatePerimeter()) + _super.prototype.toString.call(this);
    };
    Circle.prototype.resizeable = function (percent) {
        this.radius = (this.radius + this.radius * percent / 100);
    };
    return Circle;
}(shape_1.Shape));
exports.Circle = Circle;
