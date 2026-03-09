#!/bin/bash

echo "═══════════════════════════════════════════════════════════"
echo "  GitHub Actions Secrets Setup Helper"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "This script will help you gather the information needed for"
echo "GitHub Actions secrets configuration."
echo ""
echo "You'll need to manually add these secrets to GitHub at:"
echo "https://github.com/UMD-CTSM/ctsm-website/settings/secrets/actions"
echo ""
echo "─────────────────────────────────────────────────────────────"
echo ""

# Check if SSH key exists
if [ -f ~/.ssh/ctsm_deploy ]; then
    echo "✓ SSH private key found at ~/.ssh/ctsm_deploy"
    echo ""
    echo "SECRET: SSH_PRIVATE_KEY"
    echo "─────────────────────────────────────────────────────────────"
    echo "Copy the entire output below (including BEGIN and END lines):"
    echo ""
    cat ~/.ssh/ctsm_deploy
    echo ""
    echo "─────────────────────────────────────────────────────────────"
    echo ""
else
    echo "✗ SSH private key not found at ~/.ssh/ctsm_deploy"
    echo ""
    echo "Please run setup first:"
    echo "  ssh-keygen -t ed25519 -C 'deployment@ctsm' -f ~/.ssh/ctsm_deploy"
    echo "  ssh-copy-id -i ~/.ssh/ctsm_deploy fxcrsymy@162.241.225.96"
    echo ""
    exit 1
fi

echo ""
echo "SECRET: SSH_HOST"
echo "─────────────────────────────────────────────────────────────"
echo "162.241.225.96"
echo ""

echo ""
echo "SECRET: SSH_USER"
echo "─────────────────────────────────────────────────────────────"
echo "fxcrsymy"
echo ""

echo ""
echo "SECRET: SSH_PATH"
echo "─────────────────────────────────────────────────────────────"
echo "~/public_html/website_e7c96460"
echo ""

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  Next Steps:"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "1. Go to: https://github.com/UMD-CTSM/ctsm-website/settings/secrets/actions"
echo "2. Click 'New repository secret' for each secret above"
echo "3. Copy and paste the values exactly as shown"
echo ""
echo "For detailed instructions, see:"
echo "  .github/GITHUB_ACTIONS_SETUP.md"
echo ""
echo "═══════════════════════════════════════════════════════════"
