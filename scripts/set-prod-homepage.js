#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

try {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  console.log('Reading package.json from:', packageJsonPath);
  
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  packageJson.homepage = "https://ctsm.umd.edu";
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log('✓ Homepage reset to: https://ctsm.umd.edu');
  process.exit(0);
} catch (error) {
  console.error('✗ Failed to set homepage:', error.message);
  process.exit(1);
}
