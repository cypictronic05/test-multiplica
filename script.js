let score = 0;
let num1, num2;

// Función para generar una nueva pregunta
function generateQuestion() {
    num1 = Math.floor(Math.random() * 9) + 1; // Número entre 1 y 9
    num2 = Math.floor(Math.random() * 9) + 1; // Número entre 1 y 9
    document.getElementById('question').textContent = `Pregunta: ¿Cuánto es ${num1} x ${num2}?`;
}

// Función para verificar la respuesta del jugador
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = num1 * num2;

    if (userAnswer === correctAnswer) {
        score += 1; // Gana 1 punto
    } else {
        score -= 2; // Pierde 2 puntos
    }

    document.getElementById('score').textContent = `Puntos: ${score}`;
    document.getElementById('answer').value = ''; // Limpiar el input
    generateQuestion(); // Generar una nueva pregunta
}

// Inicializa el juego con la primera pregunta
generateQuestion();
