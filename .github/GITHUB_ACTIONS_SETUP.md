# GitHub Actions Setup Guide

This repository uses GitHub Actions to automatically deploy the website based on the branch:
- **`main` branch** → Production Server (https://ctsm.umd.edu) via SSH
- **`dev` branch** → GitHub Pages (https://umd-ctsm.github.io/ctsm-website)

## Required GitHub Secrets

To enable automatic deployment, you need to configure secrets in your GitHub repository.

### Setting Up Secrets

You can add secrets either as **Repository secrets** (recommended for simplicity) or **Environment secrets** (recommended for additional control and approval workflows).

#### Option 1: Repository Secrets (Simple)

1. Go to your GitHub repository: https://github.com/UMD-CTSM/ctsm-website
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add each secret listed below

#### Option 2: Environment Secrets (Advanced - What You Used)

1. Go to your GitHub repository: https://github.com/UMD-CTSM/ctsm-website
2. Click on **Settings** → **Environments**
3. Select or create the **"Main"** environment
4. Click **Add secret** and add each secret listed below

**Note:** The workflow is configured to use the **"Main"** environment for production deployments.

### Production Deployment Secrets

These secrets are required for deploying to the production server from the `main` branch:

| Secret Name | Value | Description |
|------------|-------|-------------|
| `SSH_PRIVATE_KEY` | Contents of `~/.ssh/ctsm_deploy` | Your SSH private key for production server access |
| `SSH_HOST` | `162.241.225.96` | The production server IP address |
| `SSH_USER` | `fxcrsymy` | SSH username for the production server |
| `SSH_PATH` | `~/public_html/website_e7c96460` | Deployment path on the server |

### How to Get the SSH Private Key

On your local machine where you set up the SSH key:

```bash
# Display the private key (this will be used for SSH_PRIVATE_KEY secret)
cat ~/.ssh/ctsm_deploy
```

**⚠️ Important Security Notes:**
- The private key should remain confidential
- Only add it as a GitHub Secret, never commit it to the repository
- The key displayed should start with `-----BEGIN OPENSSH PRIVATE KEY-----`
- Copy the ENTIRE key including the BEGIN and END lines

### Step-by-Step Secret Configuration

#### 1. SSH_PRIVATE_KEY

```bash
# On your local machine
cat ~/.ssh/ctsm_deploy
```

Copy the entire output and paste it into GitHub:
- Name: `SSH_PRIVATE_KEY`
- Secret: Paste the entire private key content

#### 2. SSH_HOST

- Name: `SSH_HOST`
- Secret: `162.241.225.96`

#### 3. SSH_USER

- Name: `SSH_USER`
- Secret: `fxcrsymy`

#### 4. SSH_PATH

- Name: `SSH_PATH`
- Secret: `~/public_html/website_e7c96460`

## GitHub Pages Configuration

For GitHub Pages deployment (dev branch), you need to enable GitHub Pages in your repository:

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save the settings

## Environment Setup (Optional)

The workflow is configured to use the **"Main"** environment for production deployments. If you added secrets as environment secrets (like you did), the environment should already exist. Otherwise, you can create it:

### Main Environment (Production)

1. Go to **Settings** → **Environments**
2. Click **New environment** (or select existing **"Main"**)
3. Name: `Main`
4. Add protection rules (optional):
   - ✅ Required reviewers (optional: add team members who should approve deployments)
   - ✅ Deployment branches: `main` only
5. Add the four SSH secrets listed above if using environment secrets

### GitHub Pages Environment

This is automatically created when you use GitHub Pages actions.

## Testing the Setup

### Test Production Deployment

1. Make a change to the code
2. Commit and push to `main` branch:
   ```bash
   git checkout main
   git add .
   git commit -m "Test: trigger deployment"
   git push origin main
   ```
3. Go to **Actions** tab in GitHub to see the workflow running
4. Check https://ctsm.umd.edu after successful deployment

### Test Dev Deployment

1. Switch to dev branch:
   ```bash
   git checkout dev
   git merge main  # Merge latest changes
   git push origin dev
   ```
2. Go to **Actions** tab to see the workflow running
3. Check https://umd-ctsm.github.io/ctsm-website after successful deployment

## Troubleshooting

### Workflow Fails with "Permission denied (publickey)"

- Verify that `SSH_PRIVATE_KEY` secret contains the correct private key
- Ensure the public key (`~/.ssh/ctsm_deploy.pub`) is added to server's `~/.ssh/authorized_keys`
- Check that secrets are named exactly as specified (case-sensitive)

### Build Fails

- Check the Actions logs for specific error messages
- Ensure all dependencies are properly listed in `package.json`
- Verify that the build works locally with `npm run build`

### GitHub Pages Shows 404

- Ensure GitHub Pages is enabled in repository settings
- Check that the source is set to "GitHub Actions"
- Verify the build artifact includes all necessary files

## Manual Deployment

If you prefer to deploy manually, you can still use:

```bash
# From main branch (production)
npm run deploy

# From dev branch (GitHub Pages)
npm run deploy
```

See [DEPLOYMENT.md](../../DEPLOYMENT.md) for manual deployment instructions.

## Workflow File

The workflow configuration is located at: `.github/workflows/deploy.yml`

You can view the workflow runs and logs in the **Actions** tab of your GitHub repository.
