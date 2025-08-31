import { Hono } from 'hono'
import { renderer } from './renderer'
import { cors } from 'hono/cors'
import { 
  AddMoneyScreen, PaymentScreen, ConfirmationScreen, 
  PortfolioScreen, UpdatesScreen, SupportScreen, 
  HomeWithPortfolioScreen 
} from './screens'

type AppData = {
  currentScreen: string
  user: {
    name: string
    phone: string
    isLoggedIn: boolean
  }
  portfolio: {
    totalBalance: number
    investments: Array<{
      id: string
      type: 'gold' | 'dps' | 'mutual_fund'
      amount: number
      currentValue: number
      change: number
      changePercent: number
    }>
  }
  weeklyUpdates: Array<{
    week: number
    type: string
    change: number
    amount: number
    date: string
  }>
}

const app = new Hono()

app.use(renderer)
app.use('/api/*', cors())

// Helper functions for rendering screens
const SplashScreen = () => (
  <div class="min-h-screen bg-gradient-to-br from-kosh-green to-bd-green flex flex-col items-center justify-center text-white p-6">
    <div class="text-center max-w-sm mx-auto">
      <div class="mb-8">
        <h1 class="text-5xl font-bold mb-2">Kosh</h1>
        <div class="w-16 h-1 bg-white mx-auto rounded-full"></div>
      </div>
      <h2 class="text-2xl font-semibold mb-4">Investing for the 99%</h2>
      <p class="text-lg text-green-100 mb-8 leading-relaxed">
        Start from as little as BDT 500.<br/>
        Safe. Transparent. Simple.
      </p>
      <button onclick="navigateToScreen('onboarding')" 
              class="w-full bg-white text-kosh-green font-semibold py-4 px-6 rounded-lg text-lg hover:bg-gray-50 transition-colors">
        Get Started
      </button>
    </div>
  </div>
)

const OnboardingScreen = () => (
  <div class="min-h-screen bg-white p-6">
    <div class="max-w-sm mx-auto pt-8">
      <div class="text-center mb-8">
        <div class="w-12 h-1 bg-kosh-green mx-auto rounded-full mb-4"></div>
        <h2 class="text-2xl font-bold text-gray-800">Welcome to Kosh</h2>
      </div>
      
      <div id="carousel-container" class="relative">
        <div id="carousel-cards" class="flex transition-transform duration-300">
          {/* Card 1 */}
          <div class="w-full flex-shrink-0 text-center px-4">
            <div class="text-6xl mb-6">🎯</div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Start small</h3>
            <p class="text-gray-600 leading-relaxed">
              Begin from 500 BDT — DPS, Gold, Mutual Funds.
            </p>
          </div>
          
          {/* Card 2 */}
          <div class="w-full flex-shrink-0 text-center px-4">
            <div class="text-6xl mb-6">🛡️</div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Safe & trusted</h3>
            <p class="text-gray-600 leading-relaxed">
              Licensed partners. Transparent updates. Withdraw anytime in pilot.
            </p>
          </div>
          
          {/* Card 3 */}
          <div class="w-full flex-shrink-0 text-center px-4">
            <div class="text-6xl mb-6">🌍</div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Made for Bangladesh</h3>
            <p class="text-gray-600 leading-relaxed">
              Products you know: DPS, Gold, Mutual Funds.
            </p>
          </div>
        </div>
        
        {/* Dots indicator */}
        <div class="flex justify-center mt-8 space-x-2">
          <div id="dot-0" class="w-3 h-3 bg-kosh-green rounded-full"></div>
          <div id="dot-1" class="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div id="dot-2" class="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      
      <button onclick="navigateToScreen('signup')" 
              class="w-full bg-kosh-green text-white font-semibold py-4 px-6 rounded-lg text-lg mt-12 hover:bg-green-600 transition-colors">
        Continue
      </button>
    </div>
  </div>
)

const SignupScreen = () => (
  <div class="min-h-screen bg-white p-6">
    <div class="max-w-sm mx-auto pt-16">
      <div class="mb-8">
        <button onclick="navigateToScreen('onboarding')" class="text-gray-400 hover:text-gray-600">
          <i class="fas fa-arrow-left text-xl"></i>
        </button>
      </div>
      
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Create your account</h2>
      <p class="text-gray-600 mb-8">Enter your phone number to get started</p>
      
      <form onsubmit="handleSignup(event)">
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
          <div class="flex">
            <span class="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
              +880
            </span>
            <input type="tel" 
                   id="phone-input"
                   class="flex-1 block w-full px-3 py-3 border border-gray-300 rounded-r-lg focus:ring-kosh-green focus:border-kosh-green"
                   placeholder="1XXXXXXXXX"
                   maxlength="10" />
          </div>
        </div>
        
        <button type="submit" 
                class="w-full bg-kosh-green text-white font-semibold py-4 px-6 rounded-lg text-lg hover:bg-green-600 transition-colors">
          Send OTP
        </button>
      </form>
      
      <p class="text-xs text-gray-500 mt-6 text-center">
        We use e-KYC when live. This is a demo.
      </p>
    </div>
  </div>
)

const HomeEmptyScreen = () => (
  <div class="min-h-screen bg-white">
    {/* Header */}
    <div class="bg-kosh-green text-white p-6 pt-12">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-xl font-semibold">Hi Ashraf,</h1>
          <p class="text-green-100">your portfolio is ready.</p>
        </div>
        <button onclick="navigateToScreen('support')" class="text-white">
          <i class="fas fa-question-circle text-xl"></i>
        </button>
      </div>
      
      {/* Balance Card */}
      <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
        <p class="text-green-100 text-sm mb-1">Total Portfolio</p>
        <p class="text-3xl font-bold">৳ 0</p>
        <p class="text-green-100 text-sm mt-2">Ready to grow</p>
      </div>
    </div>
    
    {/* Content */}
    <div class="p-6">
      <div class="text-center py-12">
        <div class="text-6xl mb-4">🚀</div>
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Start Investing</h3>
        <p class="text-gray-600 mb-8">
          Choose where to begin:<br/>
          DPS, Gold, or Mutual Funds.
        </p>
        
        <button onclick="navigateToScreen('products')" 
                class="w-full bg-kosh-green text-white font-semibold py-4 px-6 rounded-lg text-lg hover:bg-green-600 transition-colors">
          Explore Products
        </button>
      </div>
    </div>
    
    {/* Bottom Navigation */}
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div class="flex justify-around">
        <button class="flex flex-col items-center text-kosh-green">
          <i class="fas fa-home text-xl mb-1"></i>
          <span class="text-xs">Home</span>
        </button>
        <button onclick="navigateToScreen('portfolio')" class="flex flex-col items-center text-gray-400">
          <i class="fas fa-chart-pie text-xl mb-1"></i>
          <span class="text-xs">Portfolio</span>
        </button>
        <button onclick="navigateToScreen('updates')" class="flex flex-col items-center text-gray-400">
          <i class="fas fa-bell text-xl mb-1"></i>
          <span class="text-xs">Updates</span>
        </button>
        <button onclick="navigateToScreen('support')" class="flex flex-col items-center text-gray-400">
          <i class="fas fa-headset text-xl mb-1"></i>
          <span class="text-xs">Support</span>
        </button>
      </div>
    </div>
  </div>
)

const ProductsScreen = () => (
  <div class="min-h-screen bg-white pb-20">
    {/* Header */}
    <div class="bg-white p-6 pt-12 border-b border-gray-200">
      <div class="flex items-center mb-4">
        <button onclick="navigateToScreen('home-empty')" class="text-gray-400 hover:text-gray-600 mr-4">
          <i class="fas fa-arrow-left text-xl"></i>
        </button>
        <h2 class="text-xl font-bold text-gray-800">Choose Investment</h2>
      </div>
    </div>
    
    {/* Products */}
    <div class="p-6 space-y-4">
      {/* Gold Saver */}
      <div onclick="navigateToScreen('product-gold')" class="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-6 cursor-pointer hover:shadow-md transition-all">
        <div class="flex items-start">
          <div class="text-3xl mr-4">🪙</div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Gold Saver</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Start from 1g (~৳ 5,000). Track against global gold price.
            </p>
            <div class="mt-3 flex items-center text-xs text-yellow-700">
              <span class="bg-yellow-200 px-2 py-1 rounded-full">Min: ৳ 5,000</span>
              <span class="ml-2">22k Gold • Digital</span>
            </div>
          </div>
          <i class="fas fa-chevron-right text-gray-400"></i>
        </div>
      </div>
      
      {/* DPS Builder */}
      <div onclick="navigateToScreen('product-dps')" class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 cursor-pointer hover:shadow-md transition-all">
        <div class="flex items-start">
          <div class="text-3xl mr-4">🏦</div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">DPS Builder</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Save monthly from ৳ 500. Steady, simple growth via banks.
            </p>
            <div class="mt-3 flex items-center text-xs text-blue-700">
              <span class="bg-blue-200 px-2 py-1 rounded-full">Min: ৳ 500/month</span>
              <span class="ml-2">Bank DPS • Automated</span>
            </div>
          </div>
          <i class="fas fa-chevron-right text-gray-400"></i>
        </div>
      </div>
      
      {/* Mutual Fund */}
      <div onclick="navigateToScreen('product-mutual')" class="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6 cursor-pointer hover:shadow-md transition-all">
        <div class="flex items-start">
          <div class="text-3xl mr-4">📊</div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Mutual Fund</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Diversified, professional. Start from ৳ 5,000 lump sum or ৳ 1,000/month SIP.
            </p>
            <div class="mt-3 flex items-center text-xs text-purple-700">
              <span class="bg-purple-200 px-2 py-1 rounded-full">Min: ৳ 5,000 or ৳ 1,000 SIP</span>
              <span class="ml-2">Diversified • Professional</span>
            </div>
          </div>
          <i class="fas fa-chevron-right text-gray-400"></i>
        </div>
      </div>
    </div>
  </div>
)

// Product Detail Screen Component
function ProductDetailScreen(productType: 'gold' | 'dps' | 'mutual') {
  const productData = {
    gold: {
      title: 'Gold Saver',
      emoji: '🪙',
      description: 'Certified 22k gold, digital savings, withdraw as cash or gold.',
      minAmount: '৳ 5,000',
      gradient: 'from-yellow-50 to-yellow-100',
      border: 'border-yellow-200',
      buttonColor: 'bg-yellow-600 hover:bg-yellow-700'
    },
    dps: {
      title: 'DPS Builder', 
      emoji: '🏦',
      description: 'Set aside ৳ 500 or more each month. Automated savings through bank DPS.',
      minAmount: '৳ 500/month',
      gradient: 'from-blue-50 to-blue-100',
      border: 'border-blue-200',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    mutual: {
      title: 'Mutual Fund',
      emoji: '📊', 
      description: 'Diversified portfolio. Start with 5,000 one-time or 1,000/month via SIP.',
      minAmount: '৳ 5,000 or ৳ 1,000 SIP',
      gradient: 'from-purple-50 to-purple-100',
      border: 'border-purple-200',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  }[productType]

  return (
    <div class="min-h-screen bg-white pb-20">
      {/* Header */}
      <div class="bg-white p-6 pt-12 border-b border-gray-200">
        <div class="flex items-center mb-4">
          <button onclick="navigateToScreen('products')" class="text-gray-400 hover:text-gray-600 mr-4">
            <i class="fas fa-arrow-left text-xl"></i>
          </button>
          <h2 class="text-xl font-bold text-gray-800">{productData.title}</h2>
        </div>
      </div>
      
      {/* Product Info */}
      <div class="p-6">
        <div class={`bg-gradient-to-r ${productData.gradient} ${productData.border} border rounded-xl p-6 mb-6`}>
          <div class="text-center">
            <div class="text-6xl mb-4">{productData.emoji}</div>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{productData.title}</h3>
            <p class="text-gray-600 leading-relaxed">{productData.description}</p>
            <div class="mt-4 inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
              Minimum: {productData.minAmount}
            </div>
          </div>
        </div>
        
        {/* Mock Chart */}
        <div class="bg-gray-50 rounded-xl p-6 mb-6">
          <h4 class="text-lg font-semibold text-gray-800 mb-4">Performance</h4>
          <div class="h-32 bg-gradient-to-r from-kosh-green to-green-400 rounded-lg flex items-end justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-white opacity-10"></div>
            <div class="text-white font-semibold">📈 Growth Trend</div>
          </div>
          <p class="text-sm text-gray-600 mt-2">Historical performance for demonstration</p>
        </div>
        
        {/* Features */}
        <div class="space-y-3 mb-8">
          <div class="flex items-center">
            <i class="fas fa-check-circle text-kosh-green mr-3"></i>
            <span class="text-gray-700">Licensed and regulated partners</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-check-circle text-kosh-green mr-3"></i>
            <span class="text-gray-700">Transparent weekly updates</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-check-circle text-kosh-green mr-3"></i>
            <span class="text-gray-700">Withdraw anytime (pilot phase)</span>
          </div>
        </div>
        
        <button onclick="navigateToScreen('add-money')" 
                class={`w-full ${productData.buttonColor} text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors`}>
          {productType === 'dps' ? 'Start Saving' : 'Invest Now'}
        </button>
      </div>
    </div>
  )
}

// Route handlers
app.get('/', (c) => {
  return c.render(SplashScreen())
})

app.get('/onboarding', (c) => {
  return c.render(OnboardingScreen())
})

app.get('/signup', (c) => {
  return c.render(SignupScreen())
})

app.get('/home-empty', (c) => {
  return c.render(HomeEmptyScreen())
})

app.get('/products', (c) => {
  return c.render(ProductsScreen())
})

app.get('/product-gold', (c) => {
  return c.render(ProductDetailScreen('gold'))
})

app.get('/product-dps', (c) => {
  return c.render(ProductDetailScreen('dps'))
})

app.get('/product-mutual', (c) => {
  return c.render(ProductDetailScreen('mutual'))
})

app.get('/add-money', (c) => {
  return c.render(AddMoneyScreen())
})

app.get('/payment', (c) => {
  return c.render(PaymentScreen())
})

app.get('/confirmation', (c) => {
  return c.render(ConfirmationScreen())
})

app.get('/portfolio', (c) => {
  return c.render(PortfolioScreen())
})

app.get('/updates', (c) => {
  return c.render(UpdatesScreen())
})

app.get('/support', (c) => {
  return c.render(SupportScreen())
})

app.get('/home-with-portfolio', (c) => {
  return c.render(HomeWithPortfolioScreen())
})

// API for pilot program signup (Google Form redirect)
app.get('/api/pilot-signup', (c) => {
  // Redirect to Google Form for pilot program
  return c.redirect('https://forms.gle/kosh-pilot-signup')
})

export default app