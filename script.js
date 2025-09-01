const luckNum = Math.floor(Math.random() * 21); //número aleatório entre 0 a 20.
const form = document.getElementById("formUserNum");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o envio do formulário
  result.textContent = ""; // Limpa a mensagem anterior
  const userNum = parseInt(document.getElementById("userNum").value);

  if (userNum === luckNum) {
    result.textContent = "Você acertou! Parabéns!";
    result.classList.add("result-correct");
  } else if (userNum > luckNum) {
    result.textContent = "O número da sorte é MENOR! 10 flexões!";
    result.classList.add("result-wrong");
  } else if (userNum < luckNum) {
    result.textContent = "O número da sorte é MAIOR! 10 flexões!";
    result.classList.add("result-wrong");
  }
  console.log("O número da sorte é " + luckNum);
});
