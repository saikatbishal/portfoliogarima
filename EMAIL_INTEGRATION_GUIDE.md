# Email Integration Guide

This guide explains how to integrate a third-party email service to make the contact form functional.

## Option 1: EmailJS (Recommended - Easy & Free)

EmailJS allows you to send emails directly from client-side JavaScript without a backend.

### Setup Steps:

1. **Create an Account**

   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account (200 emails/month free)

2. **Install EmailJS**

   ```bash
   npm install @emailjs/browser
   ```

3. **Configure EmailJS**

   - Log in to EmailJS dashboard
   - Create an Email Service (Gmail, Outlook, etc.)
   - Create an Email Template with these variables:
     - `{{from_name}}` - sender's name
     - `{{from_email}}` - sender's email
     - `{{subject}}` - email subject
     - `{{message}}` - email message
   - Get your credentials:
     - Service ID
     - Template ID
     - Public Key

4. **Update ContactSection.jsx**

Replace the `handleSubmit` function in `src/components/resume/ContactSection.jsx`:

```javascript
import emailjs from "@emailjs/browser";

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus({ type: "", message: "" });

  try {
    await emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your Service ID
      "YOUR_TEMPLATE_ID", // Replace with your Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "YOUR_PUBLIC_KEY" // Replace with your Public Key
    );

    setStatus({
      type: "success",
      message: "Message sent successfully! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    console.error("EmailJS Error:", error);
    setStatus({
      type: "error",
      message: "Failed to send message. Please try again or email me directly.",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

5. **Environment Variables (Optional but Recommended)**

Create `.env` file in project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Update the code:

```javascript
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

---

## Option 2: Formspree (Easiest - No Code Changes)

Formspree provides a simple endpoint to handle form submissions.

### Setup Steps:

1. **Create an Account**

   - Go to [https://formspree.io/](https://formspree.io/)
   - Sign up for free (50 submissions/month)

2. **Create a Form**

   - Click "New Form"
   - Get your form endpoint URL

3. **Update ContactSection.jsx**

Replace the `handleSubmit` function:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus({ type: "", message: "" });

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (!response.ok) throw new Error("Failed to send");

    setStatus({
      type: "success",
      message: "Message sent successfully! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    setStatus({
      type: "error",
      message: "Failed to send message. Please try again or email me directly.",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Option 3: Custom Backend API

For more control, create your own backend endpoint.

### Setup Steps:

1. **Create a Backend Endpoint**

Example using Node.js + Express + Nodemailer:

```javascript
// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-app-password", // Use App Password, not regular password
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: "garima.sanghai@gmail.com",
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
```

2. **Update ContactSection.jsx**

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus({ type: "", message: "" });

  try {
    const response = await fetch("http://localhost:3001/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!data.success) throw new Error("Failed to send");

    setStatus({
      type: "success",
      message: "Message sent successfully! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    setStatus({
      type: "error",
      message: "Failed to send message. Please try again or email me directly.",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Option 4: Web3Forms (Free & Simple)

No registration required for basic usage.

### Setup Steps:

1. **Get Access Key**

   - Go to [https://web3forms.com/](https://web3forms.com/)
   - Get your free access key

2. **Update ContactSection.jsx**

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus({ type: "", message: "" });

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "YOUR_ACCESS_KEY",
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (!data.success) throw new Error("Failed to send");

    setStatus({
      type: "success",
      message: "Message sent successfully! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    setStatus({
      type: "error",
      message: "Failed to send message. Please try again or email me directly.",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Comparison

| Service    | Free Tier | Difficulty | Best For                      |
| ---------- | --------- | ---------- | ----------------------------- |
| EmailJS    | 200/month | Easy       | Quick setup, client-side only |
| Formspree  | 50/month  | Easiest    | Minimal code, simple forms    |
| Web3Forms  | 250/month | Easy       | No registration, simple setup |
| Custom API | Unlimited | Hard       | Full control, complex logic   |

## Recommendation

**For your portfolio, I recommend EmailJS** because:

- ✅ Easy to set up
- ✅ Generous free tier (200 emails/month)
- ✅ No backend required
- ✅ Good documentation
- ✅ Reliable service

---

## Testing

After integration, test the form:

1. Fill in all fields
2. Submit the form
3. Check your email inbox
4. Verify the email contains correct information

## Security Notes

- Never commit API keys to GitHub
- Use environment variables for sensitive data
- Add `.env` to `.gitignore`
- For Gmail: use App Passwords, not regular passwords
- Consider adding rate limiting to prevent spam
