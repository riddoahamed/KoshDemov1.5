// Demo Landing Page for Validation
export const DemoLandingScreen = () => (
  <div class="min-h-screen bg-gradient-to-br from-kosh-green to-bd-green text-white">
    {/* Hero Section */}
    <div class="p-6 pt-12 text-center">
      <div class="max-w-md mx-auto">
        <div class="text-6xl mb-4">🇧🇩</div>
        <h1 class="text-4xl font-bold mb-3">Kosh Demo</h1>
        <p class="text-xl text-green-100 mb-2">Investing for the 99%</p>
        <p class="text-green-200 text-sm mb-8">
          Complete Investment Platform Prototype<br/>
          Built for Bangladesh 🚀
        </p>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8">
          <h2 class="text-lg font-semibold mb-2">✨ Live Prototype Features</h2>
          <ul class="text-sm text-green-100 text-left space-y-1">
            <li>• 11 Complete Screen Flows</li>
            <li>• Authentic Bangladesh Investment Products</li>
            <li>• Real Minimum Amounts (৳500 DPS, ৳5000 Gold)</li>
            <li>• Age-Based Smart Recommendations</li>
            <li>• Pilot Program Signup System</li>
            <li>• Complete Admin Panel for Data</li>
          </ul>
        </div>
      </div>
    </div>
    
    {/* Demo Options */}
    <div class="p-6 space-y-4 max-w-md mx-auto">
      <h3 class="text-xl font-semibold text-center mb-4">🎯 Choose Your Demo Experience</h3>
      
      {/* Complete User Journey */}
      <div class="bg-white/15 backdrop-blur-sm rounded-xl p-4">
        <h4 class="font-semibold mb-2 flex items-center">
          <span class="text-2xl mr-2">👤</span>
          Complete User Journey
        </h4>
        <p class="text-sm text-green-100 mb-3">
          Experience the full flow from splash screen to portfolio management
        </p>
        <button onclick="navigateToScreen('/')" 
                class="w-full bg-white text-kosh-green font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
          Start Full Demo
        </button>
      </div>
      
      {/* Product Explorer */}
      <div class="bg-white/15 backdrop-blur-sm rounded-xl p-4">
        <h4 class="font-semibold mb-2 flex items-center">
          <span class="text-2xl mr-2">💰</span>
          Investment Products
        </h4>
        <p class="text-sm text-green-100 mb-3">
          Explore Gold Saver, DPS Builder, and Mutual Fund options
        </p>
        <button onclick="navigateToScreen('products')" 
                class="w-full bg-white text-kosh-green font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
          View Products
        </button>
      </div>
      
      {/* Portfolio Demo */}
      <div class="bg-white/15 backdrop-blur-sm rounded-xl p-4">
        <h4 class="font-semibold mb-2 flex items-center">
          <span class="text-2xl mr-2">📊</span>
          Portfolio Dashboard
        </h4>
        <p class="text-sm text-green-100 mb-3">
          See realistic portfolio with ৳5,060 gold investment (+1.2% growth)
        </p>
        <button onclick="navigateToScreen('portfolio')" 
                class="w-full bg-white text-kosh-green font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
          View Portfolio
        </button>
      </div>
      
      {/* Pilot Signup */}
      <div class="bg-white/15 backdrop-blur-sm rounded-xl p-4">
        <h4 class="font-semibold mb-2 flex items-center">
          <span class="text-2xl mr-2">🚀</span>
          Join Pilot Program
        </h4>
        <p class="text-sm text-green-100 mb-3">
          Sign up for early access with email and WhatsApp collection
        </p>
        <button onclick="navigateToScreen('pilot-signup')" 
                class="w-full bg-yellow-400 text-yellow-900 font-semibold py-3 px-4 rounded-lg hover:bg-yellow-300 transition-colors">
          Join Pilot Program
        </button>
      </div>
      
      {/* Admin Panel */}
      <div class="bg-white/15 backdrop-blur-sm rounded-xl p-4">
        <h4 class="font-semibold mb-2 flex items-center">
          <span class="text-2xl mr-2">🔧</span>
          Admin & Data Panel
        </h4>
        <p class="text-sm text-green-100 mb-3">
          View user data, pilot signups, and export analytics
        </p>
        <button onclick="navigateToScreen('admin')" 
                class="w-full bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors">
          View Admin Panel
        </button>
      </div>
    </div>
    
    {/* Key Features */}
    <div class="p-6 mt-8 max-w-md mx-auto">
      <h3 class="text-xl font-semibold text-center mb-4">🎯 Validation Ready Features</h3>
      
      <div class="grid grid-cols-2 gap-3 mb-6">
        <div class="bg-white/10 rounded-lg p-3 text-center">
          <div class="text-2xl mb-1">🇧🇩</div>
          <p class="text-xs font-medium">Bangladesh Focused</p>
          <p class="text-xs text-green-200">Local payments & products</p>
        </div>
        
        <div class="bg-white/10 rounded-lg p-3 text-center">
          <div class="text-2xl mb-1">💰</div>
          <p class="text-xs font-medium">Real Minimums</p>
          <p class="text-xs text-green-200">৳500 DPS, ৳5K Gold</p>
        </div>
        
        <div class="bg-white/10 rounded-lg p-3 text-center">
          <div class="text-2xl mb-1">📱</div>
          <p class="text-xs font-medium">Mobile First</p>
          <p class="text-xs text-green-200">Smartphone optimized</p>
        </div>
        
        <div class="bg-white/10 rounded-lg p-3 text-center">
          <div class="text-2xl mb-1">📊</div>
          <p class="text-xs font-medium">Data Collection</p>
          <p class="text-xs text-green-200">Lead capture & analytics</p>
        </div>
      </div>
      
      <div class="text-center text-sm text-green-200">
        <p class="mb-2">
          <i class="fas fa-info-circle mr-1"></i>
          This is a working prototype for market validation
        </p>
        <p class="text-xs">
          All features are functional. Data stored locally for demo purposes.
        </p>
      </div>
    </div>
  </div>
)