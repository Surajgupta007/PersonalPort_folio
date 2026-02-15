# Professional Portfolio Website

A fully responsive, modern, and professional personal portfolio website built with HTML5, CSS3, Bootstrap 5, and JavaScript.

## Features

### Design & UI
- **Clean, Modern Design**: Minimal and elegant interface with professional color scheme
- **Color Scheme**: 
  - White (#FFFFFF)
  - Dark Navy (#0F172A)
  - Accent Blue (#2563EB)
  - Light Gray (#F1F5F9)
- **Responsive Layout**: Fully responsive on all devices (desktop, tablet, mobile)
- **Professional Typography**: Uses Google Fonts (Poppins)
- **Smooth Animations**: CSS animations and scroll-triggered effects

### Pages

1. **Home Page (index.html)**
   - Hero section with profile image and tagline
   - Call-to-action buttons
   - Bootstrap Carousel with featured work
   - Featured projects showcase with cards
   - Skills preview section
   - About preview
   - Contact CTA

2. **About Page (about.html)**
   - Detailed introduction and bio
   - Education timeline
   - Work experience timeline
   - Technical skills with progress bars
   - Achievements statistics
   - Call-to-action

3. **Projects Page (projects.html)**
   - 9 project cards with images, descriptions, and links
   - Technology tags for each project
   - Live demo and GitHub buttons
   - Services offered section
   - Hover effects on cards

4. **Certificates Page (certificates.html)**
   - 9 certificate cards
   - Bootstrap modals to view full certificates
   - Certificate details and issuing organizations
   - Professional certificates and training
   - CTA for collaboration

5. **Contact Page (contact.html)**
   - Contact form with JavaScript validation
   - Real-time form field validation
   - Contact information section
   - Multi-channel communication options
   - Google Maps embed
   - FAQ section with accordion
   - Social media links

### Components

- **Responsive Navigation Bar**
  - Sticky navbar
  - Mobile hamburger menu
  - Smooth scroll navigation
  - Active link highlighting

- **Footer**
  - Multiple sections with links
  - Social media icons
  - Copyright information

- **Bootstrap Elements**
  - Cards (projects, services, certificates)
  - Carousel (featured work)
  - Modals (certificate zoom)
  - Accordion (FAQ)
  - Progress bars (skills)
  - Grid layout

### JavaScript Features

1. **Smooth Scrolling**: Smooth scroll to sections when clicking navigation links
2. **Form Validation**: Real-time validation for contact form
   - Email format validation
   - Required field validation
   - Minimum length validation
   - Visual feedback (error/success states)
3. **Mobile Navigation**: Navbar collapse and toggle for mobile devices
4. **Active Page Detection**: Highlights current page in navigation
5. **Scroll Animations**: Elements fade in when scrolling into view
6. **Progress Bar Animation**: Animates skill progress bars when visible
7. **Certificate Modal**: Zoom and view certificates in modal

## File Structure

```
personalportfolio/
├── index.html (Home page)
├── about.html (About page)
├── projects.html (Projects page)
├── certificates.html (Certificates page)
├── contact.html (Contact page)
├── assets/
│   ├── css/
│   │   └── styles.css (Custom styling)
│   ├── js/
│   │   └── script.js (JavaScript functionality)
│   └── images/ (Image assets folder)
└── README.md (This file)
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)

### Installation

1. **Clone or Download** the repository to your local machine

2. **Navigate to the folder**:
   ```bash
   cd personalportfolio
   ```

3. **Open in browser**:
   - Simply double-click `index.html` to open in your default browser, OR
   - Use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (if you have http-server installed)
     http-server
     ```
   - Then open `http://localhost:8000` in your browser

## Customization Guide

### Change Personal Information

1. **Home Page** (`index.html`):
   - Change name in hero section
   - Update tagline and description
   - Replace hero image URL (line with `hero-image img src`)

2. **About Page** (`about.html`):
   - Update about text and education/experience details
   - Modify timeline items
   - Update skills with your expertise

3. **Projects Page** (`projects.html`):
   - Replace project images and descriptions
   - Update project links (Live Demo and GitHub buttons)
   - Modify technology tags

4. **Certificates Page** (`certificates.html`):
   - Update certificate details
   - Replace certificate images
   - Change issuing organizations and dates

5. **Contact Page** (`contact.html`):
   - Update contact information (phone, email, address)
   - Replace Google Maps embed location
   - Update social media links

### Change Colors

Open `assets/css/styles.css` and modify the CSS variables at the top:

```css
:root {
  --primary-dark: #0F172A;
  --primary-white: #FFFFFF;
  --accent-blue: #2563EB;
  --light-gray: #F1F5F9;
  --text-muted: #64748B;
  --border-light: #E2E8F0;
}
```

### Change Fonts

The portfolio uses Google Fonts "Poppins". To change:

1. Open any HTML file
2. Find the Google Fonts link in the `<head>` section
3. Replace with your preferred font
4. Update the CSS `font-family` property in `styles.css`

### Add Images

1. Place images in the `assets/images/` folder
2. Update image URLs in HTML files to point to the correct path
3. Example: `<img src="assets/images/your-image.jpg" alt="Description">`

## Features in Detail

### Form Validation
The contact form includes:
- **Name validation**: Minimum 3 characters
- **Email validation**: Valid email format check
- **Message validation**: Minimum 10 characters
- **Real-time feedback**: Visual error/success indicators
- **Submit feedback**: Button state changes on submission

### Responsive Design Breakpoints
- **Large screens**: Full layout with multi-column designs
- **Tablets (768px)**: Adjusted spacing and single column layouts
- **Mobile (576px)**: Optimized mobile layout with touch-friendly elements

### Accessibility Features
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Minified CSS and optimized code
- Image optimization (use optimized formats)
- Smooth animations that don't impact performance
- Lazy loading for scroll animations
- Bootstrap CDN for faster loading

## Dependencies

External libraries used:
- **Bootstrap 5.3.0**: CSS Framework (CDN)
- **Font Awesome 6.4.0**: Icon library (CDN)
- **Google Fonts**: Poppins font (CDN)
- **Vanilla JavaScript**: No additional JS libraries needed

## Deployment

### Deploy to GitHub Pages (Free)

1. Create a GitHub repository
2. Push your portfolio files
3. Go to repository Settings → Pages
4. Select main branch as source
5. Your site will be live at: `https://yourusername.github.io/repositoryname`

### Deploy to Other Platforms

- **Netlify**: Drag and drop your folder
- **Vercel**: Connect your git repository
- **Heroku**: Deploy with simple commands
- **Traditional Hosting**: Upload files via FTP

## Maintenance

### Regular Updates
- Update projects and certifications regularly
- Keep social media links current
- Update skills and proficiencies
- Refresh project images and descriptions
- Monitor contact form submissions

### Performance Monitoring
- Test on various devices regularly
- Check page load times
- Test form functionality
- Verify all links work properly

## Tips for Best Results

1. **High-Quality Images**: Use professional photos and project screenshots
2. **Compelling Copy**: Write clear, engaging descriptions
3. **Regular Updates**: Keep portfolio content current
4. **Mobile Testing**: Test on real devices, not just browser emulation
5. **SEO Optimization**: Add meta descriptions and keywords
6. **Analytics**: Add Google Analytics to track visitors
7. **Backup**: Keep regular backups of your portfolio

## Troubleshooting

### Form not working
- Check browser console for JavaScript errors
- Ensure all HTML form IDs match JavaScript references
- Test in different browsers

### Styles not loading
- Verify CSS file path is correct
- Check browser cache (Ctrl+Shift+Delete)
- Ensure correct CDN links are included

### Carousel not working
- Verify Bootstrap JavaScript is loaded
- Check carousel IDs are unique
- Ensure proper Bootstrap classes are used

### Mobile menu not collapsing
- Verify Bootstrap JS is loaded
- Check viewport meta tag is present
- Test on actual mobile device

## License

This portfolio template is free to use and modify for personal use.

## Support

For questions or issues, feel free to:
- Check the code comments
- Review the HTML structure
- Inspect styles in browser DevTools

## Credits

- Bootstrap 5.3.0
- Font Awesome Icons
- Google Fonts (Poppins)
- Unsplash (sample images)

---

**Version**: 1.0  
**Last Updated**: February 15, 2026  
**Author**: Created with ❤️ for Suraj Gupta
