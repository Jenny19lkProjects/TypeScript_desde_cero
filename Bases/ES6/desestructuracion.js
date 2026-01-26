"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Doweney Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.1232232
    };
    const printAvenger = ({ ironman, ...resto }) => {
        console.log(ironman, resto);
    };
    const AvengerArr = ['Cap. America', true, 150.15];
    const [capitan, iroman, seriaunNumero] = AvengerArr;
    console.log({ iroman, capitan });
})();
//# sourceMappingURL=desestructuracion.js.map