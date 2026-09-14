# Personal Finance Tracker — Project Notes

## Who's building this

- Background: Bachelor of Computer Science, completed through year 2 (not finished)
- Day job: Trade finance staff at a bank — processes inward/outward remittances, works with structured documents and numbers daily
- Coding experience: comfortable with HTML/CSS, minimal JS. Has "vibe coded" small automation scripts before (a PDF split/combine tool for payment advices, a Google Sheets email automation) but is not yet confident writing vanilla JS from scratch
- Learning roadmap: vanilla JS → TypeScript → backend → full-stack developer
- Working style for this project: "You write, I guide" — Claude explains a concept and assigns a small task, the user writes the actual logic, Claude reviews before moving on. Mechanical setup (`npm init`, installing packages, folder scaffolding) is handled directly rather than treated as a learning task.

## The project

A personal expense tracker. Built because existing budgeting apps are either ad-supported or paywalled and don't fit the user's workflow, and a spreadsheet involves too much friction to update regularly.

Stack:
- **Frontend:** vanilla JavaScript (no framework) — this is the primary skill being practiced
- **Backend:** Node.js + Express, a small REST API
- **Database:** SQLite
- **Deployment:** live on the internet (not just localhost), reachable from phone and laptop — a hard requirement, not a nice-to-have

## Core components (the fundamentals needed to ship this end to end)

High-level pieces, not deep detail — the goal is to recognize what each one is and why it's needed before diving into code.

1. **Frontend** — the webpage itself: HTML (structure), CSS (appearance), vanilla JavaScript (behavior — what happens when you click "add expense"). This is what the user actually sees and touches.

2. **Backend / server** — a separate program that keeps running in the background, waiting for requests and deciding what to do with them (save an expense, look up the list). Built with **Node.js** (runs JavaScript outside a browser, as its own standalone program) and **Express** (a toolkit handling the repetitive plumbing of writing a server). Needed because the frontend alone forgets everything the moment the browser tab closes.

3. **API** *(Application Programming Interface)* — not a separate technology, but the specific set of routes/requests the backend exposes (e.g. `POST /expenses`) that the frontend calls to talk to it — like a menu of exactly what can be asked for and how. Lives inside the backend code. Needed because frontend and backend are two separate programs that need a precise, shared way of communicating.

4. **Database (SQLite)** — a place to permanently store data so it survives server restarts or a laptop reboot. SQLite keeps the whole database in a single file — no separate database program to install. Needed because without it, every expense would vanish the moment the server stops running.

5. **Version control (Git + GitHub)** — Git records every change to the code over time (an undo history that enables safe experimentation); GitHub stores a backup of that history online. Needed as a core engineering habit, and practically because hosting/deployment usually pulls code straight from a GitHub repository. *Note: this folder is not yet a Git repository — that's one of the first steps.*

6. **Deployment / hosting** — moving the code off the laptop onto a computer that's always on and connected to the internet, giving it a real public address instead of only working at `localhost` (an address that only means "this computer").

7. **Configuration & secrets** — settings that differ between the laptop ("development") and the live internet version ("production"), like which port the server listens on or where the database file lives — plus anything sensitive (e.g. a password) that must never be written directly into code that ends up on GitHub. Needed because "works on my laptop" and "works safely on the internet" are different problems.

**Understanding check (2026-09-13):** explained pieces 1 (frontend) and 2–3 (backend/API) back correctly in own words — backend as "the business logic," API as part of the backend that connects frontend and backend. Confirmed nuance: the API is specifically the routes defined inside the backend code, not a separate piece of technology.

## MVP — the smallest version that's genuinely usable end-to-end

- [ ] Add an expense: amount, date, category (fixed list), optional note
- [ ] View all expenses in a list, most recent first
- [ ] Delete an expense (typos and mis-entries will happen — without this the tracker isn't trustworthy)
- [ ] Running total (e.g. total spent this month)
- [ ] Data persisted server-side via SQLite, accessed through a REST API (`GET/POST/DELETE /expenses`)
- [ ] Deployed to a public URL, reachable from any device

Categories for the MVP are a **fixed, hardcoded list** (e.g. Food, Transport, Bills, Other) — no UI for managing categories yet.

## Parking lot — v2 and beyond

- Access protection (single shared password gate) — accepted the risk of a fully open URL for v1
- Editing an existing expense in place (MVP workaround: delete and re-add)
- Filtering the list by category or month
- Spending-by-category chart/visualization
- CSV export
- Budget envelopes per category with progress bars / over-budget warnings
- Recurring bills & cash-flow calendar
- Custom/user-managed categories
- Real multi-user accounts (vs. one shared password)
- Multi-currency support
- Polished/mobile-first UI, possibly installable as a PWA
- Migrating the frontend to TypeScript

## Open question to revisit at deploy time

Some free hosting tiers wipe the local filesystem on redeploy, which would silently delete the SQLite file. Decide at deployment time whether to use a host with a persistent disk, or swap to a small hosted database.

## Status

Sections 1–2 done ([[plan]]): Git/GitHub set up, and `public/index.html` written (structure + form, no styling/JS yet). Next: Section 3 (CSS + in-page JS to make the submit button add a row to the list).
