"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        if (text.length > 3) {
            return true;
        }
        else {
            return false;
        }
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Fer'));
//# sourceMappingURL=validation.js.map