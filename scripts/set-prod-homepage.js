#!/usr/bin/env node
// Script to set homepage for production deployment
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.homepage = "https://ctsm.umd.edu";

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
console.log('✓ Homepage set to: https://ctsm.umd.edu');
