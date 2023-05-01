import Point2D from "./point2D";

class Point3D extends Point2D{
    private z:number;
    constructor(x:number,y:number,z:number) {
        super(x, y);
        this.z =z;
    }
    setZ(z:number){
        this.z=z;
    }
    getZ(){
        return this.z;
    }
    getXYZ(){
        return this;
    }
    setXYZ(x:number,y:number,z:number){
        super.setXY(x,y);
        this.z = z;
    }
    toString(): string {
        return `A Point3D x = ${super.getX()}, y = ${super.getY()}, z = ${this.z}`
    }
}
export default Point3D;