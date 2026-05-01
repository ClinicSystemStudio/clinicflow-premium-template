# Step 4 — Connect Your System (Environment Setup)

This step connects your booking system to your database and email notifications.

---

## 1. Add Environment Variables

Go to:

Cloudflare Dashboard → Pages → Your Project → Settings → Environment Variables

Add the following:

BUSINESS_NAME = Your Clinic Name
BUSINESS_DOMAIN = https://yourdomain.com
ADMIN_EMAIL = [your@email.com](mailto:your@email.com)
FROM_EMAIL = [your@email.com](mailto:your@email.com)
REPLY_TO_EMAIL = [your@email.com](mailto:your@email.com)

---

## 2. Email Setup (Resend)

Create a free account at:
https://resend.com

Generate an API key and add:

RESEND_API_KEY = your_api_key_here

---

## 3. Booking Settings

CONSULTATION_PRICE = 30
CURRENCY_SYMBOL = £

---

## 4. Connect Database (D1)

Go to:

Pages → Settings → Functions → D1 Bindings

Add:

Binding Name: DB
Database: Select your database

---

## That’s it

Your system is now fully connected and ready to receive bookings.
