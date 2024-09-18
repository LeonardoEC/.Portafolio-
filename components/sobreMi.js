

class SobreMiComponents {

  static aboutMeDataPage =
    {
      title: "Sobre mi",
      sectionOne: {
        skills:
        {
          title: "Mi perfil",
          text: "Como técnico superior en desarrollo web y aplicaciones móviles, he adquirido habilidades sólidas en programación y diseño de interfaces. Sin embargo, mi pasión por los videojuegos me ha llevado a especializarme en este ámbito. Me encanta la programación y disfruto del proceso de transformar ideas en experiencias interactivas. Soy un aprendiz autodidacta y estoy siempre dispuesto a asumir nuevos desafíos, ya sea aprendiendo nuevas tecnologías o resolviendo problemas complejos."
        },
        softSkills: {
          title: "Habilidades blandas",
          text: "Soy una persona responsable y comprometida con mis tareas. Me caracterizo por mi honestidad y mi ética de trabajo. No tengo miedo de enfrentar nuevos desafíos y siempre estoy dispuesto a aprender cosas nuevas. Además, soy un gran trabajador en equipo y me adapto fácilmente a diferentes situaciones. Me gusta ayudar a mis compañeros y creo que la colaboración es clave para alcanzar el éxito."
        },
      },
      sectionTwo: {
        achievements: {
          medals: {
            MinHub:
            {
              frontend:
              {
                title: "FrondEnd",
                img: "https://images.credly.com/size/680x680/images/db619416-19a0-4c5b-b4f7-7e44d097f392/image.png",
                url: "https://www.credly.com/badges/cb76c166-2774-45e9-97bf-ea9b66453d5a/public_url"
              },
              mern:
              {
                title: "MERN",
                img: "https://images.credly.com/size/680x680/images/be67019e-9d37-432b-bc29-18cdcb85917b/image.png",
                url: "https://www.credly.com/badges/f619fdef-d01c-4820-bc0f-af7f70fb2840/public_url"
              }
            },
            GitHub:
            {
              formacion:
              {
                title: "GitHub",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/200px-Google_Drive_icon_%282020%29.svg.png",
                url: "https://drive.google.com/drive/folders/1C_Ujm3LAD61hIDgvLXkAKcprumt_yEhe"
              }
            },
            General:
            {
              formacion:
              {
                title: "Certificados Academicos",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/200px-Google_Drive_icon_%282020%29.svg.png",
                url: "https://drive.google.com/drive/folders/1C_Ujm3LAD61hIDgvLXkAKcprumt_yEhe"
              }
            },
          }
        }
      }
    }


  static aboutMeData = aboutMeDataPage;


  static sectionOne = aboutMeDataPage.sectionOne;
  static sectionTwo = aboutMeDataPage.sectionTwo;


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