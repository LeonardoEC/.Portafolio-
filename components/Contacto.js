
class ContactComponent {

    static contactoDataPage = {
        title: "Contactame!!",
        text: "Gracias por visitar mi portafolio, no dudes en ponerte en contacto conmigo o dejarme un feedback a travez de mis redes sociales",
        redes: {
            linkedin: {
                url: "https://www.linkedin.com/in/leonardo-d-vivas/",
                img: "asset/resource/icon/linkedin.png"
            },
            gmail: {
                url: "LeonardoDanielAV@proton.me",
                img: "asset/resource/icon/gmail.png"
            }
        },
        titleCurriculum: "Mi curriculum",
        textCurriculum: "Tambien te invito a descargar mi curriculum, para saber aun mas sobre mi trayectoria laboral",
        curriculum:{
            url: "https://drive.proton.me/urls/JCJ8JN3E5G#5OZAOB8lOcid",
            img: "asset/resource/icon/paper.png"
        }
    }

    static sectionRed = this.contactoDataPage.redes;
    static sectionCurriculum = this.contactoDataPage.curriculum;


    static renderContactos()
    {
        return `
            <div class="row-contactame">
                <h3 class="titulo-contactame">
                    ${this.contactoDataPage.title}
                </h3>
                <p class="text-contactame">
                    ${this.contactoDataPage.text}
                </p>
            </div>
            <div>
                <a href="${this.sectionRed.linkedin.url} target="_blank"><img src="${this.sectionRed.linkedin.img}" alt="linkedin"></a>
                <a href="mailto:${this.sectionRed.gmail.url}"><img src="${this.sectionRed.gmail.img}" alt="gmail"></a>
            </div>
            <div>
                <h4 class="segundo-titulo-contactame">
                ${this.contactoDataPage.titleCurriculum}
                </h4>
                <p class="text-contactame">
                ${this.contactoDataPage.textCurriculum}
                </p>
            </div>
            <div>
                <a href="${this.sectionCurriculum.url}" target="_blank"><img src="${this.sectionCurriculum.img}" alt="curriculum"></a>
            </div>
        `;
    }
}

export default ContactComponent;