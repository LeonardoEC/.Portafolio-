import settingsLanguages from "../asset/data/settingsPages/settingsLanguages.js";

class InicioComponents {

    static homeMeData = settingsLanguages.sp.pagesData.Home;

    static renderInicio() {
        return `
            <div class="row-presentacion">
                <div class="col-2-top-presentacion">
                    <img class="img-presentacion" src="${this.homeMeData.img}" alt="img">
                </div>
                <div class="col-1-top-presentacion">
                    <h1 class="title-presentacion">${this.homeMeData.title}</h1>
                    <p class="text-presentacion">
                        ${this.homeMeData.text}
                    </p>
                </div>
            </div>
        `;
    }
}

export default InicioComponents;