export {generateMenu};
    
function generateMenu() {
    let menuTemplate = document.createElement('div');
    menuTemplate.id = 'menu';
    menuTemplate.innerHTML = `<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/">Inicio</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/buscar">Buscar</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/login">Login</a>
        </li>
        </ul>
    </div>
    </div>
    </nav>
    `;
    return menuTemplate;    
}