# GitHub Actions Deployment - Setup Instructions

## Problem Found

The deployment is failing because the environment secrets (SSH_HOST, SSH_USER, SSH_PATH) are not being read correctly. Only SSH_PRIVATE_KEY is being loaded.

## Solution: Use Repository Secrets Instead

The workflow has been updated to support **Repository Secrets** which are simpler to configure than Environment Secrets.

### Steps to Fix:

1. **Go to Repository Settings:**
   https://github.com/UMD-CTSM/ctsm-website/settings/secrets/actions

2. **Add These 4 Secrets** (as Repository Secrets, NOT Environment Secrets):
   - `SSH_PRIVATE_KEY` - Your SSH private key
   - `SSH_HOST` - `162.241.225.96`
   - `SSH_USER` - `fxcrsymy`
   - `SSH_PATH` - `~/public_html/website_e7c96460`

3. **Get Your SSH Private Key:**
   ```bash
   cat ~/.ssh/ctsm_deploy
   ```
   Copy the entire output including BEGIN and END lines.

4. **Remove Environment Secrets** (if you added them):
   Go to: https://github.com/UMD-CTSM/ctsm-website/settings/environments
   - Select the "Main" environment
   - Delete the SSH_HOST, SSH_USER, and SSH_PATH secrets (SSH_PRIVATE_KEY can stay)

5. **Test the Deployment:**
   Make a small commit and push to main:
   ```bash
   git add .
   git commit -m "Test: Final deployment test"
   git push origin main
   ```

## Why Repository Secrets?

- **Simpler configuration** - Access secrets directly without environment variables
- **More reliable** - No environment isolation issues
- **Better for CI/CD** - Standard GitHub practice for deployment workflows

## Debugging

If deployment still fails, check the Actions logs:
https://github.com/UMD-CTSM/ctsm-website/actions

Look for "Setup SSH" step output which shows:
- `DEBUG: SSH_PRIVATE_KEY length: XXX` 
- `DEBUG: SSH_HOST value: '...'`
- `DEBUG: SSH_USER value: '...'`
- `DEBUG: SSH_PATH value: '...'`

All values should be populated.
