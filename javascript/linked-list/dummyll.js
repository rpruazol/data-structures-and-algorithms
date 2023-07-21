'use strict';

const { LinkedList, Node } = require('./linkedlist');




const dummyll = new LinkedList();
dummyll.insert('a linked list');
dummyll.insert('is');
dummyll.insert('this');

// {this}->{is}->{a linked list}->NULL

module.exports = {dummyll};