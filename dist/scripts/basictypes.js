function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function logTypeAssertions() {
    var someValue = "this is a string";
    var strlength = someValue.length;
    var strlen = someValue.length;
    console.log("Length 1: " + strlength);
    console.log("Length 2: " + strlen);
}
function logArrays() {
    var list = [1, 2, 3];
    var listEle = [1, 2, 3, 4];
    console.log(list);
    console.log(listEle);
}
function logTuple() {
    var tuple = ["bhanu", 4];
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
function logEnums() {
    var Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Blue"] = 2] = "Blue";
        Color[Color["Green"] = 3] = "Green";
    })(Color || (Color = {}));
    ;
    var c = Color.Green;
    console.log("Enum value: " + c);
    console.log("Enum name: " + Color[c]);
}
function logAny() {
    var notSure = 4;
    notSure = "any text";
    notSure = false;
    console.log("Not sure: " + notSure);
    var list = [1, true, "free"];
    console.log(list);
    list[1] = 100;
    console.log(list);
}
function logBoolean() {
    var isDone = false;
    console.log("isDone:" + isDone);
}
function logNumbers() {
    var decimal = 6;
    var hex = 0xf00d;
    var binary = 10;
    var octal = 484;
    console.log("decimal: " + decimal);
    console.log("hex: " + hex);
    console.log("binary: " + binary);
    console.log("octal: " + octal);
}
function logString() {
    var color = "blue";
    var fullName = "Bhanu Pottipareddy";
    var age = 32;
    var sentence = "Hello, my name is " + fullName + " and my age next year is " + (age + 1);
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
