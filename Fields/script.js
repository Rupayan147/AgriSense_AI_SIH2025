// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

// Initialize the application
function initializeApp() {
    // Initialize tabs
    initializeTabs();
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize action buttons
    initializeActionButtons();
    
    // Add smooth scrolling and animations
    addSmoothAnimations();
}

// Initialize tab functionality
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content (if we had tab content)
            // For now, we'll just handle the visual state
            console.log(`Switched to tab: ${tab.textContent}`);
        });
    });
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchContainer = document.querySelector('.search-container');
    
    if (searchInput) {
        // Add focus effects
        searchInput.addEventListener('focus', () => {
            searchContainer.style.boxShadow = '0 0 0 2px rgba(163, 237, 18, 0.3)';
        });
        
        searchInput.addEventListener('blur', () => {
            searchContainer.style.boxShadow = 'none';
        });
        
        // Add search functionality
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            console.log(`Searching for: ${query}`);
            
            // Here you would typically filter results
            // For now, we'll just log the search query
        });
        
        // Add enter key functionality
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                console.log(`Search submitted: ${searchInput.value}`);
                // Here you would typically submit the search
            }
        });
    }
}

// Initialize action buttons
function initializeActionButtons() {
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
            
            // Handle different button actions
            const icon = button.querySelector('img');
            if (icon) {
                const altText = icon.alt;
                console.log(`Clicked: ${altText}`);
                
                // Here you would typically handle different actions
                switch (altText) {
                    case 'Notifications':
                        showNotification('No new notifications');
                        break;
                    case 'Settings':
                        showNotification('Settings panel opened');
                        break;
                    case 'Profile':
                        showNotification('Profile panel opened');
                        break;
                }
            }
        });
    });
}

// Add smooth animations
function addSmoothAnimations() {
    // Add fade-in animation for main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        mainContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Add staggered animation for metric items
    const metricItems = document.querySelectorAll('.metric-item');
    metricItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 200 + (index * 100));
    });
    
    // Add animation for alert items
    const alertItems = document.querySelectorAll('.alert-item');
    alertItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 + (index * 100));
    });
    
    // Add animation for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 800 + (index * 100));
    });
}

// Show notification (simple implementation)
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #1C261C;
        color: #FFFFFF;
        padding: 12px 20px;
        border-radius: 8px;
        border: 1px solid #404F40;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 14px;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add progress bar animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    progressBars.forEach((bar, index) => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 1000 + (index * 200));
    });
}

// Initialize progress bar animations when page loads
window.addEventListener('load', () => {
    setTimeout(animateProgressBars, 1000);
});

// Add hover effects for interactive elements
function addHoverEffects() {
    // Add hover effect for tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('mouseenter', () => {
            if (!tab.classList.contains('active')) {
                tab.style.color = '#A3ED12';
            }
        });
        
        tab.addEventListener('mouseleave', () => {
            if (!tab.classList.contains('active')) {
                tab.style.color = '#A1B5A1';
            }
        });
    });
    
    // Add hover effect for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
}

// Initialize hover effects
document.addEventListener('DOMContentLoaded', addHoverEffects);

// Add keyboard navigation support
function addKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Tab navigation with arrow keys
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const activeTab = document.querySelector('.tab.active');
            const tabs = Array.from(document.querySelectorAll('.tab'));
            const currentIndex = tabs.indexOf(activeTab);
            
            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                tabs[currentIndex - 1].click();
            } else if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
                tabs[currentIndex + 1].click();
            }
        }
        
        // Search focus with Ctrl+K
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
}

// Initialize keyboard navigation
document.addEventListener('DOMContentLoaded', addKeyboardNavigation);
