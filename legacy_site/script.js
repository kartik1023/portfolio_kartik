// ===================================
// KARTIK POTDAR - CLOUD ENGINEER PORTFOLIO
// Interactive JavaScript
// ===================================

// === SMOOTH SCROLLING ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navMenu = document.getElementById('nav-menu');
            const hamburger = document.getElementById('hamburger');
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// === NAVBAR SCROLL EFFECT ===
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// === MOBILE MENU TOGGLE ===
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// === ACTIVE NAV LINK ===
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// === SCROLL TO TOP BUTTON ===
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// === SKILL BARS ANIMATION ===
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// === STATS COUNTER ANIMATION ===
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = entry.target.querySelectorAll('.stat-item h4');
            statItems.forEach(stat => {
                const target = stat.textContent;
                const isNumber = /^\d+$/.test(target);

                if (isNumber) {
                    const targetNum = parseInt(target);
                    let current = 0;
                    const increment = targetNum / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= targetNum) {
                            stat.textContent = target;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + '+';
                        }
                    }, 30);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// === CONTACT FORM HANDLING ===
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Create mailto link
    const mailtoLink = `mailto:kartikpotdar007@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company}\n\n` +
        `Message:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    alert('Thank you for reaching out! Your email client will open with the pre-filled message. You can also directly email me at kartikpotdar007@gmail.com or call +91 9008870855.');

    // Reset form
    contactForm.reset();
});

// === DOWNLOAD RESUME ===
const downloadResumeBtn = document.getElementById('download-resume');

downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Create resume content
    const resumeContent = `
KARTIK POTDAR
Cloud & DevOps Engineer | AWS Certified | MCA Graduate

CONTACT:
Location: Kormangala, Bangalore
Phone: +91 9008870855
Email: kartikpotdar007@gmail.com
LinkedIn: linkedin.com/in/kartik-potdar

PROFESSIONAL SUMMARY:
Cloud & DevOps Engineer with hands-on AWS deployments, Flask + MySQL web apps, Docker automation, 
CI/CD pipelines, serverless architecture, and Generative AI exposure. Immediate joiner ready to 
contribute to cloud infrastructure and DevOps initiatives.

TECHNICAL SKILLS:
Cloud Platforms: AWS (EC2, S3, ECS, Fargate, Lambda, CloudFront, IAM, VPC)
DevOps: Docker, Kubernetes, CI/CD, Jenkins, GitHub Actions, Linux, Bash Scripting
Programming: Python, Flask, JavaScript, HTML, CSS
Databases: MySQL, SQL, Database Design
AI/ML: Generative AI, CNN, NLP, TensorFlow
Tools: Git, GitHub, REST APIs, Microservices

PROFESSIONAL EXPERIENCE:


IT Project Intern | Welleazy | Recent
- Gained hands-on exposure to AWS serverless architecture and cloud deployment strategies
- Implemented Docker containerization for application deployments, improving efficiency
- Created comprehensive technical specifications and project documentation

Fullstack Developer Intern | Gyaan Vivarttana Technologies | Dec 2023 - Feb 2024
- Developed responsive web apps using HTML, CSS, and JavaScript
- Integrated Flask and MySQL for secure backend operations
- Enhanced UI/UX design resulting in improved user engagement

DevOps Cloud Intern | COSS (Cloud & Open Source Solutions) | Jan 2022 - Jul 2022
- Deployed containerized applications with Docker and Kubernetes, cutting release time by 40%
- Automated AWS resource provisioning with Python scripts, reducing manual work by 50%
- Set up CI/CD pipelines for automated testing and deployment

Python Developer Intern | Softek Solutions Pvt. Ltd | May 2022 - Jun 2022
- Built web applications using Flask for backend and HTML/CSS/JS for frontend
- Created and managed databases with MySQL Workbench
- Optimized application performance and responsiveness



CERTIFICATIONS:
- AWS Solution Architect (2024)
- Microsoft Generative AI (2024)
- RHCSA - Red Hat Certified System Administrator (2024)
- Digital Marketing (2023)
- Website Development Tutorial (2023)

EDUCATION:
Master of Computer Applications (MCA) | CMR University | 2022-2024
Bachelor of Computer Applications (BCA) | Sharnbasva University | 2019-2022
Pre-University (PCMB) | Alva's College | 2017-2019

AVAILABILITY: Immediate Joiner
    `;

    // Create blob and download
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Kartik_Potdar_Cloud_DevOps_Engineer_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    // Show message
    alert('Resume downloaded! For a professionally formatted PDF version, please contact me at kartikpotdar007@gmail.com');
});

// === FADE IN ANIMATION ON SCROLL ===
const fadeElements = document.querySelectorAll('.project-card, .cert-card, .education-card, .timeline-item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// === TYPING EFFECT FOR TERMINAL ===
const terminalBody = document.querySelector('.terminal-body');
if (terminalBody) {
    const originalContent = terminalBody.innerHTML;
    terminalBody.innerHTML = '';

    let charIndex = 0;
    const typingSpeed = 30;

    function typeText() {
        if (charIndex < originalContent.length) {
            terminalBody.innerHTML = originalContent.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        }
    }

    // Start typing after a delay
    setTimeout(typeText, 1000);
}

// === PROJECT IMAGE PLACEHOLDERS ===
// Removed as per request (Projects section removed)


// === CONSOLE MESSAGE ===
console.log('%c👋 Hello, Recruiter!', 'color: #00C2FF; font-size: 24px; font-weight: bold;');
console.log('%cThanks for checking out my portfolio!', 'color: #64FFDA; font-size: 16px;');
console.log('%c📧 Email: kartikpotdar007@gmail.com', 'color: #8892B0; font-size: 14px;');
console.log('%c📱 Phone: +91 9008870855', 'color: #8892B0; font-size: 14px;');
console.log('%c💼 LinkedIn: linkedin.com/in/kartik-potdar', 'color: #8892B0; font-size: 14px;');
console.log('%c🚀 Status: Immediate Joiner', 'color: #10B981; font-size: 14px; font-weight: bold;');

// === PERFORMANCE OPTIMIZATION ===
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// === PREVENT CONTEXT MENU ON IMAGES (Optional) ===
// Uncomment if you want to protect images
// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('contextmenu', (e) => e.preventDefault());
// });

// === KEYBOARD SHORTCUTS ===
document.addEventListener('keydown', (e) => {
    // Press 'H' to go to home
    if (e.key === 'h' || e.key === 'H') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Press 'C' to go to contact
    if (e.key === 'c' || e.key === 'C') {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// === EASTER EGG ===
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiSequence.join('')) {
        alert('🎉 Konami Code Activated! You found the easter egg! 🚀\n\nYou clearly pay attention to details - that\'s exactly what we need in a Cloud Engineer!\n\nLet\'s connect: kartikpotdar007@gmail.com');
        konamiCode = [];
    }
});

// === INITIALIZE ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully! 🚀');

    // Add loaded class to body for animations
    document.body.classList.add('loaded');

    // Preload critical resources
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];

    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
});
