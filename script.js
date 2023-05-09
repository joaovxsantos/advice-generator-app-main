const idAdvice = document.querySelector('#id');
const message = document.querySelector('#msg');
const btn = document.querySelector('#btn');


btn.addEventListener('click', geratorAdvice)

function geratorAdvice() {
    fetch('https://api.adviceslip.com/advice').then((data) => {

        if (!data.ok) {
            throw new Error(`ERRO ${data.status}`)
        }

        return data.json()
    }).then((body) => {

        idAdvice.innerText = `ADVICE #${body.slip.id}`;
        message.innerText = `"${body.slip.advice}"`;
    }).catch(erro => console.log(erro));
}

geratorAdvice()

