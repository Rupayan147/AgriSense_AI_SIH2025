# AgriSense AI - Crop Monitoring Platform Landing Page

A modern, responsive landing page for AgriSense AI, built exactly according to the Figma design specifications. This project demonstrates pixel-perfect implementation of a professional agricultural technology platform.

## 🎨 Design Specifications

This landing page is built to match the exact Figma design with:
- **Layout**: Single column design with header navigation and main content area
- **Colors**: 
  - Primary: #A3ED12 (bright green)
  - Text: #121712 (dark green)
  - Secondary text: #638766 (medium green)
  - Input fields: #F0F5F0 (light green)
  - Background: #FFFFFF (white)
- **Typography**: Space Grotesk font family (400, 700 weights)
- **Dimensions**: 1280px width, responsive layout
- **Components**: Header with logo and sign-up button, background image, login form overlay

## 🚀 Features

### Core Functionality
- **Responsive Design**: Optimized for all device sizes
- **Interactive Elements**: Hover effects, focus states, and smooth transitions
- **Form Validation**: Client-side validation with user feedback
- **Modern UI/UX**: Clean, professional interface following design best practices

### Technical Features
- **Semantic HTML5**: Accessible and SEO-friendly markup
- **CSS3 Animations**: Smooth transitions and micro-interactions
- **JavaScript Functionality**: Form handling, validation, and user feedback
- **Cross-browser Compatibility**: Works on all modern browsers

## 📁 Project Structure

```
Login Page/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   └── background-image.png  # Background image from Figma
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Interactive functionality and form handling
- **Google Fonts**: Space Grotesk typography
- **Responsive Design**: Mobile-first approach with media queries

## 🎯 Key Components

### Header Section
- Logo: "AgriSense AI" with proper typography
- Navigation area (expandable for future menu items)
- Sign Up button with hover effects

### Main Content
- Large background image (960x423px)
- Login form overlay with semi-transparent background
- Form inputs with proper styling and validation
- Login button with loading states
- Forgot password link

### Form Elements
- Username/Email input field
- Password input field
- Login button with primary green color
- Form validation and error handling

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Ensure all files are in the same directory
3. Open `index.html` in your web browser

### Development Setup
For development with live reload:
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP (if installed)
php -S localhost:8000
```

## 📱 Responsive Breakpoints

- **Desktop**: 1280px and above
- **Tablet**: 768px - 1279px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎨 Design System

### Color Palette
```css
--primary-green: #A3ED12;      /* Buttons and accents */
--dark-green: #121712;         /* Primary text */
--medium-green: #638766;       /* Secondary text */
--light-green: #F0F5F0;       /* Input backgrounds */
--white: #FFFFFF;              /* Background */
--border-gray: #E5E8EB;       /* Borders and dividers */
```

### Typography Scale
```css
--font-family: 'Space Grotesk', sans-serif;
--font-weight-regular: 400;
--font-weight-bold: 700;
--font-size-small: 14px;
--font-size-base: 16px;
--font-size-large: 18px;
--font-size-xl: 28px;
```

### Spacing System
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 12px;
--spacing-lg: 16px;
--spacing-xl: 20px;
--spacing-xxl: 32px;
--spacing-xxxl: 40px;
```

## 🔧 Customization

### Modifying Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-green: #YOUR_COLOR;
    --dark-green: #YOUR_COLOR;
    /* ... other colors */
}
```

### Adding New Sections
Follow the existing HTML structure and CSS patterns:
```html
<section class="new-section">
    <div class="container">
        <!-- Your content here -->
    </div>
</section>
```

### Updating Typography
Modify the Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700&display=swap" rel="stylesheet">
```

## 🧪 Testing

### Browser Testing
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

### Device Testing
- ✅ Desktop (1280px+)
- ✅ Tablet (768px - 1279px)
- ✅ Mobile (480px - 767px)
- ✅ Small Mobile (< 480px)

## 🚀 Performance

- **Optimized Images**: Compressed background image
- **Efficient CSS**: Minimal CSS with proper organization
- **Lightweight JavaScript**: Vanilla JS without external dependencies
- **Fast Loading**: Optimized for quick page load times

## 📈 Future Enhancements

- [ ] Add more navigation menu items
- [ ] Implement actual authentication system
- [ ] Add more interactive animations
- [ ] Include additional content sections
- [ ] Implement dark mode toggle
- [ ] Add accessibility improvements

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please contact the development team or create an issue in the project repository.

---

**Built with ❤️ for AgriSense AI - The Future of Crop Monitoring**
