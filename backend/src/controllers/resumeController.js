import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const buildResume = async (req, res) => {
  try {
    const {
      name, email, phone, linkedin, github, portfolio,
      summary, education, experience, skills, projects, achievements,
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const prompt = `You are a professional resume writer. Create a highly ATS-friendly resume based on the following details. Use action verbs, quantify achievements where possible, and make it professional. Use plain text only, NO markdown like ** or ##.

Name: ${name}
Email: ${email}
Phone: ${phone || ""}
LinkedIn: ${linkedin || ""}
GitHub: ${github || ""}
Portfolio: ${portfolio || ""}
Professional Summary: ${summary || ""}
Education: ${education || ""}
Work Experience: ${experience || ""}
Technical Skills: ${skills || ""}
Projects: ${projects || ""}
Achievements: ${achievements || ""}

Generate a complete ATS-friendly resume using this exact format:

${name}
${email} | ${phone || ""} | ${linkedin || ""} | ${github || ""}

PROFESSIONAL SUMMARY
[2-3 line compelling summary]

TECHNICAL SKILLS
[Organized by category: Languages, Frameworks, Tools, Databases]

WORK EXPERIENCE
[Company | Role | Dates - bullet points with action verbs]

PROJECTS
[Project Name | Tech Stack - 2-3 bullet points each]

EDUCATION
[Degree | Institution | Year | Score]

ACHIEVEMENTS
[Bullet points]`;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      max_tokens: 3000,
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ resume: response.choices[0].message.content });

  } catch (error) {
    console.error("Error in buildResume:", error.message);
    res.status(500).json({ error: "Failed to generate resume" });
  }
};