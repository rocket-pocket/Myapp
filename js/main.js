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
        this.btnAñadir = document.querySelector('.añadir').addEventListener('click', this.añadirTarea.bind(this))
        this.outputAñadir = document.querySelector('.output-añadir')
    }
    desplegarSectionUno(){
        this.seccionUnoOculta.classList.toggle('oculto')
    }
    borrTarea(){
        this.tarea.forEach((item) => {
            item.removeChild(item.childNodes[0])            
        })
        
        /* this.tarea.classList.add('tarea')
        this.tarea.classList.remove('form-group') */
    }
    añadirTarea(){
        this.input.value
        let mensaje = 'Introduce un producto'
        if(this.input.value == ''){
            this.outputAñadir.innerHTML = `<p>${mensaje}</p>`
        }
        else{
            this.outputAñadir.innerHTML = `<p>${this.input.value}</p>`
        }
    }
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