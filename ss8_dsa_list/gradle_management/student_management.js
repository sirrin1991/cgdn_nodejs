"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManagement = void 0;
var linkedlist_1 = require("../linkedlist");
var StudentManagement = /** @class */ (function () {
    function StudentManagement() {
        this.studentList = new linkedlist_1.LinkedList();
    }
    StudentManagement.prototype.insertFirst = function (student) {
        this.studentList.insertFirstNode(student);
    };
    StudentManagement.prototype.insertLast = function (student) {
        this.studentList.insertLastNode(student);
    };
    StudentManagement.prototype.showList = function () {
        for (var _i = 0, _a = this.studentList.getAll(); _i < _a.length; _i++) {
            var st = _a[_i];
            console.log(JSON.stringify(st));
        }
    };
    StudentManagement.prototype.totalStudentsFail = function () {
        return this.studentList.search(function (d) { return d.getScore() <= 5; }).length;
    };
    StudentManagement.prototype.getListStudentMaxScore = function () {
        return this.studentList.search(function (d) { return d.getScore() === 10; });
    };
    StudentManagement.prototype.findByName = function (name) {
        return this.studentList.search(function (d) { return d.getName() === name; });
    };
    return StudentManagement;
}());
exports.StudentManagement = StudentManagement;
