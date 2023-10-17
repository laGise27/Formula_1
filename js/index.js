let cad= ` 
<div class="contenedor-noticias" >
    <div class="item encabezado">
        <img src="/img/logo formula 1.png" alt="">

        <div class="clockdate-wrapper ">
            <div id="clock"></div>
            <div id="date"></div>
        </div>
    </div> 

    <div class="item encabezado2">
        <a href="/index.html" class="linkform">
            <h1>FORMULA 1</h1>
        </a>
        <div>
            <img class="imagencard" src="/img/pilotos-banner.jpg" alt="">
        </div>

    </div>

    <div class="item navegacion ">
        <nav class="menu">
        <section class="menu__container">
           

            <ul class="menu__links">
                <li class="menu__item">
                    <a href="/index.html" class="menu__link">Home</a>
                </li>
    		<li class="menu__item">
                    <a href="/pilotos.html" class="menu__link">Pilotos</a>
                </li>
		<li class="menu__item">
                    <a href="/historiaEscuderias.html" class="menu__link">Escuderias</a>
                </li>
		<li class="menu__item">
                    <a href="/circuitos.html" class="menu__link">Circuitos</a>
                </li>
                
    
                <li class="menu__item">
                    <a href="contact.html" class="menu__link">Contacto</a>
                </li>
    
            </ul>

            <div class="menu__hamburguer">
                <img src="/img/menu.svg" class="menu__img">
            </div>
        </section>

      
    </nav>
    </div>  
</div>
    `
 

document.querySelector ("header"). innerHTML= cad



cad=`
<div class="item pie">
<div class="primerfooter">
    <a href="/index.html" class="linkform">
        <h2>FORMULA 1</h2>
    </a>
    <p>Todo lo que tenes que saber de la Formula 1</p>
    <div class="iconos">
        <a class="iconosredes" href="https://x.com/F1?t=P8Mu6Jls5wJeuy8GHr5pOA&s=09" target="_blank"><i class="fab fa-twitter"></i></a>
        <a class="iconosredes" href="https://www.facebook.com/Formula1?mibextid=ZbWKwL"target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a class="iconosredes" href="https://instagram.com/f1?igshid=MzRlODBiNWFlZA=="target="_blank"><i class="fab fa-instagram"></i></a>
        <a class="iconosredes" href="https://www.youtube.com/@Formula1"target="_blank"><i class="fab fa-youtube"></i></a>
    </div>
</div>
<div class="segundofooter">
    <p class="gruponumber">© Grupo Number One</p>
    <p>.All Rights Reserved.</p>
</div>
<!-- segunda columna de footer con los links que no pude ubicar en el pie 
<div class="segundofooter">

    <h4>Links</h4>
        <div class=>
            <a class="linksinteres" href="#">Sobre Nosotros</a> <br>
            <a class="linksinteres" href="#">Privacidad y politica</a> <br>
            <a class="linksinteres" href="#">Terminos y Condiciones</a> <br>
            <a class="linksinteres" href="#">Contacto</a> <br>

        </div>

</div>-->



</div>
`
document.querySelector("footer").innerHTML=cad