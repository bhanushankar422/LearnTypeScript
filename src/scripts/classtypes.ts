class Animal{
    name: string;
    constructor(theName:string){this.name = theName;}
    move(distanceInMeter:number = 0){
        console.log(`${this.name} moved ${distanceInMeter}`);
    }
}
class Snake extends Animal{
    constructor(name:string){super(name);}
    move(distanceInMeter = 5){
        console.log("Slithering ... ");
        super.move(distanceInMeter);
    }
}
class Horse extends Animal{
    constructor(name: string){super(name)}
    move(distanceInMeter = 45){
        console.log("Galloping... ")
        super.move(distanceInMeter);
    }
}
let same = new Snake("Sammy the Python");
let tom:Animal = new Horse("Tommy the Palomino");
same.move();
tom.move(75);