"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 sup',
            city: 'Ottwa'
        },
        getFullAdress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'k2O'
        },
        getFullAdress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=complejas.js.map