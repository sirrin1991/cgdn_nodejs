var Instructor = /** @class */ (function () {
    function Instructor(name, role) {
        if (role === void 0) { role = "assistant"; }
        this.name = name;
        this.role = role;
    }
    Instructor.talk = function () {
        console.log("Hello every body!");
    };
    Instructor.teach = function () {
        console.log(this.toString());
        console.log("Teach IT");
    };
    Instructor.prototype.toString = function () {
        return "Name: ".concat(this.name, ", role: ").concat(this.role);
    };
    return Instructor;
}());
var instructor = new Instructor("CongNT", "Instructor");
var instructor2 = new Instructor("QuangNN");
console.log(instructor);
console.log(instructor2);
Instructor.talk();
Instructor.teach();
