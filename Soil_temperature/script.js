// AgriSense AI Dashboard - Interactive Features

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('AgriSense AI Dashboard loaded successfully! 🌱');
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
    
    console.log('Dashboard initialized with interactive features');
}

// Handle file upload button click
function handleUpload() {
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.csv,.xlsx,.json';
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
    // Create success message
    const message = document.createElement('div');
    message.innerHTML = `✅ Successfully uploaded ${fileCount} file(s)!`;
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
    
    // Remove message after 3 seconds
    setTimeout(() => {
        message.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

// Process uploaded files (simulation)
function processFiles(files) {
    console.log('Processing files:', files);
    
    // Simulate file processing
    setTimeout(() => {
        updateMetricsWithNewData();
        console.log('Files processed successfully');
    }, 1500);
}

// Handle Take Action button
function takeAction() {
    // Show action dialog
    const actions = [
        'Increase irrigation frequency',
        'Apply cooling mulch',
        'Adjust soil pH levels',
        'Schedule emergency inspection',
        'Activate cooling system'
    ];
    
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    
    // Create action dialog
    const dialog = document.createElement('div');
    dialog.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center;">
            <div style="background: white; padding: 30px; border-radius: 15px; max-width: 500px; text-align: center; font-family: 'Nunito', sans-serif;">
                <h3 style="color: #EF4444; margin-bottom: 20px; font-size: 24px;">⚠️ Recommended Action</h3>
                <p style="font-size: 18px; margin-bottom: 25px; color: #333;">${randomAction}</p>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button onclick="executeAction('${randomAction}')" style="background: #EF4444; color: white; border: none; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer;">Execute Action</button>
                    <button onclick="closeDialog()" style="background: #6B7280; color: white; border: none; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer;">Cancel</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(dialog);
}

// Execute the recommended action
function executeAction(action) {
    console.log('Executing action:', action);
    
    closeDialog();
    
    // Show execution confirmation
    const confirmation = document.createElement('div');
    confirmation.innerHTML = `🚀 Action "${action}" has been initiated!`;
    confirmation.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10B981;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        z-index: 1000;
    `;
    
    document.body.appendChild(confirmation);
    
    setTimeout(() => {
        document.body.removeChild(confirmation);
    }, 4000);
    
    // Update soil temperature status after action
    setTimeout(() => {
        const soilTempValue = document.querySelector('.metric-value.warning');
        if (soilTempValue) {
            soilTempValue.textContent = 'Normal';
            soilTempValue.classList.remove('warning');
            soilTempValue.style.color = '#10B981';
        }
    }, 2000);
}

// Close dialog
function closeDialog() {
    const dialogs = document.querySelectorAll('div[style*="position: fixed"][style*="z-index: 1000"]');
    dialogs.forEach(dialog => {
        if (dialog.innerHTML.includes('Recommended Action')) {
            document.body.removeChild(dialog);
        }
    });
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

// Start real-time data updates (simulation)
function startDataUpdates() {
    setInterval(() => {
        updateRandomMetric();
    }, 15000); // Update every 15 seconds
}

// Update random metric with new data
function updateRandomMetric() {
    const meanValue = document.querySelector('.metrics-row .metric-card:nth-child(2) .metric-value');
    const stdValue = document.querySelector('.metrics-row .metric-card:nth-child(3) .metric-value');
    
    if (meanValue) {
        const newMean = (Math.random() * 0.5 + 0.5).toFixed(3);
        meanValue.textContent = newMean;
        
        // Add brief highlight animation
        meanValue.style.background = '#FFE066';
        meanValue.style.borderRadius = '4px';
        meanValue.style.padding = '2px 6px';
        
        setTimeout(() => {
            meanValue.style.background = 'transparent';
            meanValue.style.padding = '0';
        }, 1000);
    }
    
    if (stdValue) {
        const newStd = (Math.random() * 0.3 + 0.1).toFixed(3);
        stdValue.textContent = newStd;
        
        // Add brief highlight animation
        stdValue.style.background = '#FFE066';
        stdValue.style.borderRadius = '4px';
        stdValue.style.padding = '2px 6px';
        
        setTimeout(() => {
            stdValue.style.background = 'transparent';
            stdValue.style.padding = '0';
        }, 1000);
    }
}

// Update metrics with new uploaded data
function updateMetricsWithNewData() {
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach(metric => {
        if (!metric.classList.contains('warning')) {
            // Generate random new values
            const newValue = (Math.random() * 0.8 + 0.2).toFixed(3);
            metric.textContent = newValue;
            
            // Add update animation
            metric.style.transform = 'scale(1.1)';
            metric.style.color = '#10B981';
            
            setTimeout(() => {
                metric.style.transform = 'scale(1)';
                metric.style.color = 'black';
            }, 500);
        }
    });
}

// Add hover effects for interactive elements
function addHoverEffects() {
    // Add pulse animation to warning elements
    const warningElements = document.querySelectorAll('.metric-value.warning, .warning-text');
    warningElements.forEach(element => {
        element.style.animation = 'pulse 2s infinite';
    });
}

// Utility function to generate random data
function generateRandomData(min, max) {
    return (Math.random() * (max - min) + min).toFixed(3);
}

// Add some CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .metric-card {
        cursor: pointer;
    }
    
    .chart-container, .plot-container {
        cursor: pointer;
    }
    
    .chart-placeholder img:hover, .plot-placeholder img:hover {
        transform: scale(1.02);
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log(`
🌱 AgriSense AI Dashboard
=========================
🚀 Interactive features loaded
📊 Real-time data simulation active
⚡ Click buttons to interact!

Available functions:
- handleUpload() - Upload files
- takeAction() - Execute recommendations
`);
