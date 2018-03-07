'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayStuff = sayStuff;

var _redux = require('redux');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const rootReducer = (0, _redux.combineReducers)({
  sayStuff
});

function sayStuff(state = {}, action) {
  switch (action.type) {
    case actions.SAY_HELLO:
      return [...state, {
        to: action.who
      }];
    default:
      return state;
  }
}

exports.default = rootReducer;

//# sourceMappingURL=index.js.map