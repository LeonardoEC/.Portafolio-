
class InicioComponents {

    static homeDataPage= 
    {
        img:"asset/resource/img/Avatar.png",
        title: "Desarrollador de videojuegos y Desarrollador web M.E.R.N.",
        text: "Soy diseñador y desarrollador de videojuegos en unity y desarrollador web en M.E.R.N. Busco un puesto de trabajo como programador para mejorar mis conocimientos, habilidades y obtener más experiencia en el sector IT",
        github_img: "https://img.icons8.com/?size=100&id=12598&format=png&color=ffffff",
        github_link: "https://github.com/LeonardoEC",
        linkedin_img: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000",
        linkedin_link: "https://www.linkedin.com/in/leonardo-ec/",
    }

    static renderInicio() {
        return `
            <div class="row-presentacion">
                <div class="col-2-top-presentacion">
                    <img class="img-presentacion" src="${this.homeDataPage.img}" alt="img">
                </div>
                <div class="col-1-top-presentacion">
                    <h1 class="title-presentacion">${this.homeDataPage.title}</h1>
                    <p class="text-presentacion">
                        ${this.homeDataPage.text}
                    </p>
                    <div class="container-btn-presentacion">
                        <a href="${this.homeDataPage.github_link}" target="_blank"><img src="${this.homeDataPage.github_img}" ></a>
                        <a href="${this.homeDataPage.linkedin_link}" target="_blank"><img src="${this.homeDataPage.linkedin_img}" ></a>
                    </div>
                </div>
            </div>
        `;
    }
}

export default InicioComponents;