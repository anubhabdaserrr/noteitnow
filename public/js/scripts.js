const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

//modal

// Get the modal
var modal = document.getElementById("myModal");

var newnote = document.getElementsByClassName('new-note')[0];
newnote.onclick = function() {
  // console.log('hi');
  noteform.action='/notes/new';
  // console.dir(document.activeElement);
  document.getElementById('note-id').value = 'none';
  
  document.getElementById('delete-note').disabled = true;
  document.getElementById('edit-title').value='';
document.getElementById('edit-title').placeholder= 'Note title';
// document.getElementById('note-content').placeholder = "Type your note here ...";
const dateTime = getDateAndTime();
document.getElementById('note-date').innerHTML = dateTime;
document.getElementById('note-content').value= '';

modal.style.display = "block";
}

// Get the button that opens the modal
var notedivs = document.getElementsByClassName("flexbox-item");

for(let notediv of notedivs){

  // When the user clicks the button, open the modal 
  if(notediv.getElementsByClassName('note-content')[0].innerHTML.trim().length>200){
    notediv.getElementsByClassName('note-content')[0].innerHTMLbackup = notediv.getElementsByClassName('note-content')[0].innerHTML.trim();
    notediv.getElementsByClassName('note-content')[0].innerHTML = `${notediv.getElementsByClassName('note-content')[0].innerHTML.trim().slice(0,200)} ...`
  }
  
  notediv.onclick = function() {
    noteform.action=`/notes/${notediv.id}?_method=PATCH`;
    // console.log(notediv.id);
    // console.dir(document.activeElement);
    document.getElementById('note-id').value = notediv.id;

    document.getElementById('delete-note').disabled = false;
    document.getElementById('edit-title').value = notediv.getElementsByClassName('note-title')[0].innerHTML;
    document.getElementById('note-content').value = notediv.getElementsByClassName('note-content')[0].innerHTMLbackup || notediv.getElementsByClassName('note-content')[0].innerHTML.trim();
    document.getElementById('note-date').innerHTML = notediv.getElementsByClassName('note-date')[0].innerHTML;
    // modal.noteID = notediv.id;

    modal.style.display = "block";
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// newnote.onclick = function(){
//   console.log(document.getElementById('delete-note'));
// }


savebtn = document.getElementById('save-note');
deletebtn = document.getElementById('delete-note');
noteform = document.getElementById('note-form');

// savebtn.addEventListener('click',function(){
//   console.log('prior to sunmit');
// })

// deletebtn.addEventListener('click',function(){
//   console.log('prior to sunmit');
//   deletebtn.formaction="/notes/";
// })

noteform.addEventListener('submit',function(e){
  if(document.activeElement.id==='delete-note'){
    noteId = document.getElementById('note-id').value
    noteform.action=`/notes/${noteId}?_method=DELETE`;
    // noteform.method='GET';
  }

})

function getDateAndTime(){

  let date = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let currDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} (${days[date.getDay()]}), ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return currDate;
}

// document.getElementById("search-box").addEventListener("keyup", function(event) {
//     document.getElementById("search-form").submit();
// });