# Nuxt 3 Project

A modern Nuxt 3 project with a well-organized structure.

## Project Structure

```
├── assets/
│   └── css/
│       └── main.css
├── components/
│   └── BaseButton.vue
├── layouts/
│   └── default.vue
├── pages/
│   └── index.vue
├── public/
├── app.vue
├── nuxt.config.ts
├── tailwind.config.js
└── package.json
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

pm2 start .output/server/index.mjs --name shared-manual
Preview the production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
