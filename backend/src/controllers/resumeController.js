import { useState } from "react";
import { useNavigate } from "react-router";
import {
  FileTextIcon,
  DownloadIcon,
  SparklesIcon,
  ArrowLeftIcon,
  UserIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  CodeIcon,
  TrophyIcon,
  FolderIcon,
  Loader2Icon,
  CheckCircleIcon,
} from "lucide-react";
import Navbar from "../components/Navbar";
import axios from "../lib/axios";
import toast from "react-hot-toast";

const STEPS = [
  { id: 1, label: "Personal", icon: UserIcon },
  { id: 2, label: "Education", icon: GraduationCapIcon },
  { id: 3, label: "Experience", icon: BriefcaseIcon },
  { id: 4, label: "Skills", icon: CodeIcon },
  { id: 5, label: "Projects", icon: FolderIcon },
  { id: 6, label: "Achievements", icon: TrophyIcon },
];

function ResumeBuilderPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [generatedResume, setGeneratedResume] = useState("");
  const [downloadingPdf, setDownloadingPdf] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    portfolio: "",
    summary: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
    achievements: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep === 1 && (!form.name || !form.email)) {
      toast.error("Name and Email are required!");
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/resume/build", form);
      setGeneratedResume(data.resume);
      setCurrentStep(7); // result step
      toast.success("Resume generated successfully!");
    } catch (error) {
      toast.error("Failed to generate resume. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    setDownloadingPdf(true);
    try {
      // Use browser's print to PDF functionality
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${form.name} - Resume</title>
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body {
                font-family: 'Arial', sans-serif;
                font-size: 11px;
                line-height: 1.5;
                color: #1a1a1a;
                padding: 30px 40px;
                max-width: 800px;
                margin: 0 auto;
              }
              pre {
                white-space: pre-wrap;
                word-wrap: break-word;
                font-family: 'Arial', sans-serif;
                font-size: 11px;
                line-height: 1.6;
              }
              @media print {
                body { padding: 15px 20px; }
                @page { margin: 0.5cm; size: A4; }
              }
            </style>
          </head>
          <body>
            <pre>${generatedResume}</pre>
            <script>
              window.onload = function() {
                window.print();
                window.close();
              }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
      toast.success("Opening PDF download...");
    } catch (error) {
      toast.error("Failed to download PDF");
    } finally {
      setDownloadingPdf(false);
    }
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([generatedResume], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${form.name.replace(/\s+/g, "_")}_Resume.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Resume downloaded!");
  };

  const handleReset = () => {
    setGeneratedResume("");
    setCurrentStep(1);
    setForm({
      name: "", email: "", phone: "", linkedin: "",
      github: "", portfolio: "", summary: "",
      education: "", experience: "", skills: "",
      projects: "", achievements: "",
    });
  };

  return (
    <div className="min-h-screen bg-base-300">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="btn btn-ghost btn-sm gap-2"
          >
            <ArrowLeftIcon className="size-4" />
            Back
          </button>
          <div>
            <h1 className="text-3xl font-black flex items-center gap-2">
              <SparklesIcon className="size-7 text-primary" />
              AI Resume Builder
            </h1>
            <p className="text-base-content/60 text-sm mt-1">
              Fill in your details and AI will generate an ATS-friendly resume
            </p>
          </div>
        </div>

        {/* Result Screen */}
        {currentStep === 7 ? (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="size-6 text-success" />
                  <h2 className="text-xl font-bold">Resume Generated!</h2>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleDownloadPDF}
                    disabled={downloadingPdf}
                    className="btn btn-primary btn-sm gap-2"
                  >
                    {downloadingPdf ? (
                      <Loader2Icon className="size-4 animate-spin" />
                    ) : (
                      <DownloadIcon className="size-4" />
                    )}
                    Download PDF
                  </button>
                  <button
                    onClick={handleDownloadTxt}
                    className="btn btn-outline btn-sm gap-2"
                  >
                    <FileTextIcon className="size-4" />
                    Download TXT
                  </button>
                  <button onClick={handleReset} className="btn btn-ghost btn-sm">
                    Build New
                  </button>
                </div>
              </div>

              {/* Resume Preview */}
              <div className="bg-white rounded-lg p-6 shadow-inner border border-base-200">
                <pre className="whitespace-pre-wrap text-gray-800 text-xs leading-relaxed font-sans">
                  {generatedResume}
                </pre>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isCompleted = currentStep > step.id;
                const isActive = currentStep === step.id;
                return (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className={`size-10 rounded-full flex items-center justify-center border-2 transition-all ${
                          isCompleted
                            ? "bg-success border-success text-white"
                            : isActive
                            ? "bg-primary border-primary text-white"
                            : "bg-base-100 border-base-300 text-base-content/40"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircleIcon className="size-5" />
                        ) : (
                          <Icon className="size-4" />
                        )}
                      </div>
                      <span
                        className={`text-xs font-medium hidden sm:block ${
                          isActive ? "text-primary" : "text-base-content/50"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    {idx < STEPS.length - 1 && (
                      <div
                        className={`h-0.5 w-8 sm:w-16 mx-1 transition-all ${
                          currentStep > step.id ? "bg-success" : "bg-base-300"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Form Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">

                {/* Step 1 - Personal Info */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <UserIcon className="size-5 text-primary" />
                      Personal Information
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label"><span className="label-text font-medium">Full Name *</span></label>
                        <input name="name" value={form.name} onChange={handleChange}
                          placeholder="e.g. Vinay Pandey"
                          className="input input-bordered w-full" />
                      </div>
                      <div className="form-control">
                        <label className="label"><span className="label-text font-medium">Email *</span></label>
                        <input name="email" value={form.email} onChange={handleChange}
                          placeholder="e.g. vinay@gmail.com"
                          className="input input-bordered w-full" />
                      </div>
                      <div className="form-control">
                        <label className="label"><span className="label-text font-medium">Phone</span></label>
                        <input name="phone" value={form.phone} onChange={handleChange}
                          placeholder="e.g. +91-9532205639"
                          className="input input-bordered w-full" />
                      </div>
                      <div className="form-control">
                        <label className="label"><span className="label-text font-medium">LinkedIn</span></label>
                        <input name="linkedin" value={form.linkedin} onChange={handleChange}
                          placeholder="linkedin.com/in/yourname"
                          className="input input-bordered w-full" />
                      </div>
                      <div className="form-control">
                        <label className="label"><span className="label-text font-medium">GitHub</span></label>
                        <input name="github" value={form.github} onChange={handleChange}
                          placeholder="github.com/yourname"
                          className="input input-bordered w-full" />
                      </div>
                      <div className="form-control">
                        <label className="label"><span className="label-text font-medium">Portfolio</span></label>
                        <input name="portfolio" value={form.portfolio} onChange={handleChange}
                          placeholder="yourportfolio.com"
                          className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="form-control">
                      <label className="label"><span className="label-text font-medium">Professional Summary</span></label>
                      <textarea name="summary" value={form.summary} onChange={handleChange}
                        rows={3}
                        placeholder="Brief description of your professional background and goals..."
                        className="textarea textarea-bordered w-full resize-none" />
                    </div>
                  </div>
                )}

                {/* Step 2 - Education */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <GraduationCapIcon className="size-5 text-primary" />
                      Education
                    </h2>
                    <p className="text-sm text-base-content/60">
                      Add your education details. Include degree, institution, year, and GPA/percentage.
                    </p>
                    <textarea name="education" value={form.education} onChange={handleChange}
                      rows={8}
                      placeholder={`Example:
B.Tech in Electrical Engineering
Institute of Engineering and Technology, Lucknow
Aug 2022 - June 2026

Senior Secondary (Class XII)
Shree Mahaprabhu Public School, Prayagraj
Completed: 2021 | Percentage: 93.6%

Secondary (Class X)
Shree Mahaprabhu Public School, Prayagraj
Completed: 2019 | Percentage: 89.4%`}
                      className="textarea textarea-bordered w-full resize-none text-sm" />
                  </div>
                )}

                {/* Step 3 - Experience */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <BriefcaseIcon className="size-5 text-primary" />
                      Work Experience
                    </h2>
                    <p className="text-sm text-base-content/60">
                      Add internships, jobs, or freelance work. Leave blank if you are a fresher.
                    </p>
                    <textarea name="experience" value={form.experience} onChange={handleChange}
                      rows={10}
                      placeholder={`Example:
Software Developer Intern
HashedBit Innovations Pvt Ltd | Remote
Feb 2026 - Present
- Collaborating with engineering team to design and deploy scalable software solutions
- Participating in full SDLC, focusing on debugging and code optimization
- Implementing modern web technologies to improve application performance`}
                      className="textarea textarea-bordered w-full resize-none text-sm" />
                  </div>
                )}

                {/* Step 4 - Skills */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <CodeIcon className="size-5 text-primary" />
                      Technical Skills
                    </h2>
                    <p className="text-sm text-base-content/60">
                      List your skills. AI will organize them into categories automatically.
                    </p>
                    <textarea name="skills" value={form.skills} onChange={handleChange}
                      rows={8}
                      placeholder={`Example:
Languages: C++, JavaScript (ES6+), SQL, HTML5, CSS3
Frameworks: React.js, Node.js, Express.js, Tailwind CSS
Databases: MongoDB, MySQL
Tools: Git, GitHub, VS Code, Postman
CS Fundamentals: DSA, OOP, DBMS, OS, Computer Networks`}
                      className="textarea textarea-bordered w-full resize-none text-sm" />
                  </div>
                )}

                {/* Step 5 - Projects */}
                {currentStep === 5 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <FolderIcon className="size-5 text-primary" />
                      Projects
                    </h2>
                    <p className="text-sm text-base-content/60">
                      Add your key projects with tech stack and what you built.
                    </p>
                    <textarea name="projects" value={form.projects} onChange={handleChange}
                      rows={10}
                      placeholder={`Example:
Chatify - Real-Time Chat Application
Tech: React, Node.js, Express, MongoDB, Socket.IO, JWT
- Built full-stack real-time messaging app with AI assistant powered by Groq API
- Implemented Socket.IO for real-time communication and online presence tracking
- Integrated JWT authentication and Zustand for global state management
Live: chatify-o2yw.onrender.com | GitHub: github.com/PandeyVinay8765/ChatiFy

Talent IQ - Live Coding Platform
Tech: React, Node.js, MongoDB, Clerk, Stream, Inngest
- Developed collaborative coding platform with real-time video and chat
- Integrated live code editor with multiple language support`}
                      className="textarea textarea-bordered w-full resize-none text-sm" />
                  </div>
                )}

                {/* Step 6 - Achievements */}
                {currentStep === 6 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <TrophyIcon className="size-5 text-primary" />
                      Achievements & Certifications
                    </h2>
                    <p className="text-sm text-base-content/60">
                      Add competitive programming ratings, certifications, awards, or social initiatives.
                    </p>
                    <textarea name="achievements" value={form.achievements} onChange={handleChange}
                      rows={8}
                      placeholder={`Example:
- TCS CodeVita Season 13 - Cleared Round 1 (2025)
- Codeforces Pupil - Peak rating 1310+
- CodeChef 3-Star - Maximum rating 1620+
- Muskan Initiative - Volunteer to donate clothing to underprivileged students
- Parmath College Society - Provided educational support to underprivileged students`}
                      className="textarea textarea-bordered w-full resize-none text-sm" />
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6 pt-4 border-t border-base-200">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="btn btn-ghost gap-2"
                  >
                    <ArrowLeftIcon className="size-4" />
                    Back
                  </button>

                  {currentStep < STEPS.length ? (
                    <button onClick={handleNext} className="btn btn-primary gap-2">
                      Next
                      <ArrowLeftIcon className="size-4 rotate-180" />
                    </button>
                  ) : (
                    <button
                      onClick={handleGenerate}
                      disabled={loading}
                      className="btn btn-primary gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2Icon className="size-4 animate-spin" />
                          Generating Resume...
                        </>
                      ) : (
                        <>
                          <SparklesIcon className="size-4" />
                          Generate Resume with AI
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ResumeBuilderPage;