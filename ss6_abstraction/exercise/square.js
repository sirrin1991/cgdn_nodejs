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
exports.Square = void 0;
var shape_1 = require("./shape");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(name, side) {
        var _this = _super.call(this, name) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.setSide = function (side) {
        this.side = side;
    };
    Square.prototype.getSide = function () {
        return this.side;
    };
    Square.prototype.calculateArea = function () {
        return Math.pow(this.side, 2);
    };
    Square.prototype.calculatePerimeter = function () {
        return this.side * 4;
    };
    Square.prototype.resizeable = function (percent) {
        this.side = this.side + (this.side * percent / 100);
    };
    Square.prototype.toString = function () {
        return "Im a square with side is ".concat(this.side, "  \n        and perimeter is ").concat(this.calculatePerimeter(), " and area is ").concat(this.calculateArea()) + _super.prototype.toString.call(this);
    };
    return Square;
}(shape_1.Shape));
exports.Square = Square;
