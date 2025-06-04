
function verificarLogin() {
    const nome = document.getElementById("nome").value.toLowerCase().trim();
    const senha = document.getElementById("senha").value.trim();
    const msgErro = document.getElementById("mensagemErro");

    if (nome === "jully" && senha === "1206")
    {
        window.location.href = "carta.html";
    } else {
        msgErro.textContent = "ERRO... tenta de novo, minha nenezinha"
    }
} 