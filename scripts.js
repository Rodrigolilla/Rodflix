let botao_som = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")

// ligar o som na pagina 

botao_som.addEventListener("click", alternaSom)

function alternaSom(){
     video.muted = !video.muted; // inverte o estado
    atualizarBotao(); // muda visualmente se quiser
}

function atualizarBotao() {
    if (video.muted) {
        botao_som.textContent = "🔇";
    } else {
        botao_som.textContent = "🔊 ";
    }
}
// Mostrar o modal

botao.addEventListener("click", mostrar_modal)
modal.addEventListener("click", esconder_modal)

function mostrar_modal(){
    modal.style.display = "block"
}

function esconder_modal(){
    modal.style.display = "none"
}