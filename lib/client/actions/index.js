'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHello = sayHello;
// action types

const SAY_HELLO = exports.SAY_HELLO = 'SAY_HELLO';

// action creators

function sayHello(who) {
  return {
    type: SAY_HELLO,
    who
  };
}

//# sourceMappingURL=index.js.map