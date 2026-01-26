# Deployment Guide for singlelink.io

This guide covers deploying your SingleLink landing page to singlelink.io using various platforms.

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Follow the prompts. When asked for project settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Add Custom Domain**:
   - Go to your project dashboard on vercel.com
   - Navigate to Settings → Domains
   - Add `singlelink.io` and `www.singlelink.io`
   - Follow DNS configuration instructions

4. **DNS Configuration**:
   - Add a CNAME record: `@` → `cname.vercel-dns.com`
   - Or A record: `@` → Vercel's IP (provided in dashboard)
   - Add CNAME for www: `www` → `cname.vercel-dns.com`

### Option 2: Netlify

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   netlify deploy --prod
   ```
   First time will ask you to login and configure.

3. **Add Custom Domain**:
   - Go to Site settings → Domain management
   - Add custom domain: `singlelink.io`
   - Follow DNS instructions

4. **DNS Configuration**:
   - Add A record: `@` → Netlify's IP (provided)
   - Add CNAME: `www` → your-site.netlify.app

### Option 3: Cloudflare Pages

1. **Connect Repository**:
   - Go to Cloudflare Dashboard → Pages
   - Connect your Git repository (GitHub/GitLab)
   - Or upload the `dist` folder directly

2. **Build Settings**:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`

3. **Add Custom Domain**:
   - Go to your Pages project → Custom domains
   - Add `singlelink.io`
   - Cloudflare will automatically configure DNS if domain is on Cloudflare

### Option 4: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Update vite.config.js** (see below)

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Set source to `gh-pages` branch
   - Add custom domain: `singlelink.io`

## Manual Deployment (Traditional Hosting)

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** to your web server:
   - Via FTP/SFTP
   - Via SSH/SCP
   - Via hosting control panel

3. **Configure web server**:
   - Point document root to `dist` folder
   - Ensure all routes redirect to `index.html` (for React Router if added later)

## Pre-Deployment Checklist

- [ ] Update `src/config.js` with production application URLs
- [ ] Test build locally: `npm run build && npm run preview`
- [ ] Verify all links work correctly
- [ ] Check video file loads properly
- [ ] Test on mobile devices
- [ ] Verify SEO meta tags in `index.html`

## DNS Configuration for singlelink.io

Regardless of hosting platform, you'll need to configure DNS:

**For root domain (singlelink.io):**
- Option A: A record pointing to hosting IP
- Option B: CNAME record (some providers support this)

**For www subdomain:**
- CNAME record: `www` → your hosting provider's domain

**Example DNS Records:**
```
Type    Name    Value
A       @       [Hosting IP]
CNAME   www     [Hosting domain]
```

## Environment-Specific Configuration

If you need different URLs for staging/production, consider using environment variables:

1. Create `.env.production`:
   ```
   VITE_APP_URL=https://app.singlelink.io
   ```

2. Update `src/config.js`:
   ```javascript
   export const APP_LOGIN_URL = import.meta.env.VITE_APP_URL + '/login'
   ```

## Troubleshooting

**Build fails:**
- Run `npm install` to ensure dependencies are installed
- Check Node.js version (should be 16+)

**404 on routes:**
- Configure server to serve `index.html` for all routes (SPA fallback)

**Video not loading:**
- Ensure video file is in `public` folder
- Check file path is correct
- Verify file size isn't too large (consider compression)

**Domain not working:**
- Wait for DNS propagation (can take up to 48 hours)
- Check DNS records are correct
- Verify SSL certificate is issued (automatic on most platforms)

