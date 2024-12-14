function fLanguajeSwitch() {
    
        
    const languageToggle = document.getElementById('language-toggle');          
    //console.log(languageToggle);

    if (languageToggle) {            
        languageToggle.addEventListener('change', function(event) {
            
            if (languageToggle.checked) {                
                window.location.href = 'index_en.html';
            } else {
                window.location.href = 'index.html';
            }               
        });
    }    
}

export default fLanguajeSwitch;