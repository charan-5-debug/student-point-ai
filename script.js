function askQuestion() {
  const question = document.getElementById("question").value.trim();
  const result = document.getElementById("result");
  const answer = document.getElementById("answer");

  if (!question) {
    alert("Please enter a question first.");
    return;
  }

  result.style.display = "block";

  answer.innerHTML =
    "Your question has been received! 🤖<br><br>" +
    "Real AI connection will be added next.";
}
