"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, salary, month) {
        this.employeeCode = name;
        this.salary = salary;
        this.month = month;
    }
    Employee.prototype.getEmployeeCode = function () {
        return this.employeeCode;
    };
    Employee.prototype.setEmployeeCode = function (employeeCode) {
        this.employeeCode = employeeCode;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getMonth = function () {
        return this.month;
    };
    Employee.prototype.setMonth = function (month) {
        this.month = month;
    };
    return Employee;
}());
exports.Employee = Employee;
