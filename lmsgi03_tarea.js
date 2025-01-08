window.onload= function(){

    //Otorgamos a las constantes creadas las selecciones de los botones del html.
    const botPreg = document.getElementById("botPreg");
    const botResp = document.getElementById("botResp");
    const botElimUltimo = document.getElementById("botElimUltimo");
    const botBorTodo = document.getElementById("botBorTodo");

    //Constante con la selección del main
    const main = document.getElementById("contPrincipal");

    //Constante con el elemento text-area.
    const txtFaq = document.getElementById("txtFaq");

    //Creamos los eventos necesarios de cada elemento botón.
    botPreg.onclick = ()=>{

      let esPregunta = false;

      if(main.lastElementChild && main.lastElementChild.lastElementChild){  //Si existen los contenedores hijos, es decir, si hay respuestas, se comprueban sus clases. Así evitamos que no se escriba si no hay respuestas.
         for(clase of main.lastElementChild.lastElementChild.classList){    //Comprobamos en un bucle si el contenedor hijo del último elemento de la clase main tiene la clase correspondiente a las preguntas.
        if(clase == "faq_p"){
          esPregunta = true;
          break;
        }
      }
     

      }  


      if(esPregunta==false){

        let textoCuadro = txtFaq.value;    //Asignamos a la variable el contenido del text-area.
        let nuevaPregunta = document.createElement("div"); //Creamos el div contenedor del texto de la pregunta.
        let nuevoDiv = document.createElement("div"); //Creamos el div padre del contenedor de la pregunta.

        nuevaPregunta.textContent= textoCuadro; //Otorgamos el valor del text-area al div de la pregunta.
        nuevoDiv.appendChild(nuevaPregunta); //Introducimos el contenedor de la pregunta en el padre (fila).
        
        nuevoDiv.classList.add("faq_row");  //Añadimos la clase de la fila al contenedor padre
        nuevaPregunta.classList.add('faq_text', 'faq_p'); //Asignamos las clases necesarias al contenedor de la pregunta.

        main.appendChild(nuevoDiv);
        txtFaq.value="";  //El texto del text area desaparece para permitirnos enviar un nuevo mensaje sin necesidad de borrar el anterior.

      }
      else{
        alert("No se pueden añadir dos preguntas seguidas");
      }

      
    } 

    //Repetimos el proceso con el botón respuesta, variando los nombres de variables y la clase del contenedor respuesta.
    botResp.onclick = ()=>{

      let esRespuesta = false;

      if(main.lastElementChild && main.lastElementChild.lastElementChild){
       for(clase of main.lastElementChild.lastElementChild.classList){
        if(clase=="faq_r"){
          esRespuesta = true;
          break;
        } 
      }
      
        
      }

      if(esRespuesta==false){
        let textoCuadro = txtFaq.value;    
        let nuevaRespuesta = document.createElement("div"); 
        let nuevoDiv = document.createElement("div"); 
  
        nuevaRespuesta.textContent= textoCuadro;
        nuevoDiv.appendChild(nuevaRespuesta);
        
        nuevoDiv.classList.add("faq_row");  
        nuevaRespuesta.classList.add('faq_text', 'faq_r'); 
  
        main.appendChild(nuevoDiv);
        txtFaq.value="";  

      }
      else{
        alert("No es posible añadir dos respuestas seguidas");
      }
        
        
       

      } 

    //Evento para eliminar el último mensaje enviado.

    botElimUltimo.onclick = ()=>{
        main.lastElementChild.remove();
    }

    //Evento para eliminar todos los mensajes
    botBorTodo.onclick = ()=>{
  
        
        for(let i = main.children.length-1; i>=0; i-- ){  //Bucle que recorre la colección main.children. Se debe hacer con un bucle decrecente porque en uno creciente conforme se borran elementos se actualiza la colección y no puede recorrerse adecuadamente.
            main.children[i].remove();
        }
    }
    
    }


