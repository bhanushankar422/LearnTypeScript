function error(message: string): never{
    throw new Error(message);
}
function fail(){
    return error("Something failed");
}

function logTypeAssertions(){
    let someValue: any = "this is a string";
    let strlength: number = (<string>someValue).length;
    let strlen: number = (someValue as string).length;
    console.log("Length 1: " + strlength);
    console.log("Length 2: " + strlen);
}

function logArrays(){
    let list: number[] = [1,2,3];
    let listEle: Array<number> = [1,2,3,4];
    console.log(list);
    console.log(listEle);
}

function logTuple(){
    let tuple: [string,number] = ["bhanu", 4];
    console.log(tuple);
    console.log(tuple[0].substr(1));
    console.log(tuple[1] + 5);
    tuple[3] = "world";
    console.log(tuple[3]);
    console.log(tuple);
    tuple[5] = 25;
    console.log(tuple[5].toString());
    tuple[6] = "true";
    console.log(tuple);
}

function logEnums(){
    enum Color {Red = 1, Blue, Green};
    let c:Color = Color.Green;
    console.log("Enum value: " + c);
    console.log("Enum name: " + Color[c]);
}

function logAny(){
    let notSure: any = 4;
    notSure = "any text";
    notSure = false;
    console.log("Not sure: " + notSure);
    let list: any[] = [1,true,"free"];
    console.log(list);
    list[1] = 100;
    console.log(list);
}

function logBoolean(){
    let isDone: boolean = false;
    console.log("isDone:" + isDone);
}

function logNumbers(){
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    console.log("decimal: " + decimal);
    console.log("hex: " + hex);
    console.log("binary: " + binary);
    console.log("octal: " + octal);
}

function logString(){
    let color: string = "blue";
    let fullName: string = "Bhanu Pottipareddy";
    let age: number = 32;
    let sentence: string = `Hello, my name is ${fullName} and my age next year is ${age + 1}`;
    color = "red";
    console.log("color: " + color);
    console.log(sentence);
}

logBoolean();
logNumbers();
logString();
logArrays();
logTuple();
logEnums();
logAny();
logTypeAssertions();