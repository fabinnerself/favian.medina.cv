function showTab(tabName) {
    const content = document.getElementById('content');
    const template = document.getElementById(`template-${tabName}`);
    content.innerHTML = template ? template.innerHTML : '<div>Seleccione una pestaña.</div>';
    
  }


  export default showTab;