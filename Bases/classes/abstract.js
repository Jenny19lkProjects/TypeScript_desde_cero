"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    class Mutante {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo';
        }
    }
    class Villan extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villan('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(magneto);
})();
//# sourceMappingURL=abstract.js.map