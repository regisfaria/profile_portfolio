const modalOverlay = document.querySelector('.modal-overlay');
const skills = document.querySelectorAll('.skill');

for (let skill of skills) {
  skill.addEventListener("click", function(){
    const skillDescription = skill.querySelector('.skill-description');
    const toAppend = skillDescription.cloneNode(true);

    const modalContent = document.getElementById('modal-content');

    modalContent.appendChild(toAppend).classList.add('active');
    modalOverlay.classList.add('active');
  });
}

document.querySelector('.close-modal').addEventListener('click', function(){
  const modalContent = document.getElementById('modal-content');
  
  modalOverlay.classList.remove('active');
  modalContent.removeChild(modalContent.firstElementChild);
});
