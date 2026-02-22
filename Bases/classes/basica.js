"use strict";

(() => {
    class Avenger {
        name;
        team;
        realName;
        static avgAge = 35;
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    const antman = new Avenger('Antman', 'Scott Lang', 'Capitan');
    console.log(antman);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=basica.js.map