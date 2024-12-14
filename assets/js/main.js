import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateDateYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import fLanguajeSwitch from './helpers/idiom.js';
import showTab from './helpers/tab.js';
import showSuccessToast from './helpers/toast.js'

loader();

resetToHome();

activeMenu();

parallax();

updateDateYear();

sendEmail();

fLanguajeSwitch();   

// showSuccessToast();

// Agregar eventos de clic a los enlaces
document.querySelectorAll('.tabs').forEach(tab => {
    tab.addEventListener('click', function() {
        const tabName = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        showTab(tabName);
    });

    
});

showTab('featured');

 
const showToastOnSkillsVisible = () => {
    const skillsSection = document.getElementById('skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Check if the section is at least 50% visible
                if (entry.intersectionRatio >= 0.5) {
                    showSuccessToast();
                    // Stop observing after showing the toast
                    observer.unobserve(skillsSection);
                }
            }
        });
    }, {
        // Trigger when at least 50% of the section is visible
        threshold: 0.5
    });

    // Start observing the skills section
    observer.observe(skillsSection);
};


showToastOnSkillsVisible();