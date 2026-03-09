#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🔐 Verifying SSH connection to production server...\n');

const SSH_HOST = 'fxcrsymy@162.241.225.96';
const SSH_PATH = '~/public_html/website_e7c96460';

try {
  // Test SSH connection
  console.log(`Testing connection to ${SSH_HOST}...`);
  execSync(`ssh -o ConnectTimeout=10 ${SSH_HOST} "echo 'Connection successful!'"`, { stdio: 'inherit' });
  
  console.log(`\nChecking remote directory: ${SSH_PATH}...`);
  execSync(`ssh ${SSH_HOST} "ls -la ${SSH_PATH}"`, { stdio: 'inherit' });
  
  console.log('\n✓ SSH connection verified successfully!');
  console.log('\nYou can deploy to production using:');
  console.log('  npm run deploy');
  
} catch (error) {
  console.error('\n✗ SSH connection failed!');
  console.error('\nTo set up SSH access:');
  console.error('1. Generate an SSH key if you don\'t have one:');
  console.error('   ssh-keygen -t ed25519 -C "your_email@example.com"');
  console.error('');
  console.error('2. Copy your public key to the server:');
  console.error(`   ssh-copy-id ${SSH_HOST}`);
  console.error('');
  console.error('3. Test the connection:');
  console.error(`   ssh ${SSH_HOST} "echo 'Connection successful!'"`);
  console.error('');
  console.error('4. Run this script again to verify:');
  console.error('   npm run verify-ssh');
  
  process.exit(1);
}
