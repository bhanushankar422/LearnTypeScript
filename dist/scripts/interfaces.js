function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var mySearch;
mySearch = function (source, subString) {
    var resut = source.search(subString);
    return resut > -1;
};
console.log("My search : " + mySearch("bhanu", "bh"));
var personArray = [{ name: "bhanu", age: 30 }, { name: "shankar", age: 20 }];
console.log("Person 2: " + JSON.stringify(personArray[1]));
function createClock(ctor, hour, min) {
    return new ctor(hour, min);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClok = (function () {
    function AnalogClok(h, m) {
    }
    AnalogClok.prototype.tick = function () {
        console.log("tick tick");
    };
    return AnalogClok;
}());
var digital = createClock(DigitalClock, 2, 30);
var analog = createClock(AnalogClok, 3, 20);
digital.tick();
analog.tick();
