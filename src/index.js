/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseURL = 'https://platzi-avo.vercel.app' //Guardamos la URL en una constante.
const precioConSimbolo = (price) => {
    const newPrice = new window.Intl.NumberFormat('EN', {
        style: 'currency',
        currency: 'EUR',
    }).format(price)
    
    return newPrice;
}
console.log('dev by puli')
const appContainer = document.querySelector('#app')
appContainer.style.display = "flex";
appContainer.style.direction = "column";
appContainer.style.flexWrap = "wrap";
appContainer.style.justifyContent = "center";

// web-api
window.fetch(`${baseURL}/api/avo`) //conectarnos al servidor

.then(respuesta => respuesta.json()) //procesar la respuesta y convertirla en JSON.

.then(respuestaJson => { // JSON -> DATA -> RENDERIZAR INFO EN EL BROWSER
    const todosLosItems = []
    respuestaJson.data.forEach((item) => {
        
        const titulo = document.createElement('h1');
        titulo.textContent = item.name;
        titulo.className = 'text-2xl text-indigo-600 font-semibold uppercase';


        const imagen = document.createElement('img');
        imagen.src = `${baseURL}${item.image}`;
        imagen.className = 'h-20 w-20 rounded-full'
        
        const parrafo = document.createElement('p');
        parrafo.textContent = item.attributes.description;

        const precio = document.createElement('h5');
        precio.textContent = precioConSimbolo(item.price);

        const tituloyprecio = document.createElement('div')
        tituloyprecio.style.textAlign = 'center';
        tituloyprecio.appendChild(titulo);
        tituloyprecio.appendChild(precio);
        

        const card = document.createElement('div')
        card.append(imagen)
        card.appendChild(tituloyprecio)

        const container = document.createElement('div') 
        container.appendChild(card)
        container.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300 m-2.5'
        container.style.width = "inherit"
        container.style.height ='inherit'

        document.body.className = 'bg-green-100'

        todosLosItems.push(container)
        
    }) 
        appContainer.append(...todosLosItems)
        
    });

    

    /*RESUMEN: NOS CONECTAMOS A UNA API QUE ES UN PUENTE CON LA INFORMACION 
DE UN SERVIDOR Y ESE SERVIDOR NOS DEVUELVE ESA INFORMACION, Y UTILIZAMOS
UN CICLO POR CADA UNO DE LOS ELEMENTOS QUE NOS DEVUELVE ESE SERVIDOR
CREAMOS NODOS Y SE LOS AGREGAMOS AL FINAL A NUESTRO HTML*/

/*RETO PARA MEJORAR ESTE CODIGO  Y ES HACERLO CON ASYNC Y AWAIT EN VES 
  DE PROMESAS */







