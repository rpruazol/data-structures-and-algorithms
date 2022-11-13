"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const calculator_1 = require("../code-challenges/calculator");
describe('Calculator tests', () => {
    it("calculator returns 20 when 5 + 5", () => {
        const result = (0, calculator_1.addition)(5, 5);
        chai_1.assert.equal(result, 10);
    });
});
