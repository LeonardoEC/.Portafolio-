import settingsLanguages from "../asset/data/settingsPages/settingsLanguages.js";

class InicioComponents {

    static Home= {
        img:"../foto/Final.png",
        title: "Leonardo Daniel Vivas",
        text: "Saludos y bienvenido a mi portafolio, Soy un estudiante de Desarrollo web y mi stack es M.E.R.N. Estoy en búsqueda de un puesto de trabajo como programador para mejorar mis conocimientos, habilidades y obtener más experiencia en el sector IT"
    }

    static homeMeData = settingsLanguages.sp.pagesData.Home;

    static renderInicio() {
        return `
            <div class="row-presentacion">
                <div class="col-2-top-presentacion">
                    <img class="img-presentacion" src="${this.Home.img}" alt="img">
                </div>
                <div class="col-1-top-presentacion">
                    <h1 class="title-presentacion">${this.Home.title}</h1>
                    <p class="text-presentacion">
                        ${this.Home.text}
                    </p>
                </div>
            </div>
        `;
    }
}

export default InicioComponents;