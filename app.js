
function CalcularProbabilidade() {
    let result = document.querySelector('#result')
    let X = document.querySelector('#X')
    let Y = document.querySelector('#Y')
    let percentCalc = document.querySelector('#percentCalc')
    //Coletar valores do inputs
    const valores = {
        Favoravel: document.getElementById('Favoravel').value,
        total: document.getElementById('total').value
    }


    //trasnformalos em numeros
    total = parseFloat(valores.total)
    Favoravel = parseFloat(valores.Favoravel)



    let P = (Favoravel / total);

    let calcPercent = (P * 100);

    X.innerHTML = Favoravel
    Y.innerHTML = total

    percentCalc.innerHTML = `${P} x 100`;

    result.innerHTML = (`= ${calcPercent}%`);
}

