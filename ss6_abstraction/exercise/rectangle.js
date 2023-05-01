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
exports.Rectangle = void 0;
var shape_1 = require("./shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, width, length) {
        var _this = _super.call(this, name) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setLength = function (length) {
        this.length = length;
    };
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return (this.length + this.width) * 2;
    };
    Rectangle.prototype.toString = function () {
        return "Im a rectangle with width is ".concat(this.width, " and length is ").concat(this.length, " \n        and perimeter is ").concat(this.calculatePerimeter(), " and area is ").concat(this.calculateArea()) + _super.prototype.toString.call(this);
    };
    Rectangle.prototype.resizeable = function (percent) {
        this.width = this.width + (this.width * percent / 100);
        this.length = this.length + (this.length * percent / 100);
    };
    return Rectangle;
}(shape_1.Shape));
exports.Rectangle = Rectangle;
