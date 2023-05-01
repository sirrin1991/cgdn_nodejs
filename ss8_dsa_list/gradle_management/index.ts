import {StudentManagement} from "./student_management";
import {Student} from "./student";

const studentManagement = new StudentManagement();
const student = new Student("CongNT",8);
const student2 = new Student("SonPM",10);
const student3 = new Student("QuangNN",9);
studentManagement.insertLast(student);
studentManagement.insertLast(student2);
studentManagement.insertLast(student3);
studentManagement.showList();
console.log(studentManagement.getListStudentMaxScore());