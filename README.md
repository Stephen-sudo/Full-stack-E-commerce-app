# 🛍️ Full-Stack E-Commerce App

An advanced e-commerce web application built with cutting-edge technologies like **Next.js 15**, **Sanity**, **Clerk**, **Stripe**, and styled using **Tailwind CSS + ShadCN**. Smooth authentication, seamless payment, and modern UI—all in one place.

🌐 **Live Demo**: [Click here to visit the app](https://full-stack-e-commerce-app-git-main-stephens-projects-85fa3254.vercel.app/)

---

## 🚀 Tech Stack

| Frontend  | Backend | Authentication | Payment | Styling |
|-----------|---------|----------------|---------|---------|
| ![React](https://img.shields.io/badge/React-19-blue?logo=react) ![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js) | ![Sanity](https://img.shields.io/badge/Sanity-CMS-red?logo=sanity) | ![Clerk](https://img.shields.io/badge/Clerk-Auth-orange?logo=clerk) | ![Stripe](https://img.shields.io/badge/Stripe-Payments-blue?logo=stripe) | ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Utility--First-06B6D4?logo=tailwindcss) ![ShadCN](https://img.shields.io/badge/ShadCN-UI-green) |

---

## ✨ Features

- 🔐 User Authentication & Session Management (Clerk)
- 🛒 Add to Basket, Checkout & Order Tracking
- 💸 Real-Time Stripe Payments
- 📦 Dynamic Product Management (Sanity CMS)
- 📄 SEO-Friendly Pages
- 📱 Fully Responsive Design
- 🧠 Clean and Modular Codebase (TypeScript)

---

## 📁 Folder Structure

```bash
.
├── app/                    # Next.js App Router
│   ├── (auth)/             # Auth pages via Clerk
│   ├── (store)/            # Store-related routes (products, basket, orders)
│   ├── api/                # API routes (e.g., webhooks)
├── components/             # UI components (Header, Footer, Buttons, etc.)
├── lib/                    # Utility functions (formatting, Stripe, Sanity)
├── sanity/                 # CMS configuration and schema
├── public/                 # Static files
├── styles/                 # Global styles
├── .env.local              # Environment variables
└── README.md
```

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Stephen-sudo/Full-stack-E-commerce-app.git
cd ecommerce-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

```env
# .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token
NEXT_PUBLIC_BASE_URL=http://localhost:3000

```

### 4. Run the development server

```bash
npm run dev
```

---

## 🧠 Sanity CMS

- Visit [sanity.io](https://www.sanity.io/) and create a project
- Set up the schema for products and orders
- Deploy your studio and use the API token in `.env.local`

---

## ✅ Deployment

This project is deployed on **Vercel**.

🔗 **Live URL**: [https://full-stack-e-commerce-app-git-main-stephens-projects-85fa3254.vercel.app/](https://full-stack-e-commerce-app-git-main-stephens-projects-85fa3254.vercel.app)

---

> ⚙️ Built with ❤️ by Stephen  
> GitHub: [Stephen-sudo](https://github.com/Stephen-sudo)
