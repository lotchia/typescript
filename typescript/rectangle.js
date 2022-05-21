"use strict";
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
exports.__esModule = true;
exports.all = void 0;
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
exports.all = true;
