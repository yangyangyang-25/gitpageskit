# GitPagesKit

Static SEO content site for Hands-on GitHub Pages guides for static sites, custom domains, and automated deployments.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run check
npm run build
```

## GitHub Pages

1. Push to the `main` branch.
2. Set Pages source to GitHub Actions.
3. The workflow in `.github/workflows/deploy.yml` publishes `dist`.
