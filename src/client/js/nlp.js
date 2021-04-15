const input = document.querySelector('.nlp-text'),
      submit = document.querySelector('.nlp-submit'),
      output = document.querySelector('.nlp-output');
let text = '';

// Update TEXT variable on typing 
input.addEventListener('input', function(e) {
    text = e.target.value;
})

const setData = () => {
    const data = new FormData();
    data.append('key', process.env.API_KEY);
    data.append('txt', text),
    data.append('lang', 'en');

    return data;
}

const analyze = () => {
    fetch('https://api.meaningcloud.com/sentiment-2.1', {
        method: 'POST',
        body: setData()
    }).then(response => {
        response.json().then(res => {
            console.log(res)
        })
})}

// Call HttpRequest Function on click submit
submit.addEventListener('click', analyze)



