let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botao => {
    botao.addEventListener("click", )
})

function guardarNota(evento){
    let nota = evento.target.innertext
    localStorage.setItem("nota", nota)
}