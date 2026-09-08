# 🎓 One-Page Instructional Designer Portfolio

A modern, professional one-page website template designed specifically for instructional designers, learning experience designers, and educational technology professionals.

## ✨ Features

- 📄 **Single Page Design** - All content on one scrolling page with smooth navigation
- 🎨 **Professional Color Palette** - Warm, sophisticated colors (#fffcf2, #ccc5b9, #403d39, #252422, #eb5e28)
- 📚 **ID-Specific Sections** - Portfolio showcase, expertise areas, and learning philosophy
- 📱 **Fully Responsive** - Perfect on all devices
- ⚡ **Smooth Scrolling** - Enhanced user experience with smooth section transitions
- 💼 **Portfolio Ready** - Showcase your courses, modules, and learning experiences

## 🎨 Design Philosophy

This template uses a warm, professional color scheme perfect for education professionals:
- **Cream (#fffcf2)** - Main background for a soft, approachable feel
- **Beige (#ccc5b9)** - Secondary backgrounds for subtle depth
- **Dark Gray (#403d39)** - Body text for excellent readability
- **Charcoal (#252422)** - Headlines for strong hierarchy
- **Burnt Orange (#eb5e28)** - Accent color for calls-to-action and emphasis

### Typography
- **Headlines**: Le Monde Livre (fallback: Lora) - Elegant serif for authority
- **Body Text**: Acumin Pro (fallback: Inter) - Clean sans-serif for readability

## 📁 File Structure

```
onepage-website/
├── index.html          # Main HTML file
├── style.css           # All styling
└── README.md          # This file
```

## 🚀 Quick Start

### 1. Download or Clone
- Download the ZIP file or clone this repository
- Extract all files to a folder

### 2. Customize Content
Replace placeholder content in `index.html`:
- **Your Name** - Throughout the site
- **Hero Section** - Update title and subtitle
- **About Section** - Add your bio and stats
- **Expertise Cards** - Customize your areas of expertise
- **Skills/Tools** - List your actual tools
- **Portfolio Projects** - Replace with your actual work
- **Contact Information** - Add your email, LinkedIn, etc.

### 3. Optional: Add Your Fonts
If you have Le Monde Livre and Acumin Pro licenses:
1. Add font files to a `/fonts` folder
2. Update the `@font-face` rules in `style.css`
3. The template uses Lora and Inter as fallbacks (loaded from Google Fonts)

### 4. Customize Colors (Optional)
Edit the CSS variables in `style.css` (lines 8-12):
```css
:root {
    --cream: #fffcf2;
    --beige: #ccc5b9;
    --dark-gray: #403d39;
    --charcoal: #252422;
    --accent: #eb5e28;
}
```

## 🌐 Deploying to GitHub Pages

### Option 1: Personal Site (username.github.io)
1. Create a repository named `your-username.github.io`
2. Upload all files
3. Your site will be at `https://your-username.github.io`

### Option 2: Project Site
1. Create any repository (e.g., `portfolio`)
2. Upload files
3. Go to **Settings** → **Pages**
4. Select **main** branch
5. Your site will be at `https://your-username.github.io/portfolio`

## 📧 Contact Form Setup

The contact form needs a backend service to function:

### Recommended: Formspree
1. Sign up at [formspree.io](https://formspree.io) (free tier available)
2. Create a new form
3. Get your form endpoint
4. In `index.html`, update the form tag:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Remove the JavaScript form handler from `script.js`

### Alternative: Netlify Forms
1. Deploy to Netlify instead of GitHub Pages
2. Add `netlify` attribute to form tag
3. Forms automatically work

## 🎯 Customization Ideas

### Adding Project Images
1. Create an `images` folder
2. Upload project screenshots
3. Replace the placeholder divs:
   ```html
   <div class="portfolio-image">
       <img src="images/project1.jpg" alt="Project Name">
   </div>
   ```

### Adding Your Photo
Add a profile photo to the About section:
```html
<div class="about-content">
    <img src="images/profile.jpg" alt="Your Name" class="profile-photo">
    <div class="about-text">
        <!-- existing content -->
    </div>
</div>
```

Then add CSS:
```css
.profile-photo {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--accent);
}
```

### Adding More Expertise Cards
Copy an existing expertise card in `index.html`:
```html
<div class="expertise-card">
    <div class="expertise-icon">🎯</div>
    <h3>Your Expertise</h3>
    <p>Description of your expertise area</p>
</div>
```

### Changing Section Order
Sections are designed to be modular. Reorder them in `index.html` as needed, just make sure to update the navigation links.

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, CSS Variables, Animations
- **JavaScript** - Smooth scrolling, active navigation
- **Google Fonts** - Lora & Inter (fallback fonts)

## 📱 Browser Support

✅ Chrome/Edge (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Mobile browsers  

## 🎓 Perfect For

This template is ideal for:
- Instructional Designers
- Learning Experience Designers (LXD)
- Educational Technologists
- Curriculum Developers
- Corporate Trainers
- E-Learning Developers
- Academic Faculty
- Instructional Coaches

## 💡 Content Tips for Instructional Designers

### Portfolio Projects
For each project, include:
- Project type (e-learning, ILT, blended, etc.)
- Tools used
- Learning objectives addressed
- Measurable outcomes (completion rates, satisfaction scores, etc.)
- Your specific role
- Target audience

### Expertise Section
Highlight skills relevant to ID:
- ADDIE/SAM methodology
- Learning theories applied
- Assessment design
- LMS expertise
- Authoring tool proficiency
- Visual design capabilities

### About Section
Consider mentioning:
- Your design philosophy
- Years of experience
- Industries you've worked in
- Certifications (ATD, eLearning Guild, etc.)
- Educational background

## 🤝 Contributing

Feel free to fork this template and customize it! If you create improvements, consider:
1. Forking the repository
2. Making your enhancements
3. Submitting a pull request

## 📄 License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🌟 Show Your Support

If you use this template:
- ⭐ Star this repository
- 📢 Share it with other instructional designers
- 🐦 Tag me on social media with your site!

## 📚 Resources

### Instructional Design
- [eLearning Guild](https://www.elearningguild.com/)
- [ATD (Association for Talent Development)](https://www.td.org/)
- [Articulate Community](https://community.articulate.com/)

### Design Inspiration
- [Dribbble - Portfolio Designs](https://dribbble.com/tags/portfolio)
- [Behance - Learning Design](https://www.behance.net/search/projects?search=learning+design)

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [W3Schools](https://www.w3schools.com/)

## 💬 Questions?

Open an issue on GitHub or reach out to the community!

---

**Built with ❤️ for instructional designers**

*Design learning experiences that matter* ✨
