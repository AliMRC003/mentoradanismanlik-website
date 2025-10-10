// Simple and effective logo reload optimization
document.addEventListener('DOMContentLoaded', function() {
    // Preload logo resources to prevent reload flash
    const logoIcon = document.querySelector('.logo i');
    if (logoIcon) {
        // Force browser to cache the font icon
        logoIcon.style.fontDisplay = 'swap';
    }
    
    // Remove problematic page animation that causes white space
    // Preload critical images (no need to preload local SVGs - they're already fast)
    const criticalImages = [
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1581726690015-c9861ac9c4fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Initialize all components after DOM is ready
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        // Toggle menu
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            
            // Toggle icon
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden'; // Prevent body scroll
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = ''; // Restore body scroll
            }
        });
        
        // Close menu when clicking outside (on backdrop)
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Mobile menu handling (integrated with smooth navigation)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Close mobile menu
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Removed counter animations for cleaner design
    
    // Optimized card hover effects with requestAnimationFrame
    const cards = document.querySelectorAll('.package-card, .feature-card');
    cards.forEach(card => {
        let isAnimating = false;
        
        card.addEventListener('mouseenter', function() {
            if (!isAnimating) {
                isAnimating = true;
                requestAnimationFrame(() => {
                    this.style.transform = 'translateY(-10px)';
                    isAnimating = false;
                });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!isAnimating) {
                isAnimating = true;
                requestAnimationFrame(() => {
                    this.style.transform = 'translateY(0)';
                    isAnimating = false;
                });
            }
        });
    });
    
    // Reduce animation on low-end devices
    if (navigator.hardwareConcurrency <= 2 || navigator.deviceMemory <= 4) {
        document.documentElement.style.setProperty('--animation-duration', '0.15s');
    }
    
    // FAQ Accordion functionality - smooth and simple
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
});

// Mobile menu styles are now in styles.css - no need to inject
