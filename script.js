let url = "https://dicio-api-ten.vercel.app/v2/";
let caixaBusca = document.getElementById("caixa__busca");
let botao = document.getElementById("botao");
let resultado = document.getElementById("container__resultado");

botao.addEventListener("click", () => {
    let palavra = caixaBusca.value;

    if (palavra === '') {
        resultado.innerHTML = `<p class="definicao">Escreva alguma palavra na busca.</p>`
    } else{
        fetch(`${url}${palavra}`)
        .then((respostaRequisicao) => respostaRequisicao.json())
        .then((data) => {
            resultado.innerHTML = `id="container__resultado">
                <h3 id="palavra">${palavra}</h3>
                <p class="definicao"><span>1º </span>${data[0].meanings[0]}</p>
                <p class="definicao"><span>2º </span>${data[0].meanings[1]}</p>`
        }).catch(() => {
            resultado.innerHTML = `<p class="definicao"><span>Não</span> foi possível encontrar a palavra!</p>`
        })
    }
})