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


// api = [
//     "The future of this boy is cloudy.", 
//     "Fear will lead to the dark side. Fear breeds anger; anger breeds hatred; hatred is the key to suffering. I feel a strong fear in you.",
//     "Now be brave and don't look back. Do not look back.",
//     "You can't stop change, just like you can't stop the sunrise.",
//     "All the problems in the universe come from the fact that no one helps anyone.",
//     "You must follow me now, okay? Mine warn you. Gungans do not like strangers. Don't expect a warm welcome.",
//     "You were right about one thing, Master: the negotiations were short lived.",
//     "Attention controls reality.",
//     "There will always be more fish.",
//     "Focus on the moment. Feel, don't think. Use your instincts.",
//     "The ability to speak is not a sign of intelligence."
// ];

// let generator = () => {
//     let json = JSON.stringify(api);
//     let newJSON = JSON.parse(json);
//     let rand = Math.floor(Math.random() * newJSON.length);
//     let testQuote = document.querySelector('.test')
//     testQuote.textContent = newJSON[rand]
//     return newJSON[rand]
// }

// button.addEventListener('click', () => {
//     generator();
// });