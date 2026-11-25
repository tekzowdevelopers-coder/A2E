/**
 * A2E POWER SYSTEM - Main JavaScript Engine
 * Handles Navigation, Mobile Toggler, WhatsApp Form Integration, Client Validation, and UI Utilities
 */

(function () {
  'use strict';

  // Constants & Company Details
  const COMPANY_CONFIG = {
    name: 'A2E Power System',
    primaryWhatsApp: '919566380232', // Main Contact / Emergency
    supportWhatsApp: '919940968373', // Engineering / Support
    emergencyPhone: '+91 95663 80232',
    primaryEmail: 'a2epowersystem@outlook.com'
  };

  // DOM Content Loaded
  document.addEventListener('DOMContentLoaded', () => {
    initStickyNavbar();
    initMobileNavBehavior();
    initBackToTop();
    initWhatsAppEnquiryForm();
    initQuickContactButtons();
    highlightActiveNavLink();
  });

  /**
   * Sticky Navbar on Scroll
   */
  function initStickyNavbar() {
    const navbar = document.querySelector('.navbar-custom');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('is-sticky');
      } else {
        navbar.classList.remove('is-sticky');
      }
    }, { passive: true });
  }

  /**
   * Mobile Navbar Behavior: Auto close on link click & touch friendly
   */
  function initMobileNavBehavior() {
    const navbarCollapse = document.getElementById('navbarMain');
    if (!navbarCollapse) return;

    // Close mobile collapse when user clicks non-dropdown nav link
    const navLinks = navbarCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
          if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
          } else {
            navbarCollapse.classList.remove('show');
          }
        }
      });
    });
  }

  /**
   * Back to Top Button
   */
  function initBackToTop() {
    const btnTop = document.querySelector('.btn-back-to-top');
    if (!btnTop) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btnTop.classList.add('show');
      } else {
        btnTop.classList.remove('show');
      }
    }, { passive: true });

    btnTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /**
   * Format WhatsApp Enquiry Message according to standard template
   */
  function buildWhatsAppMessage(data) {
    return `Hello A2E Power System,\n\nI would like to make an enquiry.\n\nName: ${data.name}\nMobile: ${data.phone}\nEmail: ${data.email}\nCompany: ${data.company}\nSubject: ${data.subject}\nLocation: ${data.location}\n\nMessage:\n${data.message}\n\nPlease contact me regarding my enquiry.\n\nThank you.`;
  }

  /**
   * Setup WhatsApp Enquiry Form
   */
  function initWhatsAppEnquiryForm() {
    const forms = document.querySelectorAll('.whatsapp-enquiry-form');
    if (!forms.length) return;

    forms.forEach(form => {
      const nameInput = form.querySelector('[name="fullName"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const emailInput = form.querySelector('[name="email"]');
      const companyInput = form.querySelector('[name="company"]');
      const subjectInput = form.querySelector('[name="subject"]');
      const locationInput = form.querySelector('[name="location"]');
      const messageInput = form.querySelector('[name="message"]');
      const numSelect = form.querySelector('[name="targetNumber"]');
      const previewBox = form.closest('.form-container')?.querySelector('.whatsapp-bubble') ||
                         document.querySelector('.whatsapp-bubble');

      // Function to get current form data
      const getFormData = () => ({
        name: (nameInput?.value || '').trim(),
        phone: (phoneInput?.value || '').trim(),
        email: (emailInput?.value || '').trim(),
        company: (companyInput?.value || '').trim(),
        subject: (subjectInput?.value || '').trim(),
        location: (locationInput?.value || '').trim(),
        message: (messageInput?.value || '').trim()
      });

      // Update live preview if element exists
      const updatePreview = () => {
        if (!previewBox) return;
        const data = getFormData();
        const displayData = {
          name: data.name || '[Your Name]',
          phone: data.phone || '[Your Mobile]',
          email: data.email || '[Your Email]',
          company: data.company || '[Your Company]',
          subject: data.subject || '[Subject]',
          location: data.location || '[Your Location]',
          message: data.message || '[Your Message Here]'
        };
        previewBox.textContent = buildWhatsAppMessage(displayData);
      };

      // Listen for typing events to update preview
      [nameInput, phoneInput, emailInput, companyInput, subjectInput, locationInput, messageInput].forEach(inp => {
        if (inp) {
          inp.addEventListener('input', updatePreview);
          inp.addEventListener('change', updatePreview);
        }
      });
      // Initial preview render
      updatePreview();

      // Form submission handling
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Field Validation
        let isValid = true;
        const data = getFormData();

        // 1. Full Name
        if (!data.name || data.name.length < 2) {
          showFieldError(nameInput, 'Please enter your full name (at least 2 letters).');
          isValid = false;
        } else {
          clearFieldError(nameInput);
        }

        // 2. Mobile Phone (minimum 10 digits)
        const phoneRegex = /^[0-9+\s\-()]{10,16}$/;
        if (!data.phone || !phoneRegex.test(data.phone.replace(/\s+/g, ''))) {
          showFieldError(phoneInput, 'Please enter a valid mobile number (min 10 digits).');
          isValid = false;
        } else {
          clearFieldError(phoneInput);
        }

        // 3. Email Address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
          showFieldError(emailInput, 'Please enter a valid email address.');
          isValid = false;
        } else {
          clearFieldError(emailInput);
        }

        // 4. Company Name
        if (!data.company) {
          showFieldError(companyInput, 'Please enter your company or organization name.');
          isValid = false;
        } else {
          clearFieldError(companyInput);
        }

        // 5. Subject
        if (!data.subject) {
          showFieldError(subjectInput, 'Please select or enter the subject of your enquiry.');
          isValid = false;
        } else {
          clearFieldError(subjectInput);
        }

        // 6. Location
        if (!data.location) {
          showFieldError(locationInput, 'Please enter your city/location (e.g. Hosur, Chennai, etc.).');
          isValid = false;
        } else {
          clearFieldError(locationInput);
        }

        // 7. Message
        if (!data.message || data.message.length < 5) {
          showFieldError(messageInput, 'Please describe your requirement or query (at least 5 characters).');
          isValid = false;
        } else {
          clearFieldError(messageInput);
        }

        if (!isValid) {
          const firstError = form.querySelector('.is-invalid');
          if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
          }
          return;
        }

        // Prepare WhatsApp Destination
        const targetNumber = (numSelect?.value || COMPANY_CONFIG.primaryWhatsApp).replace(/[^0-9]/g, '');
        const messageText = buildWhatsAppMessage(data);
        const encodedMessage = encodeURIComponent(messageText);
        const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedMessage}`;

        // Feedback notification
        const statusBox = form.querySelector('.form-status-alert');
        if (statusBox) {
          statusBox.innerHTML = `
            <div class="alert alert-success d-flex align-items-center gap-2 mb-3" role="alert">
              <i class="bi bi-whatsapp fs-4"></i>
              <div>
                <strong>Enquiry Generated!</strong> Redirecting to WhatsApp to send your enquiry...
              </div>
            </div>`;
          statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Open WhatsApp Click-to-Chat
        setTimeout(() => {
          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        }, 300);
      });
    });
  }

  function showFieldError(input, message) {
    if (!input) return;
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    let feedback = input.nextElementSibling;
    if (!feedback || !feedback.classList.contains('invalid-feedback')) {
      feedback = document.createElement('div');
      feedback.className = 'invalid-feedback';
      input.parentNode.appendChild(feedback);
    }
    feedback.textContent = message;
  }

  function clearFieldError(input) {
    if (!input) return;
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  }

  /**
   * Direct WhatsApp Click Handlers for generic CTAs
   */
  function initQuickContactButtons() {
    document.querySelectorAll('[data-whatsapp-product]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const product = btn.getAttribute('data-whatsapp-product') || 'Products & Services';
        const text = `Hello A2E Power System,\n\nI am interested in ${product}. Please share technical specifications, pricing, and project consultation details.\n\nThank you!`;
        const url = `https://wa.me/${COMPANY_CONFIG.primaryWhatsApp}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    });
  }

  /**
   * Highlight current menu link
   */
  function highlightActiveNavLink() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    document.querySelectorAll('.navbar-nav .nav-link, .dropdown-menu .dropdown-item').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPage = href.substring(href.lastIndexOf('/') + 1);

      if (linkPage === pageName || (pageName === '' && linkPage === 'index.html')) {
        link.classList.add('active');
        const parentDropdown = link.closest('.dropdown');
        if (parentDropdown) {
          const toggle = parentDropdown.querySelector('.nav-link.dropdown-toggle');
          if (toggle) toggle.classList.add('active');
        }
      }
    });
  }

})();
