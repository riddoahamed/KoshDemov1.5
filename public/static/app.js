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
  const nameInput = document.getElementById('name-input')
  const ageInput = document.getElementById('age-input')
  
  const phoneNumber = phoneInput?.value
  const userName = nameInput?.value || 'User'
  const userAge = ageInput?.value
  
  if (!phoneNumber || phoneNumber.length < 10) {
    alert('Please enter a valid phone number')
    return
  }
  
  // Validate age if provided
  if (userAge && (userAge < 18 || userAge > 100)) {
    alert('Age must be between 18 and 100 years')
    return
  }
  
  // Store user data for personalization
  const userData = {
    phone: phoneNumber,
    name: userName,
    age: userAge || null
  }
  
  // Store in localStorage for demo purposes
  localStorage.setItem('koshUserData', JSON.stringify(userData))
  
  // Simulate OTP success
  setTimeout(() => {
    alert(`OTP sent to +880${phoneNumber}! (Auto-success in demo)`)
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
  
  // Personalize greeting based on stored user data
  personalizeGreeting()
  
  // Show age-based recommendations on products page
  if (currentPath === '/products') {
    setTimeout(showAgeRecommendation, 100) // Small delay to ensure DOM is ready
  }
  
  // Initialize admin page if needed
  initAdminPage()
  
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth'
}

// Personalize greeting with user's name
function personalizeGreeting() {
  try {
    const userData = JSON.parse(localStorage.getItem('koshUserData') || '{}')
    const userName = userData.name || 'there'
    
    // Update greeting on home pages
    const greetingElement = document.getElementById('user-greeting')
    if (greetingElement) {
      greetingElement.textContent = `Hi ${userName},`
    }
    
    const greetingPortfolioElement = document.getElementById('user-greeting-portfolio')  
    if (greetingPortfolioElement) {
      greetingPortfolioElement.textContent = `Hi ${userName},`
    }
  } catch (error) {
    console.log('No user data found, using default greeting')
  }
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

// Age-based investment recommendations
function getAgeBasedRecommendation() {
  try {
    const userData = JSON.parse(localStorage.getItem('koshUserData') || '{}')
    const age = parseInt(userData.age)
    
    if (!age) return null
    
    if (age >= 18 && age <= 25) {
      return {
        title: 'Perfect age to start!',
        message: 'Young investors like you can take advantage of compound growth. Consider starting with our Gold Saver.',
        recommended: 'gold'
      }
    } else if (age >= 26 && age <= 35) {
      return {
        title: 'Build your foundation',
        message: 'Great time to diversify. Consider combining DPS for stability with Gold for growth.',
        recommended: 'dps'
      }
    } else if (age >= 36 && age <= 50) {
      return {
        title: 'Wealth building phase',
        message: 'Mutual Funds can provide professional management for your growing portfolio.',
        recommended: 'mutual'
      }
    } else if (age > 50) {
      return {
        title: 'Steady growth focus',
        message: 'DPS Builder offers reliable, predictable returns perfect for your investment goals.',
        recommended: 'dps'
      }
    }
  } catch (error) {
    return null
  }
  
  return null
}

// Show age-based recommendation on products page
function showAgeRecommendation() {
  const recommendation = getAgeBasedRecommendation()
  if (!recommendation) return
  
  const productsContainer = document.querySelector('.space-y-4')
  if (productsContainer) {
    const recommendationCard = document.createElement('div')
    recommendationCard.className = 'bg-gradient-to-r from-green-50 to-blue-50 border-2 border-kosh-green rounded-xl p-4 mb-4'
    recommendationCard.innerHTML = `
      <div class="flex items-start">
        <div class="text-2xl mr-3">💡</div>
        <div>
          <h3 class="font-semibold text-gray-800 mb-1">${recommendation.title}</h3>
          <p class="text-sm text-gray-600 mb-2">${recommendation.message}</p>
          <span class="text-xs bg-kosh-green text-white px-2 py-1 rounded-full">Recommended for you</span>
        </div>
      </div>
    `
    productsContainer.insertBefore(recommendationCard, productsContainer.firstChild)
  }
}

// Admin panel functions
function refreshData() {
  displayUserData()
  showCurrentRecommendation()
}

function clearUserData() {
  if (confirm('Are you sure you want to clear all user data?')) {
    localStorage.removeItem('koshUserData')
    alert('User data cleared!')
    displayUserData()
    showCurrentRecommendation()
  }
}

function exportData() {
  const userData = localStorage.getItem('koshUserData')
  if (!userData) {
    alert('No user data to export')
    return
  }
  
  const blob = new Blob([userData], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'kosh-user-data.json'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function simulateUser() {
  const sampleUsers = [
    { phone: '1712345678', name: 'Ahmed Rahman', age: '28' },
    { phone: '1823456789', name: 'Fatima Khan', age: '24' },
    { phone: '1934567890', name: 'Mohammad Ali', age: '35' },
    { phone: '1645678901', name: 'Rashida Begum', age: '45' }
  ]
  
  const randomUser = sampleUsers[Math.floor(Math.random() * sampleUsers.length)]
  localStorage.setItem('koshUserData', JSON.stringify(randomUser))
  alert(`Added sample user: ${randomUser.name} (Age: ${randomUser.age})`)
  displayUserData()
  showCurrentRecommendation()
}

function displayUserData() {
  const rawData = localStorage.getItem('koshUserData')
  const rawDataElement = document.getElementById('raw-user-data')
  const parsedDataElement = document.getElementById('parsed-user-data')
  
  if (rawDataElement) {
    if (rawData) {
      rawDataElement.textContent = rawData
    } else {
      rawDataElement.textContent = 'No user data stored'
    }
  }
  
  if (parsedDataElement) {
    if (rawData) {
      try {
        const userData = JSON.parse(rawData)
        parsedDataElement.innerHTML = `
          <div class="grid grid-cols-1 gap-2">
            <div class="flex justify-between p-2 bg-gray-100 rounded">
              <span class="font-medium">Phone:</span>
              <span>+880${userData.phone}</span>
            </div>
            <div class="flex justify-between p-2 bg-gray-100 rounded">
              <span class="font-medium">Name:</span>
              <span>${userData.name || 'Not provided'}</span>
            </div>
            <div class="flex justify-between p-2 bg-gray-100 rounded">
              <span class="font-medium">Age:</span>
              <span>${userData.age ? userData.age + ' years' : 'Not provided'}</span>
            </div>
          </div>
        `
      } catch (error) {
        parsedDataElement.innerHTML = '<p class="text-red-500">Invalid JSON data</p>'
      }
    } else {
      parsedDataElement.innerHTML = '<p class="text-gray-500">No data available</p>'
    }
  }
}

function showCurrentRecommendation() {
  const recommendationElement = document.getElementById('current-recommendation')
  if (recommendationElement) {
    const recommendation = getAgeBasedRecommendation()
    
    if (recommendation) {
      recommendationElement.innerHTML = `
        <div class="flex items-start">
          <div class="text-2xl mr-3">💡</div>
          <div>
            <h3 class="font-semibold text-yellow-800 mb-1">${recommendation.title}</h3>
            <p class="text-yellow-700 mb-2">${recommendation.message}</p>
            <span class="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
              Recommended: ${recommendation.recommended.toUpperCase()}
            </span>
          </div>
        </div>
      `
    } else {
      recommendationElement.innerHTML = `
        <div class="text-center text-gray-500">
          <i class="fas fa-user-plus text-2xl mb-2"></i>
          <p>No age-based recommendation available</p>
          <p class="text-sm">Add a user with age to see recommendations</p>
        </div>
      `
    }
  }
}

// Initialize admin page if on admin route
function initAdminPage() {
  if (window.location.pathname === '/admin') {
    displayUserData()
    showCurrentRecommendation()
  }
}

// Expose demo data globally for debugging
window.koshDemo = {
  portfolio: demoPortfolio,
  navigateToScreen,
  selectAmount,
  selectPaymentMethod,
  processPayment,
  personalizeGreeting,
  getAgeBasedRecommendation,
  displayUserData,
  refreshData,
  clearUserData,
  exportData,
  simulateUser
}

console.log('Kosh Prototype v2 loaded successfully!')
console.log('Available demo functions:', Object.keys(window.koshDemo))