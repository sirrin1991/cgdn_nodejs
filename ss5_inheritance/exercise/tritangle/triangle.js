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
var shape_1 = require("./shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name, color, sideA, sideB, sideC) {
        var _this = _super.call(this, name, color) || this;
        _this.sideA = sideA;
        _this.sideB = sideB;
        _this.sideC = sideC;
        return _this;
    }
    Triangle.prototype.setSideA = function (sideA) {
        this.sideA = sideA;
    };
    Triangle.prototype.getSideA = function () {
        return this.sideA;
    };
    Triangle.prototype.setSideB = function (sideB) {
        this.sideB = sideB;
    };
    Triangle.prototype.getSideB = function () {
        return this.sideB;
    };
    Triangle.prototype.setSideC = function (sideC) {
        this.sideC = sideC;
    };
    Triangle.prototype.getSideC = function () {
        return this.sideC;
    };
    Triangle.prototype.toString = function () {
        return "A Triangle with side A = ".concat(this.sideA, ", side B = ").concat(this.sideB, ", side C = ").concat(this.sideC, ", which is a subclass of ").concat(_super.prototype.toString.call(this));
    };
    return Triangle;
}(shape_1.default));
exports.default = Triangle;
