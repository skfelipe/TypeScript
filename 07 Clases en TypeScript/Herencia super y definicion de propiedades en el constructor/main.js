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
var Avenger = (function () {
    function Avenger(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        console.log("Constructor Avenger Llamado");
    }
    Avenger.prototype.getNombre = function () {
        return this.nombre;
    };
    Avenger.prototype.getNombre2 = function () {
        return this.nombre;
    };
    return Avenger;
}());
var Xmen = (function (_super) {
    __extends(Xmen, _super);
    function Xmen(nombre, nombreReal) {
        var _this = this;
        console.log("Constructor Xmen Llamado");
        _this = _super.call(this, nombre, nombreReal) || this;
        return _this;
    }
    Xmen.prototype.getNombre = function () {
        return _super.prototype.getNombre2.call(this);
    };
    return Xmen;
}(Avenger));
var ciclope = new Avenger("Ciclope", "Scott");
var ciclope2 = new Xmen("Ciclope", "Scott");
console.log(ciclope);
console.log(ciclope2.getNombre());
