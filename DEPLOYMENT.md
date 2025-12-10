# Netlify Deployment Guide

## Quick Deploy

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Deploy on Netlify:**
   - Go to [https://app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub)
   - Select this repository
   - Netlify will auto-detect the build settings from `netlify.toml`
   - Click "Deploy site"

3. **Done!** Your site will be live in 2-3 minutes at a Netlify URL like:
   `https://your-site-name.netlify.app`

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize and deploy:**
   ```bash
   netlify init
   # Follow the prompts, accept defaults

   netlify deploy --prod
   ```

## Build Configuration

All build settings are configured in `netlify.toml`:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your site in Netlify dashboard
2. Click "Domain settings"
3. Click "Add custom domain"
4. Follow instructions to configure DNS

## Environment Variables

This project doesn't require any environment variables, but if you add API keys later:

1. Go to Site settings → Environment variables
2. Add your variables
3. Redeploy the site

## Pre-Deployment Checklist

✅ **Completed:**
- [x] `netlify.toml` configuration file created
- [x] `_redirects` file for SPA routing
- [x] Build scripts verified in `package.json`
- [x] Resume PDF: `public/Hannah_Xiao_Res.pdf` ✓
- [x] Cover Letter PDF: `public/Hannah_Xiao_CL.pdf` ✓
- [x] All dependencies installed

📝 **Before deploying:**
- [ ] Test build locally: `npm run build`
- [ ] Preview build: `npm run preview`
- [ ] Update contact information if needed
- [ ] Update social media links in Footer.jsx
- [ ] Review all content for accuracy

## Troubleshooting

### Build fails on Netlify
- Check the build log in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### Page shows 404
- Check that `_redirects` file is in the `public` folder
- Verify `netlify.toml` has the redirect rules

### PDFs not downloading
- Ensure PDF files are in the `public` folder
- File names must match exactly:
  - `Hannah_Xiao_Res.pdf`
  - `Hannah_Xiao_CL.pdf`

### Styles not loading
- Clear browser cache
- Check that `styled-components` is in dependencies
- Verify build completed successfully

## Performance Optimization

The site is already optimized with:
- Static asset caching (1 year)
- PDF caching (1 day)
- Security headers
- Gzip compression (automatic by Netlify)

## Monitoring

After deployment:
- Netlify provides automatic SSL certificate
- Analytics available in Netlify dashboard
- Form submissions can be handled by Netlify Forms

## Update and Redeploy

To update your live site:

```bash
# Make changes locally
git add .
git commit -m "Update portfolio content"
git push origin main

# Netlify will automatically rebuild and deploy
```

## Cost

- Free tier includes:
  - 100 GB bandwidth/month
  - Unlimited personal projects
  - Automatic HTTPS
  - Continuous deployment from Git

Perfect for this portfolio site!

## Support

- Netlify Docs: https://docs.netlify.com
- Netlify Community: https://answers.netlify.com
- Vite Docs: https://vitejs.dev

---

**Your portfolio is ready to deploy!** 🚀
