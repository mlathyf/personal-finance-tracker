# Build Plan

Learning is the objective here, not speed. Every section below ends in something concretely visible/working before moving to the next — no section starts until the previous one's deliverable is real.

## Locked decisions

1. **Language: JavaScript (plain/vanilla, not TypeScript)**, on both frontend and backend via Node.js. Reasoning: "JavaScript is the language of the web... to build my fundamentals... that is why I am using it in the backend as well." TypeScript is the deliberate next step after this project, not during it.

2. **Frontend: Plain HTML + CSS + vanilla JavaScript** — no framework, no build tool/bundler. Reasoning: "I want to strengthen the fundamental technologies before moving on to a framework."

3. **Backend framework: Express.** Reasoning: "popular and simple" — the default nearly every Node.js tutorial and troubleshooting answer assumes.

4. **Database: SQLite.** Reasoning: "requires no separate server to run. I can always migrate to MongoDB or PostgreSQL later if I want." Single-file database, real SQL, no install/config overhead.

5. **Hosting: Render (free tier).** Reasoning: "it's free and well-documented, I'll deal with persistence later." Known tradeoff, accepted deliberately: Render's free tier storage is wiped on restart/redeploy, so the SQLite file is not durable yet — persistence (a paid disk add-on, or a different host) is deferred until it actually matters, not solved preemptively.

## Build sections

**1. Project setup & version control**
Deliverable: a Git repository initialized in this folder, a `.gitignore` excluding `node_modules`, an initial commit, and the code pushed to a new GitHub repository you can open in a browser.

Tasks:
- [x] 1.1 Initialize a Git repository in this folder (`git init`)
- [x] 1.2 Create a `.gitignore` that excludes `node_modules` (and other junk that shouldn't be tracked)
- [x] 1.3 Stage the project files and make the first commit
- [x] 1.4 Create a new empty repository on GitHub
- [x] 1.5 Connect this local repo to the GitHub remote and push — deliverable: the code visible at a github.com URL

**2. Static page renders** ✅ done (2026-09-14)
Deliverable: opening `index.html` directly in the browser shows the app's basic structure — title, an empty area where the expense list will go, and a form (amount, date, category, note). Nothing works yet — just structure.

Tasks:
- [x] 2.1 Write `public/index.html` with boilerplate, a heading, an empty container element, and the expense form (amount, date, category, note)
- [x] 2.2 Add `<label>`s wired to each input's `id`
- [x] 2.3 Open the file directly in a browser and confirm the structure renders

**3. Styling and interactivity (frontend only)** ✅ done (2026-09-14)
Deliverable: the page looks intentional (CSS), and submitting the form adds a row to the on-screen list instantly, using only in-page JavaScript. No server involved yet — refreshing the page clears everything, and that's expected at this stage.

Tasks:
- [x] 3.1 Create a stylesheet and link it from `index.html`; apply basic layout/spacing so the page looks intentional
- [x] 3.2 Select the form and the container element in JS (`querySelector`)
- [x] 3.3 Add a `submit` event listener on the form and call `event.preventDefault()` to stop the default page reload/query-string behavior seen in Section 2
- [x] 3.4 Read the current values out of the form fields inside that listener
- [x] 3.5 Build a new element from those values and insert it into the container
- [x] 3.6 Clear the form fields after a successful add

**4. A simple local server**
Deliverable: instead of opening the HTML file directly, you start your own Express server and load the exact same page from `http://localhost:3000` — now served by code you wrote instead of the browser reading a file.

Tasks:
- [ ] 4.1 Write a minimal Express app in `server.js` that serves the `public/` folder as static files
- [ ] 4.2 Have the app `listen` on a port (e.g. 3000)
- [ ] 4.3 Start the server and load `http://localhost:3000` in the browser, confirming it's the same page as Section 2
- [ ] 4.4 Add a `start` script to `package.json` so the server can be launched with `npm start`

**5. APIs**
Deliverable: the "add expense" form calls a real `POST /api/expenses` endpoint via `fetch()`, and the page loads its list from `GET /api/expenses`. Data lives in a plain array on the server for now — it survives a page refresh, but not yet a server restart.

Tasks:
- [ ] 5.1 Add `express.json()` middleware so the server can parse JSON request bodies
- [ ] 5.2 Create an in-memory array on the server to hold expenses
- [ ] 5.3 Implement `GET /api/expenses` returning the array as JSON
- [ ] 5.4 Implement `POST /api/expenses` that reads the request body and pushes a new expense onto the array
- [ ] 5.5 Update the frontend JS to `fetch()` the list from `GET /api/expenses` on page load and render it
- [ ] 5.6 Update the frontend submit handler to `POST` to the API (via `fetch`) instead of only building the row locally

**6. Database**
Deliverable: swap the in-memory array for SQLite. Add an expense, fully restart the server, refresh the page — the expense is still there.

Tasks:
- [ ] 6.1 Install a SQLite package and create a database file
- [ ] 6.2 Create an `expenses` table (id, amount, date, category, note)
- [ ] 6.3 Replace the `GET /api/expenses` in-memory read with a `SELECT` query
- [ ] 6.4 Replace the `POST /api/expenses` in-memory write with an `INSERT` query
- [ ] 6.5 Restart the server and confirm previously added expenses are still there

**7. Core features (completing the MVP)**
Deliverable: delete works, a running monthly total displays correctly, and the fixed category list is wired in end to end. The app now does everything on the MVP list ([[project]]), running locally.

Tasks:
- [ ] 7.1 Implement `DELETE /api/expenses/:id` on the server, removing the matching row from SQLite
- [ ] 7.2 Add a delete button per row in the frontend that calls the delete endpoint and removes the row on success
- [ ] 7.3 Compute and display a running total for the current month
- [ ] 7.4 Walk through the MVP checklist in `project.md` end to end and confirm every item actually works

**8. Tests**
Deliverable: a small test suite covering your API endpoints, runnable with one command, that passes — and that would visibly fail if you broke something later.

Tasks:
- [ ] 8.1 Pick a test tool (e.g. Node's built-in `node:test`, or a small library) and install it if needed
- [ ] 8.2 Write a test for `GET /api/expenses`
- [ ] 8.3 Write a test for `POST /api/expenses`
- [ ] 8.4 Write a test for `DELETE /api/expenses/:id`
- [ ] 8.5 Add a `test` script to `package.json` and confirm `npm test` runs all of them
- [ ] 8.6 Deliberately break one endpoint and confirm the test suite catches it, then fix it back

**9. Live deployment**
Deliverable: the app is live at a public Render URL, reachable from your phone over mobile data — not just from your laptop.

Tasks:
- [ ] 9.1 Create a Render account and connect it to the GitHub repo
- [ ] 9.2 Configure the build and start commands on Render
- [ ] 9.3 Decide how to handle the SQLite persistence tradeoff (see the open question in `project.md`) before or right after first deploy
- [ ] 9.4 Deploy and confirm the app loads at the public Render URL
- [ ] 9.5 Load the URL from your phone over mobile data (not wifi) to confirm it's genuinely public
