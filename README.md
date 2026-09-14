# Coconut Portfolio Site

This project is a modular, update-friendly personal portfolio website for the resume and project showcase.

## Structure

- `index.html`: page shell
- `styles.css`: all visual styling, responsive layout, and Heytea-inspired aesthetic
- `data/content.js`: structured content for resume, projects, skills, and contact info
- `app.js`: renders all sections from the data module so future content changes only require editing `data/content.js`

## How to preview locally

```bash
cd /Users/duanduan/Downloads/Coconut/Coconut-1
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Update workflow

To edit the portfolio content in the future, update the `window.portfolioData` object in `data/content.js` and refresh the page.
