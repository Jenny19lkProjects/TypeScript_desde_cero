"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    class Apocalipsis {
        name;
        static intance;
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el único');
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    apocalipsis.changeName('Xavier');
    console.log(apocalipsis);
})();
//# sourceMappingURL=private.js.map