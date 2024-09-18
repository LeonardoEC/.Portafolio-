
class HeaderComponent {

  static buttonsData = {
    Home: {
      text: "Inicio",
      rout: "inicio.html",
      id: "presentation",
      icon: ""
    },
    AboutMe: {
      text: "Sobre mi",
      rout: "sobreMi.html",
      id: "sobre-mi",
      icon: ""
    },
    Projects: {
      text: "Proyectos",
      rout: "formacion.html",
      id: "proyectos",
      icon: ""
    },
    Skills: {
      text: "Habilidades",
      rout: "formacion.html",
      id: "habilidades",
      icon: ""
    },
    Contacts: {
      text: "Contacto",
      rout: "formacion.html",
      id: "contacto",
      icon: ""
    }
  }

  static buttonsData = this.buttonsData;

  static renderNavigationLinks() {
    const navigationLinks = Object.keys(HeaderComponent.buttonsData).map(buttonKey => {
      const buttonData = HeaderComponent.buttonsData[buttonKey];
      return `<a class="btn-nav" href="${buttonData.rout}">${buttonData.text}</a>`;
    }).join('');

    return `
            <nav class="container-nav">
                ${navigationLinks}
            </nav>
        `;
  }

  static renderNavigationById() {
    const navigationLinks = Object.keys(HeaderComponent.buttonsData).map(buttonKey => {
      const button = HeaderComponent.buttonsData[buttonKey];
      return `<a class="btn-nav" href="#${button.id}">${button.text}</a>`;
    }).join('');

    return `
          <nav class="container-nav">
            ${navigationLinks}
          </nav>
        `;
  }
}

export default HeaderComponent;