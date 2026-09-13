# Knowledge Graph

The living map of what's actually known, not what's been "covered." This is what future sessions read to decide what to explain, what to quiz, and what to leave alone.

## Status definitions

- **seed** — not yet taught
- **introduced** — explained once (by Claude)
- **practicing** — used it, with help, at least once
- **understood** — explained back in own words *and* passed a check on it

Statuses only move up on real evidence — a direct quote or a described action — never assumed from "we talked about it." A status can be *revised down* if later evidence contradicts it (e.g. a wrong answer on something previously marked understood).

## Quizzing policy

Quiz candidates are anything at **seed**, **introduced**, or **practicing** — that's the point of tracking status. Anything **understood** is skipped as long as it's fresh; re-quiz it only if the last-reviewed date is stale (roughly 2–3 weeks with no use) or new evidence casts doubt on it. Never re-quiz something understood and fresh just because it's convenient.

---

## Low-level (JS fundamentals)

| Concept | Status | Introduced | Last reviewed | Evidence |
|---|---|---|---|---|
| Variables & data types (`let`/`const`, strings, numbers, booleans) | seed | — | — | — |
| Functions (declaring & calling) | seed | — | — | — |
| Conditionals (`if`/`else`) | seed | — | — | — |
| Loops & iteration (`for`, iterating arrays) | seed | — | — | — |
| Arrays & array methods (`push`, `filter`, `map`, `reduce`) | seed | — | — | — |
| Objects (key-value structure — e.g. one expense record) | seed | — | — | — |
| Template literals & string building | seed | — | — | — |
| DOM selection & manipulation (`querySelector`, creating/updating elements) | seed | — | — | — |
| Event listeners (responding to clicks/form submits) | seed | — | — | — |
| JSON (`stringify`/`parse`) | seed | — | — | — |
| Async/await & Promises (needed for `fetch`) | seed | — | — | — |

## Structural (how the pieces fit together)

| Concept | Status | Introduced | Last reviewed | Evidence |
|---|---|---|---|---|
| Frontend roles: HTML/CSS/JS | understood | 2026-09-13 | 2026-09-13 | "The frontend is what the user will see. It consists of HTML, CSS and JS." |
| Backend/server: Node.js + Express | understood | 2026-09-13 | 2026-09-13 | Explained backend as "the business logic of the project... Node.js with express"; separately justified Express as "popular and simple." |
| API as the frontend↔backend contract | practicing | 2026-09-13 | 2026-09-13 | Said APIs "communicate between frontend and backend" — correct at a high level, but needed correction that the API is routes inside the backend code, not a separate technology. Not yet re-confirmed. |
| Client-server request/response cycle (fetch → HTTP → route → response) | seed | — | — | — |
| Database: SQLite / relational, tabular data | understood | 2026-09-13 | 2026-09-13 | Justified SQLite as it "requires no separate server to run. I can always migrate to MongoDB or PostgreSQL later if I want." |
| `package.json` & npm dependencies | seed | — | — | Watched `npm init`/`npm install` run, but the concept itself hasn't been explained yet. |
| Module system (`require`/`module.exports`) | seed | — | — | — |
| Project folder structure (frontend files vs. backend files) | introduced | 2026-09-13 | 2026-09-13 | Told: "public/ folder created — this is where your frontend HTML/JS will live." |
| Same language end-to-end (JS on both frontend & backend) | understood | 2026-09-13 | 2026-09-13 | "JavaScript is the language of the web... to build my fundamentals. That is why I am using it in the backend as well." |

## Engineering practice

| Concept | Status | Introduced | Last reviewed | Evidence |
|---|---|---|---|---|
| Version control fundamentals (Git commits, history, undo) | practicing | 2026-09-13 | 2026-09-13 | Correctly predicted `git init`'s effect before running it ("nothing will change or upload, it just creates a hidden .git folder"), then ran it themselves and confirmed: "Initialized empty Git repository in .../demo-project/.git/". No commit made yet. |
| Remote repositories (GitHub, push, online backup) | introduced | 2026-09-13 | 2026-09-13 | Explained as where Git history is backed up and what hosting will pull code from. |
| `.gitignore` (what not to track) | understood | 2026-09-13 | 2026-09-13 | Wrote `node_modules/` and `.DS_Store` into the file correctly unaided, predicted `git status` would hide `node_modules` but still show `.gitignore` itself, then confirmed with real output matching exactly. |
| Environment variables & secrets (never hardcode passwords) | introduced | 2026-09-13 | 2026-09-13 | Explained as component #7: settings/secrets that must differ from what's committed to GitHub. |
| Dev vs. production environments | introduced | 2026-09-13 | 2026-09-13 | Same explanation as above — laptop vs. live-internet version. |
| Automated testing (writing/running tests) | seed | — | — | — |
| Debugging (reading errors, `console.log`, devtools) | seed | — | — | — |
| Deploying a live app (hosting, persistence tradeoffs) | understood | 2026-09-13 | 2026-09-13 | Chose Render "because it's free and well-documented," explicitly and knowingly deferring the SQLite persistence tradeoff rather than missing it. |

## AI-era practice

| Concept | Status | Introduced | Last reviewed | Evidence |
|---|---|---|---|---|
| Writing a plan before coding (MVP vs. parking lot, scope discipline) | practicing | 2026-09-13 | 2026-09-13 | Actively scoped the MVP and moved the password-gate feature to the parking lot after weighing the tradeoff explicitly, rather than just accepting a list. |
| Persistent agent memory files (files re-read every session) | understood | 2026-09-13 | 2026-09-13 | Requested `project.md` specifically so "every future session will start by reading that file" — stated the purpose unprompted, in their own words. |
| Evaluating tech tradeoffs with an AI pair (recommendation + alternatives + justify before locking) | practicing | 2026-09-13 | 2026-09-13 | Walked through and justified all 5 stack decisions (language, frontend, backend, database, hosting) before locking each in. |
| Reviewing a diff / code change before accepting it | seed | — | — | — |
| Living knowledge graph / spaced-review learning tracking | seed | — | — | This file itself — just being seeded. |
| Writing a good task spec when delegating to an AI | seed | — | — | — |
