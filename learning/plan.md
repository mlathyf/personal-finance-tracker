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
- [ ] 1.3 Stage the project files and make the first commit
- [ ] 1.4 Create a new empty repository on GitHub
- [ ] 1.5 Connect this local repo to the GitHub remote and push — deliverable: the code visible at a github.com URL

**2. Static page renders**
Deliverable: opening `index.html` directly in the browser shows the app's basic structure — title, an empty area where the expense list will go, and a form (amount, date, category, note). Nothing works yet — just structure.

**3. Styling and interactivity (frontend only)**
Deliverable: the page looks intentional (CSS), and submitting the form adds a row to the on-screen list instantly, using only in-page JavaScript. No server involved yet — refreshing the page clears everything, and that's expected at this stage.

**4. A simple local server**
Deliverable: instead of opening the HTML file directly, you start your own Express server and load the exact same page from `http://localhost:3000` — now served by code you wrote instead of the browser reading a file.

**5. APIs**
Deliverable: the "add expense" form calls a real `POST /api/expenses` endpoint via `fetch()`, and the page loads its list from `GET /api/expenses`. Data lives in a plain array on the server for now — it survives a page refresh, but not yet a server restart.

**6. Database**
Deliverable: swap the in-memory array for SQLite. Add an expense, fully restart the server, refresh the page — the expense is still there.

**7. Core features (completing the MVP)**
Deliverable: delete works, a running monthly total displays correctly, and the fixed category list is wired in end to end. The app now does everything on the MVP list ([[project]]), running locally.

**8. Tests**
Deliverable: a small test suite covering your API endpoints, runnable with one command, that passes — and that would visibly fail if you broke something later.

**9. Live deployment**
Deliverable: the app is live at a public Render URL, reachable from your phone over mobile data — not just from your laptop.
