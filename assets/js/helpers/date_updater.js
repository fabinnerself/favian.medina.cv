function updateDateYear() {
	const currentYear = new Date().getFullYear();

	const copyrightElement = document.querySelector('.footer__copy');

	const languageToggle = document.getElementById('language-toggle');          
    //console.log(languageToggle);

    if (languageToggle) {                    
            
            if (languageToggle.checked) {                 
                copyrightElement.textContent = `© ${currentYear}, All rights reserved`;
            } else {
                copyrightElement.textContent = `© ${currentYear}, Todos los derechos reservados`;
            }               
        
    } 

	
}

export default updateDateYear;
