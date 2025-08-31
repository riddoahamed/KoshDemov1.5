// Admin/Debug page for viewing stored user data
export const AdminDataScreen = () => (
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-2xl mx-auto">
      <div class="bg-white rounded-xl p-6 shadow-lg">
        <div class="flex items-center justify-between mb-6">
          <h1 class="text-2xl font-bold text-gray-800">
            <i class="fas fa-database mr-2 text-blue-500"></i>
            Kosh Data Viewer
          </h1>
          <button onclick="navigateToScreen('/')" class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-home text-xl"></i>
          </button>
        </div>
        
        {/* User Data Section */}
        <div class="mb-8">
          <h2 class="text-lg font-semibold text-gray-700 mb-4 flex items-center">
            <i class="fas fa-user mr-2 text-green-500"></i>
            Stored User Data
          </h2>
          
          <div class="bg-gray-50 rounded-lg p-4 border">
            <div class="mb-3">
              <span class="text-sm font-medium text-gray-600">Storage Key:</span>
              <code class="ml-2 bg-blue-100 px-2 py-1 rounded text-sm">koshUserData</code>
            </div>
            
            <div class="mb-3">
              <span class="text-sm font-medium text-gray-600">Raw Data:</span>
              <div id="raw-user-data" class="mt-2 p-3 bg-white border rounded font-mono text-xs text-gray-700">
                Loading...
              </div>
            </div>
            
            <div>
              <span class="text-sm font-medium text-gray-600">Parsed Data:</span>
              <div id="parsed-user-data" class="mt-2 space-y-2">
                Loading...
              </div>
            </div>
          </div>
        </div>
        
        {/* Actions Section */}
        <div class="mb-8">
          <h2 class="text-lg font-semibold text-gray-700 mb-4 flex items-center">
            <i class="fas fa-cogs mr-2 text-purple-500"></i>
            Data Actions
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button onclick="refreshData()" class="flex items-center justify-center bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              <i class="fas fa-sync-alt mr-2"></i>
              Refresh Data
            </button>
            
            <button onclick="clearUserData()" class="flex items-center justify-center bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors">
              <i class="fas fa-trash mr-2"></i>
              Clear All Data
            </button>
            
            <button onclick="exportData()" class="flex items-center justify-center bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors">
              <i class="fas fa-download mr-2"></i>
              Export JSON
            </button>
            
            <button onclick="simulateUser()" class="flex items-center justify-center bg-purple-500 text-white px-4 py-3 rounded-lg hover:bg-purple-600 transition-colors">
              <i class="fas fa-user-plus mr-2"></i>
              Add Sample User
            </button>
          </div>
        </div>
        
        {/* Age Recommendations Section */}
        <div class="mb-6">
          <h2 class="text-lg font-semibold text-gray-700 mb-4 flex items-center">
            <i class="fas fa-lightbulb mr-2 text-yellow-500"></i>
            Current Recommendation
          </h2>
          
          <div id="current-recommendation" class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            Loading recommendation...
          </div>
        </div>
        
        {/* Instructions */}
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 class="font-semibold text-blue-800 mb-2">
            <i class="fas fa-info-circle mr-2"></i>
            How to Access Data
          </h3>
          <div class="text-sm text-blue-700 space-y-2">
            <p><strong>Browser DevTools:</strong> F12 → Application → Local Storage → koshUserData</p>
            <p><strong>Console:</strong> <code class="bg-white px-1 rounded">localStorage.getItem('koshUserData')</code></p>
            <p><strong>Demo Functions:</strong> <code class="bg-white px-1 rounded">window.koshDemo.getAgeBasedRecommendation()</code></p>
          </div>
        </div>
      </div>
    </div>
  </div>
)