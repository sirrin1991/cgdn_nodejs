"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirstNode = function (data) {
        var node = new node_1.Node(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            node.setNext(this.head);
            this.head = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        else {
            var node = new node_1.Node(data);
            var getLast_1 = function (node) {
                return node && node.getNext() ? getLast_1(node.getNext()) : node;
            };
            var lastNode = getLast_1(this.head);
            if (lastNode) {
                lastNode.setNext(node);
            }
        }
        this.size++;
    };
    LinkedList.prototype.search = function (conditionFn) {
        var results = [];
        if (this.size) {
            var currentNode = this.head;
            while (currentNode !== null) {
                if (conditionFn(currentNode.readData())) {
                    results.push(currentNode.readData());
                }
                currentNode = currentNode.getNext();
            }
        }
        return results;
    };
    LinkedList.prototype.getAll = function () {
        var results = [];
        if (this.size) {
            var currentNode = this.head;
            while (currentNode !== null) {
                results.push(currentNode.readData());
                currentNode = currentNode.getNext();
            }
        }
        return results;
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
