class Staff {
    private _firstName: String;
    private _lastName: String;
    private _birthday: Date;
    private _address: String;
    private _position: String;

    constructor(firstName: String, lastName: String, birthday: Date, address: String, position: String) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._address = address;
        this._position = position;
    }


    getFirstName(): String {
        return this._firstName;
    }

    setFirstName(value: String) {
        this._firstName = value;
    }

    getLastName(): String {
        return this._lastName;
    }

    setLastName(value: String) {
        this._lastName = value;
    }

    getBirthday(): Date {
        return this._birthday;
    }

    setBirthday(value: Date) {
        this._birthday = value;
    }

    getAddress(): String {
        return this._address;
    }

    setAddress(value: String) {
        this._address = value;
    }

    getPosition(): String {
        return this._position;
    }

    setPosition(value: String) {
        this._position = value;
    }

    getInformation() {
        return `First name: ${this._firstName}, last name: ${this._lastName}, birthday: ${this._birthday.toLocaleDateString()}, 
        address: ${this._address}, position: ${this._position}`;
    }
}

const arrStaff = [];

function showListStaff() {
    if (arrStaff.length === 0) {
        console.log("Empty list");
    } else {
        arrStaff.forEach(x => console.log(x.getInformation()));
    }
}

function addStaff(staff: Staff) {
    arrStaff.push(staff);
    console.log("Add staff completed");
}

function editStaff(index: number, staff: Staff) {
    if (index < 0 || index > arrStaff.length - 1) {
        console.log("Not exists this staff");
    } else {
        arrStaff[index] = staff;
        console.log("Edit completed");
    }
}

function removeStaff(index: number) {
    if (index < 0 || index > arrStaff.length - 1) {
        console.log("Not exists this staff");
    } else {
        arrStaff.splice(index, 1);
        console.log("Delete completed");
    }
}

const staff1 = new Staff("Nguyễn Thanh", "Công", new Date("1991-09-10" ), "Đà Nẵng", "Instructor");
addStaff(staff1);
showListStaff();
staff1.setPosition("Tutor");
editStaff(0, staff1);
showListStaff();
removeStaff(0);
showListStaff();