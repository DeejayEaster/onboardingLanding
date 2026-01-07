# GitHub Repository Setup Guide

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `singlelink-landing` (or your preferred name)
3. Description: "Landing page for SingleLink - client onboarding platform"
4. Choose: **Private** or **Public** (your preference)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Add Remote and Push

After creating the repository, GitHub will show you commands. Use these:

### Option A: If repository is empty (recommended)

```bash
git remote add origin https://github.com/YOUR_USERNAME/singlelink-landing.git
git branch -M main
git push -u origin main
```

### Option B: If you want to use SSH

```bash
git remote add origin git@github.com:YOUR_USERNAME/singlelink-landing.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your GitHub username!**

## Step 3: Verify

Check that everything is pushed:
```bash
git remote -v
git status
```

Visit your repository on GitHub to confirm all files are there.

## Quick Commands Reference

```bash
# Check current status
git status

# See what files will be committed
git status --short

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

## Recommended Repository Settings

After pushing, consider:

1. **Add repository description** on GitHub
2. **Add topics/tags**: `landing-page`, `react`, `vite`, `singlelink`
3. **Set up branch protection** (if working with team)
4. **Enable GitHub Pages** (if you want to use it for deployment)

## Connect to Deployment Platforms

Once on GitHub, you can easily connect to:

- **Vercel**: Import from GitHub, auto-deploys on push
- **Netlify**: Connect GitHub repo, auto-deploys
- **Cloudflare Pages**: Connect GitHub repo, auto-deploys

This enables automatic deployments when you push changes!

## Troubleshooting

**"Repository not found" error:**
- Check repository name is correct
- Verify you have access to the repository
- Try using HTTPS instead of SSH (or vice versa)

**"Permission denied" error:**
- Make sure you're authenticated with GitHub
- Use `gh auth login` if using GitHub CLI
- Or use personal access token

**"Updates were rejected":**
- Someone else pushed changes
- Run `git pull` first, then `git push`

