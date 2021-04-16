// The main elements of the tool
const input = document.querySelector('.nlp_input'),
    input_error = document.querySelector('.nlp_input-error'); 
    submit = document.querySelector('.nlp_submit');
        
// The elements of the output section
const output_agreement = document.querySelector('.nlp_output-agreement'),
      output_confidence = document.querySelector('.nlp_output-confidence'),
      output_irony = document.querySelector('.nlp_output-irony'),
      output_model = document.querySelector('.nlp_output-model'),
      output_polarity = document.querySelector('.nlp_output-polarity'),
      output_subjectivity = document.querySelector('.nlp_output-subjectivity'),
      output_loading = document.querySelector('.nlp_output-loading');

let text = '';

// Invoke API request Function on click submit
window.onload = () => {
  
    input.addEventListener('input', function(e) {
        text = e.target.value;
    })

    submit.addEventListener('click', () => {
        if (input.value == '') {
            input_error.textContent = 'You must enter text to get a result';
            input_error.classList.add('error');
        }

        else if (input.value.search(/[a-z]/gi) < 0 ) {
            console.log('you are right')
            input_error.textContent = 'You must enter text in english';
            input_error.classList.add('error');
        }
    
        else {
            input_error.classList.remove('error');
            analyze();
        }
    })
}

// Set the API request parameters
const setData = () => {
    const data = new FormData();
    data.append('key', process.env.API_KEY);
    data.append('txt', text),
    data.append('lang', 'en');

    return data;
}

// API request Function
const analyze = () => {
    output_loading.style.display = 'block';
    fetch('https://api.meaningcloud.com/sentiment-2.1', {
        method: 'POST',
        body: setData()
    }).then(response => {
        response.json().then(body => {
            output_loading.style.display = 'none';
            displyaOutput({html: output_agreement, name: 'Agreement'}, body['agreement'])
            displyaOutput({html: output_confidence, name: 'Confidence'}, body['confidence'])
            displyaOutput({html: output_irony, name: 'Irony'}, body['irony'])
            displyaOutput({html: output_model, name: 'Model'}, body['model'])
            displyaOutput({html: output_polarity, name: 'Polarity'}, scoreTag(body['score_tag']))
            displyaOutput({html: output_subjectivity, name: 'Subjectivity'}, body['subjectivity'])
        })
        .catch(error => {
            console.log(error)
        })
    })
}

// Function to display the resultes in the elements
const displyaOutput = (ele, val) => {
    ele.html.innerHTML = `<p>${ele.name}</p><p>${val.toLowerCase()}</p>`
}

// Funtion of the Score tag
const scoreTag = (val) => {
    return val == 'P+' ? 'strong positive'
        : val == 'P' ? 'positive'
        : val == 'NEU' ? 'neutral'
        : val == 'N' ? 'negative'
        : val == 'N+' ? 'strong negative'
        : 'without polarity'
}

module.exports = scoreTag;






