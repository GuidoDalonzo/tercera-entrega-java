/* 
function leerDatos() {
    return prompt("escoja un numero del 1-5");
    
}
function validarDatos(datos) {
    if (datos >= 1 || datos <= 5 ) {
        return true
    }
    else return false
}

let opcion = leerDatos();
let resultado = validarDatos */














class otapSessions {
    constructor(id, nombre, by,){
        this.id = id;
        this.nombre = nombre;
        this.by = by;
    }
}

let otapSessions1 = new otapSessions(" OTAPSESSIONS N°1 ", " Tu me lo haces facil "," Sofia acosta ")
let otapSessions2 = new otapSessions(" OTAPSESSIONS N°2 ", " Entre nosotros ", " Male Serrano ")
let otapSessions3 = new otapSessions(" OTAPSESSIONS N°3 ", " Vasos Vacios ", " Astor Cianciarulo ")
let otapSessions4 = new otapSessions(" OTAPSESSIONS N°4 ", " Identidad Santiagueña ", " Eric Mazzetti ")
let otapSessions5 = new otapSessions(" OTAPSESSIONS N°5 ", " Take on me ", " Pablo Carrazco ")







function confirmar() {

    let confirmar = prompt("escoja un numero del 1-5");

    if (confirmar == 1) {
        alert(JSON.stringify(otapSessions1));
        window.location.href = "https://www.youtube.com/watch?v=2O29yWX4g2g";
        
    }
    if (confirmar == 2) {
        alert(JSON.stringify(otapSessions2));
        window.location.href = 'https://www.youtube.com/watch?v=3HIrEZ9qeQw'

        
    }
    if (confirmar == 3) {
        alert(JSON.stringify(otapSessions3));
        window.location.href = "https://www.youtube.com/watch?v=LpGlzQ7fgas";
        
    }
    if (confirmar == 4) {
        alert(JSON.stringify(otapSessions4));
        window.location.href = "https://www.youtube.com/watch?v=IyO6i8N8wcc";
        
    }
    if (confirmar == 5) {
        alert(JSON.stringify(otapSessions5));
        window.location.href = "https://www.youtube.com/watch?v=zg2UOMGCeew";
        
    }
    else {
        alert("Por favor reingrese un numero del 1 al 5")
        
    }


}

/* confirmar() */


class videoclips {
    constructor(id, nombre, by,){
        this.id = id;
        this.nombre = nombre;
        this.by = by;
    }
}

let videoclips1 = new videoclips(" HIPER HYPE "," Lichi ")
let videoclips2 = new videoclips(" Siempre hay algo mas de Dios ", " Ema Carpentieri ")
let videoclips3 = new videoclips(" Un Impacto " , " Pablo Oliva ")
let videoclips4 = new videoclips(" Manyu ", " Street ")
let videoclips5 = new videoclips(" P.I.L.L.S ",  " KIR 01 ")




function confirmar2() {

    let confirmar = prompt("escoja un numero del 1-5");

    if (confirmar == 1) {
        alert(JSON.stringify(videoclips1));
        window.location.href = "https://www.youtube.com/watch?v=62PTn9zZR6Q";
        
    }
    if (confirmar == 2) {
        alert(JSON.stringify(videoclips2));
        window.location.href = 'https://www.youtube.com/watch?v=BMh_VqDQOeI'

        
    }
    if (confirmar == 3) {
        alert(JSON.stringify(videoclips3));
        window.location.href = "https://www.youtube.com/watch?v=gjmsl2MWXCc";
        
    }
    if (confirmar == 4) {
        alert(JSON.stringify(videoclips4));
        window.location.href = "https://www.youtube.com/watch?v=-q_ZHnOOU2k";
        
    }
    if (confirmar == 5) {
        alert(JSON.stringify(videoclips5));
        window.location.href = "https://www.youtube.com/watch?v=2-ETmN_e-_g";
        
    }
    else {
        alert("Por favor reingrese un numero del 1 al 5")
        
    }


}

/* confirmar2() */


class varios {
    constructor(id, nombre, by,){
        this.id = id;
        this.nombre = nombre;
        this.by = by;
    }
}

let varios1 = new varios(" AFTERMOVIE #1 "," MUSICA&CULTURE ")
let varios2 = new varios(" AFTERMOVIE #2 ", " MUSICA&CULTURE ")
let varios3 = new varios(" AFTERMOVIE #3 " , " MUSICA&CULTURE ")
let varios4 = new varios(" Terraza en vivo 2021 ", " APTP y Sofia Acosta ")
let varios5 = new varios(" LOST FOOTAGE ",  " MUSICA&CULTURE ")




function confirmar3() {

    let confirmar = prompt("escoja un numero del 1-5");

    if (confirmar == 1) {
        alert(JSON.stringify(varios1));
        window.location.href = "https://www.instagram.com/p/CNu2wBEHU3q/";
        
    }
    if (confirmar == 2) {
        alert(JSON.stringify(varios2));
        window.location.href = 'https://www.instagram.com/p/CNvG2UonGiz/'

        
    }
    if (confirmar == 3) {
        alert(JSON.stringify(varios3));
        window.location.href = "https://www.instagram.com/p/CUYzlWBLSUA/";
        
    }
    if (confirmar == 4) {
        alert(JSON.stringify(varios4));
        window.location.href = "https://www.instagram.com/p/CO1Hq8nnA-h/";
        
    }
    if (confirmar == 5) {
        alert(JSON.stringify(varios5));
        window.location.href = "https://www.instagram.com/p/CWtduXetF0x/";
        
    }
    else {
        alert("Por favor reingrese un numero del 1 al 5")
        
    }


}

/* confirmar3() */









const botonFlecha = document.querySelector("#botonFlecha");

    botonFlecha.addEventListener("click", function() {
        window.scrollTo({
            top: 0 ,
            left: 0 ,
            behavior: "smooth"
        })
    })





const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    phillips: 4.1
  }


  const starsTotal = 5;

  document.addEventListener('DOMContentLoaded', getRatings);


  const productSelect = document.getElementById('product-select');
  const ratingControl = document.getElementById('rating-control');


  let product;


  productSelect.addEventListener('change', (e) => {
    product = e.target.value;

    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
  });


  ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;


    if (rating > 5) {
      alert('Please rate 1 - 5');
      return;
    }


    ratings[product] = rating;

    getRatings();
  });


  function getRatings() {
    for (let rating in ratings) {

      const starPercentage = (ratings[rating] / starsTotal) * 100;


      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;


      document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;


      document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
  }


  $(document).ready(function(){
    $(background).click(function(){
    $('#background').fadeOut('slow');  
      var background=$('#background');
      background.fadeOut('slow');
    var sphere2=$('sphere2')
    sphere2.fadeIn('slow');
  });
   });
  ('#fadein').click(function(){
    ('fadein').fadeIn(fast)
  });
                    
  


 
