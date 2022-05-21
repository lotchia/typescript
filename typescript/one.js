var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/////////1///////////////
var labone;
(function (labone) {
    var rectangle = /** @class */ (function () {
        function rectangle() {
        }
        rectangle.prototype.rectangle1 = function (width, height) {
            this.width = width;
            this.height = height;
        };
        rectangle.prototype.calccirmference = function (h, w) {
            return h + w * 2;
        };
        rectangle.whoami = function () {
            console.log("I AM RESTANGLE");
        };
        return rectangle;
    }());
    var squar = /** @class */ (function (_super) {
        __extends(squar, _super);
        function squar(longsquar) {
            var _this = _super.call(this) || this;
            _this.longsquar = longsquar;
            return _this;
        }
        squar.prototype.calccirmference = function (h) {
            return h * 4;
        };
        squar.whoami = function () {
            console.log("I AM SQUER");
        };
        return squar;
    }(rectangle));
    var r = new rectangle();
    console.log(r.calccirmference(10, 20));
    rectangle.whoami();
    var s = new squar(30);
    console.log(s.calccirmference(100));
    squar.whoami();
})(labone || (labone = {}));
//////////////////2/////////////////a
var q2;
(function (q2) {
    var x = 10;
    x = "o";
    var y = 5;
    y = true;
    ///////generic//////
    function generalidentity(asd) {
        return asd;
    }
    var q = generalidentity(true);
    ////////enum////////
    var color;
    (function (color) {
        color["red"] = "r";
        color["green"] = "g";
        color["yellow"] = "y";
    })(color || (color = {}));
    var c = color.red;
    console.log(c);
})(q2 || (q2 = {}));
//////////////////class////
var person = /** @class */ (function () {
    function person(names, age) {
        this.names = names;
        this.age = age;
    }
    person.prototype.says = function () {
        return ("say hi");
    };
    person.prototype.display = function (names, age) {
        return "names is ".concat(names, " age is").concat(age);
    };
    person.prototype.show = function () {
        return "this class person";
    };
    return person;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(id) {
        var _this = _super.call(this, "lolla", 22) || this;
        _this.id = id;
        return _this;
    }
    ///////////////overtiding/////////
    employee.prototype.show = function () {
        return "this class employee";
    };
    return employee;
}(person));
///////////////////11////////////////
