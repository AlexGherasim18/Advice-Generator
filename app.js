const advice = new HTTPRequest();
const ui = new UI();
const button = document.getElementById('get-advice');


document.addEventListener('DOMContentLoaded', getData);

button.addEventListener('click', (e) => {
  getData();
  
  
  e.preventDefault();
})

function getData() {
  advice.getData()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

