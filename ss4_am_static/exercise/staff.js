var Staff = /** @class */ (function () {
    function Staff(firstName, lastName, birthday, address, position) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._address = address;
        this._position = position;
    }
    Staff.prototype.getFirstName = function () {
        return this._firstName;
    };
    Staff.prototype.setFirstName = function (value) {
        this._firstName = value;
    };
    Staff.prototype.getLastName = function () {
        return this._lastName;
    };
    Staff.prototype.setLastName = function (value) {
        this._lastName = value;
    };
    Staff.prototype.getBirthday = function () {
        return this._birthday;
    };
    Staff.prototype.setBirthday = function (value) {
        this._birthday = value;
    };
    Staff.prototype.getAddress = function () {
        return this._address;
    };
    Staff.prototype.setAddress = function (value) {
        this._address = value;
    };
    Staff.prototype.getPosition = function () {
        return this._position;
    };
    Staff.prototype.setPosition = function (value) {
        this._position = value;
    };
    Staff.prototype.getInformation = function () {
        return "First name: ".concat(this._firstName, ", last name: ").concat(this._lastName, ", birthday: ").concat(this._birthday.toLocaleDateString(), ", \n        address: ").concat(this._address, ", position: ").concat(this._position);
    };
    return Staff;
}());
var arrStaff = [];
function showListStaff() {
    if (arrStaff.length === 0) {
        console.log("Empty list");
    }
    else {
        arrStaff.forEach(function (x) { return console.log(x.getInformation()); });
    }
}
function addStaff(staff) {
    arrStaff.push(staff);
    console.log("Add staff completed");
}
function editStaff(index, staff) {
    if (index < 0 || index > arrStaff.length - 1) {
        console.log("Not exists this staff");
    }
    else {
        arrStaff[index] = staff;
        console.log("Edit completed");
    }
}
function removeStaff(index) {
    if (index < 0 || index > arrStaff.length - 1) {
        console.log("Not exists this staff");
    }
    else {
        arrStaff.splice(index, 1);
        console.log("Delete completed");
    }
}
var staff1 = new Staff("Nguyễn Thanh", "Công", new Date("1991-09-10"), "Đà Nẵng", "Instructor");
addStaff(staff1);
showListStaff();
staff1.setPosition("Tutor");
editStaff(0, staff1);
showListStaff();
removeStaff(0);
showListStaff();
