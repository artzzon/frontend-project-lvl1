#!/usr/bin/env node

import welcome from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const playerName = welcome();
console.log(`Hello, ${playerName}`);

export default playerName;
