document.addEventListener("DOMContentLoaded", function () {
    const skillLevels = document.querySelectorAll('.skill-level');
  
    skillLevels.forEach(skill => {
      const level = skill.getAttribute('data-level');
      const color = skill.getAttribute('data-color');
      skill.style.width = level + '%';
      skill.style.backgroundColor = color;
  
      // Add shiny effect
      skill.innerHTML = `<div class="shiny-overlay"></div>`;
    });
  });