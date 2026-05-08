// Modern Portfolio JavaScript with Advanced Animations and Professional Features

// Global function for Get In Touch button
window.scrollToContact = function() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

class PortfolioApp {
    constructor() {
        this.init();
        this.setupEventListeners();
        this.startAnimations();
    }

    init() {
        // Initialize AOS (Animate On Scroll)
        if (typeof AOS !== "undefined") {
            AOS.init({
                duration: 800,
                easing: "ease-in-out",
                once: true,
                offset: 100,
            });
        }

        // Initialize theme
        this.initTheme();

        // Initialize particles
        this.initParticles();

        // Initialize typing animation
        this.initTypingAnimation();

        // Initialize counters
        this.initCounters();

        // Initialize skill bars
        this.initSkillBars();

        // Initialize smooth scrolling
        this.initSmoothScrolling();

        // Initialize loading screen
        this.initLoadingScreen();

        // Initialize 3D effects
        this.init3DEffects();

        // Initialize interactive 3D object
        this.initInteractive3D();
    }

    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById("themeToggle");
        if (themeToggle) {
            themeToggle.addEventListener("click", () => this.toggleTheme());
            this.addTouchAnimation(themeToggle);
        }

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById("mobileMenuToggle");
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener("click", () =>
                this.toggleMobileSidebar()
            );
            this.addTouchAnimation(mobileMenuToggle);
        }

        // Mobile sidebar close button
        const mobileCloseBtn = document.getElementById("mobileCloseBtn");
        if (mobileCloseBtn) {
            mobileCloseBtn.addEventListener("click", () => this.closeMobileSidebar());
        }

        // Mobile sidebar overlay
        const mobileSidebarOverlay = document.getElementById(
            "mobileSidebarOverlay"
        );
        if (mobileSidebarOverlay) {
            mobileSidebarOverlay.addEventListener("click", () =>
                this.closeMobileSidebar()
            );
        }

        // Mobile theme toggle
        const mobileThemeToggle = document.getElementById("mobileThemeToggle");
        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener("click", () => this.toggleTheme());
        }

        // Navigation links
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => {
            link.addEventListener("click", (e) => this.handleNavClick(e));
            this.addTouchAnimation(link);
        });

        // Mobile navigation links
        const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
        mobileNavLinks.forEach((link) => {
            link.addEventListener("click", (e) => this.handleMobileNavClick(e));
        });

        // Scroll events
        window.addEventListener("scroll", () => this.handleScroll());

        // Resize events
        window.addEventListener("resize", () => this.handleResize());

        // Contact form
        const contactForm = document.querySelector('form[action*="web3forms"]');
        if (contactForm) {
            contactForm.addEventListener("submit", (e) => this.handleFormSubmit(e));
        }

        // Project card interactions
        const projectCards = document.querySelectorAll(".project-card");
        projectCards.forEach((card) => {
            card.addEventListener("mouseenter", () =>
                this.handleProjectHover(card, true)
            );
            card.addEventListener("mouseleave", () =>
                this.handleProjectHover(card, false)
            );
            this.addTouchAnimation(card);
        });

        // Tech icon interactions
        const techIcons = document.querySelectorAll(".tech-icon");
        techIcons.forEach((icon) => {
            icon.addEventListener("click", () => this.handleTechIconClick(icon));
            this.addTouchAnimation(icon);
        });

        // Button interactions
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((button) => {
            this.addTouchAnimation(button);
        });

        // Contact item interactions
        const contactItems = document.querySelectorAll(".contact-item");
        contactItems.forEach((item) => {
            this.addTouchAnimation(item);
        });

        // Keyboard navigation
        document.addEventListener("keydown", (e) =>
            this.handleKeyboardNavigation(e)
        );

        // Enable keyboard scrolling
        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                e.preventDefault();
                const scrollAmount = 100;
                const direction = e.key === "ArrowUp" ? -scrollAmount : scrollAmount;
                window.scrollBy({
                    top: direction,
                    behavior: "smooth"
                });
            }
        });

        // Touch events for mobile
        this.setupTouchEvents();
    }

    initTheme() {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        this.updateThemeIcon(newTheme);

        // Add transition effect
        document.body.style.transition =
            "background-color 0.3s ease, color 0.3s ease";
        setTimeout(() => {
            document.body.style.transition = "";
        }, 300);
    }

    updateThemeIcon(theme) {
        const themeToggle = document.getElementById("themeToggle");
        if (themeToggle) {
            const icon = themeToggle.querySelector("i");
            icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
        }

        // Update mobile theme button
        const mobileThemeToggle = document.getElementById("mobileThemeToggle");
        if (mobileThemeToggle) {
            const mobileIcon = mobileThemeToggle.querySelector("i");
            const mobileText = mobileThemeToggle.querySelector("span");
            mobileIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
            mobileText.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
        }
    }

    initParticles() {
        const particlesContainer = document.getElementById("particlesContainer");
        if (!particlesContainer) return;

        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            this.createParticle(particlesContainer);
        }
    }

    createParticle(container) {
        const particle = document.createElement("div");
        particle.className = "particle";

        // Random position and animation delay
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 6 + "s";
        particle.style.animationDuration = Math.random() * 4 + 4 + "s";

        container.appendChild(particle);
    }

    initTypingAnimation() {
        const typingElement = document.getElementById("typingAnimation");
        if (!typingElement) return;

        const texts = [
            "Software Developer",
            "MERN Stack Developer",
            "React Specialist",
            "Node.js Expert",
            "Full-Stack Developer",
            "Problem Solver",
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeSpeed = 100;
        const deleteSpeed = 50;
        const pauseTime = 2000;

        const type = () => {
            const currentText = texts[textIndex];

            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let nextTypeSpeed = isDeleting ? deleteSpeed : typeSpeed;

            if (!isDeleting && charIndex === currentText.length) {
                nextTypeSpeed = pauseTime;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                nextTypeSpeed = typeSpeed;
            }

            setTimeout(type, nextTypeSpeed);
        };

        type();
    }

    initCounters() {
        const counters = document.querySelectorAll(".stat-number[data-count]");

        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute("data-count"));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        };

        // Intersection Observer for counters
        const counterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        counterObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.5
            }
        );

        counters.forEach((counter) => {
            counterObserver.observe(counter);
        });
    }

    initSkillBars() {
        const skillBars = document.querySelectorAll(".skill-progress");

        const animateSkillBar = (skillBar) => {
            const width = skillBar.getAttribute("data-width");
            skillBar.style.width = width + "%";
        };

        // Intersection Observer for skill bars
        const skillObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            animateSkillBar(entry.target);
                        }, 200);
                        skillObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.5
            }
        );

        skillBars.forEach((skillBar) => {
            skillObserver.observe(skillBar);
        });
    }

    initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth",
                    });
                }
            });
        });
    }

    initLoadingScreen() {
        const loadingScreen = document.getElementById("loadingScreen");
        const container = document.querySelector(".container");
        const body = document.body;

        if (!loadingScreen) return;

        // Add loading class to body to prevent scrolling
        body.classList.add("loading");

        // Hide loading screen after page load
        window.addEventListener("load", () => {
            setTimeout(() => {
                loadingScreen.classList.add("hidden");

                // Show main content after loading screen starts fading
                setTimeout(() => {
                    if (container) {
                        container.classList.add("loaded");
                    }
                    body.classList.remove("loading");
                }, 300);

                // Remove loading screen from DOM after animation
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                }, 800);
            }, 2000);
        });
    }

    handleScroll() {
        const nav = document.getElementById("floatingNav");
        if (!nav) return;

        // Add scrolled class when scrolling
        if (window.scrollY > 100) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

        // Update active navigation link
        this.updateActiveNavLink();
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-link");

        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    handleNavClick(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }

        // Close mobile sidebar if open
        this.closeMobileSidebar();
    }

    toggleMobileSidebar() {
        const mobileSidebar = document.getElementById("mobileSidebar");
        const mobileOverlay = document.getElementById("mobileSidebarOverlay");
        const mobileToggle = document.getElementById("mobileMenuToggle");

        if (mobileSidebar && mobileOverlay && mobileToggle) {
            const isOpen = mobileSidebar.classList.contains("open");

            if (isOpen) {
                this.closeMobileSidebar();
            } else {
                mobileSidebar.classList.add("open");
                mobileOverlay.classList.add("active");
                mobileToggle.classList.add("active");
                document.body.style.overflow = "hidden"; // Prevent background scrolling
            }
        }
    }

    closeMobileSidebar() {
        const mobileSidebar = document.getElementById("mobileSidebar");
        const mobileOverlay = document.getElementById("mobileSidebarOverlay");
        const mobileToggle = document.getElementById("mobileMenuToggle");

        if (mobileSidebar && mobileOverlay && mobileToggle) {
            mobileSidebar.classList.remove("open");
            mobileOverlay.classList.remove("active");
            mobileToggle.classList.remove("active");
            document.body.style.overflow = ""; // Restore scrolling
        }
    }

    handleMobileNavClick(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Close mobile sidebar
            this.closeMobileSidebar();

            // Update active states
            this.updateActiveNavStates(targetId);

            // Scroll to section
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    handleResize() {
        // Close mobile sidebar on resize
        this.closeMobileSidebar();

        // Recalculate animations if needed
        if (typeof AOS !== "undefined") {
            AOS.refresh();
        }
    }

    updateActiveNavStates(targetId) {
        // Remove active class from all nav links
        const allNavLinks = document.querySelectorAll(
            ".nav-link, .mobile-nav-link"
        );
        allNavLinks.forEach((link) => {
            link.classList.remove("active");
        });

        // Add active class to current section links
        const currentNavLinks = document.querySelectorAll(`[href="${targetId}"]`);
        currentNavLinks.forEach((link) => {
            link.classList.add("active");
        });
    }

    handleFormSubmit(e) {
        const form = e.target;
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Show loading state
        submitButton.textContent = "Sending...";
        submitButton.disabled = true;

        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            submitButton.textContent = "Message Sent!";
            submitButton.style.background = "var(--success)";

            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = "";
                form.reset();
            }, 3000);
        }, 2000);
    }

    handleProjectHover(card, isEntering) {
        const overlay = card.querySelector(".project-overlay");
        if (overlay) {
            overlay.style.opacity = isEntering ? "1" : "0";
        }
    }

    handleTechIconClick(icon) {
        const tech = icon.getAttribute("data-tech");

        // Add click animation
        icon.style.transform = "scale(0.95)";
        setTimeout(() => {
            icon.style.transform = "";
        }, 150);

        // Show tech info (you can implement a tooltip or modal here)
        console.log(`Clicked on ${tech}`);
    }

    handleKeyboardNavigation(e) {
        // ESC key closes mobile sidebar
        if (e.key === "Escape") {
            this.closeMobileSidebar();
        }

        // Handle section navigation with Page Up/Down
        if (e.key === "PageUp" || e.key === "PageDown") {
            e.preventDefault();
            const sections = ["dashboard", "experience", "education", "contact"];
            const currentSection = this.getCurrentSection();
            const currentIndex = sections.indexOf(currentSection);
            
            let nextIndex;
            if (e.key === "PageUp") {
                nextIndex = Math.max(0, currentIndex - 1);
            } else {
                nextIndex = Math.min(sections.length - 1, currentIndex + 1);
            }
            
            const targetSection = document.getElementById(sections[nextIndex]);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
        
        // Handle Home/End keys
        if (e.key === "Home") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        if (e.key === "End") {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
    }
    
    getCurrentSection() {
        const sections = ["dashboard", "experience", "education", "contact"];
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
                return sections[i];
            }
        }
        return sections[0];
    }

    startAnimations() {
        // Add entrance animations to elements
        const animatedElements = document.querySelectorAll("[data-aos]");

        animatedElements.forEach((element, index) => {
            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";

            setTimeout(() => {
                element.style.transition = "all 0.6s ease";
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }, index * 100);
        });
    }

    init3DEffects() {
        // Add 3D mouse tracking to profile card
        const profileCard = document.querySelector(".profile-card");
        if (profileCard) {
            this.add3DMouseTracking(profileCard);
        }

        // Add 3D effects to project cards
        const projectCards = document.querySelectorAll(".project-card");
        projectCards.forEach((card) => {
            this.add3DMouseTracking(card);
        });

        // Add 3D effects to tech icons
        const techIcons = document.querySelectorAll(".tech-icon");
        techIcons.forEach((icon) => {
            this.add3DMouseTracking(icon);
        });

        // Add 3D effects to buttons
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((button) => {
            this.add3DMouseTracking(button);
        });

        // Add 3D effects to contact items
        const contactItems = document.querySelectorAll(".contact-item");
        contactItems.forEach((item) => {
            this.add3DMouseTracking(item);
        });

        // Add 3D parallax scrolling
        this.init3DParallax();
    }

    add3DMouseTracking(element) {
        // Check if device supports 3D transforms and is not mobile
        const isMobile = window.innerWidth <= 768;
        const supports3D = CSS.supports("transform", "perspective(1px)");

        if (!supports3D || isMobile) {
            return; // Skip 3D effects on unsupported devices
        }

        let isAnimating = false;

        element.addEventListener("mousemove", (e) => {
            if (isAnimating) return;

            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * -10;

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        element.addEventListener("mouseleave", () => {
            isAnimating = true;
            element.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";

            setTimeout(() => {
                isAnimating = false;
            }, 300);
        });
    }

    init3DParallax() {
        window.addEventListener("scroll", () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll("[data-parallax]");

            parallaxElements.forEach((element) => {
                const speed = element.dataset.parallax || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    initInteractive3D() {
        const interactive3D = document.getElementById("interactive3D");
        if (!interactive3D) return;

        let isMouseOver = false;
        let mouseX = 0;
        let mouseY = 0;
        let rotationX = 0;
        let rotationY = 0;

        // Mouse move handler
        interactive3D.addEventListener("mousemove", (e) => {
            if (!isMouseOver) return;

            const rect = interactive3D.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            mouseX = e.clientX - centerX;
            mouseY = e.clientY - centerY;

            // Calculate rotation based on mouse position
            rotationY = (mouseX / rect.width) * 360;
            rotationX = -(mouseY / rect.height) * 360;

            // Apply rotation
            interactive3D.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        });

        // Mouse enter handler
        interactive3D.addEventListener("mouseenter", () => {
            isMouseOver = true;
            interactive3D.style.animationPlayState = "paused";
        });

        // Mouse leave handler
        interactive3D.addEventListener("mouseleave", () => {
            isMouseOver = false;
            interactive3D.style.animationPlayState = "running";

            // Reset rotation gradually
            setTimeout(() => {
                if (!isMouseOver) {
                    interactive3D.style.transform = "rotateX(0deg) rotateY(0deg)";
                }
            }, 100);
        });

        // Touch support for mobile
        interactive3D.addEventListener("touchstart", (e) => {
            e.preventDefault();
            isMouseOver = true;
            interactive3D.style.animationPlayState = "paused";
        });

        interactive3D.addEventListener("touchmove", (e) => {
            e.preventDefault();
            if (!isMouseOver) return;

            const rect = interactive3D.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const touch = e.touches[0];

            mouseX = touch.clientX - centerX;
            mouseY = touch.clientY - centerY;

            rotationY = (mouseX / rect.width) * 360;
            rotationX = -(mouseY / rect.height) * 360;

            interactive3D.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        });

        interactive3D.addEventListener("touchend", (e) => {
            e.preventDefault();
            isMouseOver = false;
            interactive3D.style.animationPlayState = "running";

            setTimeout(() => {
                if (!isMouseOver) {
                    interactive3D.style.transform = "rotateX(0deg) rotateY(0deg)";
                }
            }, 100);
        });
    }

    // Touch and Animation Methods
    addTouchAnimation(element) {
        element.classList.add("touch-animation");

        element.addEventListener("touchstart", (e) => {
            element.classList.add("active");
            setTimeout(() => {
                element.classList.remove("active");
            }, 600);
        });

        element.addEventListener("click", (e) => {
            element.classList.add("active");
            setTimeout(() => {
                element.classList.remove("active");
            }, 600);
        });
    }

    setupTouchEvents() {
        // Add cursor glow effect for desktop
        if (!this.isMobile()) {
            document.addEventListener("mousemove", (e) => {
                const elements = document.querySelectorAll(".cursor-glow");
                elements.forEach((element) => {
                    const rect = element.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    element.style.setProperty("--mouse-x", `${x}%`);
                    element.style.setProperty("--mouse-y", `${y}%`);
                });
            });
        }

        // Add haptic feedback for mobile
        if (this.isMobile()) {
            const touchElements = document.querySelectorAll(
                ".btn, .nav-link, .tech-icon, .project-card"
            );
            touchElements.forEach((element) => {
                element.addEventListener("touchstart", () => {
                    if (navigator.vibrate) {
                        navigator.vibrate(50);
                    }
                });
            });
        }
    }

    isMobile() {
        return (
            window.innerWidth <= 768 ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        );
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }
}

// Initialize the portfolio app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    new PortfolioApp();
});

// Additional utility functions
const utils = {
    // Format numbers with commas
    formatNumber: (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    // Generate random ID
    generateId: () => {
        return Math.random().toString(36).substr(2, 9);
    },

    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Smooth scroll to element
    scrollToElement: (element, offset = 0) => {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
        });
    },

    // Copy text to clipboard
    copyToClipboard: async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error("Failed to copy text: ", err);
            return false;
        }
    },

    // Show notification
    showNotification: (message, type = "info") => {
        const notification = document.createElement("div");
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = "translateX(0)";
        }, 100);

        setTimeout(() => {
            notification.style.transform = "translateX(100%)";
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    },
};

// Export for use in other scripts
window.PortfolioApp = PortfolioApp;
window.utils = utils;