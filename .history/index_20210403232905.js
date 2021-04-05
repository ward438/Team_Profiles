const Employee = require('./Employee');
const fs = require('fs');
const colors = require('colors');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});