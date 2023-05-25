
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body")

const imagemDoBotaoLua = document.querySelector(".imagem-botao")

const imagemLogoBotao = document.querySelector(".logo")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro")
    if(modoEscuroEstaAtivo) {
        imagemDoBotaoLua.setAttribute("src", "./src/imagens-botes-pokemons-101-150/sun.png")
        imagemLogoBotao.setAttribute("src", "./src/imagens-botes-pokemons-101-150/pokeball.png")
    } else {
        imagemDoBotaoLua.setAttribute("src", "./src/imagens-botes-pokemons-101-150/moon.png")
        imagemLogoBotao.setAttribute("src", "./src/imagens-botes-pokemons-101-150/ultraball.png")
    }
});

