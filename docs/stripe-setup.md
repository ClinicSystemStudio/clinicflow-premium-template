# Stripe Setup (5 minutes)

1. Create a free Stripe account

2. Go to “Payment Links”

3. Create product:
   Consultation Deposit

4. Set price:
   £30

5. After payment redirect:
   https://YOURDOMAIN.com/booking.html?session_id=success

6. Copy your payment link

7. Paste into:
   config/config.js

depositPaymentLink: "YOUR LINK HERE"
