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
| Variables & data types (`let`/`const`, strings, numbers, booleans) | practicing | 2026-09-14 | 2026-09-14 | Declared `const` bindings for all form fields; correctly predicted that `.value` on a `type="number"` and `type="date"` input still returns a string, not a number, and confirmed it live. `let` still unexercised, and this is evidence for strings specifically — numbers/booleans as JS values not yet tested directly. |
| Functions (declaring & calling) | practicing | 2026-09-14 | 2026-09-14 | Wrote an arrow function `(e) => {...}` as an event-listener callback, correctly understanding it runs later rather than immediately. Only the arrow/callback form exercised so far — not yet a named function declaration. |
| Conditionals (`if`/`else`) | seed | — | — | — |
| Loops & iteration (`for`, iterating arrays) | seed | — | — | — |
| Arrays & array methods (`push`, `filter`, `map`, `reduce`) | seed | — | — | — |
| Objects (key-value structure — e.g. one expense record) | seed | — | — | — |
| Template literals & string building | practicing | 2026-09-14 | 2026-09-14 | Wrote a template literal combining all four field values into one readable line (`` `Spent MVR ${amount.value} on ${note.value}...` ``) correctly on the first attempt. |
| DOM selection & manipulation (`querySelector`, creating/updating elements) | practicing | 2026-09-14 | 2026-09-14 | Wrote `document.querySelector` calls for every field; independently switched the form's selector to `#form` for the id-safety reason discussed. Used `document.createElement`, `.textContent` (not `innerHTML`, given `note` is free-text), and `container.prepend()` to build and insert a real element from form data. Correctly chose `form.reset()` over manually clearing each field after a trade-off discussion (single call vs. logic that has to be kept in sync by hand), and correctly predicted the `<select>` would revert to its first option ("Food") rather than go blank. |
| Event listeners (responding to clicks/form submits) | practicing | 2026-09-14 | 2026-09-14 | Wrote `form.addEventListener("submit", (e) => {...})` correctly on the first attempt — passed the callback by reference (didn't fall into the call-it-now-with-parens trap), called `e.preventDefault()`, then correctly predicted and confirmed the page would stay put with a "Submitted" console log. |
| JSON (`stringify`/`parse`) | seed | — | — | — |
| Async/await & Promises (needed for `fetch`) | seed | — | — | — |
| CSS basics (selectors, box model, layout) | practicing | 2026-09-14 | 2026-09-14 | Wrote `public/style.css` from a plain-language spec with help; independently fixed a `san-serif` typo and generalized `#category` to `select`. Also surfaced and corrected a real misconception: predicted `max-width` on `body` would clip/hide overflowing elements like a fixed-size container — corrected by explaining height is unconstrained by default and nothing clips without an explicit `height` + `overflow` rule, which confirmed live (page just scrolled). |

## Structural (how the pieces fit together)

| Concept | Status | Introduced | Last reviewed | Evidence |
|---|---|---|---|---|
| Frontend roles: HTML/CSS/JS | understood | 2026-09-13 | 2026-09-13 | "The frontend is what the user will see. It consists of HTML, CSS and JS." |
| Backend/server: Node.js + Express | understood | 2026-09-13 | 2026-09-13 | Explained backend as "the business logic of the project... Node.js with express"; separately justified Express as "popular and simple." |
| API as the frontend↔backend contract | practicing | 2026-09-13 | 2026-09-13 | Said APIs "communicate between frontend and backend" — correct at a high level, but needed correction that the API is routes inside the backend code, not a separate technology. Not yet re-confirmed. |
| Client-server request/response cycle (fetch → HTTP → route → response) | practicing | 2026-09-14 | 2026-09-14 | Closed the loop from the Section 2 observation: correctly predicted that calling `preventDefault()` would stop the default GET-navigation behavior, then confirmed it live (page stayed put, no query string, console logged "Submitted"). |
| Database: SQLite / relational, tabular data | understood | 2026-09-13 | 2026-09-13 | Justified SQLite as it "requires no separate server to run. I can always migrate to MongoDB or PostgreSQL later if I want." |
| Writing SQL queries (`CREATE TABLE`/`SELECT`/`INSERT`/`DELETE`) | seed | — | — | — |
| HTTP methods & REST conventions (GET/POST/DELETE mapping to CRUD) | seed | — | — | — |
| Express routing & middleware (`app.get`/`post`/`delete`, `express.json()`) | seed | — | — | — |
| `package.json` & npm dependencies | seed | — | — | Watched `npm init`/`npm install` run, but the concept itself hasn't been explained yet. |
| Module system (`require`/`module.exports`) | seed | — | — | — |
| Project folder structure (frontend files vs. backend files) | practicing | 2026-09-13 | 2026-09-14 | Wrote `public/index.html` (structure, form, labels) unaided in the correct location. |
| Same language end-to-end (JS on both frontend & backend) | understood | 2026-09-13 | 2026-09-13 | "JavaScript is the language of the web... to build my fundamentals. That is why I am using it in the backend as well." |

## Engineering practice

| Concept | Status | Introduced | Last reviewed | Evidence |
|---|---|---|---|---|
| Version control fundamentals (Git commits, history, undo) | understood | 2026-09-13 | 2026-09-13 | Correctly predicted and executed the full init → stage → commit sequence unaided: distinguished staging from committing ("nothing will be committed yet as staging != committing"), predicted a clean `git status` and a populated `git log` after committing, then confirmed both exactly via real output (root-commit `4554660`, "nothing to commit, working tree clean"). |
| Remote repositories (GitHub, push, online backup) | understood | 2026-09-13 | 2026-09-13 | Correctly predicted `git remote add` registers an address without uploading anything, then registered origin, pushed with `git push -u origin main`, and confirmed the files actually appear on github.com/mlathyf/personal-finance-tracker. Also asked and correctly reasoned about how SSH auth differs from HTTPS. |
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
