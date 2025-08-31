// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeMetricsTabs();
    initializeTrendCharts();
    initializeFilterButtons();
    initializeSearchFunctionality();
    initializeResponsiveBehavior();
});

// Metrics Tabs Functionality
function initializeMetricsTabs() {
    const metricTabs = document.querySelectorAll('.metric-tab');
    
    metricTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            metricTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Here you would typically update the metrics display
            // based on the selected tab (NDVI, EVI, or SAVI)
            updateMetricsDisplay(this.textContent);
        });
    });
}

// Update metrics display based on selected tab
function updateMetricsDisplay(selectedMetric) {
    console.log(`Switched to ${selectedMetric} metrics`);
    // In a real application, this would fetch and display
    // different data based on the selected metric
}

// Initialize Trend Charts
function initializeTrendCharts() {
    createTrendChart('ndviChart', [0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.75], '#6E964F');
    createTrendChart('eviChart', [0.70, 0.69, 0.68, 0.67, 0.68, 0.69, 0.68], '#6E964F');
    createTrendChart('saviChart', [0.80, 0.81, 0.82, 0.83, 0.84, 0.85, 0.82], '#6E964F');
}

// Create trend chart using Canvas
function createTrendChart(canvasId, data, strokeColor) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Set up chart area
    const padding = 20;
    const chartWidth = width - (padding * 2);
    const chartHeight = height - (padding * 2);
    
    // Find min and max values for scaling
    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);
    const valueRange = maxValue - minValue;
    
    // Draw chart background
    ctx.fillStyle = 'rgba(237, 242, 232, 0.3)';
    ctx.fillRect(padding, padding, chartWidth, chartHeight);
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(110, 150, 79, 0.2)';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
        const y = padding + (i * chartHeight / 4);
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
    }
    
    // Vertical grid lines
    for (let i = 0; i <= 6; i++) {
        const x = padding + (i * chartWidth / 6);
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + chartHeight);
        ctx.stroke();
    }
    
    // Draw trend line
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    data.forEach((value, index) => {
        const x = padding + (index * chartWidth / (data.length - 1));
        const y = padding + chartHeight - ((value - minValue) / valueRange * chartHeight);
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw data points
    ctx.fillStyle = strokeColor;
    data.forEach((value, index) => {
        const x = padding + (index * chartWidth / (data.length - 1));
        const y = padding + chartHeight - ((value - minValue) / valueRange * chartHeight);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
}

// Filter Buttons Functionality
function initializeFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all filter buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Handle filter functionality
            handleFilterChange(this.querySelector('i').className);
        });
    });
}

// Handle filter changes
function handleFilterChange(filterType) {
    console.log(`Filter changed to: ${filterType}`);
    // In a real application, this would filter the data
    // based on the selected filter type
}

// Search Functionality
function initializeSearchFunctionality() {
    const searchInputs = document.querySelectorAll('.search-input, .search-input-large, .field-search');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            performSearch(searchTerm, e.target.placeholder);
        });
        
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = e.target.value.toLowerCase();
                performSearch(searchTerm, e.target.placeholder);
            }
        });
    });
}

// Perform search functionality
function performSearch(searchTerm, searchType) {
    console.log(`Searching for "${searchTerm}" in ${searchType}`);
    // In a real application, this would search through
    // fields, reports, or other data based on the search type
}

// Responsive Behavior
function initializeResponsiveBehavior() {
    // Handle window resize
    window.addEventListener('resize', function() {
        // Recalculate chart sizes if needed
        setTimeout(() => {
            initializeTrendCharts();
        }, 100);
    });
    
    // Handle mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Utility Functions
function formatNumber(number) {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);
}

function formatPercentage(value) {
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

// Data Simulation (for demo purposes)
function simulateRealTimeData() {
    // Simulate real-time updates
    setInterval(() => {
        // Update random metric values
        const metricValues = document.querySelectorAll('.metric-value');
        metricValues.forEach(value => {
            const currentValue = parseFloat(value.textContent);
            const change = (Math.random() - 0.5) * 0.02; // ±1% change
            const newValue = Math.max(0, Math.min(1, currentValue + change));
            value.textContent = formatNumber(newValue);
        });
        
        // Update trend charts
        setTimeout(() => {
            initializeTrendCharts();
        }, 100);
    }, 5000); // Update every 5 seconds
}

// Initialize real-time data simulation (optional)
// simulateRealTimeData();

// Export functions for potential external use
window.AgriSenseAI = {
    updateMetricsDisplay,
    handleFilterChange,
    performSearch,
    createTrendChart,
    formatNumber,
    formatPercentage,
    formatDate
};
