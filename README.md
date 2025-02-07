Dynamic Frontend Components for Marketplace

Overview

This project is a dynamic, component-based Next.js marketplace frontend integrated with Sanity CMS. It provides modular, reusable components for product listings, search, filters, checkout, and more. The project follows best practices in state management, performance optimization, and responsive design.

Features

✅ Product Listing - Displays products in a grid format with details.✅ Product Detail Pages - Implements dynamic routing for individual product pages.✅ Search & Filters - Enables users to search and filter products effectively.✅ Cart & Wishlist - Manages user-selected products using state management.✅ Checkout Flow - Multi-step checkout process with billing and shipping details.✅ Review Page - Users can submit and view feedback on products.✅ Lazy Loading & Pagination - Optimized performance for handling large datasets.✅ Styled with Tailwind CSS - Ensures a modern and responsive UI.

Tech Stack

Framework: Next.js

CMS: Sanity.io

Authentication: Clerk

Deployment: Vercel

Styling: Tailwind CSS

Setup & Installation

Clone the repository:

git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

Navigate to the project directory:

cd YOUR_REPO_NAME

Install dependencies:

npm install

Create a .env.local file and configure API keys:

NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_api_key

Run the development server:

npm run dev

Open http://localhost:3000/ in your browser.

Folder Structure

📂 YOUR_REPO_NAME
 ├── 📂 components          # Reusable UI components
 ├── 📂 pages               # Next.js page components
 ├── 📂 styles              # Tailwind CSS configurations
 ├── 📂 public              # Static assets (images, icons)
 ├── 📂 utils               # Helper functions
 ├── 📄 .env.local          # API keys (not committed)
 ├── 📄 package.json        # Dependencies and scripts
 ├── 📄 README.md           # Project documentation

Challenges Faced

Error in Clerk authentication setup.

Issues while fetching data from Sanity CMS.

Deployment problems on Vercel.

Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a new feature branch:

git checkout -b feature-new-component

Commit your changes:

git commit -m "Added a new component"

Push to your fork and submit a PR.
