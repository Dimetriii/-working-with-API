const button = document.querySelector('.wrapper__btn');
const imeg = document.querySelector('.width-imeg__imeg');
const url = "https://favqs.com/api/qotd";
const urlImeg = "http://aws.random.cat/meow";

async function randomQuote() {
    // Quote
    const resFirst = await fetch(url);
    const dataFirst = await resFirst.json();
    let paragraph = document.querySelector('p');
    paragraph.textContent = dataFirst.quote.body;
    // Imeg
    const resSecond = await fetch(urlImeg);
    const dataSecond = await resSecond.json();
    imeg.src = dataSecond.file;
}

button.addEventListener('click', () => {
    randomQuote();
});