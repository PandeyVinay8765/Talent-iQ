import { Link } from "react-router";
import { SparklesIcon, ArrowRightIcon } from "lucide-react";

const vinay = {
  name: "Vinay Pandey",
  initials: "VP",
  role: "Frontend Developer & Project Lead",
  items: [
    { area: "Frontend", task: "Home landing page", file: "pages/HomePage.jsx" },
    { area: "Frontend", task: "Dashboard page — shows active and recent sessions", file: "pages/DashboardPage.jsx" },
    { area: "Frontend", task: "Problems list page with difficulty levels", file: "pages/ProblemsPage.jsx" },
    { area: "Frontend", task: "Resume builder page", file: "pages/ResumeBuilderPage.jsx" },
    { area: "Frontend", task: "Navbar component", file: "components/Navbar.jsx" },
    { area: "Frontend", task: "Protected routes — only logged in users can access pages", file: "App.jsx" },
    { area: "Frontend", task: "UI design and styling across the whole app", file: "frontend/src/" },
    { area: "Backend", task: "Database models — User and Session", file: "models/" },
    { area: "Backend", task: "MongoDB connection and environment variable setup", file: "lib/db.js, lib/env.js" },
    { area: "Backend", task: "Server setup and all API routes registered", file: "server.js" },
  ],
};

const vicky = {
  name: "Vicky Sahani",
  initials: "VS",
  role: "Backend Engineer & Core Systems",
  items: [
    { area: "Backend", task: "Video calling inside interview sessions", file: "lib/stream.js" },
    { area: "Backend", task: "Live chat between both users during a session", file: "lib/stream.js" },
    { area: "Backend", task: "Creating a new interview session", file: "controllers/sessionController.js" },
    { area: "Backend", task: "Joining an existing session as participant", file: "controllers/sessionController.js" },
    { area: "Backend", task: "Ending a session and cleaning everything up", file: "controllers/sessionController.js" },
    { area: "Backend", task: "Auto-saving new users to database on signup", file: "lib/inngest.js" },
    { area: "Backend", task: "Running code in Python, JavaScript, Java and C++", file: "lib/piston.js" },
    { area: "Backend", task: "Real-time code sync so both users see same code", file: "server.js" },
    { area: "Frontend", task: "Active sessions list on dashboard", file: "components/ActiveSessions.jsx" },
    { area: "Frontend", task: "Live code editor panel inside session", file: "components/CodeEditorPanel.jsx" },
    { area: "Frontend", task: "Problem description with examples and constraints", file: "components/ProblemDescription.jsx" },
  ],
};

const Badge = ({ area }) =>
  area === "Frontend" ? (
    <span className="badge badge-sm bg-primary/20 text-primary border-primary/30 font-semibold">
      Frontend
    </span>
  ) : (
    <span className="badge badge-sm bg-secondary/20 text-secondary border-secondary/30 font-semibold">
      Backend
    </span>
  );

const Card = ({ person, accent }) => (
  <div className={`card bg-base-100 shadow-xl border ${accent === "primary" ? "border-primary/20" : "border-secondary/20"}`}>
    <div className="card-body gap-4">

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm shrink-0 ${accent === "primary" ? "bg-gradient-to-br from-primary to-secondary" : "bg-gradient-to-br from-secondary to-accent"}`}>
          {person.initials}
        </div>
        <div>
          <p className="font-bold text-base-content text-lg">{person.name}</p>
          <p className="text-xs text-base-content/50">{person.role}</p>
        </div>
      </div>

      <div className="divider my-0" />

      {/* Items */}
      <div className="flex flex-col gap-2">
        {person.items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-base-200 hover:bg-base-300 transition-colors rounded-xl px-3 py-2.5 border border-base-300"
          >
            <span className="text-success text-xs mt-0.5 shrink-0 font-bold">✓</span>
            <div className="flex-1 min-w-0">
              <div className="mb-1">
                <Badge area={item.area} />
              </div>
              <p className="text-sm text-base-content/80 leading-snug">{item.task}</p>
              <p className="text-xs text-base-content/30 font-mono mt-1">{item.file}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);

function ContributorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">

      {/* Navbar — matches exact app navbar */}
      <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
          >
            <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
              <SparklesIcon className="size-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
                Talent IQ
              </span>
              <span className="text-xs text-base-content/60 font-medium -mt-1">Code Together</span>
            </div>
          </Link>

          <Link
            to="/"
            className="group px-5 py-2.5 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
          >
            <span>Back to Home</span>
            <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </nav>

      {/* Page content */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="badge badge-primary badge-lg mb-4">
            <SparklesIcon className="size-4 mr-1" />
            Open Source
          </div>
          <h1 className="text-4xl font-black mb-2">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Project Contributors
            </span>
          </h1>
          <p className="text-base-content/50 text-sm">Who built what — frontend and backend</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card person={vinay} accent="primary" />
          <Card person={vicky} accent="secondary" />
        </div>

        {/* Footer */}
        <p className="text-center text-base-content/30 text-xs mt-10">
          Built with ❤️ by Vinay Pandey & Vicky Sahani
        </p>

      </div>
    </div>
  );
}

export default ContributorsPage;
