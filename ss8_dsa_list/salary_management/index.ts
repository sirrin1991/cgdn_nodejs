import { Employee } from "./Employee";
import {EmployeeManagement} from "./employee_management";

const employeeManagement = new EmployeeManagement();

employeeManagement.insertFirst(new Employee("SonPM", 20000000, 1));
employeeManagement.insertFirst(new Employee("QuangNN", 18000000, 1));
employeeManagement.insertLast(new Employee("ComgNT", 13000000, 1));
employeeManagement.showList();
