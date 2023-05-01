class User {
    protected name: String;
    protected email: String;
    public role: number = 1 | 2;

    constructor(name: String, email: String, role: number) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    setName(name: String) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setEmail(email: String) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setRole(num: number) {
        this.role = num;
    }

    getRole(){
        return this.role;
    }

    public getInfo() {
        console.log(`Name: ${this.name}. Email: ${this.email}. Role: ${this.role == 1 ? "Admin" : "User"}`)
    }
}

const user = new User("CongNT", "cong.nguyen@codegym.vn", 1);
user.getInfo();