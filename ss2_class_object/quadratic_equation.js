class QuadraticEquation {
    a;
    b;
    c;

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getDiscriminant() {
        return Math.pow(this.b, 2) - (4 * this.a * this.c);
    }

    getRoot() {
        if (this.getDiscriminant() < 0) {
            console.log("Phương trình vô nghiệm")
        } else if (this.getDiscriminant() > 0) {
            let root1 = (-this.b + Math.sqrt(this.getDiscriminant())) / 2 * this.a;
            let root2 = (-this.b - Math.sqrt(this.getDiscriminant())) / 2 * this.a;
            console.log("Phương trình có 2 nghiệm:\n" +
                "- Nghiệm thứ nhất: " + root1 + "\n" +
                "- Nghiệm thứ hai: " + root2);
        } else {
            let root = -this.b / (2 * this.a);
            console.log("Phương trình có nghiệm kép: " + root)
        }
    }
}

const quadraticEquation = new QuadraticEquation(1, 3, 1);
const quadraticEquation1 = new QuadraticEquation(1, 2, 1);
const quadraticEquation2 = new QuadraticEquation(1, 2, 3);
quadraticEquation.getRoot();
quadraticEquation1.getRoot();
quadraticEquation2.getRoot();