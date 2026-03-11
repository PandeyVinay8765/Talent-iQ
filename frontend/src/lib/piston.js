// Glot.io API for free unlimited code execution
// Get your free token at: https://glot.io/account/token

const GLOT_API = "https://glot.io/api/run";
const GLOT_TOKEN = process.env.GLOT_API_TOKEN;

const LANGUAGE_CONFIG = {
  javascript: { slug: "javascript", version: "latest", filename: "main.js" },
  python:     { slug: "python",     version: "latest", filename: "main.py" },
  java:       { slug: "java",       version: "latest", filename: "Main.java" },
  cpp:        { slug: "cpp",        version: "latest", filename: "main.cpp" },
};

/**
 * @param {string} language - programming language
 * @param {string} code - source code to execute
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
  try {
    const config = LANGUAGE_CONFIG[language];

    if (!config) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await fetch(
      `${GLOT_API}/${config.slug}/${config.version}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${GLOT_TOKEN}`,
        },
        body: JSON.stringify({
          files: [
            {
              name: config.filename,
              content: code,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();

    const output = data.stdout || "";
    const stderr = data.stderr || "";

    if (stderr) {
      return {
        success: false,
        output: output,
        error: stderr,
      };
    }

    return {
      success: true,
      output: output || "No output",
    };

  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}