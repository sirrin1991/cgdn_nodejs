class ValidateClassName {
    private PATTERN = /^[CPA]\d{4}[GHIKLM]$/;

    public validate(className: string): boolean {
        return this.PATTERN.test(className);
    }
}

const va = new ValidateClassName();
console.log(va.validate("A"));
console.log(va.validate("C1234G"));