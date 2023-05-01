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
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, filled, width, length) {
        var _this = _super.call(this, color, filled) || this;
        _this.length = length;
        _this.width = width;
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
    Rectangle.prototype.toString = function () {
        return _super.prototype.toString.call(this) +
            " A Rectangle width = ".concat(this.width, " and length = ").concat(this.length, ", which is a subclass off ").concat(_super.prototype.toString.call(this));
    };
    return Rectangle;
}(shape_1.default));
exports.default = Rectangle;
