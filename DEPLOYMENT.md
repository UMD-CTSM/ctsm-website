# Deployment Guide

This project uses a branch-based deployment strategy with both **automated** (GitHub Actions) and **manual** deployment options.

## Branch-Based Deployment Strategy

- **`main` branch**: Deploys to **Production Server** (https://ctsm.umd.edu) via SCP
- **`dev` branch**: Deploys to **GitHub Pages** (https://umd-ctsm.github.io/ctsm-website)

## Automated Deployment (Recommended)

**GitHub Actions automatically deploys when you push to `main` or `dev` branches.**

### How It Works

1. Push changes to `main` → Automatically deploys to production server
2. Push changes to `dev` → Automatically deploys to GitHub Pages
3. Check the **Actions** tab in GitHub to monitor deployment status

### Initial Setup Required

To enable automated deployments, configure GitHub Secrets. See detailed instructions:

📖 **[GitHub Actions Setup Guide](.github/GITHUB_ACTIONS_SETUP.md)**

**Quick Setup Checklist:**
- [ ] Add `SSH_PRIVATE_KEY` secret (content of `~/.ssh/ctsm_deploy`)
- [ ] Add `SSH_HOST` secret (`162.241.225.96`)
- [ ] Add `SSH_USER` secret (`fxcrsymy`)
- [ ] Add `SSH_PATH` secret (`~/public_html/website_e7c96460`)
- [ ] Enable GitHub Pages in repository settings (Source: GitHub Actions)

Once configured, simply push to deploy:
```bash
# Deploy to production
git checkout main
git push origin main

# Deploy to dev
git checkout dev
git push origin dev
```

---

## Manual Deployment

You can also deploy manually from your local machine.

## Quick Start

### Deploy from Current Branch

Simply run:

```bash
npm run deploy
```

This script automatically detects your current branch and:
- If on `main`: Builds and deploys to production server via SCP
- If on `dev`: Builds and deploys to GitHub Pages
- If on any other branch: Shows an error

### Verify SSH Setup (Production Only)

Before deploying to production (main branch), verify your SSH connection:

```bash
npm run verify-ssh
```

This will test the connection to the production server and provide setup instructions if needed.

## Deployment Methods

### Production Deployment (Main Branch)

**Target:** Production Server at https://ctsm.umd.edu

**Requirements:**
- Must be on `main` branch
- SSH access configured to `fxcrsymy@162.241.225.96`

**Steps:**
```bash
# 1. Switch to main branch
git checkout main

# 2. Verify SSH access (first time only)
npm run verify-ssh

# 3. Deploy
npm run deploy
```

**What happens:**
1. Builds the project with `homepage: "https://ctsm.umd.edu"`
2. Uploads build files via SCP to production server
3. Site is live at https://ctsm.umd.edu

**Alternative (legacy):**
```bash
npm run upload
```

### Development Deployment (Dev Branch)

**Target:** GitHub Pages at https://umd-ctsm.github.io/ctsm-website

**Requirements:**
- Must be on `dev` branch
- `gh-pages` npm package installed (already included)

**Steps:**
```bash
# 1. Switch to dev branch
git checkout dev

# 2. Merge latest changes from main (if needed)
git merge main

# 3. Deploy
npm run deploy
```

**What happens:**
1. Changes `homepage` to `/ctsm-website` temporarily
2. Builds the project with the correct subpath
3. Deploys to GitHub Pages
4. Resets `homepage` back to `https://ctsm.umd.edu`
5. Site is live at https://umd-ctsm.github.io/ctsm-website

## SSH Setup for Production

To deploy to production, you need SSH access to the server.

### First-Time SSH Setup

1. **Generate an SSH key** (if you don't have one):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   Press Enter to accept default locations.

2. **Copy your public key to the server**:
   ```bash
   ssh-copy-id fxcrsymy@162.241.225.96
   ```
   Enter the password when prompted.

3. **Test the connection**:
   ```bash
   ssh fxcrsymy@162.241.225.96 "echo 'Connection successful!'"
   ```
   You should see "Connection successful!" without entering a password.

4. **Verify with npm script**:
   ```bash
   npm run verify-ssh
   ```

### Troubleshooting SSH

If you get "Permission denied":
- Ensure your public key is added to `~/.ssh/authorized_keys` on the server
- Check the permissions of your `~/.ssh` directory (should be 700)
- Check the permissions of your private key (should be 600)

## Manual Homepage Control

If needed, you can manually set the homepage:

```bash
# Set for GitHub Pages
npm run set-gh-homepage

# Set for Production
npm run set-prod-homepage
```

Then run your normal build commands.

## Workflow Recommendations

### For Regular Development (with GitHub Actions)
1. Work on feature branches
2. Create PR and merge to `dev` when ready
3. **Automatic**: GitHub Actions deploys to https://umd-ctsm.github.io/ctsm-website
4. Test thoroughly on GitHub Pages
5. Create PR and merge `dev` to `main` when ready for production
6. **Automatic**: GitHub Actions deploys to https://ctsm.umd.edu

### For Regular Development (Manual Deployment)
1. Work on feature branches
2. Merge to `dev` and manually deploy: `npm run deploy`
3. Test thoroughly at https://umd-ctsm.github.io/ctsm-website
4. Merge `dev` to `main` when ready for production
5. Deploy from `main` to production: `npm run deploy`

### For Hotfixes
1. Create hotfix branch from `main`
2. Make fixes and test locally
3. Merge to `main`
4. **Automatic**: GitHub Actions deploys to production (or use `npm run deploy`)

**Tip:** Use GitHub's pull request workflow for code review before merging to `main` or `dev`.

## Available Scripts

- `npm run deploy` - Smart deployment based on current branch
- `npm run upload` - Direct upload to production (legacy, use `deploy` instead)
- `npm run verify-ssh` - Test SSH connection to production server
- `npm run build` - Build the project
- `npm run set-gh-homepage` - Set homepage for GitHub Pages
- `npm run set-prod-homepage` - Set homepage for production
- After GH Pages deployment completes, `postdeploy` hook restores it to production value
- This ensures production deployments always use the correct homepage
