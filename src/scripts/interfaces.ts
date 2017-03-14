interface SquareConfig{
    color?:string;
    width?:number;
}
function createSquare(config: SquareConfig):{color:string,area:number}{
    let newSquare = {color:"white", area:100};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color:"black"});
console.log(mySquare);

interface SearchFunc{
    (source:string, subString:string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source:string, subString:string){
    let resut = source.search(subString);
    return resut>-1;
}
console.log("My search : " + mySearch("bhanu","bh"));

interface Person{
    name: string,
    age: number
}
interface PersonList{
    [index:number]: Person
}
let personArray:PersonList = [{name:"bhanu", age:30},{name:"shankar",age:20}];
console.log("Person 2: " + JSON.stringify(personArray[1]));

interface ClockConstructor{
    new (hour:number, minute:number) : ClockInterface;
}
interface ClockInterface{
    tick() : void;
}
function createClock(ctor: ClockConstructor, hour:number, min: number): ClockInterface{
    return new ctor(hour, min);
}
class DigitalClock implements ClockInterface{
    constructor(h:number, m:number){}
    tick(){
        console.log("beep beep");
    }
}
class AnalogClok implements ClockInterface{
    constructor(h:number, m:number){}
    tick(){
        console.log("tick tick");
    }
}
let digital = createClock(DigitalClock,2,30);
let analog = createClock(AnalogClok,3,20);
digital.tick();
analog.tick();