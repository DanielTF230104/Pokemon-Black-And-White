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
