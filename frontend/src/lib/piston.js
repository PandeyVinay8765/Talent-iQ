export async function executeCode(language, code) {
  try {
    const response = await fetch("/api/code/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, code }),
    });
    return await response.json();
  } catch (error) {
    return { success: false, error: `Failed to execute code: ${error.message}` };
  }
}