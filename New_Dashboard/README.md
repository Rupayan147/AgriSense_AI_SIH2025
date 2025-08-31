# AgriSense AI - Crop Monitoring Platform

A modern, responsive web application for agricultural crop monitoring and management, built based on the exact Figma design specifications.

## 🚀 Features

### Core Functionality
- **Real-time Crop Health Monitoring** - Track NDVI, EVI, and SAVI vegetation indices
- **Interactive Dashboard** - Comprehensive overview of field conditions and metrics
- **Smart Alerts System** - Automated notifications for irrigation, pest control, and maintenance
- **AI-Powered Recommendations** - Intelligent suggestions for crop management
- **Advanced Search & Filtering** - Find fields and data quickly with multiple filter options
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### Technical Features
- **Modern UI/UX** - Built with pure HTML, CSS, and JavaScript
- **Interactive Charts** - Canvas-based trend visualization
- **Responsive Grid Layout** - CSS Grid and Flexbox for optimal display
- **Font Awesome Icons** - Professional iconography throughout the interface
- **Google Fonts Integration** - Inter font family for optimal readability

## 🎨 Design Specifications

This application is built to **exactly match** the Figma design with:

- **Color Palette**: 
  - Primary: `#121C0D` (Dark Green)
  - Secondary: `#6E964F` (Medium Green)
  - Background: `#FAFCF7` (Light Cream)
  - Accent: `#EDF2E8` (Light Green)
  - Success: `#08871F` (Green)
  - Warning: `#E81F08` (Red)

- **Typography**: Inter font family with weights 400, 500, and 700
- **Layout**: 1280px max-width with responsive breakpoints
- **Components**: Cards, tabs, charts, and interactive elements matching the design

## 📁 Project Structure

```
AgriSense_AI/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── images/             # Design assets
│   ├── profile-avatar.png
│   ├── field-background.png
│   └── ai-recommendation-bg.png
└── README.md           # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Quick Start
1. **Clone or Download** the project files
2. **Navigate** to the project directory
3. **Open** `index.html` in your web browser
4. **Enjoy** the fully functional AgriSense AI dashboard!

### Alternative Setup (Local Server)
For development purposes, you can run a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎯 Key Components

### Header Section
- Logo and navigation menu
- Search functionality
- User profile avatar

### Search & Filtering
- Large search bar for general queries
- Field-specific search with filters
- Interactive filter buttons (Filter, Calendar, Location)

### Crop Health Metrics
- NDVI, EVI, and SAVI vegetation indices
- Tabbed interface for metric switching
- Real-time value display with change indicators

### Recent Trends
- Interactive trend charts for each metric
- Weekly data visualization
- Day-of-week labels

### Quick Stats
- Overall crop health percentage
- Soil moisture levels
- Pest risk assessment
- Irrigation recommendations

### Alert System
- Irrigation needs
- Pest infestation warnings
- Fertilizer application reminders
- Action buttons for each alert

### AI Recommendations
- Background image with overlay
- Actionable crop management advice
- Professional presentation

### Upcoming Events
- Timeline-based event display
- Field inspections
- Treatment deadlines
- Maintenance schedules

### Activity Log
- Real-time activity tracking
- Timestamp information
- Field-specific updates

## 🔧 Customization

### Colors
Modify the CSS custom properties in `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #121C0D;
    --secondary-color: #6E964F;
    --background-color: #FAFCF7;
    --accent-color: #EDF2E8;
}
```

### Data Integration
The JavaScript file includes placeholder functions for real data integration:

```javascript
// Update these functions to connect to your backend
function updateMetricsDisplay(selectedMetric) {
    // Fetch data from your API
    // Update the UI accordingly
}
```

### Chart Customization
Modify the `createTrendChart` function to customize chart appearance:

```javascript
function createTrendChart(canvasId, data, strokeColor) {
    // Customize chart colors, grid lines, and styling
}
```

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🌐 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 🚀 Performance Features

- **Optimized Images**: Compressed PNG assets
- **Efficient CSS**: Minimal CSS with smart selectors
- **Lightweight JavaScript**: Vanilla JS without heavy frameworks
- **Responsive Images**: Proper sizing and optimization

## 🔮 Future Enhancements

Potential areas for expansion:
- **Real-time Data Integration** - Connect to IoT sensors
- **Advanced Analytics** - Machine learning insights
- **Mobile App** - Native iOS/Android applications
- **API Integration** - Weather data, satellite imagery
- **User Management** - Multi-user authentication
- **Data Export** - PDF reports and CSV downloads

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Contributing

While this is a demonstration project, suggestions and improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support regarding this implementation:
- Review the code comments for implementation details
- Check browser console for any JavaScript errors
- Ensure all image files are in the correct `images/` directory

---

**Built with ❤️ using modern web technologies to create an exact replica of the Figma design.**
