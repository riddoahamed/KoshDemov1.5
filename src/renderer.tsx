import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kosh - Investing for the 99%</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'kosh-green': '#10B981',
                    'kosh-dark': '#1F2937',
                    'kosh-light': '#F9FAFB',
                    'bd-green': '#006A4E',
                    'bd-red': '#F42A35'
                  }
                }
              }
            }
          `
        }}></script>
      </head>
      <body class="bg-gray-50 font-sans">
        {children}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
