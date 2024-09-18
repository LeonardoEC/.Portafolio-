import settingsLanguages from "../../asset/data/settingsPages/settingsLanguages.js";


class SobreMiComponents {


    static aboutMeData = settingsLanguages.sp.pagesData.AboutMe;


    static sectionOne = settingsLanguages.sp.pagesData.AboutMe.sectionOne;
    static sectionTwo = settingsLanguages.sp.pagesData.AboutMe.sectionTwo;


    static allSkillsMap = Object.entries(this.sectionOne).map(([key, value]) => {
        return `
          <div class="gradiant-border">
            <div class="card-sobre-mi">
              <h3 class="card-title-sobre-mi">${value.title}</h3>
              <p class="card-text-sobre-mi">${value.text}</p>
            </div>
          </div>
        `;
    }).join('');

    static achievements = Object.entries(this.sectionTwo.achievements.medals).map(([platform, medals]) => {
        return `
          <div class="card-logros">
            <h2>${platform}</h2>
            <div class="card-data-logros">
              ${Object.values(medals).map(medal => `
                <div>
                  <h3>${medal.title}</h3>
                  <a href="${medal.url}"><img class="img-logros" src="${medal.img}" alt=""></a>
                </div>
              `).join('')}  
              </div>
          </div>
        `;
    }).join('');



    static renderSobreMi() {

        return `
                    <section class="title-sobre-mi">
                        <h2 class="gradient-text">${this.aboutMeData.title}</h2>
                    </section>
                    <div class="row-sobre-mi">
                        ${this.allSkillsMap}
                    </div>
                    <div class="row-sobre-mi">
                        <div class="gradiant-border-logros">
                            <div class="container-card-data-logros">
                              <div>
                                <h1>Trayectoria academica</h1>
                              </div>
                              <div class="container-card-data-medallas">
                                ${this.achievements}
                              </div>
                            </div>
                        </div>
                    </div>
                `;

    }
}

export default SobreMiComponents;