// Additional screens for Kosh Prototype v2

export const AddMoneyScreen = () => (
  <div class="min-h-screen bg-white pb-20">
    {/* Header */}
    <div class="bg-white p-6 pt-12 border-b border-gray-200">
      <div class="flex items-center mb-4">
        <button onclick="goBack()" class="text-gray-400 hover:text-gray-600 mr-4">
          <i class="fas fa-arrow-left text-xl"></i>
        </button>
        <h2 class="text-xl font-bold text-gray-800">Add Money</h2>
      </div>
    </div>
    
    <div class="p-6">
      <div class="mb-8">
        <label class="block text-lg font-semibold text-gray-800 mb-4">Choose Amount</label>
        
        {/* Amount Chips */}
        <div class="grid grid-cols-3 gap-3 mb-6">
          <button onclick="selectAmount(500)" class="amount-chip border-2 border-gray-200 rounded-lg py-3 px-4 text-center font-semibold text-gray-700 hover:border-kosh-green hover:text-kosh-green transition-colors">
            ৳ 500
          </button>
          <button onclick="selectAmount(1000)" class="amount-chip border-2 border-gray-200 rounded-lg py-3 px-4 text-center font-semibold text-gray-700 hover:border-kosh-green hover:text-kosh-green transition-colors">
            ৳ 1,000
          </button>
          <button onclick="selectAmount(5000)" class="amount-chip border-2 border-gray-200 rounded-lg py-3 px-4 text-center font-semibold text-gray-700 hover:border-kosh-green hover:text-kosh-green transition-colors">
            ৳ 5,000
          </button>
        </div>
        
        {/* Custom Amount */}
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Or enter custom amount</label>
          <div class="relative">
            <span class="absolute left-3 top-3 text-gray-500">৳</span>
            <input type="number" 
                   id="custom-amount"
                   class="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-kosh-green focus:border-kosh-green"
                   placeholder="Enter amount"
                   min="500" />
          </div>
        </div>
      </div>
      
      <button onclick="navigateToScreen('payment')" 
              class="w-full bg-kosh-green text-white font-semibold py-4 px-6 rounded-lg text-lg hover:bg-green-600 transition-colors">
        Continue
      </button>
    </div>
  </div>
)

export const PaymentScreen = () => (
  <div class="min-h-screen bg-white pb-20">
    {/* Header */}
    <div class="bg-white p-6 pt-12 border-b border-gray-200">
      <div class="flex items-center mb-4">
        <button onclick="navigateToScreen('add-money')" class="text-gray-400 hover:text-gray-600 mr-4">
          <i class="fas fa-arrow-left text-xl"></i>
        </button>
        <h2 class="text-xl font-bold text-gray-800">Payment Method</h2>
      </div>
    </div>
    
    <div class="p-6">
      <div class="mb-6">
        <div class="bg-gray-50 rounded-xl p-4 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-gray-600">Amount to invest:</span>
            <span class="text-2xl font-bold text-gray-800" id="payment-amount">৳ 5,000</span>
          </div>
        </div>
        
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Select payment method</h3>
        
        {/* Payment Options */}
        <div class="space-y-3">
          <div onclick="selectPaymentMethod('bkash')" class="payment-option border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-kosh-green transition-colors">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                <span class="text-white font-bold">bK</span>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-800">bKash</h4>
                <p class="text-sm text-gray-600">Mobile wallet payment</p>
              </div>
              <i class="fas fa-chevron-right text-gray-400"></i>
            </div>
          </div>
          
          <div onclick="selectPaymentMethod('nagad')" class="payment-option border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-kosh-green transition-colors">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                <span class="text-white font-bold">N</span>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-800">Nagad</h4>
                <p class="text-sm text-gray-600">Digital financial service</p>
              </div>
              <i class="fas fa-chevron-right text-gray-400"></i>
            </div>
          </div>
          
          <div onclick="selectPaymentMethod('bank')" class="payment-option border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-kosh-green transition-colors">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <i class="fas fa-university text-white"></i>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-800">Bank Transfer</h4>
                <p class="text-sm text-gray-600">Direct bank transfer</p>
              </div>
              <i class="fas fa-chevron-right text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
      
      <button onclick="processPayment()" 
              class="w-full bg-kosh-green text-white font-semibold py-4 px-6 rounded-lg text-lg hover:bg-green-600 transition-colors">
        Confirm Payment
      </button>
      
      <p class="text-xs text-gray-500 mt-4 text-center">
        We'll send you weekly updates on your investment progress.
      </p>
    </div>
  </div>
)

export const ConfirmationScreen = () => (
  <div class="min-h-screen bg-white flex flex-col items-center justify-center p-6">
    <div class="text-center max-w-sm mx-auto">
      <div class="text-8xl mb-6">🎉</div>
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Success!</h2>
      <p class="text-lg text-gray-600 mb-2">
        Your <span class="font-semibold text-kosh-green">৳ 5,000</span> has been invested.
      </p>
      <p class="text-gray-500 mb-8">
        First weekly update in 7 days.
      </p>
      
      <div class="space-y-4">
        <button onclick="navigateToScreen('portfolio')" 
                class="w-full bg-kosh-green text-white font-semibold py-4 px-6 rounded-lg text-lg hover:bg-green-600 transition-colors">
          View Portfolio
        </button>
        
        <button onclick="navigateToScreen('home-with-portfolio')" 
                class="w-full border-2 border-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-lg text-lg hover:border-gray-300 transition-colors">
          Go to Home
        </button>
      </div>
    </div>
  </div>
)

export const PortfolioScreen = () => (
  <div class="min-h-screen bg-white pb-20">
    {/* Header */}
    <div class="bg-kosh-green text-white p-6 pt-12">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-xl font-semibold">Portfolio</h1>
          <p class="text-green-100">Your investments</p>
        </div>
        <button onclick="navigateToScreen('support')" class="text-white">
          <i class="fas fa-question-circle text-xl"></i>
        </button>
      </div>
      
      {/* Balance Card */}
      <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
        <p class="text-green-100 text-sm mb-1">Total Portfolio Value</p>
        <p class="text-3xl font-bold">৳ 5,060</p>
        <div class="flex items-center mt-2">
          <span class="text-green-200 text-sm">+৳ 60 (+1.2%)</span>
          <span class="ml-auto text-green-100 text-xs">Since investment</span>
        </div>
      </div>
    </div>
    
    {/* Investments */}
    <div class="p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Your Investments</h3>
      
      <div class="space-y-4">
        {/* Gold Investment */}
        <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="text-2xl mr-3">🪙</div>
              <div>
                <h4 class="font-semibold text-gray-800">Gold Saver</h4>
                <p class="text-sm text-gray-600">1.02g • 22k Gold</p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-semibold text-gray-800">৳ 5,060</p>
              <p class="text-sm text-green-600">+1.2% ↑</p>
            </div>
          </div>
        </div>
        
        {/* Empty states for other investments */}
        <div class="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center">
          <div class="text-gray-400 mb-2">🏦</div>
          <p class="text-sm text-gray-500">DPS Builder</p>
          <p class="text-xs text-gray-400">Start monthly savings</p>
        </div>
        
        <div class="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center">
          <div class="text-gray-400 mb-2">📊</div>
          <p class="text-sm text-gray-500">Mutual Fund</p>
          <p class="text-xs text-gray-400">Diversified investing</p>
        </div>
      </div>
      
      <button onclick="navigateToScreen('products')" 
              class="w-full mt-6 border-2 border-kosh-green text-kosh-green font-semibold py-4 px-6 rounded-lg text-lg hover:bg-kosh-green hover:text-white transition-colors">
        Add More Investments
      </button>
    </div>
    
    {/* Bottom Navigation */}
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div class="flex justify-around">
        <button onclick="navigateToScreen('home-with-portfolio')" class="flex flex-col items-center text-gray-400">
          <i class="fas fa-home text-xl mb-1"></i>
          <span class="text-xs">Home</span>
        </button>
        <button class="flex flex-col items-center text-kosh-green">
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

export const UpdatesScreen = () => (
  <div class="min-h-screen bg-white pb-20">
    {/* Header */}
    <div class="bg-white p-6 pt-12 border-b border-gray-200">
      <h2 class="text-xl font-bold text-gray-800">Weekly Updates</h2>
      <p class="text-gray-600 text-sm">Transparent progress on your investments</p>
    </div>
    
    <div class="p-6">
      {/* Update Timeline */}
      <div class="space-y-6">
        {/* Week 2 */}
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div class="w-3 h-3 bg-kosh-green rounded-full"></div>
            <div class="w-0.5 h-16 bg-gray-200 mt-2"></div>
          </div>
          <div class="flex-1 pb-6">
            <div class="bg-white border border-gray-200 rounded-lg p-4">
              <div class="flex justify-between items-start mb-2">
                <h4 class="font-semibold text-gray-800">Week 2 Update</h4>
                <span class="text-xs text-gray-500">Dec 15, 2024</span>
              </div>
              <p class="text-sm text-gray-600 mb-3">Gold prices continued upward trend</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-700">Gold Saver</span>
                <div class="text-right">
                  <p class="text-sm font-semibold text-gray-800">৳ 5,085</p>
                  <p class="text-xs text-green-600">+0.5% this week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Week 1 */}
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
          <div class="flex-1">
            <div class="bg-white border border-gray-200 rounded-lg p-4">
              <div class="flex justify-between items-start mb-2">
                <h4 class="font-semibold text-gray-800">Week 1 Update</h4>
                <span class="text-xs text-gray-500">Dec 8, 2024</span>
              </div>
              <p class="text-sm text-gray-600 mb-3">Your first investment is performing well</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-700">Gold Saver</span>
                <div class="text-right">
                  <p class="text-sm font-semibold text-gray-800">৳ 5,060</p>
                  <p class="text-xs text-green-600">+1.2% since start</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div class="flex items-start">
          <i class="fas fa-info-circle text-blue-500 mr-3 mt-1"></i>
          <div>
            <h4 class="text-sm font-semibold text-blue-800">Transparent Updates</h4>
            <p class="text-xs text-blue-600 mt-1">
              Receive weekly progress updates. Withdraw anytime during pilot phase.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Bottom Navigation */}
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div class="flex justify-around">
        <button onclick="navigateToScreen('home-with-portfolio')" class="flex flex-col items-center text-gray-400">
          <i class="fas fa-home text-xl mb-1"></i>
          <span class="text-xs">Home</span>
        </button>
        <button onclick="navigateToScreen('portfolio')" class="flex flex-col items-center text-gray-400">
          <i class="fas fa-chart-pie text-xl mb-1"></i>
          <span class="text-xs">Portfolio</span>
        </button>
        <button class="flex flex-col items-center text-kosh-green">
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

export const SupportScreen = () => (
  <div class="min-h-screen bg-white pb-20">
    {/* Header */}
    <div class="bg-white p-6 pt-12 border-b border-gray-200">
      <div class="flex items-center mb-4">
        <button onclick="goBack()" class="text-gray-400 hover:text-gray-600 mr-4">
          <i class="fas fa-arrow-left text-xl"></i>
        </button>
        <h2 class="text-xl font-bold text-gray-800">Support & FAQ</h2>
      </div>
    </div>
    
    <div class="p-6">
      {/* WhatsApp Support */}
      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
        <div class="text-center">
          <i class="fab fa-whatsapp text-4xl text-green-600 mb-4"></i>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Need Help?</h3>
          <p class="text-gray-600 mb-4">Chat with our support team on WhatsApp</p>
          <a href="https://forms.gle/kosh-pilot-signup" target="_blank" 
             class="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
            <i class="fab fa-whatsapp mr-2"></i>
            WhatsApp Support
          </a>
        </div>
      </div>
      
      {/* FAQ Section */}
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
      
      <div class="space-y-4">
        {/* FAQ 1 */}
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <button onclick="toggleFAQ(1)" class="w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors">
            <div class="flex justify-between items-center">
              <h4 class="font-medium text-gray-800">Is this real money investing?</h4>
              <i class="fas fa-chevron-down text-gray-400" id="faq-arrow-1"></i>
            </div>
          </button>
          <div id="faq-content-1" class="hidden px-4 pb-4 bg-gray-50">
            <p class="text-sm text-gray-600">
              This is a pilot program with licensed partners. Your investments are real, but we're operating in a controlled environment to ensure safety and transparency.
            </p>
          </div>
        </div>
        
        {/* FAQ 2 */}
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <button onclick="toggleFAQ(2)" class="w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors">
            <div class="flex justify-between items-center">
              <h4 class="font-medium text-gray-800">What are the minimum amounts?</h4>
              <i class="fas fa-chevron-down text-gray-400" id="faq-arrow-2"></i>
            </div>
          </button>
          <div id="faq-content-2" class="hidden px-4 pb-4 bg-gray-50">
            <p class="text-sm text-gray-600">
              • DPS Builder: ৳ 500/month<br/>
              • Gold Saver: ৳ 5,000 (≈1g gold)<br/>
              • Mutual Fund: ৳ 5,000 lump sum or ৳ 1,000/month SIP
            </p>
          </div>
        </div>
        
        {/* FAQ 3 */}
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <button onclick="toggleFAQ(3)" class="w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors">
            <div class="flex justify-between items-center">
              <h4 class="font-medium text-gray-800">Can I withdraw my money?</h4>
              <i class="fas fa-chevron-down text-gray-400" id="faq-arrow-3"></i>
            </div>
          </button>
          <div id="faq-content-3" class="hidden px-4 pb-4 bg-gray-50">
            <p class="text-sm text-gray-600">
              Yes! During the pilot phase, you can withdraw same-day. We're building trust through complete transparency and flexibility.
            </p>
          </div>
        </div>
        
        {/* FAQ 4 */}
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <button onclick="toggleFAQ(4)" class="w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors">
            <div class="flex justify-between items-center">
              <h4 class="font-medium text-gray-800">How do weekly updates work?</h4>
              <i class="fas fa-chevron-down text-gray-400" id="faq-arrow-4"></i>
            </div>
          </button>
          <div id="faq-content-4" class="hidden px-4 pb-4 bg-gray-50">
            <p class="text-sm text-gray-600">
              Every week, we send you detailed updates on your investment performance, market trends, and portfolio value changes. Complete transparency is our commitment.
            </p>
          </div>
        </div>
      </div>
      
      {/* Pilot Program Info */}
      <div class="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 class="text-sm font-semibold text-blue-800 mb-2">Join Our Pilot Program</h4>
        <p class="text-xs text-blue-600 mb-3">
          Be among the first to experience simple, transparent investing in Bangladesh.
        </p>
        <a href="https://forms.gle/kosh-pilot-signup" target="_blank"
           class="inline-block bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Join Pilot Program
        </a>
      </div>
    </div>
    
    {/* Bottom Navigation */}
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div class="flex justify-around">
        <button onclick="navigateToScreen('home-with-portfolio')" class="flex flex-col items-center text-gray-400">
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
        <button class="flex flex-col items-center text-kosh-green">
          <i class="fas fa-headset text-xl mb-1"></i>
          <span class="text-xs">Support</span>
        </button>
      </div>
    </div>
  </div>
)

export const HomeWithPortfolioScreen = () => (
  <div class="min-h-screen bg-white pb-20">
    {/* Header */}
    <div class="bg-kosh-green text-white p-6 pt-12">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-xl font-semibold" id="user-greeting-portfolio">Hi there,</h1>
          <p class="text-green-100">great progress today!</p>
        </div>
        <button onclick="navigateToScreen('support')" class="text-white">
          <i class="fas fa-question-circle text-xl"></i>
        </button>
      </div>
      
      {/* Balance Card */}
      <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
        <p class="text-green-100 text-sm mb-1">Total Portfolio</p>
        <p class="text-3xl font-bold">৳ 5,060</p>
        <div class="flex items-center mt-2">
          <span class="text-green-200 text-sm">+৳ 60 (+1.2%)</span>
          <span class="ml-auto text-green-100 text-xs">This week</span>
        </div>
      </div>
    </div>
    
    {/* Quick Stats */}
    <div class="p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Your Investments</h3>
      
      <div class="grid gap-4 mb-6">
        {/* Active Investment */}
        <div onclick="navigateToScreen('portfolio')" class="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-4 cursor-pointer">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="text-2xl mr-3">🪙</div>
              <div>
                <h4 class="font-semibold text-gray-800">Gold Saver</h4>
                <p class="text-sm text-green-600">↑ +1.2% (৳ 5,060)</p>
              </div>
            </div>
            <i class="fas fa-chevron-right text-gray-400"></i>
          </div>
        </div>
        
        {/* Available Options */}
        <div class="grid grid-cols-2 gap-3">
          <div onclick="navigateToScreen('product-dps')" class="border-2 border-dashed border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:border-blue-300">
            <div class="text-2xl mb-1">🏦</div>
            <p class="text-xs text-gray-600">DPS Builder</p>
            <p class="text-xs text-blue-600">Steady</p>
          </div>
          
          <div onclick="navigateToScreen('product-mutual')" class="border-2 border-dashed border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:border-purple-300">
            <div class="text-2xl mb-1">📊</div>
            <p class="text-xs text-gray-600">Mutual Fund</p>
            <p class="text-xs text-purple-600">↑ +0.8%</p>
          </div>
        </div>
      </div>
      
      <button onclick="navigateToScreen('products')" 
              class="w-full bg-kosh-green text-white font-semibold py-4 px-6 rounded-lg text-lg hover:bg-green-600 transition-colors">
        Add More
      </button>
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