(async() => {

    const data = await fetch('data.json')
        .then(response => response.json());

    document
        .querySelector(`#daily`)
        .addEventListener('click', () => populaDados("daily", data));

    document
        .querySelector(`#weekly`)
        .addEventListener('click', () => populaDados("weekly", data))

    document
        .querySelector(`#monthly`)
        .addEventListener('click', () => populaDados("monthly", data))

})();

function populaDados(nomeDoPeriodo, json) {
    setData("work", nomeDoPeriodo, json);
    setData("play", nomeDoPeriodo, json);
    setData("study", nomeDoPeriodo, json);
    setData("Exercise", nomeDoPeriodo, json);
    setData("social", nomeDoPeriodo, json);
    setData("self care", nomeDoPeriodo, json);



    tripleToggle(nomeDoPeriodo);
}

function setData(nomeAtividade = '', periodo = '', arquivoJson) {

    const arrumaPalavra = (titulo = "") => {
        return titulo.toLowerCase().replace(' ', '-')
    };

    const [atividadeEncontrada] = arquivoJson.filter(
        atividade => arrumaPalavra(atividade.title) === arrumaPalavra(nomeAtividade)
    );
    document.querySelector(`#${arrumaPalavra(nomeAtividade)}-current`).textContent = `${atividadeEncontrada.timeframes[periodo].current}hrs`;
    document.querySelector(`#${arrumaPalavra(nomeAtividade)}-previous`).textContent = `Last Week - ${atividadeEncontrada.timeframes[periodo].previous}hrs`;
}

function tripleToggle(nomeId) {
    const btnPeriods = document.querySelectorAll(".btn-period");
    btnPeriods.forEach(item => {
        if (item.id === nomeId) {
            item.classList.add("article-color");
        } else {
            item.classList.remove("article-color");
        }
    });
}