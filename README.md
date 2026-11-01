# Week 4: Enhancing Web Page Performance and Accessibility

## Project
**PixelCraft – Accessible and Performance-conscious Creative Studio Website**

## Overview
This project improves a responsive creative studio webpage with semantic HTML, keyboard support, accessible form controls, responsive styling, and lightweight assets. It uses plain HTML, CSS, and JavaScript without a framework or external font dependency.

## Project files
- `index.html` – semantic page structure, metadata, accessible labels, and image alternative text.
- `style.css` – responsive layout, reusable CSS variables, visible focus styles, and reduced-motion support.
- `script.js` – accessible mobile navigation, Escape-key handling, and browser form validation.
- `assets/studio-illustration.svg` – small vector illustration with intrinsic dimensions.
- `Week4_Task_Report.docx` – detailed report (also supplied separately).

## Accessibility improvements
1. Added `lang="en"`, a descriptive page title, and a meta description.
2. Used semantic `header`, `nav`, `main`, `section`, `article`, `form`, and `footer` elements.
3. Added a skip link so keyboard users can jump to the main content.
4. Added a clear keyboard focus indicator using `:focus-visible`.
5. Used real labels connected to form controls with `for` and `id`.
6. Added meaningful alternative text to the illustration; decorative symbols are hidden from assistive technology.
7. Added `aria-label`, `aria-controls`, and `aria-expanded` to the mobile menu button, plus a live status region for form feedback.
8. Supported Escape to close the mobile menu and return focus to the menu button.
9. Used readable text/background colors and responsive layouts.
10. Respected `prefers-reduced-motion`.

## Performance improvements
1. Avoided external JavaScript libraries, web fonts, and third-party trackers.
2. Used a compact SVG illustration instead of a large photographic asset.
3. Set image width and height to reserve layout space and reduce layout shift.
4. Used `fetchpriority="high"` for the main hero illustration.
5. Loaded the JavaScript with `defer` so it does not block HTML parsing.
6. Kept CSS selectors simple and reused variables to reduce duplication.
7. Used responsive CSS instead of loading separate layouts or assets for different devices.

## Testing process
The project should be tested after opening `index.html` in a browser:
- **Lighthouse (Chrome DevTools):** run Performance, Accessibility, Best Practices, and SEO audits.
- **WAVE:** check for missing labels, contrast warnings, and structural issues.
- **axe DevTools:** run an accessibility scan and review any reported issues.
- **Keyboard test:** use Tab, Shift+Tab, Enter, Space, and Escape without a mouse.
- **Responsive test:** inspect narrow mobile, tablet, and desktop widths.

Important: no Lighthouse, WAVE, or axe score is claimed in this report. Run these tools on the final deployed or locally served page and record the actual results before submission.

## How to run
1. Make a folder.
2. Open the folder in Visual Studio Code and write the code in it.
3. Open `index.html` in a browser, or use the Live Server extension.
4. Test the navigation and form with both mouse and keyboard.

## Conclusion
This task demonstrates how performance and accessibility can be considered together. The webpage uses semantic structure, clear keyboard focus, accessible navigation and form labels, responsive styling, and lightweight assets. The project helped develop a better understanding of inclusive frontend development and practical website optimization.
