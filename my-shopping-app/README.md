# My Shopping App

This is a simple shopping website built with Next.js, React, and TypeScript. The application integrates with Supabase for authentication and database management, allowing users to browse products, manage their orders, and administrators to manage the product catalog.

## Features

- User authentication with Supabase
- Product catalog display
- Admin panel for managing products
- User order history

## Project Structure

```
my-shopping-app
├── src
│   ├── components
│   │   ├── AdminPanel.tsx       # Admin interface for managing products
│   │   ├── ProductCard.tsx       # Component to display individual product details
│   │   └── Auth.tsx              # User authentication component
│   ├── pages
│   │   ├── _app.tsx              # Custom App component
│   │   ├── index.tsx             # Main landing page
│   │   ├── admin.tsx             # Admin page for product management
│   │   ├── login.tsx             # User login page
│   │   └── orders.tsx            # User order history page
│   ├── lib
│   │   └── supabaseClient.ts      # Supabase client configuration
│   ├── types
│   │   └── index.ts               # TypeScript types and interfaces
│   └── styles
│       └── globals.css            # Global CSS styles
├── public
│   └── favicon.ico                # Favicon for the application
├── package.json                   # NPM configuration file
├── tsconfig.json                  # TypeScript configuration file
└── README.md                      # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-shopping-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your Supabase project and configure the `supabaseClient.ts` file with your Supabase URL and public API key.

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Users can log in to view their order history.
- Administrators can access the admin panel to add or manage products in the catalog.

## License

This project is licensed under the MIT License.