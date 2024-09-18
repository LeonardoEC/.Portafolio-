class ProyectoContainer 
{
    static projectsDataPage = {
        title: "Proyectos",
        title_section_G: "Juegos",
        title_section_W: "Webs",
        game: {
            title: "Plataformero",
            text: "Juego creado con Academika",
            img: "",
            url_Git: "",
            url_Itch: "",
        },
        web: {
            title: "Amazing Events",
            text: "Pagina web creada con MindHub",
            img: "",
            url_Git: "",
            url_Web: "",
        }
    }
    

    static renderProyecto() {
        return `
            <section class="container-proyectos-game">
                <h3 class="titulo-proyectos">${this.projectsDataPage.title_section_G}</h3>
                <div>
                    <h4>${this.projectsDataPage.game.title}</h4>
                    <p>${this.projectsDataPage.game.text}</p>
                </div>
                <div>
                    <p>Git</p>
                    <p>Itch</p>
                </div>
            </section>
            <section class="container-proyectos-title">
                <h3>${this.projectsDataPage.title}</h3>
            </section>
            <section class="container-proyectos-web">
                <h3 class="titulo-proyectos">${this.projectsDataPage.title_section_W}</h3>
                <div>
                    <h4>${this.projectsDataPage.web.title}</h4>
                    <p>${this.projectsDataPage.web.text}</p>
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