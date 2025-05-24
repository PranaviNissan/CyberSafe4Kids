
function startQuiz() {
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = `
        <h3>Cyber Hygiene Quiz</h3>
        <p>Q1: Should you share your home address online?</p>
        <button onclick="alert('Correct! Never share personal info online.')">No</button>
        <button onclick="alert('Oops! Be careful with personal info.')">Yes</button>
    `;
}
