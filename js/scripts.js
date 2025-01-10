// Exemplo: Validação simples no login
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio do formulário
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "" || password === "") {
      alert("Preencha todos os campos!");
    } else {
      alert("Login realizado com sucesso!");
    }
  });
  
  