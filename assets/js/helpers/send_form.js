const formDOM = document.querySelector('#form');
const modalDOM = document.querySelector('#modal');
const closeButton = document.querySelector('#btn_close-modal');

const closeErrorButton = document.querySelector('#btn_close-modal_error');
const modalErrorDOM = document.querySelector('#modal_error');
const errorMessageDOM = document.querySelector('#error_message');

const emailPattern = /^[a-z0-9.%_+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

const languageToggle = document.getElementById('language-toggle'); 


function openModal() {
	modalDOM.open = true;
}

function closeModal() {
	modalDOM.open = false;
}

function openModalError(strMessage) {
	modalErrorDOM.open = true;
	errorMessageDOM.innerHTML = strMessage; // Actualiza solo el texto del error
  }
  
function closeErrorModal() {	
	modalErrorDOM.open = false;	
}

function sendEmail() {
	formDOM.addEventListener('submit', (e) => {
		let blnAlready = true;
		let strMessageError = "";
		e.preventDefault();
		const params = {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			subject: document.getElementById('subject').value,
			message: document.getElementById('message').value,
		};

		if (params.name && params.email && params.subject && params.message) {
			emailjs
				.send('service_bsxbi7w', 'template_academlo', params)
				.then(openModal());
		}
		else{
			
			if(document.getElementById('message').value===""){
				if (languageToggle.checked) {  
					strMessageError = "The information in the Message field is missing"; 
				}else
					strMessageError = "Falta la informacion del campo Mensaje"; 
				blnAlready = false;	
			}

			if(document.getElementById('subject').value===""){
				if (languageToggle.checked) {  
					strMessageError = "The information in the Subject field is missing"; 
				}else
					strMessageError = "Falta la informacion del campo Asunto"; 				
				
				blnAlready = false;	
			}			

			if(document.getElementById('email').value===""){
				if (languageToggle.checked) {  
					strMessageError = "The information in the E-Mail field is missing"; 
				}else
					strMessageError = "Falta la informacion del campo Correo Electronico"; 				
				
				blnAlready = false;	
			}else  if (!emailPattern.test(document.getElementById('email').value)) {
				if (languageToggle.checked) {  
					strMessageError = "Please, enter a valid e-mail"; 
				}else
					strMessageError = "Por favor, ingresa un correo electrónico válido."; 				
				
				blnAlready = false;
			}

			if(document.getElementById('name').value===""){		
				if (languageToggle.checked) {  
					strMessageError = "The information in the Name field is missing"; 
				}else
					strMessageError = "Falta la informacion del campo Nombre."; 							
				
				blnAlready = false;				
			}
			
			if(!blnAlready){
				openModalError(strMessageError);
				return true;
			}
		}
	});
}

closeButton.addEventListener('click', closeModal);

closeErrorButton.addEventListener('click', closeErrorModal);

export default sendEmail;
