# A2E Power System - Corporate Static Website

A premium, modern, clean, and fully responsive corporate website redesign for **A2E Power System** built using a **White Theme** and strictly static technologies (HTML5, CSS3, Vanilla JavaScript, Bootstrap 5, and Bootstrap Icons / Font Awesome).

> **Headline:** *"Customer Satisfaction at Any Cost"*  
> **Motto:** *"A2E Power System - 100% Satisfaction"*  
> **GSTIN:** `33DKIPK7580J2ZP`  
> **Established:** 2018  

---

## 📌 Technology Stack

- **HTML5:** Semantic architecture, accessible forms, OpenGraph & SEO metadata.
- **CSS3:** Custom corporate design tokens, subtle shadows, responsive typography, and smooth transitions.
- **Bootstrap 5 (v5.3.3):** Responsive grid layout, modals, and flexible flexbox utilities.
- **Vanilla JavaScript:** Client-side validation, live WhatsApp chat formatting, sticky navigation, and mobile menu handling.
- **Icons:** Bootstrap Icons (v1.11.3) & Font Awesome 6.
- **No Backend:** Zero PHP, zero Node.js backend, zero databases, and zero server-side code. Completely static and ready to host anywhere.

---

## 📁 Project Structure

```text
a2e-power/
│
├── index.html                     # Homepage (12 comprehensive sections)
├── about.html                     # About Us (History, Mission, Vision, Organization, GST)
├── projects.html                  # Dedicated Projects Showcase & Site Photos
├── videos.html                    # Video Gallery (HTML5 MP4 players & poster frames)
├── contact.html                   # Contact Us (Hosur, Trichy, Chennai, Madurai)
├── enquiry.html                   # WhatsApp Enquiry Form with Live Chat Preview
│
├── products/                      # Dedicated Product Pages
│   ├── lt-panels.html             # Low Tension (LT) Panels (PCC, MCC, APFC, PDB)
│   ├── ht-panels.html             # High Tension (HT) Panels (11kV & 33kV VCB Switchgear)
│   ├── breakers.html              # VCB & ACB Breakers Service, Testing & Retrofits
│   ├── refurbishment.html         # LT & HT Substation Panel Refurbishment
│   ├── solar.html                 # Solar PV Modules & HDG Mounting Structures
│   ├── cable-trays.html           # Perforated & Ladder Type Cable Trays
│   ├── electrical-services.html   # Turnkey Industrial Site Work & Electricians
│   └── ups.html                   # 3-Phase On & Offline UPS & Battery Systems
│
├── assets/
│   ├── logo/                      # Original Brand Logo, Transparent PNG & Favicons
│   ├── images/                    # Authentic project photos & vector schematics
│   └── videos/                    # Original site work videos (video.mp4 & video2.mp4)
│
├── css/
│   └── style.css                  # Custom styling & design tokens
└── js/
    └── script.js                  # Client-side form validation & WhatsApp URL builder
```

---

## 📱 WhatsApp Click-to-Chat Integration

The contact and enquiry forms operate entirely client-side without any server requirement:

1. Validates all inputs using JavaScript (Name, Mobile, Email, Company, Subject, Location, Message).
2. Generates an instant, formatted WhatsApp enquiry message:
   ```text
   Hello A2E Power System,

   I would like to make an enquiry.

   Name: [Customer Name]
   Mobile: [Customer Mobile]
   Email: [Customer Email]
   Company: [Company Name]
   Subject: [Subject]
   Location: [Location]

   Message:
   [Message Body]

   Please contact me regarding my enquiry.

   Thank you.
   ```
3. Formats the string into the standard WhatsApp Click-to-Chat endpoint:
   `https://wa.me/919566380232?text=...`
4. Automatically opens WhatsApp chat on desktop or mobile with the message populated and ready to send.

---

## 🏢 Branch Network & 24*7 Support

- **Hosur (Head Office):** TNBH Bangalore road, Hosur - 635109, Tamil Nadu.
- **Trichy Branch:** K.K.Nagar, Manapparai, Trichy, Tamil Nadu.
- **Chennai Branch:** Singaperumal Kovil street, Poonamallee (Poonthamali), Chennai, Tamil Nadu.
- **Madurai Branch:** Perunkudi, Madurai, Tamil Nadu.

### 24*7 Helplines
- `+91 95663 80232` (Emergency & Commercial)
- `+91 99409 68373` (Technical & Engineering)
- `+91 84285 14397` (Customer Care)
- `+91 94990 24731` (Site Operations)

**Email:** `a2epowersystem@outlook.com` / `a2epowersystem@peoplewholesaler.com`

---

## 🚀 Deployment

Since this project is completely static, it can be deployed directly to any static web hosting provider:
- **GitHub Pages:** Enable in repository Settings &rarr; Pages &rarr; Source: `main` branch root.
- **Cloudflare Pages / Netlify / Vercel:** Point repository root with no build command needed.
- **Local Testing:** Serve locally with any static server:
  ```bash
  python -m http.server 8000
  ```
  Open `http://localhost:8000` in any browser.

---

&copy; 2018 - 2026 **A2E Power System**. All Rights Reserved.
