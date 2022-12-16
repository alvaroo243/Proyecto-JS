export {generateCard};

function generateCard(cabecera, titulo, texto, pie) {
    let cardTemplate = document.createElement('div');
    cardTemplate.classList.add('card');
    cardTemplate.innerHTML = `<div class="card text-center">
    <div class="card-header">
      `+cabecera+`
    </div>
    <div class="card-body">
      <h5 class="card-title">`+titulo+`</h5>
      <p class="card-text">`+texto+`</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
      `+pie+`
    </div>
    </div>`;
    return cardTemplate;
}