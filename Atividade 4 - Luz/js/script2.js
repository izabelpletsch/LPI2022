function lightswitch() {
    var light = document.getElementById("lightswitch");
    var babydancing = document.getElementById("dance");

    if (light.getAttribute("name") == "on") {
        document.body.setAttribute("id", "ligado2");
        babydancing.innerHTML = "<img src='https://media.baamboozle.com/uploads/images/1001/1631594684_1989934_gif-url.gif'/>  <audio style='display: none' controls autoplay><source src='media/ooga_chaka.mp3' type='audio/mp3'></audio> ";
        light.innerHTML = "<path fill='#fff' d='M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z'/>";

        light.setAttribute("name", "off");
    } else if (light.getAttribute("name") == "off") {
        document.body.setAttribute("id", "desligado");
        babydancing.innerHTML = "";
        light.innerHTML = "<path fill='#fff' d='M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z'/>";

        light.setAttribute("name", "on");
    }
}