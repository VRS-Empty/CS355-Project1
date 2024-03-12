function openForm(){
  document.getElementById("myForm").style.display="block";
}
//function to close the popup
function closeForm(){
  document.getElementById("myForm").style.display="none";
}

const form = document.getElementById("radioForm");

window.addEventListener("submit", (event) => {
  const selectedRadio = document.querySelector('input[name="plan"]:checked');
  if (!selectedRadio) {
    event.preventDefault(); // Prevent submission
    alert("Please select an option."); 
  }
});

//Sticky nav bar
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}






