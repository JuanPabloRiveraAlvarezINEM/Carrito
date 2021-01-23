class Carro{
  constructor(freno_mano,palanca,encendido,clutch,freno,acelerador,derecha,izquierda,parar){
    this.freno_mano = freno_mano
    this.palanca = palanca
    this.encendido = encendido
    this.clutch = clutch
    this.freno = freno
    this.acelerador = acelerador
    this.derecha = derecha
    this.izquierda = izquierda
    this.parar = parar
  }

  //funciones
  
  cambiar_palanca_n(){
    if(!this.parar){
      this.palanca = 'neutro'
      document.getElementById("palanca").innerHTML = 'neutro'
    }
   }

  cambiar_palanca_r(){
    if(!this.parar){
    this.palanca = 'reversa'
    document.getElementById("palanca").innerHTML = 'reversa'
    }
  }

  cambiar_palanca_1(){
    if(!this.parar){
    this.palanca = 'primera'
    document.getElementById("palanca").innerHTML = 'primera'
    }
  }

  cambiar_palanca_2(){
    if(!this.parar){
    this.palanca = 'segunda'
    document.getElementById("palanca").innerHTML = 'segunda'
    if(!this.parar && this.encendido && this.acelerador){
      if(this.calcular_aleatorios() == 1){
        this.modificar_parar()
        document.getElementById('img').src = './images/fondo_parar.png'
      }
    }
  }
  }

  cambiar_palanca_3(){
    if(!this.parar){
    this.palanca = 'tercera'
    document.getElementById("palanca").innerHTML = 'tercera'
    if(!this.parar && this.encendido && this.acelerador){
      if(this.calcular_aleatorios() == 1){     
        this.modificar_parar()
        document.getElementById('img').src = './images/fondo_parar.png'
      }
    }
    }
  }

  cambiar_palanca_4(){
    if(!this.parar){
    this.palanca = 'cuarta'
    document.getElementById("palanca").innerHTML = 'cuarta' 
    if(!this.parar && this.encendido && this.acelerador){
      if(this.calcular_aleatorios() == 1){
        this.modificar_parar()  
        document.getElementById('img').src = './images/fondo_parar.png'
      }
    }
  }
  }

  cambiar_palanca_5(){
    if(!this.parar){
    this.palanca = 'quinta'
    document.getElementById("palanca").innerHTML = 'quinta'
    if(!this.parar && this.encendido && this.acelerador){
        this.modificar_parar()
        document.getElementById('img').src = './images/fondo_parar.png' 
    }
    }
  }

  cambiar_palanca_6(){
    if(!this.parar){
    this.palanca = 'sexta'
    document.getElementById("palanca").innerHTML = 'sexta'
    if(!this.parar){
      if(this.calcular_aleatorios() == 1){
        this.modificar_parar()
        document.getElementById('img').src = './images/fondo_parar.png'
      }
    }
    }
  }

  cambiar_freno_mano(){
    if(!this.parar){
    if(!this.freno_mano){
      this.freno_mano=true
      document.getElementById("freno_mano_etiqueta").innerHTML = 'activado'
    }else{
      this.freno_mano = false
      document.getElementById("freno_mano_etiqueta").innerHTML = 'desactivado'
    }
    }
  }
 
  poner_en_marcha(){
    if(!this.parar){
    if(this.encendido){
      if(this.clutch==true && this.freno == true && this.freno_mano == false && this.palanca === 'primera'){
        document.getElementById("txt").innerHTML = 'Listo para arrancar'
      }
    }}
  }

  encender(){
    if(!this.parar){
    if(!this.encendido){
      if(this.palanca==='neutro' && this.freno_mano==true){
        this.encendido=true
        document.getElementById("txt").innerHTML = 'El auto esta encendido'
        this.seleccionar_destino()
     }else{
        document.getElementById("txt").innerHTML = 'No se puede encender hasta que coloque el freno de mano y palanca en neutro'
     }
    }
    }
  }
  
  girar(){
    if(!this.parar){
    if(this.encendido){
      if(this.acelerador){
        if(event.code ==='KeyL'){
          if(this.izquierda){
            document.getElementById("txt").innerHTML = 'Giro a la izquierda'
          }else{
            document.getElementById("txt").innerHTML = 'Debe encender la direccional'
          }
        }else if(event.code === 'KeyR'){
          if(this.derecha){
            document.getElementById("txt").innerHTML = 'Giro a la derecha'
          }else{
            document.getElementById("txt").innerHTML = 'Debe encender la direccional'
          }
        }
      }
    } 
    }
  }

  modificar_clutch(){
    if(!this.parar){
    if(!this.clutch){
      this.clutch = true
      document.getElementById("clutch_etiqueta").innerHTML = 'activado'
    }else{
      this.clutch = false
       document.getElementById("clutch_etiqueta").innerHTML = 'desactivado'
    }}
  }
  
  modificar_freno(){
    if(!this.parar){
    if(!this.freno){
      this.freno = true
       document.getElementById("freno_etiqueta").innerHTML = 'activado'
    }else{
      this.freno = false
       document.getElementById("freno_etiqueta").innerHTML = 'desactivado'
    }}
  }

  cambiar_derecha(){
    if(!this.parar){
    if(this.encendido){
     if(!this.derecha){
        this.derecha = true
          document.getElementById('img').src = './images/fondo3.png'
        }else{
          this.derecha = false
          document.getElementById('img').src = './images/fondo1.png'
        }
    }  
    }
  }
  
  cambiar_izquerda(){
    if(!this.parar){
    if(this.encendido){
     if(!this.izquierda){
        this.izquierda = true
        document.getElementById('img').src = './images/fondo5.png'
      }else{
        this.izquierda = false
        document.getElementById('img').src = './images/fondo1.png'
      }
    }
  }
  }
  

  modificar_acelerador(){
    if(!this.parar){
    if(this.encendido){
      if(!this.acelerador){
        this.acelerador = true
        document.getElementById("acelerador_etiqueta").innerHTML = 'activado'
        if(this.freno==false&& this.clutch == false){
         document.getElementById("txt").innerHTML ='Auto encendido en marcha'
        }
      }else{
       this.acelerador_etiqueta = false
       document.getElementById("acelerador_etiqueta").innerHTML = 'desactivado'
      } 
    }
    }
  }

  seleccionar_destino(){
    document.getElementById("paradas").innerHTML = this.calcular_paradas()
    document.getElementById("tiempo_parada").innerHTML = this.calcular_tiempo_parada() + ' segundos'
    document.getElementById("distancia_total").innerHTML = this.calcular_total() + ' kilometros'
    document.getElementById("distancia_paradas").innerHTML = this.calcular_distanci_paradas(this.calcular_total(), this.calcular_paradas())+ ' kilometros'
  }

  calcular_paradas(){
    return Math.floor((Math.random() * 3) + 1)  
  }
  
  calcular_total(){
    return Math.floor((Math.random() * 30) + 1)   
  }

  calcular_total_tiempo(){
    return Math.floor((Math.random() * 2) + 1)  
  }

  calcular_tiempo_parada(){
    return Math.floor((Math.random() * 5) + 1)  
  }

  calcular_distanci_paradas(total,paradas){
    return Math.ceil(total/paradas)
  }

  calcular_aleatorios(){
    return Math.floor(Math.random()*(10-1))+1
  }

  modificar_parar(){
    if(!this.parar){
      this.parar = true
      this.contador()
    }
  }

  contador(){
    function segundos(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve('resolved')
        },1000)
      })
    }
    async function subfuncion(){
      console.log("entro")
      for(let i = 10; i>=0; i--){
        document.getElementById("tiempo").innerHTML = i
        await segundos()
      } 
      document.getElementById('img').src = './images/fondo1.png'
      this.parar=false
      document.getElementById("tiempo").innerHTML = " "
    } 
    subfuncion();
}
  

}

const carro1 = new Carro(false,'indefinido',false,false,false,false,false,false,false)


