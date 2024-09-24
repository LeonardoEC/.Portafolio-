class HabilidadComponent {

    static tecnologisDataPage= {
        title: "Habilidades",
        sectionGame: {
            title: "Videojuegos",
            title_section_GL: "Lenguajes principales",
            languas: {
                Cs:{
                    title:"C#",
                    description:"Este lenguaje lo voy incorporando de a poco ya que solo lo utilizo con unity de momento, aunque tambien estoy interesado en usarlo para crear software de escritorio"
                }
            },
            title_section_E: "Motor",
            engine: {
                Unity:{
                    title:"Unity",
                    description:"Mi más reciente incorporación, aprender a usar este motor de videojuegos, sin duda me ha ayudado a expandir muchísimo mi conocimiento con la programación orientada a objeto y la importancia de tener un buen orden a la hora de llevar a cabo un proyecto"            
                }
            }
        },
        sectionWeb: {
            title: "Web",
            title_section_WL: "Lenguajes principales",
            languas: {
                JavaScript:{
                    title:"JavaScript",
                    description:"Este lenguaje lo dedico principalmente para todo lo relacionado con la web ya sea tanto en el frontend como en el backend"
                },
            },
            title_section_FW: "Frameworks",
            framewoks: {
                React:{
                    title:"React",
                    description:"Mi framework favorito con el cual más práctico cuando poseo tiempo, lo que más me gusta es su facilidad de uso y personalización por todas sus herramientas"
                },
                Express:{
                    title:"Express",
                    description: "El back-end no es precisamente mi fuerte, con Express no me resulta tan complicado, ya que siento que es muy parecido a React lo cual me facilita mucho comprender como hacer las cosas."
                }
            }
        }
    }

    static habilidadesData = this.tecnologisDataPage;

    static sectionGame = this.tecnologisDataPage.sectionGame;
    static sectionWeb = this.tecnologisDataPage.sectionWeb;

    static secGameLanguas = Object.entries(this.sectionGame.languas).map(([language, data]) => {
        return `
                    <article class="card-for">
                        <h4 class="title-card-for">${data.title}</h4>
                        <div class="card-for-center">
                            <p class="desc-card-for">${data.description}</p>
                        </div>
                    </article>
        `;
    }).join('');

    static secGameEngine = Object.entries(this.sectionGame.engine).map(([language, data]) => {
        return `

                    <article class="card-for">
                        <h4 class="title-card-for">${data.title}</h4>
                        <div class="card-for-center">
                            <p class="desc-card-for">${data.description}</p>
                        </div>
                    </article>

        `;
    }).join('');

    static secWebLangua = Object.entries(this.sectionWeb.languas).map(([language, data]) => {
        return `
                
                    <article class="card-for">
                        <h4 class="title-card-for">${data.title}</h4>
                        <div class="card-for-center">
                            <p class="desc-card-for">${data.description}</p>
                        </div>
                    </article>
                
        `;
    }).join('');

    static secWebFramewoks = Object.entries(this.sectionWeb.framewoks).map(([language, data]) => {
        return `
                    <article class="card-for">
                        <h4 class="title-card-for">${data.title}</h4>
                        <div class="card-for-center">
                            <p class="desc-card-for">${data.description}</p>
                        </div>
                    </article>

        `;
    }).join('');



    static renderHabilidad() {
        return `
            <h3 class="habilidades-title gradient-text">${this.habilidadesData.title}</h3>
            <div class="container-habilidades">

                <section class="sec-game-habilidades">
                    <h4 class="titulo-habilidades">${this.sectionGame.title}</h4>
                    <hr>

                    <section class="cont-section-card">
                    <h2 class="title-section-for">${this.sectionGame.title_section_GL}</h2>
                    <div class="cont-card-for">
                        ${this.secGameLanguas}
                    </div>
                </section>

                <hr>

                <section class="cont-section-card">
                        <h2 class="title-section-for">${this.sectionGame.title_section_E}</h2>
                        <div class="cont-card-for">
                            ${this.secGameEngine}
                        </div>
                    </section>
                </section>


                <section class="sec-web-habilidades">
                    <h4 class="titulo-habilidades">${this.sectionWeb.title}</h4>
                    <hr>
                    <section class="cont-section-card">
                        <h2 class="title-section-for">${this.sectionWeb.title_section_WL}</h2>
                        <div class="cont-card-for">
                            ${this.secWebLangua}
                        </div>
                    </section>
                    <hr>

                    <section class="cont-section-card">
                        <h2 class="title-section-for">${this.sectionWeb.title_section_FW}</h2>
                        <div class="cont-card-for">
                            ${this.secWebFramewoks}
                        </div>
                    </section>
                    
                </section>
            </div>
        </div>
    `;
    }
}

export default HabilidadComponent;

