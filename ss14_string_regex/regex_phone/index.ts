class ValidatePhoneNumber {
    private PATTERN = /^\(\d{2}\)-\(0\d{9}/;

    public validate(phoneNumber: string): boolean {
        return this.PATTERN.test(phoneNumber);
    }
}

const va = new ValidatePhoneNumber();
console.log(va.validate("(84)-(0978489648)"));
console.log(va.validate("(a8)-(22222222)"));