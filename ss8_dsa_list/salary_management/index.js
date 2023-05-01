"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var employee_management_1 = require("./employee_management");
var employeeManagement = new employee_management_1.EmployeeManagement();
employeeManagement.insertFirst(new Employee_1.Employee("SonPM", 20000000, 1));
employeeManagement.insertFirst(new Employee_1.Employee("QuangNN", 18000000, 1));
employeeManagement.insertLast(new Employee_1.Employee("ComgNT", 13000000, 1));
employeeManagement.showList();
