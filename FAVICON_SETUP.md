# Favicon Setup Guide

To display your SingleLink logo in Google search results and browser tabs, you need to add favicon files to the `public` folder.

## Required Files

Place these files in the `public` folder:

1. **favicon.ico** - Traditional favicon (16x16, 32x32, or 48x48 pixels)
2. **favicon-16x16.png** - 16x16 pixel PNG
3. **favicon-32x32.png** - 32x32 pixel PNG
4. **apple-touch-icon.png** - 180x180 pixel PNG (for iOS devices)
5. **android-chrome-192x192.png** - 192x192 pixel PNG (for Android)
6. **android-chrome-512x512.png** - 512x512 pixel PNG (for Android)
7. **og-image.png** - 1200x630 pixel PNG (for social media sharing)

## Creating Your Favicon

### Option 1: Use an Online Favicon Generator
1. Go to https://realfavicongenerator.net/ or https://favicon.io/
2. Upload your SingleLink "S" logo
3. Generate all required sizes
4. Download the files
5. Place them in the `public` folder

### Option 2: Create Manually
1. Start with your "S" logo at high resolution (at least 512x512)
2. Create versions at these sizes:
   - 16x16, 32x32, 48x48 → favicon.ico
   - 16x16 → favicon-16x16.png
   - 32x32 → favicon-32x32.png
   - 180x180 → apple-touch-icon.png
   - 192x192 → android-chrome-192x192.png
   - 512x512 → android-chrome-512x512.png
   - 1200x630 → og-image.png (for social sharing)

## File Structure

After adding files, your `public` folder should look like:
```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── og-image.png
└── singlelink.mp4
```

## Testing

1. **Local Testing:**
   - Run `npm run dev`
   - Check browser tab for favicon
   - Use browser DevTools to verify files are loading

2. **After Deployment:**
   - Visit your site
   - Check browser tab icon
   - Use Google's Rich Results Test: https://search.google.com/test/rich-results
   - Use Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Use Twitter Card Validator: https://cards-dev.twitter.com/validator

## Google Search Results

After deploying with favicons:
- Google will automatically crawl and update the favicon
- This can take a few days to weeks
- You can speed it up by submitting your sitemap in Google Search Console

## Notes

- The favicon should be simple and recognizable at small sizes
- Use your "S" logo with good contrast
- Ensure the logo is centered and visible at 16x16 pixels
- The og-image.png is for social media previews (Facebook, Twitter, LinkedIn)

