
// Navbar Icon Animation Trigger
function dropboxToggle() {
  for (let i = 1; i <= 3; i++) {
    var button = document.getElementById(`bar${i}`)
    button.classList.toggle(`opened-bar${i}`)
  }
  var dropbox = document.getElementById('dropbox')
  dropbox.classList.toggle('opened-dropbox')
}