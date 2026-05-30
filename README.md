# Mp Dev — Personal Portfolio

A personal developer portfolio built as a single-page React application. It presents a hero
banner, an "About Me" section, the technology stack, and a projects showcase, plus a
blog-style post reader (`/post/:id`) that fetches article content from a remote API and
renders it as sanitized HTML.

> Built and maintained by **Misael Perez** — [GitHub](https://github.com/misael1310) ·
> [LinkedIn](https://linkedin.com/in/misael-perez-732a4814a/)

<!-- Live demo: add the deployment URL here once published. -->

## Tech stack

| Area | Technology |
|---|---|
| Language | TypeScript 5.9 (strict) |
| UI | React 19, React Router 7 |
| Styling | Tailwind CSS 4 (`@tailwindcss/typography`) |
| State / data | Redux Toolkit 2 + RTK Query |
| HTML sanitizing | DOMPurify + `html-react-parser` |
| Build tool | Vite 7 |
| Testing | Vitest + happy-dom |
| Tooling | ESLint (type-aware), Prettier, Husky, commitlint, lint-staged |

## Features

- **Single-page app** with client-side routing (Home, Post, 404).
- **Home sections:** Banner, About Me, Stack, and Projects (currently "Coming Soon").
- **Post reader** (`/post/:id`): fetches posts from a remote API via RTK Query and renders
  the body as HTML **sanitized with DOMPurify** before parsing.
- **Responsive, utility-first UI** with Tailwind CSS.

## Getting started

### Prerequisites

- Node.js `v24.13.1` (see [`.nvmrc`](./.nvmrc)) — `nvm use` will pick it up.
- npm (ships with Node).

### Installation

```bash
git clone https://github.com/misael1310/Portfolio.git
cd Portfolio
npm install
```

### Environment variables

The post reader needs the base URL of the content API. Create a `.env` (or `.env.local`)
file in the project root:

```bash
VITE_API_URL=https://your-api.example.com/
```

> The `VITE_` prefix means this value is **inlined into the client bundle** and publicly
> visible — only put a public API base URL here, never secrets or tokens.

### Run the dev server

```bash
npm run dev
```

Vite serves the app (with `--host` enabled for access from other devices on your network).

## Available scripts

| Script | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR (`--host`). |
| `npm run build` | Type-check (`tsc -b`) and produce a production bundle. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint (type-aware, `strictTypeChecked`). |
| `npm test` | Run the test suite with Vitest. |

## Project structure

```
src/
├── app/            # Redux store
├── components/
│   ├── common/     # Header, Footer, Navbar, SocialMedia, …
│   └── sections/   # Banner, AboutMe, Stack, Projects
├── data/           # Static content (about me, social links, stack)
├── features/posts/ # RTK Query API slice (VITE_API_URL)
├── layouts/        # MainLayout (shared shell)
├── pages/          # HomePage, PostPage, NotFoundPage
├── utils/          # Asset helpers, parseContent (DOMPurify → html-react-parser)
├── main.tsx        # App entry (createRoot + Redux Provider)
└── router.tsx      # Routes
```

## License

No license file is currently included. This is a personal portfolio project; add a
`LICENSE` (e.g. MIT) if you intend to allow reuse.
