class Instructor {
    private name: String;
    private role: String;
    constructor(name: String, role: String = "assistant") {
        this.name = name;
        this.role = role;
    }
    static talk(){
        console.log("Hello every body!");
    }
    static teach(){
        console.log("Teach IT");
    }
    toString(){
        return `Name: ${this.name}, role: ${this.role}`
    }
}

const instructor = new Instructor("CongNT","Instructor");
const instructor2 = new Instructor("QuangNN");
console.log(instructor);
console.log(instructor2);
Instructor.talk();
Instructor.teach();