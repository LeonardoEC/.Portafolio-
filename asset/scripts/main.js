// Importaciones compartida
import HeaderComponent from "../../shared/header/HeaderComponent.js";
import FooterComponents from "../../shared/footer/FooterComponents.js";

// Importaciones componentes
import InicioComponents from "../../components/inicio.js";
import SobreMiComponents from "../../components/sobreMi.js";
import ProyectoContainer from "../../components/proyecto.js";
import HabilidadComponent from "../../components/habilidad.js";
import ContactComponent from "../../components/Contacto.js";

// componentes compartidos
const headerContent = HeaderComponent.renderNavigationById();
const footerContent = FooterComponents.renderFooter();

// componentes individuales
const inicioContent = InicioComponents.renderInicio();
const sobreMiConntent = SobreMiComponents.renderSobreMi();
const proyectoContent = ProyectoContainer.renderProyecto();
const habilidadContent = HabilidadComponent.renderHabilidad();
const contactoContent = ContactComponent.renderContactos();

// renderizado compartido
document.getElementById("header").innerHTML = headerContent;
document.getElementById("footer").innerHTML = footerContent;

// renderizado individual
document.getElementById("presentation").innerHTML = inicioContent;
document.getElementById("sobre-mi").innerHTML = sobreMiConntent;
document.getElementById("proyectos").innerHTML = proyectoContent;
document.getElementById("habilidades").innerHTML = habilidadContent;
document.getElementById("contacto").innerHTML = contactoContent;

console.log(SobreMiComponents.achievements);
console.log(SobreMiComponents.allSkillsMap);