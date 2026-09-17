async function askQuestion() {
  const question = document.getElementById("question").value.trim();
  const result = document.getElementById("result");
  const answer = document.getElementById("answer");

  if (!question) {
    alert("Please enter a question first.");
    return;
  }

  result.style.display = "block";
  answer.innerHTML = "Thinking... 🤖";

  try {
    const response = await fetch("https://student-point-ai.vercel.app/api/ask", {
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
      throw new Error(data.error || "Something went wrong.");
    }

    answer.innerHTML = data.answer.replace(/\n/g, "<br>");

  } catch (error) {
    answer.innerHTML =
      "Sorry, something went wrong. ❌<br><br>" +
      error.message;
  }
}
