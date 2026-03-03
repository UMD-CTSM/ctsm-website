#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

try {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  console.log('Reading package.json from:', packageJsonPath);
  
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  packageJson.homepage = "/ctsm-website";
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log('✓ Homepage set to: /ctsm-website');
  process.exit(0);
} catch (error) {
  console.error('✗ Failed to set homepage:', error.message);
  process.exit(1);
}
