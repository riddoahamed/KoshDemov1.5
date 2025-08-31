// Kosh Prototype v2 - Client-side JavaScript
// Navigation and interaction logic

// Global state
let currentScreen = 'splash'
let currentCarouselIndex = 0
let selectedAmount = null
let selectedPaymentMethod = null

// Navigation function
function navigateToScreen(screenName) {
  currentScreen = screenName
  window.location.href = `/${screenName}`
}

// Go back function
function goBack() {
  // Simple back navigation logic
  const backRoutes = {
    'onboarding': '/',
    'signup': 'onboarding',
    'home-empty': 'signup',
    'products': 'home-empty',
    'product-gold': 'products',
    'product-dps': 'products', 
    'product-mutual': 'products',
    'add-money': 'products', // Will be set dynamically
    'payment': 'add-money',
    'confirmation': 'payment',
    'portfolio': 'home-with-portfolio',
    'updates': 'home-with-portfolio',
    'support': 'home-with-portfolio'
  }
  
  const backRoute = backRoutes[window.location.pathname.replace('/', '')] || '/'
  navigateToScreen(backRoute)
}

// Carousel functionality for onboarding
function initCarousel() {
  let currentSlide = 0
  const slides = 3
  
  // Auto-advance carousel every 4 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides
    updateCarousel(currentSlide)
  }, 4000)
  
  // Touch/swipe support
  let startX = 0
  let endX = 0
  
  const carouselContainer = document.getElementById('carousel-container')
  if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX
    })
    
    carouselContainer.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX
      handleSwipe()
    })
    
    carouselContainer.addEventListener('mousedown', (e) => {
      startX = e.clientX
    })
    
    carouselContainer.addEventListener('mouseup', (e) => {
      endX = e.clientX
      handleSwipe()
    })
  }
  
  function handleSwipe() {
    const minSwipeDistance = 50
    const swipeDistance = startX - endX
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped left - next slide
        currentSlide = (currentSlide + 1) % slides
      } else {
        // Swiped right - previous slide
        currentSlide = (currentSlide - 1 + slides) % slides
      }
      updateCarousel(currentSlide)
    }
  }
  
  function updateCarousel(index) {
    const carouselCards = document.getElementById('carousel-cards')
    if (carouselCards) {
      carouselCards.style.transform = `translateX(-${index * 100}%)`
    }
    
    // Update dots
    for (let i = 0; i < slides; i++) {
      const dot = document.getElementById(`dot-${i}`)
      if (dot) {
        if (i === index) {
          dot.className = 'w-3 h-3 bg-kosh-green rounded-full'
        } else {
          dot.className = 'w-3 h-3 bg-gray-300 rounded-full'
        }
      }
    }
  }
}

// Signup handling
function handleSignup(event) {
  event.preventDefault()
  
  const phoneInput = document.getElementById('phone-input')
  const phoneNumber = phoneInput?.value
  
  if (!phoneNumber || phoneNumber.length < 10) {
    alert('Please enter a valid phone number')
    return
  }
  
  // Simulate OTP success
  setTimeout(() => {
    alert('OTP sent! (Auto-success in demo)')
    setTimeout(() => {
      navigateToScreen('home-empty')
    }, 1000)
  }, 500)
}

// Amount selection
function selectAmount(amount) {
  selectedAmount = amount
  
  // Update UI
  document.querySelectorAll('.amount-chip').forEach(chip => {
    chip.classList.remove('border-kosh-green', 'text-kosh-green', 'bg-kosh-green', 'text-white')
    chip.classList.add('border-gray-200', 'text-gray-700')
  })
  
  // Highlight selected chip
  event.target.classList.remove('border-gray-200', 'text-gray-700')
  event.target.classList.add('border-kosh-green', 'bg-kosh-green', 'text-white')
  
  // Clear custom input
  const customInput = document.getElementById('custom-amount')
  if (customInput) {
    customInput.value = ''
  }
  
  console.log('Selected amount:', amount)
}

// Payment method selection
function selectPaymentMethod(method) {
  selectedPaymentMethod = method
  
  // Update UI
  document.querySelectorAll('.payment-option').forEach(option => {
    option.classList.remove('border-kosh-green', 'bg-green-50')
    option.classList.add('border-gray-200')
  })
  
  // Highlight selected option
  event.target.closest('.payment-option').classList.remove('border-gray-200')
  event.target.closest('.payment-option').classList.add('border-kosh-green', 'bg-green-50')
  
  console.log('Selected payment method:', method)
}

// Process payment
function processPayment() {
  if (!selectedPaymentMethod) {
    alert('Please select a payment method')
    return
  }
  
  // Get amount from UI or selected amount
  const customAmount = document.getElementById('custom-amount')?.value
  const finalAmount = customAmount || selectedAmount || 5000
  
  // Simulate payment processing
  const processingOverlay = document.createElement('div')
  processingOverlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
  processingOverlay.innerHTML = `
    <div class="bg-white rounded-xl p-6 text-center">
      <div class="animate-spin w-8 h-8 border-4 border-kosh-green border-t-transparent rounded-full mx-auto mb-4"></div>
      <p class="text-gray-700">Processing payment...</p>
    </div>
  `
  
  document.body.appendChild(processingOverlay)
  
  setTimeout(() => {
    document.body.removeChild(processingOverlay)
    navigateToScreen('confirmation')
  }, 2000)
}

// FAQ toggle functionality
function toggleFAQ(faqNumber) {
  const content = document.getElementById(`faq-content-${faqNumber}`)
  const arrow = document.getElementById(`faq-arrow-${faqNumber}`)
  
  if (content && arrow) {
    const isHidden = content.classList.contains('hidden')
    
    if (isHidden) {
      content.classList.remove('hidden')
      arrow.classList.add('rotate-180')
    } else {
      content.classList.add('hidden')
      arrow.classList.remove('rotate-180')
    }
  }
}

// Update payment amount display
function updatePaymentAmount() {
  const customAmount = document.getElementById('custom-amount')?.value
  const finalAmount = customAmount || selectedAmount || 5000
  
  const paymentAmountElement = document.getElementById('payment-amount')
  if (paymentAmountElement) {
    paymentAmountElement.textContent = `৳ ${finalAmount.toLocaleString()}`
  }
}

// Initialize page-specific functionality
function initPage() {
  const currentPath = window.location.pathname
  
  // Initialize carousel on onboarding page
  if (currentPath === '/onboarding') {
    initCarousel()
  }
  
  // Initialize custom amount listener on add-money page
  if (currentPath === '/add-money') {
    const customAmountInput = document.getElementById('custom-amount')
    if (customAmountInput) {
      customAmountInput.addEventListener('input', () => {
        // Clear selected chips when typing custom amount
        document.querySelectorAll('.amount-chip').forEach(chip => {
          chip.classList.remove('border-kosh-green', 'text-kosh-green', 'bg-kosh-green', 'text-white')
          chip.classList.add('border-gray-200', 'text-gray-700')
        })
        selectedAmount = null
      })
    }
  }
  
  // Initialize payment amount display
  if (currentPath === '/payment') {
    updatePaymentAmount()
  }
  
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth'
}

// Page load initialization
document.addEventListener('DOMContentLoaded', initPage)

// Add some demo data and animations
function addDemoAnimations() {
  // Fade in animations for cards
  const cards = document.querySelectorAll('.bg-gradient-to-r, .border')
  cards.forEach((card, index) => {
    card.style.opacity = '0'
    card.style.transform = 'translateY(20px)'
    
    setTimeout(() => {
      card.style.transition = 'all 0.5s ease-out'
      card.style.opacity = '1'
      card.style.transform = 'translateY(0)'
    }, index * 100)
  })
}

// Add animations after a short delay
setTimeout(addDemoAnimations, 100)

// Utility functions for demo
function formatCurrency(amount) {
  return `৳ ${amount.toLocaleString()}`
}

function calculateGrowth(principal, rate, days = 7) {
  return principal * (1 + rate / 100)
}

// Demo portfolio data
const demoPortfolio = {
  goldInvestment: {
    principal: 5000,
    currentValue: 5060,
    growth: 1.2,
    gramsPurchased: 1.02
  },
  weeklyUpdates: [
    { week: 1, change: 1.2, value: 5060, date: 'Dec 8, 2024' },
    { week: 2, change: 0.5, value: 5085, date: 'Dec 15, 2024' }
  ]
}

// Expose demo data globally for debugging
window.koshDemo = {
  portfolio: demoPortfolio,
  navigateToScreen,
  selectAmount,
  selectPaymentMethod,
  processPayment
}

console.log('Kosh Prototype v2 loaded successfully!')
console.log('Available demo functions:', Object.keys(window.koshDemo))