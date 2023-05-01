"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.next = null;
        this.data = data;
    }
    Node.prototype.readData = function () {
        return this.data;
    };
    Node.prototype.getNext = function () {
        return this.next;
    };
    Node.prototype.setNext = function (next) {
        this.next = next;
    };
    return Node;
}());
exports.Node = Node;
