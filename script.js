function todo(){
    const elementos = {
        lenguajes: document.getElementById('lenguajes'),
        menu: document.getElementById('cambio'),   
        botonMenu: document.getElementById('menu'),
        botonAtras: document.getElementById('atras')
    };

    // Resetear clases
    resetClasses(elementos);
    
    // Aplicar clases para menú abierto
    elementos.menu.classList.add('sliding-square');
    elementos.lenguajes.classList.add('lenguajes1');
    elementos.botonMenu.classList.add('menu1');
    elementos.botonAtras.classList.add('atras');
}

function nada(){
    const elementos = {
        lenguajes: document.getElementById('lenguajes'),
        menu: document.getElementById('cambio'),   
        botonMenu: document.getElementById('menu'),
        botonAtras: document.getElementById('atras')
    };

    
    aplicar(elementos);
    
    // Aplicar clases para menú cerrado
    
    elementos.menu.classList.add('derecha');
    elementos.botonAtras.classList.add('atras1');
    elementos.botonMenu.classList.add('menu2');
    elementos.lenguajes.classList.add('atras1');
}

// Función helper para limpiar clases
function resetClasses(elementos) {
    Object.values(elementos).forEach(elemento => {
        if (elemento) {
            elemento.className = ''; // Limpia todas las clases
        }
    });
}

function aplicar(elementos) {
    Object.values(elementos).forEach(elemento => {
        if (elemento) {
            elemento.classList.add('derecha')
            elementos.botonAtras.classList.add('atras1');
    elementos.botonMenu.classList.add('menu2');
    elementos.lenguajes.classList.add('lenguajes');
              
        }
    });
   
}


