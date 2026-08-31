# LiDAR WiFi Planner Website

This repository contains the official product website for **LiDAR WiFi Planner**, an iOS and macOS app for LiDAR-based Wi-Fi site surveys, measured heat maps, controller-assisted diagnostics, and professional handover reports.

Product homepage: [https://lidar-wifi-planner.almx.cc](https://lidar-wifi-planner.almx.cc)

The site provides the public pages linked from App Store Connect:

- [Product overview and guide](https://lidar-wifi-planner.almx.cc/product.html)
- [Support](https://lidar-wifi-planner.almx.cc/support.html)
- [Privacy Policy](https://lidar-wifi-planner.almx.cc/privacy.html)
- [Terms of Use](https://lidar-wifi-planner.almx.cc/terms.html)

## About this site

This is a small static GitHub Pages site with no build step. Page text and translations live in `site.js` and `product.js`, then render at runtime based on the visitor's browser language or manual selection. Ten languages are supported: Traditional Chinese, English, German, French, Spanish, Italian, Brazilian Portuguese, Japanese, Korean, and Simplified Chinese.

## Files

- `index.html` — landing page
- `product.html` / `product.js` — product guide and its generated interface mockups
- `support.html` — support and contact
- `privacy.html` — privacy policy
- `terms.html` — terms of use
- `site.js` — localized content and language routing for the support and legal pages
- `styles.css` — shared styling (light/dark, glass cards, layout)
- `assets/` — background artwork

Each page is a thin shell whose header, language and theme selectors, and `#content` article are populated from `site.js` at runtime. The support, privacy, and terms pages also carry a static English copy of their content inline, so they remain readable for clients and crawlers that do not run JavaScript.

## Editing content

Text is organized by language and page in the `translations` object in `site.js` (`meta` rows and `sections` per page). Update each supported language; there is nothing to compile. When changing the support, privacy, or terms copy, update the matching static block in that page's HTML so the no-JavaScript version stays in sync.

## Deployment

GitHub Pages serves the `main` branch as-is; `.nojekyll` keeps files unprocessed. A push to `main` goes live within about a minute.
