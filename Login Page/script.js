// AgriSense AI Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const loginForm = document.querySelector('.login-form');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');

    // Form validation and submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            
            // Basic validation
            if (!username || !password) {
                showMessage('Please fill in all fields', 'error');
                return;
            }
            
            if (username.length < 3) {
                showMessage('Username must be at least 3 characters', 'error');
                return;
            }
            
            if (password.length < 6) {
                showMessage('Password must be at least 6 characters', 'error');
                return;
            }
            
            // Simulate login process
            showMessage('Logging in...', 'info');
            loginBtn.disabled = true;
            loginBtn.textContent = 'Logging in...';
            
            // Simulate API call delay
            setTimeout(() => {
                showMessage('Login successful!', 'success');
                loginBtn.disabled = false;
                loginBtn.textContent = 'Login';
                
                // Reset form
                loginForm.reset();
            }, 2000);
        });
    }

    // Input focus effects
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    // Sign up button functionality
    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            showMessage('Redirecting to sign up page...', 'info');
            // Add your sign up redirect logic here
        });
    }

    // Forgot password functionality
    const forgotLink = document.querySelector('.forgot-link');
    if (forgotLink) {
        forgotLink.addEventListener('click', function(e) {
            e.preventDefault();
            showMessage('Password reset functionality coming soon!', 'info');
        });
    }

    // Message display function
    function showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.textContent = message;
        
        // Style the message
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;

        // Set background color based on message type
        switch(type) {
            case 'success':
                messageDiv.style.backgroundColor = '#A3ED12';
                messageDiv.style.color = '#121712';
                break;
            case 'error':
                messageDiv.style.backgroundColor = '#FF6B6B';
                break;
            case 'info':
                messageDiv.style.backgroundColor = '#638766';
                break;
            default:
                messageDiv.style.backgroundColor = '#638766';
        }

        // Add to page
        document.body.appendChild(messageDiv);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentElement) {
                messageDiv.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (messageDiv.parentElement) {
                        messageDiv.remove();
                    }
                }, 300);
            }
        }, 5000);
    }

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add loading animation to buttons
    function addLoadingState(button) {
        button.disabled = true;
        button.style.opacity = '0.7';
        button.style.cursor = 'not-allowed';
    }

    function removeLoadingState(button) {
        button.disabled = false;
        button.style.opacity = '1';
        button.style.cursor = 'pointer';
    }

    // Enhanced button interactions
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Console welcome message
    console.log('%c🌱 Welcome to AgriSense AI! 🌱', 'color: #A3ED12; font-size: 20px; font-weight: bold;');
    console.log('%cCrop monitoring platform for the future of agriculture', 'color: #638766; font-size: 14px;');
});
