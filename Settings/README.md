# AgriSense AI - Crop Monitoring Platform

A modern, responsive settings page for the AgriSense AI Crop Monitoring Platform, built with HTML, CSS, and JavaScript. This project replicates the exact design specifications from the Figma design file.

## 🎨 Design Features

- **Exact Figma Replication**: Pixel-perfect implementation of the original design
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Responsive Design**: Optimized for all device sizes
- **Accessibility**: Keyboard navigation and screen reader support
- **Interactive Elements**: Hover effects, click animations, and modal dialogs

## 🚀 Features

### Header Section
- AgriSense AI logo with Space Grotesk font
- Navigation menu (Dashboard, Fields, Insights, Reports)
- User profile avatar
- Responsive mobile navigation with hamburger menu

### Main Content
- **My Garden Section**: Welcome message with description
- **Settings Cards**: Six interactive setting categories:
  - User Profile
  - Display Settings
  - Notifications
  - Subscription
  - Support
  - About
- **Recent Activities**: Timeline of user actions with icons

### Interactive Elements
- Clickable setting cards that open modal dialogs
- Smooth hover animations and transitions
- Staggered loading animations
- Mobile-responsive navigation
- Keyboard navigation support

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Google Fonts**: Space Grotesk font family
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
Settings/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── images/             # Design assets from Figma
    ├── user-avatar.png
    ├── display-icon.png
    ├── notification-icon.png
    ├── subscription-icon.png
    ├── support-icon.png
    ├── about-icon.png
    ├── profile-icon.svg
    ├── activity-icon.svg
    ├── activity-icon-2.svg
    └── activity-icon-3.svg
```

## 🎯 Design Specifications

### Colors
- **Primary Text**: `#0F1C0D` (Dark Green)
- **Secondary Text**: `#59964F` (Medium Green)
- **Background**: `#FAFCF7` (Light Green)
- **White**: `#FFFFFF`
- **Border**: `#E5E8EB` (Light Gray)
- **Hover**: `#E8F2E8` (Very Light Green)

### Typography
- **Font Family**: Space Grotesk
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)
- **Sizes**: 14px, 16px, 18px, 22px, 32px

### Layout
- **Container Width**: 1280px (max-width)
- **Header Padding**: 12px 40px
- **Main Content Padding**: 20px 160px
- **Card Spacing**: 12px gaps
- **Icon Size**: 72px (circular)

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in a modern web browser
3. **No build process required** - pure HTML, CSS, and JavaScript

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎭 Animations & Interactions

### Loading Animations
- Fade-in main content
- Staggered card appearances
- Smooth activity timeline reveal

### Hover Effects
- Card elevation with shadow
- Smooth color transitions
- Transform animations

### Interactive Modals
- Click to open setting details
- Smooth open/close animations
- Keyboard navigation support
- Click outside to close

## ♿ Accessibility Features

- **Keyboard Navigation**: Tab through all interactive elements
- **Screen Reader Support**: Semantic HTML structure
- **Focus Indicators**: Clear focus states for all clickable elements
- **Alt Text**: Descriptive alt text for all images
- **ARIA Labels**: Proper labeling for interactive elements

## 🔧 Customization

### Adding New Settings
1. Add new card to HTML structure
2. Include appropriate icon in images folder
3. Update CSS grid if needed
4. Add JavaScript functionality if required

### Modifying Colors
Update CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #0F1C0D;
    --secondary-color: #59964F;
    --background-color: #FAFCF7;
}
```

### Changing Fonts
Replace Google Fonts import in `index.html` and update font-family in CSS.

## 🌐 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Fallbacks**: Graceful degradation for older browsers

## 📄 License

This project is created for demonstration purposes based on the Figma design specifications.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the project.

## 📞 Support

For questions or support, please refer to the project documentation or create an issue in the repository.

---

**Built with ❤️ using modern web technologies**
