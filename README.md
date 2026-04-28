# Bad Performance Test Site (Complex Version)

This is a multi-section landing page intentionally designed to fail modern web performance and accessibility standards. It is perfect for tutorials demonstrating auditing tools like Lighthouse or custom performance MCPs.

## Features & "Flaws"

### 🚀 Performance (Lighthouse)
- **Huge Unoptimized Images**: Uses high-res (4000px+) Unsplash images without resizing or compression.
- **No Image Dimensions**: Images lack `width` and `height` attributes, causing significant **Cumulative Layout Shift (CLS)**.
- **Render-Blocking Resources**:
  - Multiple CSS files in the `<head>`.
  - A 400ms blocking JavaScript in the `<head>` (`js/analytics.js`).
- **Main Thread Work**: `js/main.js` forces a layout reflow in a loop on load and contains memory-heavy objects.

### ♿ Accessibility (A11y)
- **Missing Alt Text**: All `<img>` tags are missing `alt` attributes.
- **Form Issues**: The contact form uses placeholders only—no `<label>` tags.
- **Contrast Issues**: Several sections use light-colored text on white backgrounds, failing WCAG contrast checks.
- **Focus States**: CSS explicitly removes focus outlines (`outline: none`).
- **Touch Targets**: Footer links are tiny (8px) and too close together.

### 🔍 SEO & Best Practices
- **Missing Viewport**: No `<meta name="viewport">` tag, making it fail mobile-friendliness checks.
- **Multiple H1s**: Uses multiple `<h1>` tags, confusing search engines about the page's primary topic.
- **No Meta Description**: Missing the standard SEO summary tag.
- **No Language Attribute**: The `<html>` tag does not define a language.

## Directory Structure
- `index.html`: The main landing page.
- `css/`:
  - `global.css`: General layout and bloated styles.
  - `components.css`: Extra styles to increase network requests.
- `js/`:
  - `analytics.js`: Render-blocking "slow" script.
  - `main.js`: Interaction logic and performance bottlenecks.

## How to Host on GitHub Pages
1. Push this entire directory to a GitHub repository.
2. Go to **Settings > Pages**.
3. Select the `main` branch and `/root` folder.
4. Save and wait for the live URL.
