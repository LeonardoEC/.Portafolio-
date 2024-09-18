import settingsLanguages from "../asset/data/settingsPages/settingsLanguages.js";

class HabilidadComponent {

    static habilidadesData = settingsLanguages.sp.pagesData.Skills;

    static sectionGame = settingsLanguages.sp.pagesData.Skills.sectionGame;
    static sectionWeb = settingsLanguages.sp.pagesData.Skills.sectionWeb;

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


/*


                    <section class="cont-section-card">
                        <h2 class="title-section-for">Lenguajes principales</h2>
                        <div class="cont-card-for">
                            <article class="card-for">
                                <h4 class="title-card-for">C#</h4>
                                <div class="card-for-center">
                                    <p class="desc-card-for">
                                        Este lenguaje lo voy incorporando de a poco ya que solo lo utilizo con unity de
                                        momento, aunque tambien estoy interesado en usarlo para crear software de
                                        escritorio
                                    </p>
                                </div>
                            </article>
                        </div>
                    </section>


*/