class Application {
    private name: String;
    private static count: number = 0;


    constructor(name: String) {
        this.name = name;
        Application.count++;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    toString(){
        console.log(`Name: ${this.name}, count: ${Application.count}`)
    }
}

const app = new Application("tiktok");
app.toString();
const app2 = new Application("facebook");
app2.toString();

