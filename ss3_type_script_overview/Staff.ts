
enum Gender {
    MALE = "Mane",
    FEMALE = "Female",
    OTHER = "Other",
}

class Staff {
    public name: string;
    public email: string;
    public age: number;
    public gender: Gender;
    public phoneNumber?: String;

    constructor(name: string,
                email: string,
                age: number, gender: Gender, phoneNumber?: String) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
    }

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setAge(age: number) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    setGender(gender: Gender) {
        this.gender = gender;
    }

    getGender() {
        return this.gender;
    }

    setPhoneNumber(phoneNumber: String) {
        this.phoneNumber = phoneNumber;
    }

    getPhoneNumber() {
        return this.phoneNumber
    }

    toString(){
        return `Name: ${this.name}. Email: ${this.email}, Age: ${this.age}, Gender: ${this.gender}, Phone: ${this.phoneNumber || ""}`
    }
}
function showList(){
    employeeArr.forEach(e => console.log(e.toString()));
}
function addEmployee(employee: Staff){
    employeeArr.push(employee);
}
function remove(index: number){
    if(index < 0 || index > employeeArr.length - 1){
        console.log("Not exists");
    }else {
        employeeArr.splice(index,1);
    }
}
let employeeArr: Array<Staff> = [];
let employee = new Staff("CongNT", "cong.nguyen@codegym.vn", 32, Gender.MALE, "0909394982" );
let employee2 = new Staff("QuangNN", "quang.nguyen@codegym.vn", 28, Gender.MALE );
let employee3 = new Staff("SonPM", "son.pham@codegym.vn", 25, Gender.MALE );
console.log("Before add:")

addEmployee(employee);
addEmployee(employee2);
addEmployee(employee3);
console.log("After add:")
showList();
remove(1);
console.log("After remove:")
showList();



