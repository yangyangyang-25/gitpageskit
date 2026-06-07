export const siteConfig = {
  name: "GitPagesKit",
  title: "GitPagesKit",
  description:
    "Hands-on GitHub Pages guides for static sites, custom domains, and automated deployments.",
  repo: "gitpageskit",
  basePath: "",
  siteUrl: "https://gitpageskit.pages.dev",
  nav: [
    { href: "/", label: "Home" },
    { href: "/blog/", label: "Blog" },
    { href: "/about/", label: "About" }
  ],
  categories: [
    "GitHub Pages Basics",
    "Static Site Deployments",
    "Custom Domains",
    "GitHub Actions",
    "Troubleshooting"
] as const
};

export type SiteCategory = (typeof siteConfig.categories)[number];
