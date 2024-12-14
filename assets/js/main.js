import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateDateYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import fLanguajeSwitch from './helpers/idiom.js';
import showTab from './helpers/tab.js';

loader();

resetToHome();

activeMenu();

parallax();

updateDateYear();

sendEmail();

fLanguajeSwitch();   

// Agregar eventos de clic a los enlaces
document.querySelectorAll('.tabs').forEach(tab => {
    tab.addEventListener('click', function() {
        const tabName = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        showTab(tabName);
    });

    
});

showTab('featured');
