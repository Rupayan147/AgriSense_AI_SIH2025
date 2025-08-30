# AgriSense AI - Crop Monitoring Platform Landing Page

A modern, responsive landing page for AgriSense AI, an AI-powered crop monitoring platform designed to help farmers optimize resources and maximize yields.

## 🎨 Design Features

This landing page is built exactly according to the Figma design specifications, featuring:

- **Exact Color Scheme**: Matches the Figma design with precise hex values
- **Typography**: Uses Lexend font family with exact weights and sizes
- **Layout**: Pixel-perfect spacing and positioning as specified in the design
- **Images**: All images and icons extracted directly from the Figma file
- **Responsive Design**: Adapts to different screen sizes while maintaining design integrity

## 🚀 Features

### Header Section
- Clean navigation with logo and login button
- Sticky header with scroll effects
- Responsive design for mobile devices

### Hero Section
- Large hero image with gradient overlay
- Compelling headline and description
- Call-to-action signup button
- Background image from Figma design

### Features Section
- Three feature cards with icons
- Clean, card-based layout
- Hover effects and animations

### Video Section
- Video preview with play button overlay
- Click to open video modal
- Background image from Figma design

### Team Section
- Team image showcase
- Detailed team description
- Professional layout

## 🛠️ Technical Implementation

### Frontend Technologies
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality and animations
- **Responsive Design**: Mobile-first approach

### Key Features
- **Smooth Animations**: CSS transitions and JavaScript-powered animations
- **Intersection Observer**: Scroll-triggered animations
- **Video Modal**: YouTube video integration
- **Image Loading**: Smooth image loading animations
- **Header Effects**: Hide/show on scroll

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📁 Project Structure

```
landing-page/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── images/             # Image assets from Figma
│   ├── logo.svg
│   ├── hero-bg.png
│   ├── video-bg.png
│   ├── team-bg.png
│   ├── icon1.svg
│   ├── icon2.svg
│   ├── icon3.svg
│   └── play-icon.svg
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Ensure all files are in the same directory
3. Open `index.html` in your web browser

### Development Setup
1. Use a local web server for development:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

2. Open `http://localhost:8000` in your browser

## 🎯 Customization

### Colors
The color scheme is defined in CSS variables and matches the Figma design:
- Primary Green: `#A3ED12`
- Text Color: `#171712`
- Border Color: `#E5E8EB`
- Background: `#FFFFFF`

### Typography
- Font Family: Lexend (Google Fonts)
- Weights: 400 (Regular), 700 (Bold), 900 (Black)
- Sizes: 14px, 16px, 18px, 22px, 48px

### Layout
- Maximum width: 1280px
- Responsive breakpoints: 1280px, 768px, 480px
- Consistent spacing using the 8px grid system

## 🔧 Configuration

### Video Integration
To change the video source, edit the `showVideoModal()` function in `script.js`:
```javascript
src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
```

### Button Actions
Customize button functionality in `script.js`:
- Login button: Add authentication logic
- Sign up button: Add registration flow
- Play button: Change video source or behavior

## 📱 Responsive Design

The landing page is fully responsive with breakpoints at:
- **Desktop**: 1280px and above
- **Tablet**: 768px - 1279px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎨 Design System

### Spacing
- Base unit: 8px
- Margins: 12px, 16px, 20px, 40px, 160px
- Padding: 12px, 16px, 20px, 40px

### Border Radius
- Small: 8px
- Medium: 12px
- Large: 32px

### Shadows
- Button hover: `0 4px 12px rgba(163, 237, 18, 0.3)`

## 🚀 Performance

- Optimized images from Figma
- Minimal JavaScript for smooth interactions
- CSS animations for better performance
- Lazy loading for images

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created based on the Figma design for AgriSense AI. Please ensure you have the appropriate rights to use the design and content.

## 📞 Support

For questions or support regarding this landing page implementation, please refer to the project documentation or contact the development team.

---

**Built with ❤️ to match the exact Figma design specifications**
