class Main{
    constructor(){
        this.seccionUnoOculta = document.querySelector('.oculto')
        this.btnStart = document.querySelector('.start')
        this.btnStart.addEventListener('click', this.desplegarSectionUno.bind(this))
        
        this.btnBorrar = document.querySelectorAll('.borrar')
        console.log(this.btnBorrar)
        this.tarea = document.querySelectorAll('.form-group')
        this.tareas = document.querySelector('.tareas')
        /* this.btnBorrar.addEventListener('click', this.borrTarea.bind(this)) */
        this.btnBorrar.forEach((item)=>{
            item.addEventListener('click', this.borrTarea.bind(this))
        })
        /* recoger elementos del DOM para calcular */
        this.cantidadAlquiler = document.querySelector('#cantidad-alquiler')
        this.cantidadTransporte = document.querySelector('#cantidad-transporte')
        this.cantidadCoche = document.querySelector('#cantidad-coche')
        this.btnSumar = document.querySelector('.btn-sumar')
        this.btnSumar.addEventListener('click', this.sumarCantidades.bind(this))
        this.outputResultado = document.querySelector('.resultado')
        this.outputResultado.classList.add('output-resultado')
        /* inputs */
        this.input = document.querySelector('#cantidad-añadir')
        this.inputProducto = document.querySelector('#producto-añadir')
        this.btnAñadir = document.querySelector('.añadir').addEventListener('click', this.añadirTarea.bind(this))
        this.outputAñadir = document.querySelector('.output-añadir')
        /* añadir  */
        
        //this.ulLista = document.querySelector('ul')
        this.btnAñadir.addEventListener('click', this.addTarea.bind(this))

        // Create a "close" button and append it to each list item
        let myNodelist = document.querySelector("li");
        let i;
        for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }

        // Click on a close button to hide the current list item
        let close = document.getElementsByClassName("close");
        let a;
        for (a = 0; a < close.length; a++) {
            close[a].onclick = function () {
                let div = this.parentElement;
                div.style.display = "none";
            }
        }

        // Add a "checked" symbol when clicking on a list item
        let list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
        }, false);
    }
    

    //***************************** */
    addTarea(){
        //let ul = this.ulLista = document.querySelector('ul')
        let li = document.createElement("li")
        let input1 = this.input.value
        let inputProducto = this.input2.value
        var t = document.createTextNode(input1)
        let t2 = document.createTextNode(inputProducto)
        /* let inputs = `${t} ${t2}` */
        let mensaje = 'Introduce un producto'
        li.appendChild(t, t2);
        if (input1 === '' || inputProducto === '') {
            this.outputAñadir.innerHTML = `<p>${mensaje}</p>`
          } else {
           document.querySelector('#myUL').appendChild(li);
          }
          document.querySelector('#cantidad-añadir').value = ''
          document.querySelector('#producto-añadir').value = ''
          
          let span = document.createElement("SPAN");
          let txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          li.appendChild(span);
          
          let i
          for (i = 0; i < close.length; i++) {
              close[i].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
              }
        }
    }

    //**************************** */
    desplegarSectionUno(){
        this.seccionUnoOculta.classList.toggle('oculto')
    }
    //**************************** */
    borrTarea(){
        this.tarea.forEach((item) => {
            item.removeChild(item.childNodes[0])            
        })
        
<<<<<<< HEAD
        /* this.tarea.classList.add('tarea')
        this.tarea.classList.remove('form-group') */
    }
    añadirTarea(){
        this.input.value
        this.inputProducto.value
        let mensaje = 'Introduce un producto y una cantidad'
        if(this.input.value == '' && this.inputProducto == ''){
            this.outputAñadir.innerHTML = `<p>${mensaje}</p>`
        }
        else{
            this.outputAñadir.innerHTML = `<div class="card"><p>producto: ${this.inputProducto.value}</p>
                                        <p>Cantidad: ${this.input.value}</p></div>`
        }
=======
>>>>>>> eb7907ca360fe172833d70d8be359f42415e7902
    }
    //*************************** */
    sumarCantidades(){
        let inputResultado = this.input.value
        inputResultado = Number(inputResultado)
        this.cantidadAlquiler = 645.20
        this.cantidadTransporte = 144
        this.cantidadCoche = 144
        let resultadoFijos = this.cantidadAlquiler + this.cantidadCoche + this.cantidadTransporte
        let resultadosVariables = inputResultado
        let resultadoFinal = resultadoFijos + resultadosVariables 
        this.outputResultado.innerHTML = `<p>El total es: ${resultadoFinal}€</p>`
        console.log(`es: ${inputResultado}`)
    }
}
document.addEventListener('DOMContentLoaded', () => {new Main})