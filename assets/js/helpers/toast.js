function showSuccessToast() {

  const languageToggle = document.getElementById('language-toggle');   

  if (languageToggle.checked) {  
    toast({
      title: "¡It's time to transform your vision into reality!",
      message: "I'm here to help you turn your expectations into a functional website. ",
      type: "success",
      duration: 5000
    });      
    
  }else {

    toast({
      title: "¡Es hora de transformar tu visión en realidad!",
      message: "Estoy aquí para ayudarte a convertir tus expectativas en un sitio web funcional. ",
      type: "success",
      duration: 5000
    });

     
  }
  }



// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
const main = document.getElementById("toast");
if (main) {
const toast = document.createElement("div");

// Auto remove toast
const autoRemoveId = setTimeout(function () {
  main.removeChild(toast);
}, duration + 1000);

// Remove toast when clicked
toast.onclick = function (e) {
  if (e.target.closest(".toast__close")) {
    main.removeChild(toast);
    clearTimeout(autoRemoveId);
  }
};


const languageToggle = document.getElementById('language-toggle');   
let getInContactButton = ""

if (languageToggle.checked) {  
  getInContactButton = "Get in contact"
}else{
  getInContactButton = "Ponte en contacto"
}

const icons = {
  success: "fas fa-check-circle",
  info: "fas fa-info-circle",
  warning: "fas fa-exclamation-circle",
  error: "fas fa-exclamation-circle"
};
const icon = icons[type];
const delay = (duration / 1000).toFixed(2);

toast.classList.add("toast", `toast--${type}`);
toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                    <p class="toast__a" > <a  href="#contact" class="projects__image1" >  ${getInContactButton}  </p>
                </div>
                <div class="toast__close">
                    <i class="fas fa-times"></i>
                </div>
            `;
main.appendChild(toast);
}
}


export default showSuccessToast;