#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Get current branch
  const currentBranch = execSync('git branch --show-current').toString().trim();
  console.log(`Current branch: ${currentBranch}`);
  
  if (currentBranch === 'main') {
    console.log('\n📦 Deploying to PRODUCTION server via SCP...\n');
    
    // Build the project
    console.log('Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Deploy via SCP
    console.log('\nUploading to production server...');
    execSync('scp -r ./build/ fxcrsymy@162.241.225.96:~/public_html/website_e7c96460', { stdio: 'inherit' });
    
    console.log('\n✓ Successfully deployed to production server!');
    console.log('URL: https://ctsm.umd.edu');
    
  } else if (currentBranch === 'dev') {
    console.log('\n📦 Deploying to GITHUB PAGES...\n');
    
    // Set GitHub Pages homepage
    console.log('Setting GitHub Pages homepage...');
    execSync('npm run set-gh-homepage', { stdio: 'inherit' });
    
    // Build the project
    console.log('\nBuilding project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Deploy to GitHub Pages
    console.log('\nDeploying to GitHub Pages...');
    execSync('npx gh-pages -d build', { stdio: 'inherit' });
    
    // Reset homepage
    console.log('\nResetting homepage...');
    execSync('npm run set-prod-homepage', { stdio: 'inherit' });
    
    console.log('\n✓ Successfully deployed to GitHub Pages!');
    console.log('URL: https://umd-ctsm.github.io/ctsm-website');
    
  } else {
    console.error(`\n✗ Unknown branch: ${currentBranch}`);
    console.error('Deployment is only configured for:');
    console.error('  - main: deploys to production server via SCP');
    console.error('  - dev: deploys to GitHub Pages');
    process.exit(1);
  }
  
} catch (error) {
  console.error('\n✗ Deployment failed:', error.message);
  
  // Make sure to reset homepage if we were deploying to GitHub Pages
  try {
    execSync('npm run set-prod-homepage', { stdio: 'inherit' });
  } catch (e) {
    // Ignore errors during cleanup
  }
  
  process.exit(1);
}
