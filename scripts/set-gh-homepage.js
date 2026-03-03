#!/usr/bin/env node
// Script to set homepage for GitHub Pages deployment
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.homepage = "/ctsm-website";

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
console.log('✓ Homepage set to: /ctsm-website');
