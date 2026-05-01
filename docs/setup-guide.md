# ClinicFlow™ – Full Setup Guide

This guide will walk you through setting up your booking system step-by-step.

No coding experience required.

---

# Step 1 — Download & Extract

After purchase:

1. Download your ZIP file
2. Extract it

You will see:

site/
functions/
database/
docs/

---

# Step 2 — Create Cloudflare Account

Go to:
https://cloudflare.com

Create a free account.

---

# Step 3 — Buy or Connect Your Domain

## Option A — Buy a domain in Cloudflare

1. Go to **Domain Registration**
2. Search for your business name
3. Purchase your domain (e.g. yourclinic.com)

---

## Option B — Use existing domain (GoDaddy etc.)

1. Go to your domain provider
2. Change **Nameservers** to Cloudflare

Cloudflare will give you nameservers like:

```
ns1.cloudflare.com  
ns2.cloudflare.com
```

Once updated, your domain is now controlled by Cloudflare.

---

# Step 4 — Upload Your Website

1. Go to:

Workers & Pages → Create Application → Pages

2. Click **Upload Assets**

3. Upload the contents of:

```
site/
```

Your site will go live on a temporary URL like:

```
yourproject.pages.dev
```

---

# Step 5 — Connect Your Domain

1. In your Pages project → go to **Custom Domains**
2. Click **Add Domain**
3. Enter your domain (e.g. yourclinic.com)
4. Follow prompts

Cloudflare will connect it automatically.

---

# Step 6 — Create Database (D1)

1. Go to **D1**
2. Click **Create Database**
3. Name it:

```
clinic_db
```

4. Open the database → go to Console
5. Paste and run:

```
database/schema.sql
```

---

# Step 7 — Connect Database to Your Site

Go to:

Pages → Your Project → Settings → Functions → D1 Bindings

Add:

```
Binding Name: DB
Database: clinic_db
```

---

# Step 8 — Set Up Email (Resend)

## 1. Create account

https://resend.com

## 2. Add your domain

Verify using DNS records

## 3. Create API key

---

## 4. Add to Cloudflare

Go to:

Pages → Settings → Environment Variables

Add:

```
RESEND_API_KEY = your_key
FROM_EMAIL = bookings@yourdomain.com
ADMIN_EMAIL = your@email.com
REPLY_TO_EMAIL = your@email.com
```

---

# Step 9 — Add Business Settings

Also add:

```
BUSINESS_NAME = Your Clinic Name
BUSINESS_DOMAIN = https://yourdomain.com
CONSULTATION_PRICE = 30
CURRENCY_SYMBOL = £
```

---

# Step 10 — Set Up Stripe

1. Create account:
   https://stripe.com

2. Go to **Payment Links**

3. Create product:

Consultation Deposit
Price: £30

---

## IMPORTANT — Set redirect URL:

```
https://yourdomain.com/booking.html?session_id=success
```

---

## Copy your payment link

---

# Step 11 — Update Config File

Open:

```
site/config/config.js
```

Update:

```
name  
tagline  
email  
domain  
depositPaymentLink  
```

---

# Step 12 — Add Your Branding

Replace:

```
site/assets/logo.png  
site/assets/favicon.png  
```

---

# Step 13 — Redeploy

Upload your updated `site` folder again to Cloudflare Pages.

---

# Step 14 — Test Your System

Test:

1. Deposit → Stripe → Booking
2. Booking confirmation email
3. Cancel link
4. Reschedule link
5. Admin dashboard

---
# Step 15 — WhatsApp Reminders (Optional)

Your system includes built-in WhatsApp reminder tracking.

This allows you to send reminders manually while keeping track of which clients have been contacted.

---

## How it works

In your Admin Dashboard:

* Each booking has a “Send WhatsApp Reminder” option
* When you send a reminder, you can mark it as sent
* The system will track this to avoid duplicates

---

## Recommended workflow

1. Open your Admin Dashboard
2. Find upcoming appointments
3. Send a WhatsApp message to the client
4. Click “Mark as sent”

---

## Example message

You can copy and paste this:

Hi [Name], just a reminder of your appointment with [Your Business Name] on [Date] at [Time]. Please let me know if you need to make any changes.

---

## Important

WhatsApp messages are sent manually using your phone or WhatsApp Business.

This avoids:

* Monthly messaging fees
* Complex integrations
* Technical setup

---

## Optional upgrade (advanced users)

If you wish, you can connect automation tools such as:

* Twilio
* WhatsApp Business API

This is not required to use the system.

---

## Summary

✔ No setup required
✔ No additional costs
✔ Fully controlled by you
✔ Integrated with your booking system

---


# That’s it

Your system is now fully live.

---

# What Your System Can Do

✔ Accept deposits
✔ Prevent no-shows
✔ Let clients book online
✔ Allow reschedule & cancellation
✔ Send automated emails
✔ Manage bookings in one dashboard

---

# Support

If you have any issues, refer back to this guide and double-check each step carefully.

Most setups take under 20 minutes.
