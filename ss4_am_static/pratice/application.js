var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.prototype.getName = function () {
        return this.name;
    };
    Application.prototype.setName = function (name) {
        this.name = name;
    };
    Application.prototype.toString = function () {
        console.log("Name: ".concat(this.name, ", count: ").concat(Application.count));
    };
    Application.count = 0;
    return Application;
}());
var app = new Application("tiktok");
app.toString();
var app2 = new Application("facebook");
app2.toString();
