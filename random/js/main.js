const imeg = document.querySelector('.width-imeg__imeg');
const button = document.querySelector('.wrapper__btn');
const text = document.querySelector('.wrapper__paragraf');
// const urlImeg = "http://aws.random.cat/meow";
const urlQuote = "https://favqs.com/api/qotd";

// async function fetchGet() {
//     try {
//         const response = await fetch(urlImeg);
//         const data = await response.json();
//         imeg.src = data.file
//     } catch (error) {
//         console.log(error);
//     }
// }

// button.addEventListener('click', () => {
//     fetchGet();
// });

async function randomQuote() {
    try {
        const response = await fetch(urlQuote);
        const data = await response.json();
        text.innerHTML = data.file
        console.log(text.innerHTML = data);
        // console.log(response);
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', () => {
    randomQuote();
});