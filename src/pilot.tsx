// Pilot Program Signup Form
export const PilotSignupScreen = () => (
  <div class="min-h-screen bg-white">
    {/* Header */}
    <div class="bg-gradient-to-br from-kosh-green to-bd-green text-white p-6 pt-12">
      <div class="flex items-center mb-6">
        <button onclick="navigateToScreen('support')" class="text-white hover:text-green-100 mr-4">
          <i class="fas fa-arrow-left text-xl"></i>
        </button>
        <h1 class="text-xl font-semibold">Join Pilot Program</h1>
      </div>
      
      <div class="text-center max-w-sm mx-auto">
        <div class="text-6xl mb-4">🚀</div>
        <h2 class="text-2xl font-bold mb-3">Be among the first!</h2>
        <p class="text-green-100 leading-relaxed">
          Join our exclusive pilot program and start investing with as little as ৳ 500.
        </p>
      </div>
    </div>
    
    {/* Form Section */}
    <div class="p-6 max-w-sm mx-auto">
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Get Early Access</h3>
        <p class="text-gray-600 text-sm">
          We'll contact you when the pilot program opens in your area.
        </p>
      </div>
      
      <form onsubmit="handlePilotSignup(event)" class="space-y-4">
        {/* Email - Required */}
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Email Address <span class="text-red-500">*</span>
          </label>
          <input type="email" 
                 id="pilot-email"
                 class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-kosh-green focus:border-kosh-green"
                 placeholder="your.email@example.com"
                 required />
        </div>

        {/* WhatsApp - Required */}
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            WhatsApp Number <span class="text-red-500">*</span>
          </label>
          <div class="flex">
            <span class="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
              +880
            </span>
            <input type="tel" 
                   id="pilot-whatsapp"
                   class="flex-1 block w-full px-3 py-3 border border-gray-300 rounded-r-lg focus:ring-kosh-green focus:border-kosh-green"
                   placeholder="1XXXXXXXXX"
                   maxlength="10"
                   required />
          </div>
          <p class="text-xs text-gray-500 mt-1">
            <i class="fab fa-whatsapp mr-1"></i>
            We'll send updates via WhatsApp
          </p>
        </div>

        {/* Name - Optional */}
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span class="text-gray-400 text-xs">(optional)</span>
          </label>
          <input type="text" 
                 id="pilot-name"
                 class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-kosh-green focus:border-kosh-green"
                 placeholder="Enter your full name" />
        </div>

        {/* Investment Interest */}
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-3">
            Investment Interest <span class="text-gray-400 text-xs">(select all that apply)</span>
          </label>
          <div class="space-y-2">
            <label class="flex items-center">
              <input type="checkbox" id="interest-gold" class="rounded border-gray-300 text-kosh-green focus:ring-kosh-green" />
              <span class="ml-2 text-sm text-gray-700">🪙 Gold Saver (৳ 5,000+)</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" id="interest-dps" class="rounded border-gray-300 text-kosh-green focus:ring-kosh-green" />
              <span class="ml-2 text-sm text-gray-700">🏦 DPS Builder (৳ 500/month)</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" id="interest-mutual" class="rounded border-gray-300 text-kosh-green focus:ring-kosh-green" />
              <span class="ml-2 text-sm text-gray-700">📊 Mutual Fund (৳ 5,000+ or ৳ 1,000 SIP)</span>
            </label>
          </div>
        </div>

        {/* Investment Amount */}
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            How much would you like to start with? <span class="text-gray-400 text-xs">(optional)</span>
          </label>
          <select id="pilot-amount" class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-kosh-green focus:border-kosh-green">
            <option value="">Select amount range</option>
            <option value="500-1000">৳ 500 - ৳ 1,000</option>
            <option value="1000-5000">৳ 1,000 - ৳ 5,000</option>
            <option value="5000-10000">৳ 5,000 - ৳ 10,000</option>
            <option value="10000-25000">৳ 10,000 - ৳ 25,000</option>
            <option value="25000+">৳ 25,000+</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            City <span class="text-gray-400 text-xs">(optional)</span>
          </label>
          <select id="pilot-city" class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-kosh-green focus:border-kosh-green">
            <option value="">Select your city</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="sylhet">Sylhet</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="khulna">Khulna</option>
            <option value="barisal">Barisal</option>
            <option value="rangpur">Rangpur</option>
            <option value="mymensingh">Mymensingh</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" 
                class="w-full bg-kosh-green text-white font-semibold py-4 px-6 rounded-lg text-lg hover:bg-green-600 transition-colors mt-6">
          <i class="fas fa-rocket mr-2"></i>
          Join Pilot Program
        </button>
      </form>
      
      {/* Benefits Section */}
      <div class="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
        <h4 class="text-sm font-semibold text-green-800 mb-2">
          <i class="fas fa-star mr-2"></i>
          Pilot Program Benefits
        </h4>
        <ul class="text-xs text-green-700 space-y-1">
          <li>• Early access to all investment products</li>
          <li>• Same-day withdrawal guarantee</li>
          <li>• Weekly transparent updates</li>
          <li>• Lower fees during pilot phase</li>
          <li>• Direct support via WhatsApp</li>
          <li>• Help shape the final product</li>
        </ul>
      </div>
      
      {/* Privacy Note */}
      <div class="mt-4 text-xs text-gray-500 text-center">
        <p>
          <i class="fas fa-shield-alt mr-1"></i>
          We respect your privacy. Your information will only be used to contact you about the Kosh pilot program.
        </p>
      </div>
    </div>
  </div>
)

export const PilotSuccessScreen = () => (
  <div class="min-h-screen bg-white flex flex-col items-center justify-center p-6">
    <div class="text-center max-w-sm mx-auto">
      <div class="text-8xl mb-6">✅</div>
      <h2 class="text-3xl font-bold text-gray-800 mb-4">You're In!</h2>
      <p class="text-lg text-gray-600 mb-4">
        Thank you for joining the <span class="font-semibold text-kosh-green">Kosh Pilot Program</span>.
      </p>
      
      <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-left">
        <h3 class="font-semibold text-green-800 mb-2">What happens next?</h3>
        <ul class="text-sm text-green-700 space-y-2">
          <li class="flex items-start">
            <i class="fas fa-envelope mr-2 mt-1 text-xs"></i>
            <span>Confirmation email sent to your inbox</span>
          </li>
          <li class="flex items-start">
            <i class="fab fa-whatsapp mr-2 mt-1 text-xs"></i>
            <span>WhatsApp invite within 24-48 hours</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-rocket mr-2 mt-1 text-xs"></i>
            <span>Early access when we launch in your area</span>
          </li>
        </ul>
      </div>
      
      <div class="space-y-4">
        <button onclick="navigateToScreen('/')" 
                class="w-full bg-kosh-green text-white font-semibold py-4 px-6 rounded-lg text-lg hover:bg-green-600 transition-colors">
          Explore More
        </button>
        
        <button onclick="navigateToScreen('support')" 
                class="w-full border-2 border-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-lg text-lg hover:border-gray-300 transition-colors">
          <i class="fab fa-whatsapp mr-2"></i>
          Contact Support
        </button>
      </div>
    </div>
  </div>
)