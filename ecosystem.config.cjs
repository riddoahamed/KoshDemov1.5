// PM2 Ecosystem Configuration for Kosh Prototype v2
module.exports = {
  apps: [
    {
      name: 'kosh-prototype',
      script: 'npx',
      args: 'wrangler pages dev dist --ip 0.0.0.0 --port 3000',
      cwd: '/home/user/webapp',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        HOST: '0.0.0.0'
      },
      watch: false, // Disable PM2 file monitoring (wrangler handles hot reload)
      instances: 1, // Development mode uses only one instance
      exec_mode: 'fork',
      autorestart: true,
      max_restarts: 5,
      min_uptime: '10s',
      max_memory_restart: '500M',
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      merge_logs: true
    }
  ]
}