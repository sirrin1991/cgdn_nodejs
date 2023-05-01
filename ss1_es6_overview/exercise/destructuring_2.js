function detectCollision(objects, point) {
    let {x,y} = point;
    return objects.find(any => x >= any.x && x <= any.x + any.width &&
        y >= any.y && y <= any.y + any.height);

}

const myObjects = [
    {x:  10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x:   0, y:  0, width: 10, height:  5}
]

console.log(detectCollision(myObjects, {x: 4, y: 2}))