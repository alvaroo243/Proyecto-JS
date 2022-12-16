export {generateFooter};


function generateFooter() {
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = `
    Pagina creada por Alvaro Gomez
    `;
    return footer;
}