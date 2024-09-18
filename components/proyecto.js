class ProyectoContainer 
{
    

    static renderProyecto() {
        return `
            <section class="container-proyectos-game">
                <h3 class="titulo-proyectos">Game</h3>
                <div>
                    <h4>Titulo</h4>
                    <p>descripcion</p>
                </div>
                <div>
                    <p>Git</p>
                    <p>Itch</p>
                </div>
            </section>
            <section class="container-proyectos-title">
                <h3>Proyectos</h3>
            </section>
            <section class="container-proyectos-web">
                <h3 class="titulo-proyectos">Web</h3>
                <div>
                    <h4>Titulo</h4>
                    <p>descripcion</p>
                </div>
                <div>
                    <p>Git</p>
                    <p>Itch</p>
                </div>
            </section>
        `;
    }

}

export default ProyectoContainer;