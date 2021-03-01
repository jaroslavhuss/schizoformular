(function () {
    var jmenoLekareFinal = ""; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var prijmeniLekareFinal = "";
    var emailLekareFinal = "";
    var cisloCLKFinal = "";
    var titulPredFinal = "";
    var titulZaFinal = "";
    var vlastniTitulPredJmenem = "";
    var vlastniTitulZaJmenem = "";
    /**
     * Vlastní tituly před a za jménem
     */
    var inputVlastniTitulPredJmenem = document.getElementById("vlastni-titul-pred-jmenem");
    var shrnutisvehotitulupred = document.getElementById("shrnutisvehotitulupred");
    inputVlastniTitulPredJmenem.addEventListener("input", function (e) {
        vlastniTitulPredJmenem = e.target.value;
        shrnutisvehotitulupred.innerHTML = vlastniTitulPredJmenem;
    });
    var inputVlastniTitulzaJmenem = document.getElementById("vlastni-titul-za-jmenem");
    var shrnutisvehotituluza = document.getElementById("shrnutisvehotituluza");
    inputVlastniTitulzaJmenem.addEventListener("input", function (e) {
        vlastniTitulZaJmenem = e.target.value;
        shrnutisvehotituluza.innerHTML = vlastniTitulZaJmenem;
    });
    //Prevents form from reloading a page on submit
    var form = document.getElementById("schizoform");
    form.addEventListener("submit", function (e) { return e.preventDefault(); });
    var mainSubmit = document.getElementById("finalCheck");
    mainSubmit.addEventListener("click", function () {
        vyrendrujFinalniOsloveni();
    });
    /**
     * ZPRACOVÁNÍ TITULŮ P5ED - NEBUDE TO PRDEL
     */
    var titulPredJmenem = document.getElementById("shrnutititulpred");
    var titulyPredClass = document.getElementsByClassName("the-title-before");
    var seznamTituluPredJmenem = {};
    for (var c = 0; c < titulyPredClass.length; c++) {
        seznamTituluPredJmenem[titulyPredClass[c].innerHTML] = false;
        titulyPredClass[c].addEventListener("click", function (e) {
            if (e.target.getAttribute("clicked") === "false") {
                e.target.style.background = "#088bd6";
                e.target.setAttribute("clicked", "true");
            }
            else {
                e.target.style.background = "white";
                e.target.setAttribute("clicked", "false");
            }
            var selectedTitul = e.target.innerHTML;
            seznamTituluPredJmenem[selectedTitul] = !seznamTituluPredJmenem[selectedTitul];
            vyrendrujTitulPred();
        });
    }
    function vyrendrujTitulPred() {
        titulPredFinal = "";
        for (var key in seznamTituluPredJmenem) {
            if (seznamTituluPredJmenem[key]) {
                titulPredFinal += key + " ";
            }
        }
        titulPredJmenem.innerHTML = titulPredFinal;
    }
    /**
        * ZPRACOVÁNÍ TITULŮ P5ED - NEBUDE TO PRDEL
        */
    var titulZaJmenem = document.getElementById("shrnutititulza");
    var titulyZaClass = document.getElementsByClassName("the-title-after");
    var seznamTituluZaJmenem = {};
    for (var c = 0; c < titulyZaClass.length; c++) {
        seznamTituluZaJmenem[titulyZaClass[c].innerHTML] = false;
        titulyZaClass[c].addEventListener("click", function (e) {
            if (e.target.getAttribute("clicked") === "false") {
                e.target.style.background = "#088bd6";
                e.target.setAttribute("clicked", "true");
            }
            else {
                e.target.style.background = "white";
                e.target.setAttribute("clicked", "false");
            }
            var selectedTitul = e.target.innerHTML;
            seznamTituluZaJmenem[selectedTitul] = !seznamTituluZaJmenem[selectedTitul];
            vyrendrujTitulZa();
        });
    }
    function vyrendrujTitulZa() {
        titulZaFinal = "";
        for (var key in seznamTituluZaJmenem) {
            if (seznamTituluZaJmenem[key]) {
                titulZaFinal += key + " ";
            }
        }
        titulZaJmenem.innerHTML = titulZaFinal;
    }
    /**
     * VARIABLES DECLARATION
    */
    var jmenoLekare = document.getElementById("jmeno");
    jmenoLekare.addEventListener("input", function (_a) {
        var target = _a.target;
        jmenoLekareFinal = target.value;
        jmenoLekareFinal = jmenoLekareFinal.charAt(0).toUpperCase() + jmenoLekareFinal.slice(1);
        zpracujJmeno();
    });
    var prijmeniLekare = document.getElementById("prijmeni");
    prijmeniLekare.addEventListener("input", function (_a) {
        var target = _a.target;
        prijmeniLekareFinal = target.value;
        prijmeniLekareFinal = prijmeniLekareFinal.charAt(0).toUpperCase() + prijmeniLekareFinal.slice(1);
        zpracujPrijmeni();
    });
    var emailLekare = document.getElementById("email");
    emailLekare.addEventListener("input", function (e) {
        emailLekareFinal = e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/gi, "");
        ;
        if (validateEmail(emailLekareFinal)) {
            zpracujEmail(true);
        }
        else {
            zpracujEmail(false);
        }
    });
    var cisloCLK = document.getElementById("clk");
    cisloCLK.addEventListener("input", function (_a) {
        var target = _a.target;
        cisloCLKFinal = target.value;
        zpracujCisloClk();
    });
    /**
     * HANDLE FUNCTION LIST
     */
    function zpracujCisloClk() {
        var shrnutiCislo = document.getElementById("shrnutiCLK");
    }
    function zpracujEmail(status) {
        var shrnutiEmail = document.getElementById("shrnutiemailu");
        if (status) {
            shrnutiEmail.innerHTML = "";
        }
        else {
            shrnutiEmail.innerHTML = '<span style="color:red">Tohle není validní email!</span>';
        }
    }
    function zpracujJmeno() {
        var shrnutiJmena = document.getElementById("shrnutijmeno");
        shrnutiJmena.innerHTML = jmenoLekareFinal;
    }
    function zpracujPrijmeni() {
        var shrnutiPrijmeni = document.getElementById("shrnutiprijmeni");
        shrnutiPrijmeni.innerHTML = prijmeniLekareFinal;
    }
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    function vyrendrujFinalniOsloveni() {
        var finalniStringOsloveni = titulPredFinal + " " + vlastniTitulPredJmenem + " " + jmenoLekareFinal + " " + prijmeniLekareFinal + " " + vlastniTitulZaJmenem + " " + titulZaFinal;
        console.log(finalniStringOsloveni.replace(/\s+/gi, " "));
    }
})();
