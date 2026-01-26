"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')} `;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'herrera');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map