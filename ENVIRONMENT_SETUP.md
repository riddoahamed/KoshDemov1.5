# Environment Variables Setup

## Cloudflare Pages Environment Variables

Configure these in **Cloudflare Pages → Settings → Environment Variables**:

### Required Variables

1. **PH_PROJECT_KEY** - PostHog project key
   - Get from: PostHog dashboard → Project Settings
   - Used for: User analytics and event tracking

2. **CF_TURNSTILE_SITE_KEY** - Cloudflare Turnstile site key  
   - Get from: Cloudflare dashboard → Turnstile
   - Used for: Bot protection on forms

3. **WHATSAPP_NUMBER** - WhatsApp business number
   - Format: Country code + number (e.g., 8801234567890)
   - Used for: WhatsApp support integration

4. **CF_WEB_ANALYTICS_TOKEN** - Cloudflare Web Analytics beacon token
   - Get from: Cloudflare dashboard → Analytics → Web Analytics
   - Used for: Website traffic analytics

### Optional Variables

5. **TALLY_FORM_ID** - Tally form ID for feedback
   - Used for: Advanced feedback form integration

## How to Set Variables

1. Go to Cloudflare Pages dashboard
2. Select your project (kosh-prototype)
3. Go to Settings → Environment variables
4. Add each variable for both Production and Preview environments
5. Redeploy for changes to take effect

## Local Development

For local testing, you can temporarily replace placeholders in the HTML files:
- Replace `PH_PROJECT_KEY` with actual PostHog key
- Replace `CF_TURNSTILE_SITE_KEY` with actual Turnstile key
- Replace `WHATSAPP_NUMBER` with actual WhatsApp number
- Replace `CF_WEB_ANALYTICS_TOKEN` with actual analytics token

**Important:** Never commit actual keys to the repository!