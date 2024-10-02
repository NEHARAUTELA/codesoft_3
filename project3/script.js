window.onload = function(){
    var input=document.getElementById("inputBox");
    var container=document.getElementById("container");

    container.addEventListener("click", function(e) {
        buttonClick(e.target.id);
    });

    var calc=document.getElementById("Button=");
    calc.addEventListener("click",calculate);

    var C=document.getElementById("ButtonC");
    C.addEventListener("click",erase);

    function buttonClick(buttonId) {
        if((buttonId != "ButtonC")&&(buttonId != "Button=")) {
            var s= buttonId;
            s= s.replace("Button", "");
            entries(s);
        }
    }

    function entries(s) {
        input.value += s;
        /* button1: s ="1"
        input.value = undefined
        entries("1")
        input.value =+ s
        input.value = input.value + s= undefined + "1" = "1"
        button2 : s = "2"
        input.value = "1"
        entries("2")
        input.value = input.value + s = "1" + "2" ="12"
        */
    }
};