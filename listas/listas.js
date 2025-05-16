function verifica(){
    var nombre =document.getElementById("nombre").value;
    var edad =document.getElementById("edad").value;
    var sexo =document.getElementById("sexo").value;
    var estado =document.getElementById("estado").value;
    
    /*iniciamos presentando que si la edad es menor que 1 
    noas marque error*/

    edad=parseInt(edad);
    if(nombre==""||edad<1)
        /*alerta de ese error anterior, nos mandara este mensaje a 
    pantalla*/
    {
        alert("Escriba el nombre y su edad");
        return false;
    }
    alert(nombre + " " + "tienes " + edad + " años. ");
    if (sexo=="Masculino")
    {

        alert("Eres hombre");
    }
    else
    if (sexo=="Femenino")
    {
        alert("Eres mujer");
    }
    else
    if (sexo=="Nobinario")
    {
        
        alert("Genero no especifico");
    }
    /*introduciremos los estados mas cercanos a nuestra comunidad
    asi seleccionaremos lugar de nacimiento, y mandara a pantalla el lugae seleccionado*/
    switch(estado)
    {
        case 'Jalisco':
            alert("Eres de jalisco");
            break;
        case 'Zacatecas':
            alert("Eres de Zacatecas");
            break;
        case 'Aguascalientes':
            alert("Eres de Aguascalientes");
            break;
        case 'Durango':
            alert("Eres de Durango");
            break;
        case 'Ciudad de Mexico':
            alert("Eres de ciudad de mxico");
            break;
        case 'Colima':
            alert("Eres de colima");
            break;
        case 'Nayarit':
            alert("Eres de Nayarit");
            break;
        case 'Guanajuato':
            alert("Eres de Guanajuato");
            break;
        case 'Chihuahua':
            alert("Eres de chihuahua");
            break;
        case 'Guerrero':
            alert("Eres de Guerrero");
            break;            
        default:
            alert("Selecciona otra opcion");                  
    }
}