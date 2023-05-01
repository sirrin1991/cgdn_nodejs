class StopWatch {
    startTime;
    endTime;

    constructor() {
    }

    start() {
        this.startTime = new Date().getTime();
    }

    stop() {
        this.endTime = new Date().getTime();
    }

    getElapsedTime() {
        return this.endTime - this.startTime;
    }
}

const stopWatch = new StopWatch();

stopWatch.start();
function selectionSort(arr) {
    let currentValueNewIndex;
    for (let i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            let temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }

    return arr;
}

const arr = [];
for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}
console.log(selectionSort(arr));
stopWatch.stop();
console.log(stopWatch.getElapsedTime());