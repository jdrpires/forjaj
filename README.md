# ForjaJ

> Full-stack e-commerce platform for 3D-printed products and custom manufacturing requests.

**Next.js · TypeScript · Python · Flask · PostgreSQL · Mercado Pago · Docker**

| | |
|---|---|
| **Type** | Full-stack commerce platform |
| **Domain** | E-commerce / Digital manufacturing |
| **Focus** | Catalog, checkout, custom quotations and operations |
| **Status** | Public technical project |

## Overview

ForjaJ combines conventional e-commerce workflows with a second path specific to digital manufacturing: customers can request custom quotations and submit files for products that are not part of the standard catalog.

## Architecture

```text
Customer / Admin
       │
       ▼
 Next.js Frontend
       │
       ▼
   Flask API
  ┌────┼─────────┐
  │    │         │
Catalog Orders  Quotes
  │    │         │
  └────┼─────────┘
       ▼
  PostgreSQL
       │
       └────► Mercado Pago
```

## Capabilities

- Product catalog and filtering.
- Product detail and cart workflows.
- Checkout and payment-provider integration.
- Customer registration and authentication.
- Order tracking.
- Custom quotation requests with file uploads.
- Administrative product, order and quotation management.
- Responsive web experience.

## Stack

### Frontend
`Next.js 14` · `TypeScript` · `Tailwind CSS` · `React Hook Form`

### Backend
`Python` · `Flask` · `PostgreSQL` · `JWT` · `Mercado Pago SDK`

## Local setup

```bash
git clone https://github.com/jdrpires/forjaj.git
cd forjaj

# Database
cd database
docker-compose up -d

# Backend
cd ../backend
pip install -r requirements.txt
cp .env.example .env
python app.py

# Frontend
cd ../frontend
npm install
npm run dev
```

All credentials, JWT secrets, SMTP passwords and payment-provider tokens must be supplied through local environment variables.

## Security notes

- Never ship default administrative credentials.
- Rotate all secrets before deployment.
- Validate uploaded files before storage or processing.
- Verify payment notifications server-side.
- Restrict upload size and accepted file types.
- Keep payment-provider credentials outside source control.

## Why this project is public

ForjaJ demonstrates end-to-end product engineering across frontend, backend, payments, persistence and operational workflows, including a domain-specific custom-quotation process.

---

**Jean Pires** · [GitHub](https://github.com/jdrpires) · [Portfolio](https://github.com/jdrpires/jdrpires)
