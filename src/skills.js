const modalOverlay = document.querySelector('.modal-overlay');
const skills = document.querySelectorAll('.skill');

for (let skill of skills) {
  skill.addEventListener("click", function(){
    modalOverlay.classList.add('active');
    const skillDescription = skill.querySelector('.skill-description');
    modalOverlay.querySelector('.modal-content').appendChild(skillDescription);
  });
}

document.querySelector('.close-modal').addEventListener('click', function(){
  modalOverlay.removeChild(modalOverlay.childNodes[0]);
  modalOverlay.classList.remove('active');
});
