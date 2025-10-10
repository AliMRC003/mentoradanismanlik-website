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
    
    // Create backdrop element
    const backdrop = document.createElement('div');
    backdrop.className = 'mobile-menu-backdrop';
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s;
        z-index: 999;
    `;
    document.body.appendChild(backdrop);
    
    if (mobileMenuToggle && navMenu) {
        // Create a mobile-only menu wrapper
        const mobileMenuWrapper = document.createElement('div');
        mobileMenuWrapper.className = 'mobile-menu-wrapper';
        mobileMenuWrapper.style.cssText = `
            position: fixed;
            top: 0;
            right: 0;
            width: 280px;
            height: 100vh;
            background: #ffffff;
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            overflow-y: auto;
            padding-top: 90px;
            box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
        `;
        
        // Clone menu items
        const menuItems = navMenu.querySelectorAll('li');
        menuItems.forEach((item, index) => {
            const link = item.querySelector('a');
            if (link) {
                const mobileItem = document.createElement('div');
                mobileItem.style.cssText = `
                    background: #ffffff;
                    border-bottom: 1px solid #e5e7eb;
                    transition: background 0.2s ease;
                `;
                
                const mobileLink = document.createElement('a');
                mobileLink.href = link.href;
                mobileLink.textContent = link.textContent;
                mobileLink.className = link.className;
                mobileLink.style.cssText = `
                    display: block;
                    padding: 1.25rem 1.5rem;
                    background: transparent;
                    color: #1f2937;
                    font-size: 1.1rem;
                    font-weight: 500;
                    text-decoration: none;
                    transition: all 0.2s ease;
                `;
                
                // Add hover effect
                mobileItem.addEventListener('mouseenter', () => {
                    mobileItem.style.background = '#f3f4f6';
                    mobileLink.style.color = '#4C1D95';
                    mobileLink.style.paddingLeft = '2rem';
                });
                
                mobileItem.addEventListener('mouseleave', () => {
                    mobileItem.style.background = '#ffffff';
                    mobileLink.style.color = '#1f2937';
                    mobileLink.style.paddingLeft = '1.5rem';
                });
                
                // Active state
                if (link.classList.contains('active')) {
                    mobileLink.style.color = '#4C1D95';
                    mobileLink.style.fontWeight = '600';
                    mobileItem.style.background = '#f9fafb';
                }
                
                // Close menu on click
                mobileLink.addEventListener('click', () => {
                    mobileMenuWrapper.style.transform = 'translateX(100%)';
                    document.body.style.overflow = '';
                    backdrop.style.opacity = '0';
                    backdrop.style.visibility = 'hidden';
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                });
                
                mobileItem.appendChild(mobileLink);
                mobileMenuWrapper.appendChild(mobileItem);
            }
        });
        
        document.body.appendChild(mobileMenuWrapper);
        
        // Toggle menu
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = mobileMenuWrapper.style.transform === 'translateX(0px)';
            
            if (!isActive) {
                mobileMenuWrapper.style.transform = 'translateX(0)';
                document.body.style.overflow = 'hidden';
                backdrop.style.opacity = '1';
                backdrop.style.visibility = 'visible';
                const icon = this.querySelector('i');
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                mobileMenuWrapper.style.transform = 'translateX(100%)';
                document.body.style.overflow = '';
                backdrop.style.opacity = '0';
                backdrop.style.visibility = 'hidden';
                const icon = this.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on backdrop
        backdrop.addEventListener('click', function() {
            mobileMenuWrapper.style.transform = 'translateX(100%)';
            document.body.style.overflow = '';
            backdrop.style.opacity = '0';
            backdrop.style.visibility = 'hidden';
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    }
    
    // Mobile menu handling (no longer needed with new wrapper)
    // Old nav-menu is hidden on mobile
    
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
