class ProyectoContainer 
{
    static projectsDataPage = {
        title: "Proyectos",
        title_section_G: "Juegos",
        title_section_W: "",
        game: {
            title: "Plataformer 2D",
            text: "Juego creado con Academika",
            img: "asset/resource/img/Leonardo_Phoenix_Create_an_atmospheric_2D_platformer_game_illu_3.jpg",
            url_Git: "",                                                                                                                                                                      
            url_Itch: "",
        },
        web: {
            title: "Amazing Events",
            text: "Pagina web creada durante el bootcamp de MindHub, en donde conecte una API de eventos con una pagina web, utilizando HTML, CSS y JS.",
            img: "asset/resource/img/AE.png",
            url_Git: "https://github.com/LeonardoEC/Amazing-Events-Vivas/tree/V2",
            url_Web: "https://leonardoec.github.io/Amazing-Events-Vivas/index.html",
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
                </div>
                <div class="row-proyectos-mid">
                    <img class="img-proyecto" src="${this.projectsDataPage.web.img}" alt="">                                                                                   
                </div>
                <div class="row-proyectos-dow">
                    <a href="${this.projectsDataPage.web.url_Git}" class="btn-proyectos-l">GitHub</a>
                    <a href="${this.projectsDataPage.web.url_Web}" class="btn-proyectos-r">Visitar</a>
                </div>
            </div>
        `;
    }

    /*
                        <h2 class="titulo-proyectos">${this.projectsDataPage.title_section_W}</h2>
                        
                        <h4 class="project-title">${this.projectsDataPage.web.title}</h4>
                    <p class="project-text">${this.projectsDataPage.web.text}</p>

    */

}

export default ProyectoContainer;