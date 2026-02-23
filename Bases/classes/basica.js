"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    class Avenger {
        name;
        team;
        realName;
        static avgAge = 35;
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name}(${this.team})`;
        }
    }
    const antman = new Avenger('Antman', 'Scott Lang', 'Capitan');
    console.log(antman);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
//# sourceMappingURL=basica.js.map