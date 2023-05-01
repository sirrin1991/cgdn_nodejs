"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManagement = void 0;
var linkedlist_1 = require("../linkedlist");
var EmployeeManagement = /** @class */ (function () {
    function EmployeeManagement() {
        this.employeeList = new linkedlist_1.LinkedList();
    }
    EmployeeManagement.prototype.insertFirst = function (em) {
        this.employeeList.insertFirstNode(em);
    };
    EmployeeManagement.prototype.insertLast = function (em) {
        this.employeeList.insertLastNode(em);
    };
    EmployeeManagement.prototype.showList = function () {
        for (var _i = 0, _a = this.employeeList.getAll(); _i < _a.length; _i++) {
            var em = _a[_i];
            console.log(JSON.stringify(em));
        }
    };
    EmployeeManagement.prototype.getTotalSalary = function () {
        // @ts-ignore
        var monthAndSalaryMap = new Map();
        for (var _i = 0, _a = this.employeeList.getAll(); _i < _a.length; _i++) {
            var em = _a[_i];
            if (monthAndSalaryMap.get(em.getMonth())) {
                monthAndSalaryMap.set(em.getMonth(), monthAndSalaryMap.get(em.getMonth()) + em.getSalary());
            }
            else {
                monthAndSalaryMap.set(em.getMonth(), em.getSalary());
            }
        }
        return monthAndSalaryMap;
    };
    EmployeeManagement.prototype.getMonthWithMaxTotalSalary = function () {
        var monthAndSalaryMap = this.getTotalSalary();
        var max = 0;
        var result = -1;
        for (var _i = 0, _a = monthAndSalaryMap.keys(); _i < _a.length; _i++) {
            var month = _a[_i];
            if (monthAndSalaryMap.get(month) > max) {
                max = monthAndSalaryMap.get(month);
                result = month;
            }
        }
        return result;
    };
    return EmployeeManagement;
}());
exports.EmployeeManagement = EmployeeManagement;
