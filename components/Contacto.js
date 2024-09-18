
class ContactComponent {


    static renderContactos()
    {
        return `
                    <div class="row-contactame">
                <h3 class="titulo-contactame">
                    Contactame!!
                </h3>
                <p class="text-contactame">
                    Gracias por visitar mi portafolio, no dudes en ponerte en contacto conmigo o dejarme un feedback a travez de mis redes sociales
                </p>
            </div>
            <div>
                <a href=""><img src="../asset/resource/icon/linkedin.png" alt="linkedin"></a>
                <a href=""><img src="../asset/resource/icon/gmail.png" alt="gmail"></a>
            </div>
            <div>
                <h4 class="segundo-titulo-contactame">Mi curriculum</h4>
                <p class="text-contactame">
                    Tambien te invito a descargar mi curriculum, para saber aun mas sobre mi trayectoria laboral
                </p>
            </div>
            <div>
                <a href=""><img src="../asset/resource/icon/paper.png" alt="curriculum"></a>
            </div>
        `;
    }
}

export default ContactComponent;