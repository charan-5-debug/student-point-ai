async function askQuestion() {
  const questionBox = document.querySelector("textarea");
  const question = questionBox.value.trim();

  if (!question) {
    alert("Please enter a question.");
    return;
  }

  const button = document.querySelector("button");
  button.disabled = true;
  button.textContent = "Thinking... 🤖";

  try {
    const response = await fetch("PASTE_YOUR_VERCEL_URL_HERE/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question: question
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    alert(data.answer);

  } catch (error) {
    alert("Error: " + error.message);
  }

  button.disabled = false;
  button.textContent = "✨ Ask Student Point AI";
}
