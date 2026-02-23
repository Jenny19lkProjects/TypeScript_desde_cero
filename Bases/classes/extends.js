"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    class Avenger {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructo Avenger llamado!');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        name;
        realName;
        isMutant;
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.name = name;
            this.realName = realName;
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        get fullName() {
            return `${this.name}-${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor de 3 letras');
            }
            this.name = name;
        }
        getFullnameDesdeXmen() {
            console.log(super.getFullname());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Fernando';
    console.log(wolverine.fullName);
})();
//# sourceMappingURL=extends.js.map