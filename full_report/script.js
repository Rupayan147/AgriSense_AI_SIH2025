// AgriSense AI Dashboard - Interactive Features

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌱 AgriSense AI Dashboard loaded successfully!');
    initializeDashboard();
});

// Initialize dashboard features
function initializeDashboard() {
    // Add loading animations
    animateMetricCards();
    
    // Simulate real-time data updates
    startDataUpdates();
    
    // Add interactive features
    addHoverEffects();
    
    // Add click handler for full report
    addReportClickHandler();
    
    console.log('✅ Dashboard initialized with interactive features');
}

// Handle file upload button click
function handleUpload() {
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.csv,.xlsx,.json,.pdf';
    fileInput.multiple = true;
    
    fileInput.onchange = function(event) {
        const files = event.target.files;
        if (files.length > 0) {
            showUploadSuccess(files.length);
            processFiles(files);
        }
    };
    
    fileInput.click();
}

// Show upload success message
function showUploadSuccess(fileCount) {
    const message = document.createElement('div');
    message.innerHTML = `📁 Successfully uploaded ${fileCount} file(s)!`;
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

// Process uploaded files (simulation)
function processFiles(files) {
    console.log('📊 Processing files:', files);
    
    setTimeout(() => {
        updateMetricsWithNewData();
        console.log('✅ Files processed successfully');
    }, 1500);
}

// Handle chart viewing
function viewChart(chartType) {
    const chartNames = {
        'zone': 'Zone Distribution',
        'heatmap': 'Heat Map'
    };
    
    showChartModal(chartNames[chartType], chartType);
}

// Handle plot viewing
function viewPlot(plotNumber) {
    showPlotModal(`Plot ${plotNumber}`, plotNumber);
}

// Show chart modal
function showChartModal(title, type) {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1000; display: flex; align-items: center; justify-content: center;">
            <div style="background: white; padding: 30px; border-radius: 15px; max-width: 800px; width: 90%; text-align: center; font-family: 'Nunito', sans-serif;">
                <h2 style="color: #333; margin-bottom: 20px; font-size: 28px;">📊 ${title} Analysis</h2>
                <img src="https://via.placeholder.com/700x400/E3F2FD/1976D2?text=${title.replace(' ', '+')}" style="width: 100%; border-radius: 10px; margin-bottom: 20px;" alt="${title}">
                <p style="color: #666; margin-bottom: 25px; font-size: 16px;">Detailed ${title.toLowerCase()} showing current farm conditions and trends.</p>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button onclick="exportChart('${type}')" style="background: #4CAF50; color: white; border: none; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer;">Export Data</button>
                    <button onclick="closeModal()" style="background: #6B7280; color: white; border: none; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer;">Close</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Show plot modal
function showPlotModal(title, plotNumber) {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1000; display: flex; align-items: center; justify-content: center;">
            <div style="background: white; padding: 30px; border-radius: 15px; max-width: 800px; width: 90%; text-align: center; font-family: 'Nunito', sans-serif;">
                <h2 style="color: #333; margin-bottom: 20px; font-size: 28px;">🌾 ${title} Analysis</h2>
                <img src="https://via.placeholder.com/700x400/E8F5E8/2E7D32?text=${title.replace(' ', '+')}" style="width: 100%; border-radius: 10px; margin-bottom: 20px;" alt="${title}">
                <p style="color: #666; margin-bottom: 25px; font-size: 16px;">Comprehensive analysis of ${title.toLowerCase()} performance and health metrics.</p>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button onclick="exportPlot(${plotNumber})" style="background: #4CAF50; color: white; border: none; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer;">Export Report</button>
                    <button onclick="closeModal()" style="background: #6B7280; color: white; border: none; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer;">Close</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Add click handler for full report
function addReportClickHandler() {
    const reportCircle = document.querySelector('.report-circle');
    const reportLabel = document.querySelector('.report-label');
    
    if (reportCircle) {
        reportCircle.addEventListener('click', showFullReport);
    }
    if (reportLabel) {
        reportLabel.addEventListener('click', showFullReport);
    }
}

// Show full report
function showFullReport() {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1000; display: flex; align-items: center; justify-content: center;">
            <div style="background: white; padding: 40px; border-radius: 20px; max-width: 900px; width: 95%; max-height: 90%; overflow-y: auto; text-align: center; font-family: 'Nunito', sans-serif;">
                <h1 style="color: #2E7D32; margin-bottom: 30px; font-size: 36px;">🌱 Full Farm Report</h1>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                    <div style="background: #E8F5E8; padding: 20px; border-radius: 10px;">
                        <h3 style="color: #22C55E; margin-bottom: 10px;">✅ Excellent Status</h3>
                        <p>Overall Crop Health: 94%</p>
                        <p>Leaf Wetness: Optimal</p>
                    </div>
                    <div style="background: #FEF3C7; padding: 20px; border-radius: 10px;">
                        <h3 style="color: #F59E0B; margin-bottom: 10px;">⚠️ Attention Needed</h3>
                        <p>Soil Moisture: 23% (Low)</p>
                        <p>Recommended: Increase irrigation</p>
                    </div>
                </div>
                
                <div style="background: #F8F9FA; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
                    <h3 style="color: #333; margin-bottom: 15px;">📊 Key Metrics Summary</h3>
                    <div style="text-align: left; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <p><strong>Soil Temperature:</strong> 24°C (Moderate)</p>
                        <p><strong>pH Level:</strong> 6.8 (Optimal)</p>
                        <p><strong>Nutrient Level:</strong> 89% (Good)</p>
                        <p><strong>Growth Rate:</strong> +12% this week</p>
                    </div>
                </div>
                
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button onclick="downloadReport()" style="background: #2E7D32; color: white; border: none; padding: 15px 30px; border-radius: 8px; font-weight: 600; cursor: pointer;">📥 Download PDF</button>
                    <button onclick="emailReport()" style="background: #2563EB; color: white; border: none; padding: 15px 30px; border-radius: 8px; font-weight: 600; cursor: pointer;">📧 Email Report</button>
                    <button onclick="closeModal()" style="background: #6B7280; color: white; border: none; padding: 15px 30px; border-radius: 8px; font-weight: 600; cursor: pointer;">Close</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Export functions
function exportChart(type) {
    showNotification(`📊 ${type} chart data exported successfully!`, '#4CAF50');
    closeModal();
}

function exportPlot(plotNumber) {
    showNotification(`🌾 Plot ${plotNumber} report exported successfully!`, '#4CAF50');
    closeModal();
}

function downloadReport() {
    showNotification('📥 Full report PDF download started!', '#2E7D32');
    closeModal();
}

function emailReport() {
    showNotification('📧 Report emailed successfully!', '#2563EB');
    closeModal();
}

// Close modal
function closeModal() {
    const modals = document.querySelectorAll('div[style*="position: fixed"][style*="z-index: 1000"]');
    modals.forEach(modal => {
        document.body.removeChild(modal);
    });
}

// Show notification
function showNotification(message, color) {
    const notification = document.createElement('div');
    notification.innerHTML = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${color};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Animate metric cards on load
function animateMetricCards() {
    const cards = document.querySelectorAll('.metric-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Start real-time data updates
function startDataUpdates() {
    setInterval(() => {
        updateRandomMetric();
    }, 20000); // Update every 20 seconds
}

// Update random metric with new data
function updateRandomMetric() {
    const metrics = document.querySelectorAll('.metric-value');
    const statuses = ['Excellent', 'Good', 'Moderate', 'Low'];
    const colors = ['#22C55E', '#10B981', '#2386F6', '#EF4444'];
    
    const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
    const randomStatus = Math.floor(Math.random() * statuses.length);
    
    // Add update animation
    randomMetric.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        randomMetric.textContent = statuses[randomStatus];
        randomMetric.style.color = colors[randomStatus];
        randomMetric.style.transform = 'scale(1)';
    }, 300);
}

// Update metrics with new uploaded data
function updateMetricsWithNewData() {
    const metrics = document.querySelectorAll('.metric-value');
    
    metrics.forEach((metric, index) => {
        setTimeout(() => {
            metric.style.transform = 'scale(1.1)';
            metric.style.filter = 'brightness(1.2)';
            
            setTimeout(() => {
                metric.style.transform = 'scale(1)';
                metric.style.filter = 'brightness(1)';
            }, 500);
        }, index * 200);
    });
}

// Add hover effects for interactive elements
function addHoverEffects() {
    // Add pulse animation to low status elements
    const lowElements = document.querySelectorAll('.status-low');
    lowElements.forEach(element => {
        element.style.animation = 'pulse 2s infinite';
    });
}

// Console welcome message
console.log(`
🌱 AgriSense AI Dashboard
=========================
🚀 Interactive features loaded
📊 Real-time data simulation active
⚡ Click anything to interact!

Available interactions:
- Upload Files button
- Click metric cards for details
- Click charts for analysis
- Click plots for reports
- Click FULL REPORT circle
`);
