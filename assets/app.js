// Kosh Landing Page - Main JavaScript

// Store form data globally
let formData = {};

// Initialize page interactions
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    // CTA Button Handler
    const ctaButton = document.getElementById('cta-start');
    const flowContainer = document.getElementById('kosh-flow-container');
    const form = document.getElementById('kosh-flow');

    ctaButton.addEventListener('click', function() {
        // Track onboarding start
        posthog.capture('onboarding_started');
        
        // Show the flow form
        flowContainer.classList.remove('hidden');
        
        // Smooth scroll to form
        flowContainer.scrollIntoView({ behavior: 'smooth' });
        
        // Hide the CTA button
        ctaButton.style.display = 'none';
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }

        // Get form data
        const formDataObj = new FormData(form);
        formData = {
            goal: formDataObj.get('goal'),
            amount_band: formDataObj.get('amount_band'),
            timeline: formDataObj.get('timeline'),
            residence: formDataObj.get('residence'),
            contact: formDataObj.get('contact')
        };

        // Track analytics events
        posthog.capture('quiz_completed', {
            goal: formData.goal,
            amount_band: formData.amount_band,
            diaspora: formData.residence === 'diaspora'
        });

        posthog.capture('intent_submitted', {
            type: formData.goal,
            amount_band: formData.amount_band
        });

        // Hide form and show plan
        flowContainer.classList.add('hidden');
        renderPlan();
    });

    // Initialize radio button styling
    initializeRadioButtons();
}

function validateForm() {
    const requiredFields = ['goal', 'amount_band', 'timeline', 'residence', 'contact'];
    
    for (const field of requiredFields) {
        const element = document.querySelector(`[name="${field}"]`);
        if (field === 'contact') {
            if (!element.value.trim()) {
                alert('Please provide your email or phone number.');
                return false;
            }
            // Basic validation for email or phone
            const value = element.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            
            if (!emailRegex.test(value) && !phoneRegex.test(value.replace(/\s/g, ''))) {
                alert('Please provide a valid email or phone number.');
                return false;
            }
        } else {
            const checked = document.querySelector(`[name="${field}"]:checked`);
            if (!checked) {
                alert(`Please select a ${field.replace('_', ' ')}.`);
                return false;
            }
        }
    }
    
    return true;
}

function renderPlan() {
    const planSection = document.getElementById('plan');
    const planContent = document.getElementById('plan-content');
    
    // Generate plan content based on goal
    let content = '';
    
    switch (formData.goal) {
        case 'gold':
            content = "We'll accumulate your chosen amount and simulate a monthly buy during beta. Transparent fees. Cancel anytime.";
            break;
        case 'mutual_fund':
            content = "Pick income/balanced/growth later; we simulate contributions and track progress.";
            break;
        case 'dps':
            content = "Commit monthly, we simulate a 3–5 year schedule and weekly reminders.";
            break;
    }
    
    planContent.innerHTML = content;
    
    // Update WhatsApp button
    updateWhatsAppButton();
    
    // Show plan section
    planSection.classList.remove('hidden');
    planSection.scrollIntoView({ behavior: 'smooth' });
}

function updateWhatsAppButton() {
    const whatsappButton = document.getElementById('btn-whatsapp');
    const whatsappNumber = 'WHATSAPP_NUMBER'; // Placeholder - replace in environment variables
    
    // Create WhatsApp message
    const message = `Hi Kosh, I chose ${formData.goal} with ৳${formData.amount_band} for ${formData.timeline} days (${formData.residence})`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    whatsappButton.addEventListener('click', function() {
        // Track concierge opened
        posthog.capture('concierge_opened', { channel: 'whatsapp' });
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
    });
}

function initializeRadioButtons() {
    // Add visual feedback for radio button selections
    const radioContainers = document.querySelectorAll('label:has(input[type="radio"])');
    
    radioContainers.forEach(container => {
        const radio = container.querySelector('input[type="radio"]');
        
        container.addEventListener('click', function() {
            // Remove selected class from all containers with same name
            const name = radio.name;
            document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
                r.closest('label').classList.remove('border-kosh-green', 'bg-green-50');
            });
            
            // Add selected class to clicked container
            container.classList.add('border-kosh-green', 'bg-green-50');
        });
    });

    // Special handling for amount band buttons (grid layout)
    const amountBands = document.querySelectorAll('input[name="amount_band"]');
    amountBands.forEach(radio => {
        radio.addEventListener('change', function() {
            // Remove selected styling from all amount band labels
            amountBands.forEach(r => {
                r.closest('label').classList.remove('border-kosh-green', 'bg-green-50', 'text-kosh-green');
            });
            
            // Add selected styling to current label
            if (this.checked) {
                this.closest('label').classList.add('border-kosh-green', 'bg-green-50', 'text-kosh-green');
            }
        });
    });
}

// FAQ Toggle Function
function toggleFAQ(index) {
    const faqContent = document.getElementById(`faq-${index}`);
    const button = faqContent.previousElementSibling;
    const icon = button.querySelector('span:last-child');
    
    if (faqContent.classList.contains('hidden')) {
        faqContent.classList.remove('hidden');
        icon.textContent = '−';
        button.classList.add('bg-gray-50');
    } else {
        faqContent.classList.add('hidden');
        icon.textContent = '+';
        button.classList.remove('bg-gray-50');
    }
}

// Utility function for smooth scrolling
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}