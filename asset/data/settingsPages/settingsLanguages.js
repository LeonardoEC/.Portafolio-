export default {
    sp: {
        title: "Portafolio",
        buttons: {
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
        },
        pagesData:
        {
            Home: {
                img:"../foto/Final.png",
                title: "Leonardo Daniel Vivas",
                text: "Saludos y bienvenido a mi portafolio, Soy un estudiante de Desarrollo web y mi stack es M.E.R.N. Estoy en búsqueda de un puesto de trabajo como programador para mejorar mis conocimientos, habilidades y obtener más experiencia en el sector IT"
            },
            AboutMe:
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
            },
            Projects:{
                title: "Proyectos",
                game: {
                    title: "Plataformero",
                    text: "Juego creado con Academika",
                    img: "",
                    url_Git: "",
                    url_Itch: "",
                },
                web: {
                    title: "Amazing Events",
                    text: "Pagina web creada con MindHub",
                    img: "",
                    url_Git: "",
                    url_Web: "",
                }
            },
            Skills: {
                title: "Habilidades",
                sectionGame: {
                    title: "Videojuegos",
                    title_section_GL: "Lenguajes principales",
                    languas: {
                        Cs:{
                            title:"C#",
                            description:"Este lenguaje lo voy incorporando de a poco ya que solo lo utilizo con unity de momento, aunque tambien estoy interesado en usarlo para crear software de escritorio"
                        }
                    },
                    title_section_E: "Motor",
                    engine: {
                        Unity:{
                            title:"Unity",
                            description:"Mi más reciente incorporación, aprender a usar este motor de videojuegos, sin duda me ha ayudado a expandir muchísimo mi conocimiento con la programación orientada a objeto y la importancia de tener un buen orden a la hora de llevar a cabo un proyecto"            
                        }
                    }
                },
                sectionWeb: {
                    title: "Web",
                    title_section_WL: "Lenguajes principales",
                    languas: {
                        JavaScript:{
                            title:"JavaScript",
                            description:"Este lenguaje lo voy incorporando de a poco ya que solo lo utilizo con unity de momento, aunque tambien estoy interesado en usarlo para crear software de escritorio"
                        },
                    },
                    title_section_FW: "Frameworks",
                    framewoks: {
                        React:{
                            title:"React",
                            description:"Mi framework favorito con el cual más práctico cuando poseo tiempo, lo que más me gusta es su facilidad de uso y personalización por todas sus herramientas"
                        },
                        Express:{
                            title:"Express",
                            description: "El back-end no es precisamente mi fuerte, con Express no me resulta tan complicado, ya que siento que es muy parecido a React lo cual me facilita mucho comprender como hacer las cosas."
                        }
                    }
                }

            },
            Contacts: {
                title: ""
            }

        }
    },
    eng: {
        title: "Portafolio",
        buttons: {
            Home: {
                text: "Home",
                definitiveRoute: "",
                alternativeRoute: ""
            },
            AboutMe: {
                text: "About me",
                definitiveRoute: "",
                alternativeRoute: ""
            },
            Projects: {
                text: "Projects",
                definitiveRoute: "",
                alternativeRoute: ""
            },
            Skills: {
                text: "Skills",
                definitiveRoute: "",
                alternativeRoute: ""
            },
            Contacts: {
                text: "Contacts",
                definitiveRoute: "",
                alternativeRoute: ""
            }
        }
    }
}