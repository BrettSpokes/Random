function generateName() {
  const questions = [
    "Abdi",
    "Alfi",
    "Brett",
    "Daniel",
    "Donny",
    "Kaaliyah",
    "Kayla",
    "Rene",
    "Uriel",
    "Victor",
    "Andrea",
    "Lupe",
    "Jaranesca",
    "Jesus",
    "Kadi",
    "Leslie",
    "Maximo",
    "Monce",
    "Niran",
    "Sabrina",
    "Remsey"
  ];

  // Randomly select a question
  const index = Math.floor(Math.random() * questions.length);

  document.getElementById("displayQuestion").innerHTML = "Hello, " + questions[index];
  // return questions[index];
}

// Example usage:
let thequestion = generateName();
