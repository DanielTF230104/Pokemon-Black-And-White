/********************************************
 *    función de validación
 */

function validacion(){
    let correcto = true;      // todo el mundo es inocente hasta que ...
    let nombre = document.getElementById('nombre').value;       //getter
    let apellidos = document.getElementById('apellidos').value; //getter
  
    if (nombre=="")  {
       document.getElementById('nombreHelp').style.visibility="visible";
       document.getElementById('nombre').style.borderColor="red";
       correcto = false;
       // no deberia volverse aquí: return false;
    }
     
    if (apellidos=="")  {
     document.getElementById('apellidosHelp').style.visibility="visible";
     document.getElementById('apellidos').style.borderColor="red";
     correcto = false;
     // no deberia volverse aquí: return false;
  }
     return correcto;
  }
  
  function resetear(id){  //instancio con nombre, apellidos, etc...
     document.getElementById(id+'Help').style.visibility="hidden"; //concateno el id con 'Help'
     document.getElementById(id).style.borderColor="lightgray";
  }

/********************** codigo del modal del footer **********************/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

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