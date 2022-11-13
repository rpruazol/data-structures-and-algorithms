"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const linked_list_1 = __importDefault(require("../linked-list/linked-list"));
describe('Linked List tests', () => {
    it('create basic linked list', () => {
        const a = new linked_list_1.default('hello');
        chai_1.assert.equal(a.head.value, 'hello');
    });
});
