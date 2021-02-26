(function () {
    var arrTitulPredJmenem = []; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var arrTitulZaJmenem = []; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var jmenoLekareFinal = ""; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var prijmeniLekareFinal = "";
    var emailLekareFinal = "";
    var cisloCLKFinal = "";
    var pridanyTitulPredJmenemFinal;
    //Prevents form from reloading a page on submit
    var form = document.getElementById("schizoform");
    form.addEventListener("submit", function (e) { return e.preventDefault(); });
    /**
     * VARIABLES DECLARATION
     */
    var titulPredJmenem = document.getElementById("titulypred");
    titulPredJmenem.addEventListener("change", zpracujTitulPred);
    var titulZaJmenem = document.getElementById("titulyza");
    titulZaJmenem.addEventListener("change", zpracujTitulZa);
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
    var titulPredNeniVSeznamu = document.getElementById("titulprednenivseznamu");
    titulPredNeniVSeznamu.addEventListener("click", function () {
        var vyplnenyTitul = prompt("Zdejte prosím chybějící titul před jménem");
        pridanyTitulPredJmenemFinal.push(vyplnenyTitul);
    });
    /**
     * HANDLE FUNCTION LIST
     */
    function zpracujCisloClk() {
        var shrnutiCislo = document.getElementById("shrnutiCLK");
        shrnutiCislo.innerHTML = cisloCLKFinal;
    }
    function zpracujEmail(status) {
        var shrnutiEmail = document.getElementById("shrnutiemailu");
        if (status) {
            shrnutiEmail.innerHTML = emailLekareFinal;
        }
        else {
            shrnutiEmail.innerHTML = '<span style="color:red">Tohle není validní email!</span>';
        }
    }
    function zpracujTitulPred(e) {
        arrTitulPredJmenem = [];
        var options = e.target.options;
        for (var i = 0; i < options.length; i++) {
            if (options[i].selected) {
                arrTitulPredJmenem.push(options[i].value);
            }
        }
        var shrnutiTitulPredZa = document.getElementById("shrnutititulpred");
        var string = "";
        arrTitulPredJmenem.forEach(function (titul) { return string += titul + " "; });
        shrnutiTitulPredZa.innerHTML = string;
    }
    function zpracujTitulZa(e) {
        arrTitulZaJmenem = [];
        var options = e.target.options;
        for (var i = 0; i < options.length; i++) {
            if (options[i].selected) {
                arrTitulZaJmenem.push(options[i].value);
            }
        }
        var shrnutiTitulZa = document.getElementById("shrnutititulza");
        var string = "";
        arrTitulZaJmenem.forEach(function (titul) { return string += titul + " "; });
        shrnutiTitulZa.innerHTML = string;
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
})();
