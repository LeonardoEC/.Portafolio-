class ProyectoContainer 
{
    static projectsDataPage = {
        title: "Proyectos",
        title_section_G: "Juegos",
        title_section_W: "Webs",
        game: {
            title: "Plataformer 2D",
            text: "Juego creado con Academika",
            img: "asset/resource/img/Leonardo_Phoenix_Create_an_atmospheric_2D_platformer_game_illu_3.jpg",
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
            <div class="container-proyectos-game">
                <div class="row-proyectos-top">
                    <h3 class="titulo-proyectos">${this.projectsDataPage.title_section_G}</h3>
                </div>
                <div class="row-proyectos-mid">
                    <h4 class="project-title">En construccion</h4>
                    <p class="project-text">Muy Pronto sera actualiado</p>
                    <img class="img-proyecto" src="${this.projectsDataPage.game.img}" alt="">                                                                                   
                </div>
                <div class="row-proyectos-dow">
                    <a href="" class="btn-proyectos-l">Git</a>
                    <a href="" class="btn-proyectos-r">Itch</a>
                </div>
            </div>
            
            <div class="container-proyectos-title">
                <h3>${this.projectsDataPage.title}</h3>
            </div>

            <div class="container-proyectos-web">
                <div class="row-proyectos-top">
                    <h3 class="titulo-proyectos">${this.projectsDataPage.title_section_W}</h3>
                </div>
                <div class="row-proyectos-mid">
                    <h4 class="project-title">En construccion</h4>
                    <p class="project-text">Muy Pronto sera actualiado</p>
                    <img class="img-proyecto" src="${this.projectsDataPage.game.img}" alt="">                                                                                   
                </div>
                <div class="row-proyectos-dow">
                    <a href="" class="btn-proyectos-l">Git</a>
                    <a href="" class="btn-proyectos-r">Ver</a>
                </div>
            </div>
        `;
    }

}

export default ProyectoContainer;