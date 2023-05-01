var User = /** @class */ (function () {
    function User(name, email, role) {
        this.role = 1 | 2;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        console.log("Name: ".concat(this.name, ". Email: ").concat(this.email, ". Role: ").concat(this.role == 1 ? "Admin" : "User"));
    };
    return User;
}());
var user = new User("CongNT", "cong.nguyen@codegym.vn", 1);
user.getInfo();
