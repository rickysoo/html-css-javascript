// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

function toggleMobileNav() {
    navList.classList.toggle('active');
    
    // Animate hamburger icon
    const hamburgers = navToggle.querySelectorAll('.hamburger');
    if (navList.classList.contains('active')) {
        hamburgers[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        hamburgers[1].style.opacity = '0';
        hamburgers[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        hamburgers[0].style.transform = 'none';
        hamburgers[1].style.opacity = '1';
        hamburgers[2].style.transform = 'none';
    }
}

navToggle.addEventListener('click', toggleMobileNav);

// Close mobile nav when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navList.classList.contains('active')) {
            toggleMobileNav();
        }
    });
});

// Close mobile nav when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
        if (navList.classList.contains('active')) {
            toggleMobileNav();
        }
    }
});

// Theme Management
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    
    localStorage.setItem('theme', newTheme);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
themeToggle.addEventListener('click', toggleTheme);

// Smooth Scrolling Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hero Demo Interaction
const heroDemo = document.getElementById('heroDemo');
let clickCount = 0;

heroDemo.addEventListener('click', () => {
    clickCount++;
    
    const messages = [
        'That\'s HTML structure! 🏗️',
        'Now with CSS styling! 🎨',
        'And JavaScript interaction! ⚡',
        'All three working together! 🚀'
    ];
    
    const colors = [
        'rgba(255, 255, 255, 0.1)',
        'rgba(255, 107, 107, 0.2)',
        'rgba(72, 202, 228, 0.2)',
        'rgba(106, 255, 165, 0.2)'
    ];
    
    heroDemo.style.background = colors[clickCount % colors.length];
    heroDemo.querySelector('p').textContent = messages[clickCount % messages.length];
    
    heroDemo.style.transform = 'scale(1.05)';
    setTimeout(() => {
        heroDemo.style.transform = 'scale(1)';
    }, 200);
});

// Integration Demo Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Interactive Demo in Integration Section
const interactiveDemo = document.getElementById('interactiveDemo');
const interactiveBtn = interactiveDemo.querySelector('.interactive-btn');

interactiveBtn.addEventListener('click', function() {
    interactiveDemo.classList.toggle('animated');
    this.textContent = this.textContent === 'Click me' ? 'Clicked!' : 'Click me';
    
    // Change colors randomly
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    interactiveDemo.style.background = randomColor;
});

// Code Playground
const editors = {
    html: document.getElementById('htmlEditor'),
    css: document.getElementById('cssEditor'),
    js: document.getElementById('jsEditor')
};

const editorTabs = document.querySelectorAll('.editor-tab');
const preview = document.getElementById('preview');

// Editor tab switching
editorTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const editorType = tab.getAttribute('data-editor');
        
        // Remove active class from all tabs and editors
        editorTabs.forEach(t => t.classList.remove('active'));
        Object.values(editors).forEach(editor => editor.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding editor
        tab.classList.add('active');
        editors[editorType].classList.add('active');
    });
});

// Live preview update
function updatePreview() {
    const htmlCode = editors.html.value;
    const cssCode = editors.css.value;
    const jsCode = editors.js.value;
    
    const previewContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                ${cssCode}
            </style>
        </head>
        <body>
            ${htmlCode}
            <script>
                try {
                    ${jsCode}
                } catch (e) {
                    console.error('JavaScript Error:', e);
                }
            </script>
        </body>
        </html>
    `;
    
    preview.srcdoc = previewContent;
}

// Add event listeners to all editors
Object.values(editors).forEach(editor => {
    editor.addEventListener('input', updatePreview);
});

// Initialize preview
updatePreview();

// Form Validation Demo
const validationForm = document.getElementById('validationForm');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    
    if (email.length === 0) {
        emailInput.classList.remove('invalid');
        emailError.textContent = '';
    } else if (!validateEmail(email)) {
        emailInput.classList.add('invalid');
        emailError.textContent = 'Please enter a valid email address';
    } else {
        emailInput.classList.remove('invalid');
        emailError.textContent = 'Email looks good! ✓';
        emailError.style.color = 'green';
    }
});

validationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateEmail(emailInput.value)) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fix the errors before submitting');
    }
});

// Gallery Demo
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        galleryItems.forEach(i => i.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Add a little animation
        item.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            item.style.transform = 'scale(1.1)';
        }, 200);
    });
});

// Counter Demo
let counterValue = 0;
const counterDisplay = document.getElementById('counter');

function updateCounter(change) {
    counterValue += change;
    counterDisplay.textContent = counterValue;
    
    // Animation effect
    counterDisplay.style.transform = 'scale(1.2)';
    counterDisplay.style.color = change > 0 ? '#4a90e2' : '#ff6b6b';
    
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
        counterDisplay.style.color = 'var(--primary-color)';
    }, 200);
}

// Make updateCounter globally available for onclick handlers
window.updateCounter = updateCounter;

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Code syntax highlighting enhancement
document.addEventListener('DOMContentLoaded', () => {
    // Add copy functionality to code blocks
    document.querySelectorAll('pre code').forEach(block => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        
        const copyBtn = document.createElement('button');
        copyBtn.textContent = 'Copy';
        copyBtn.style.position = 'absolute';
        copyBtn.style.top = '10px';
        copyBtn.style.right = '10px';
        copyBtn.style.padding = '5px 10px';
        copyBtn.style.background = 'rgba(255, 255, 255, 0.1)';
        copyBtn.style.border = '1px solid rgba(255, 255, 255, 0.2)';
        copyBtn.style.borderRadius = '3px';
        copyBtn.style.color = 'white';
        copyBtn.style.cursor = 'pointer';
        copyBtn.style.fontSize = '12px';
        
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent).then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            });
        });
        
        block.parentNode.parentNode.insertBefore(wrapper, block.parentNode);
        wrapper.appendChild(block.parentNode);
        wrapper.appendChild(copyBtn);
    });
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        // Add rainbow animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        console.log('🎉 Konami code activated! You found the easter egg!');
    }
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        }, 0);
    });
}