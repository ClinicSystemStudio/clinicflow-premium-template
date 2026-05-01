📧 Resend Email Setup Guide (For Clients)
Step 1 — Create a Resend Account
Go to: https://resend.com
Click Sign up
Create your account (Google login is easiest)
Step 2 — Add Your Domain
In Resend dashboard → go to Domains
Click Add Domain
Enter your domain (example: yourclinic.com)
Step 3 — Verify Domain (IMPORTANT)

Resend will give you DNS records.

👉 Go to your domain provider (Cloudflare, GoDaddy, etc.)

Add these:

DKIM records (required)
SPF record (if not already set)

Example:

TXT record → resend._domainkey.yourdomain.com

✅ Once added → go back to Resend
→ Click Verify Domain

Step 4 — Create Sender Email

You will send emails FROM something like:

bookings@yourdomain.com

👉 This does NOT need a real inbox — just a verified domain

Step 5 — Get Your API Key
Go to API Keys
Click Create API Key
Copy it
Step 6 — Add to Cloudflare (VERY IMPORTANT)

Go to your Cloudflare project:

👉 Settings → Environment Variables

Add:

Variable	Value
RESEND_API_KEY	(your API key)
FROM_EMAIL	bookings@yourdomain.com

ADMIN_EMAIL	your@email.com

REPLY_TO_EMAIL	your@email.com
Step 7 — Set Branding Variables (Optional but Recommended)

Also add:

Variable	Example
BUSINESS_NAME	Your Clinic Name
BUSINESS_DOMAIN	https://yourdomain.com

CONSULTATION_PRICE	30
CURRENCY_SYMBOL	£
Step 8 — Deploy Your Project

After adding variables:

👉 Click Deploy in Cloudflare Pages

Step 9 — Test Emails
Make a test booking
Check:
✅ You receive admin email
✅ Client receives confirmation
✅ Reschedule/cancel links work
⚠️ Common Mistakes (Important)
❌ Emails not sending
Missing RESEND_API_KEY
Domain not verified
❌ Emails going to spam
DKIM not set correctly
SPF missing
❌ “From” email not working
Domain not verified in Resend
💡 Pro Tip (This is what makes your system premium)

Tell your customers this:

👉 Use:

bookings@yourdomain.com

👉 NOT Gmail
