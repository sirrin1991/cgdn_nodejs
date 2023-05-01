var Gender;
(function (Gender) {
    Gender["MALE"] = "Mane";
    Gender["FEMALE"] = "Female";
    Gender["OTHER"] = "Other";
})(Gender || (Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, email, age, gender, phoneNumber) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
    }
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Staff.prototype.getGender = function () {
        return this.gender;
    };
    Staff.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Staff.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    Staff.prototype.toString = function () {
        return "Name: ".concat(this.name, ". Email: ").concat(this.email, ", Age: ").concat(this.age, ", Gender: ").concat(this.gender, ", Phone: ").concat(this.phoneNumber || "");
    };
    return Staff;
}());
var employeeArr = [];
var employee = new Staff("CongNT", "cong.nguyen@codegym.vn", 32, Gender.MALE, "0909394982");
var employee2 = new Staff("QuangNN", "quang.nguyen@codegym.vn", 28, Gender.MALE);
var employee3 = new Staff("SonPM", "son.pham@codegym.vn", 25, Gender.MALE);
console.log("Before add:");
function addEmployee(employee) {
    employeeArr.push(employee);
}
addEmployee(employee);
addEmployee(employee2);
addEmployee(employee3);
function showList() {
    employeeArr.forEach(function (e) { return console.log(e.toString()); });
}
console.log("After add:");
showList();
remove(1);
console.log("After remove:");
showList();
function remove(index) {
    if (index < 0 || index > employeeArr.length - 1) {
        console.log("Not exists");
    }
    else {
        employeeArr.splice(index, 1);
    }
}
