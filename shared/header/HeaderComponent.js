import settingsLanguages from "../../asset/data/settingsPages/settingsLanguages.js";

class HeaderComponent {
    static buttonsData = settingsLanguages.sp.buttons;

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