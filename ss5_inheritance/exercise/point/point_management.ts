import Point2D from "./point2D";
import Point3D from "./point3D";

const point2D = new Point2D(1,2);
const point3D = new Point3D(1,2,3);
console.log(point2D);
console.log(point3D);
console.log("--------------------------")
point3D.setXYZ(3,6,9);
console.log(point3D.getXYZ());