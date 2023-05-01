"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, score) {
        this.name = name;
        this.score = score;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getScore = function () {
        return this.score;
    };
    Student.prototype.setScore = function (score) {
        this.score = score;
    };
    return Student;
}());
exports.Student = Student;
