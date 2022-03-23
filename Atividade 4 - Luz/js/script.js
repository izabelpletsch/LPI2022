function lightswitch() {
    var light = document.getElementById("lightswitch");
    var dancing = document.getElementById("dance");

    if (light.getAttribute("name") == "on") {
        document.body.setAttribute("id", "ligado");
        dancing.innerHTML = "<img src='media/dance.gif'/>";
        light.innerHTML = "<path fill='#fff' d='M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z'/>";

        light.setAttribute("name", "off");
    } else if (light.getAttribute("name") == "off") {
        document.body.setAttribute("id", "desligado");
        dancing.innerHTML = "";
        light.innerHTML = "<path fill='#fff' d='M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z'/>";

        light.setAttribute("name", "on");
    }
}