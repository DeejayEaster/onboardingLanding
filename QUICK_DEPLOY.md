# Quick Deploy to singlelink.io

## Fastest Option: Vercel (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel --prod
```

### Step 4: Add Custom Domain
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Domains
4. Add `singlelink.io` and `www.singlelink.io`
5. Follow the DNS configuration instructions

### Step 5: Configure DNS
In your domain registrar (where you bought singlelink.io), add:

**For root domain:**
- Type: A Record
- Name: @
- Value: [IP provided by Vercel]

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: [Domain provided by Vercel]

## Alternative: Netlify

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login
```bash
netlify login
```

### Step 3: Deploy
```bash
netlify deploy --prod
```

### Step 4: Add Domain
1. Go to https://app.netlify.com
2. Select your site
3. Go to Site settings → Domain management
4. Add custom domain: `singlelink.io`
5. Follow DNS instructions

## Test Build Locally First

Before deploying, test your build:

```bash
npm run build
npm run preview
```

Visit http://localhost:4173 to verify everything works.

## Update Application URLs

Before going live, update `src/config.js` with your production application URLs:

```javascript
export const APP_LOGIN_URL = 'https://app.singlelink.com/login'
```

## Need Help?

See `DEPLOYMENT.md` for detailed instructions and troubleshooting.

