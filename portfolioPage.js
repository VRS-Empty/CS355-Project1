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

function openForm(){
    document.getElementById("myForm").style.display="block";
  }
  //function to close the popup
  function closeForm(){
    document.getElementById("myForm").style.display="none";
  }
//JS for sliding cards
  const panels = document.querySelectorAll('.panel')

  panels.forEach(panel => {
      panel.addEventListener('click', () => {
          removeActiveClasses()
          panel.classList.add('active')
      })
  })
  
  function removeActiveClasses() {
      panels.forEach(panel => {
          panel.classList.remove('active')
      })
  }