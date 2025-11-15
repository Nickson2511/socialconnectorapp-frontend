📱 SocialConnectorApp — Frontend (React + TypeScript + MUI + Redux Toolkit)

A modern social media frontend built using React, TypeScript, Material UI, Redux Toolkit, RTK Query, and Vite.

This project is structured for teamwork — juniors, intermediates, and seniors can collaborate easily.
The folder structure, code architecture, and patterns follow industry best practices.


🚀 Tech Stack


| Layer            | Technology                           |
| ---------------- | ------------------------------------ |
| Framework        | React 19 + Vite                      |
| Language         | TypeScript                           |
| State Management | Redux Toolkit (RTK)                  |
| API              | RTK Query                            |
| UI Library       | Material UI (MUI v6)                 |
| Theming          | Custom MUI Theme (Dark/Light toggle) |
| Build Tool       | Vite                                 |
| Linting          | ESLint + TypeScript rules            |
| Git Hooks        | Husky (pre-commit linting)           |




📁 Project Structure


src/
 ├── api/
 │    └── baseApi.ts
 │
 ├── app/
 │    └── store.ts
 │
 ├── components/
 │    └── PostCard.tsx
 │
 ├── features/
 │    ├── auth/
 │    │    └── authSlice.ts
 │    ├── posts/
 │    │    ├── postsApi.ts
 │    │    └── postsSlice.ts
 │    │    └── Feed.tsx
 │    ├── profile/
 │    │    └── profileSlice.ts
 │    ├── notifications/
 │    │    └── notificationsSlice.ts
 │    └── chat/
 │         └── chatSlice.ts
 │
 ├── layouts/
 │    └── MainLayout.tsx
 │
 ├── theme/
 │    └── index.ts (MUI theme + mode toggle)
 │
 ├── types/
 │    └── index.ts (shared models: IUser, IPost)
 │
 ├── App.tsx
 └── main.tsx



✔ Clean separation of concerns
✔ Consistent modular architecture
✔ Easy for juniors to navigate


🛠 Installation & Setup
1. Clone the repo


git clone https://github.com/<your-username>/socialconnectorapp-frontend.git
cd socialconnectorapp-frontend


npm install


3. Start development server

App will run on:
👉 http://localhost:5173


🔧 Environment Variables

Create .env.local:


VITE_API_URL=http://localhost:8000/api/v1

See ./env.example for default fields.



📡 API Layer (RTK Query)

All API calls begin from the base API:

src/api/baseApi.ts

Handles base URL

Request headers

Authentication token injection



Endpoints (e.g., posts, auth, profile) extend this using:



baseApi.injectEndpoints({ ... })


This gives you:

Auto caching

Auto refetch

Auto invalidation

Auto typesafety

No manual fetch needed


🧵 Global State (Redux Toolkit)

The store is located at:

src/app/store.ts

Slices included:

authSlice

postsSlice

profileSlice

notificationsSlice

chatSlice


uniors only need to remember:

To create a new state module:

Make a folder in src/features/<name>

Add <name>Slice.ts

Add <name>Api.ts (if backend data is needed)

Register it in store.ts


🎨 Material UI Theme (Light/Dark Mode)

Dark mode toggle is already built-in.

Theme file: src/theme/index.ts

Toggle passed from main.tsx → App.tsx → MainLayout

Usage example:


<IconButton onClick={toggleTheme}>
  <Brightness4Icon />
</IconButton>



📰 Posts Module (Example Feature)

API

src/features/posts/postsApi.ts

Slice

src/features/posts/postsSlice.ts

UI

src/features/posts/Feed.tsx

Component

src/components/PostCard.tsx

Everything is strongly typed using the shared interfaces:

src/types/index.ts


📌 GitHub Workflow (CI)

Located at:


.github/workflows/ci.yml


What it does:


| Step         | Purpose                    |
| ------------ | -------------------------- |
| Install deps | Ensure clean environment   |
| Type check   | Blocks invalid TypeScript  |
| ESLint       | Prevents broken formatting |
| Build        | Ensures code compiles      |


🔐 Code Quality Tools
✔ ESLint
✔ TypeScript strict mode
✔ Prettier
✔ Husky (pre-commit linting)
✔ GitHub Actions (CI)


Before every commit:

npm run lint


Husky auto-blocks bad commits.


👥 For Juniors — How to Contribute

Always follow these steps:

Create a feature branch


git checkout -b feature/my-feature


Write clean, typed code

Never use any

Use MUI components whenever possible

Follow existing folder structure

Run linting


npm run lint



Commit & push


🤝 Conventions
Folder Naming:

All folders: camelCase

All components: PascalCase

All slices: camelCase

Code Style:

Do not use any

Prefer interface over type

Keep components small and reusable

Keep API logic out of components

One slice per feature

One API service per feature


📬 Contact / Support

If you're stuck, ask the team lead or check the /docs folder (coming soon).
Always ask before implementing major changes.


🎉 You're Ready!

This frontend is built with real enterprise standards used by senior engineers.





































































































































































































































