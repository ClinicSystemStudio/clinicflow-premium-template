window.CONFIG = {
  apiBase: "",

  business: {
    name: "Your Clinic Name",
    tagline: "Aesthetic & Beauty Specialist",
    email: "hello@yourclinic.com",
    domain: "https://yourdomain.com"
  },

  branding: {
    logo: "/assets/logo.png",
    favicon: "/assets/favicon.png",
    primaryColor: "#1e3a5f",
    primaryDark: "#162c47",
    backgroundColor: "#f4f7fb",
    softBackground: "#e6f0ff",
    textColor: "#1a1a1a",
    mutedColor: "#6b7a90"
  },

  booking: {
    consultationPrice: 30,
    currencySymbol: "£",
    pageTitle: "Book Consultation & Patch Test",
    activeStepText: "Step 3: Book Consultation & Patch Test",
    introText: "",
    subText: "",
    openingHours: "Monday–Friday 5pm–8pm • Saturday 9am–11am"
  },

  payment: {
    depositAmount: 30,
    currencySymbol: "£",
    depositPaymentLink: "https://buy.stripe.com/your-real-link"
    bookingPage: "/booking.html"
  },

  admin: {
    title: "Bookings Dashboard",
    kicker: "Private Admin",
    intro: "View bookings, client contact details, send manual WhatsApp reminders, and manage bookings."
  },

  cancel: {
    pageTitle: "Cancel Appointment",
    kicker: "Appointment Cancellation",
    intro: "Please review your appointment details below before confirming your cancellation."
  },

  reschedule: {
    pageTitle: "Reschedule Appointment",
    kicker: "Appointment Update",
    intro: "Choose a new appointment date and time below. Your previous appointment will be updated once you confirm."
  },

  automation: {
    aftercareEmail: true,
    whatsappReminderTracking: true
  }
};
