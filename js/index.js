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

<div class="item navegacion">
    <nav>
        <a href="/index.html" class="home">Home</a>
        <a href="/calendario.html" class="navlink">Calendario F1</a>
        <a href="/pilotos.html" class="navlink">Pilotos</a>
        <a href="/historiaEscuderias.html" class="navlink">Escuderias</a>
        <a href="/historia.html" class="navlink">Historia</a>
        <a href="/contact.html" class="navlink">Contacto</a>
    </nav>
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
    <div class=iconos>
        <a class="iconosredes" href="https://x.com/F1?t=P8Mu6Jls5wJeuy8GHr5pOA&s=09"><i class="fab fa-twitter"></i></a>
        <a class="iconosredes" href="https://www.facebook.com/Formula1?mibextid=ZbWKwL"><i class="fab fa-facebook-f"></i></a>
        <a class="iconosredes" href="https://instagram.com/f1?igshid=MzRlODBiNWFlZA=="><i class="fab fa-instagram"></i></a>
        <a class="iconosredes" href="https://www.youtube.com/@Formula1"><i class="fab fa-youtube"></i></a>
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