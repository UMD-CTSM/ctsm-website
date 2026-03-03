# Deployment Guide

This project supports two deployment methods with automatic `homepage` management.

## Production Deployment (ctsm.umd.edu)

Use the `upload` command to deploy to production:

```bash
npm run upload
```

This will:
1. Build the project with `homepage: "https://ctsm.umd.edu"`
2. Upload to the production server via SCP

**Note:** The homepage remains set to production after this command.

## GitHub Pages Deployment

Use the standard gh-pages deploy command:

```bash
npm run deploy
```

This will:
1. Change `homepage` to `/ctsm-website` (via `predeploy` hook)
2. Build the project with the correct subpath
3. Deploy to GitHub Pages
4. Reset `homepage` back to `https://ctsm.umd.edu` (via `postdeploy` hook)

## Manual Homepage Control

If needed, you can manually set the homepage:

```bash
# Set for GitHub Pages
npm run set-gh-homepage

# Set for Production
npm run set-prod-homepage
```

Then run your normal build and deployment commands.

## How It Works

- Default `homepage` in `package.json` is `https://ctsm.umd.edu`
- When deploying to GH Pages, `predeploy` hook automatically changes it to `/ctsm-website`
- After GH Pages deployment completes, `postdeploy` hook restores it to production value
- This ensures production deployments always use the correct homepage
