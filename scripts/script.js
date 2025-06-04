
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

const textoCarta = "Hoje o mundo fica mais bonito porque é o dia que você chegou nele. E eu tenho a sorte de estar aqui, do seu lado, pra comemorar mais um ano da sua vida. Você é tudo pra mim. Minha paz, meu abrigo, minha pessoinha favorita. É no seu sorriso que eu encontro força nos dias difíceis, e no seu abraço que o mundo inteiro faz sentido. Amar você é leve, é intenso, é real. E eu agradeço todos os dias por ter cruzado o teu caminho. Espero que seu dia seja tão lindo quanto o que você faz comigo todos os dias. Quero estar aqui pra te ver crescer, realizar teus sonhos e viver cada pedacinho da vida com você. Te amo com tudo que sou. Feliz vida, meu amor. Estou aqui pra sempre com você.";

const elementoTexto = document.getElementById("texto");
    let i = 0;

function escrever() {
     if (i < textoCarta.length) {
    elementoTexto.textContent += textoCarta.charAt(i);
    i++;
    setTimeout(escrever, 40); // 
    }
}
    window.onload = escrever;