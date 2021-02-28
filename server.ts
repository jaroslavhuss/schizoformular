(function () {
    let arrTitulPredJmenem:string[] = [];//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let arrTitulZaJmenem:string[] = [];//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let jmenoLekareFinal:string = "";//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let prijmeniLekareFinal:string = "";
    let emailLekareFinal:string = "";
    let cisloCLKFinal:string = "";
    let arrTitulPredJmenemFinal:string = "";
    let arrTitulZaJmenemFinal:string= "";
    let uplneOsloveniFinal = "";
    //Prevents form from reloading a page on submit
    const form:HTMLElement = document.getElementById("schizoform");
    form.addEventListener("submit", (e) => e.preventDefault());
    /**
     * VARIABLES DECLARATION
     */
    const titulPredJmenem:HTMLElement = document.getElementById("titulypred");
    titulPredJmenem.addEventListener("change", zpracujTitulPred);
    const titulZaJmenem:HTMLElement = document.getElementById("titulyza");
    titulZaJmenem.addEventListener("change", zpracujTitulZa);
    const jmenoLekare:any = document.getElementById("jmeno");
    jmenoLekare.addEventListener("input", ({target}) => {
        jmenoLekareFinal = target.value;
        jmenoLekareFinal = jmenoLekareFinal.charAt(0).toUpperCase() + jmenoLekareFinal.slice(1);
        zpracujJmeno();
    });
    const prijmeniLekare:any = document.getElementById("prijmeni");
    prijmeniLekare.addEventListener("input", ({target}) => {
        prijmeniLekareFinal = target.value;
        prijmeniLekareFinal = prijmeniLekareFinal.charAt(0).toUpperCase() + prijmeniLekareFinal.slice(1);
        zpracujPrijmeni();
    });
    const emailLekare:any = document.getElementById("email");
    emailLekare.addEventListener("input", (e) => {
        emailLekareFinal = e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/gi, "");;
        
        if(validateEmail(emailLekareFinal)){
            zpracujEmail(true);
        }else{
            zpracujEmail(false);
        } 
    })
    const cisloCLK:any = document.getElementById("clk");
    cisloCLK.addEventListener("input", ({target}) => {
        cisloCLKFinal = target.value;
        zpracujCisloClk();
    });

    const upraveniOsloveni:any = document.getElementById("upraveniosloveni");
    const osloveniFinal:any = document.getElementById("osloveniFinal");
    upraveniOsloveni.addEventListener("click", () => {
        const inputFromUser = prompt("Upravte své jméno a tituly ve svém certifikátu", `${arrTitulPredJmenemFinal} ${jmenoLekareFinal} ${prijmeniLekareFinal} ${arrTitulZaJmenemFinal}`);
        osloveniFinal.innerHTML = inputFromUser;
    })
    /**
     * HANDLE FUNCTION LIST
     */
   function zpracujCisloClk():void{
       const shrnutiCislo:any = document.getElementById("shrnutiCLK");
       shrnutiCislo.innerHTML = cisloCLKFinal;
   }
    function zpracujEmail(status:boolean):void{
        const shrnutiEmail:any = document.getElementById("shrnutiemailu");
        if(status){
            shrnutiEmail.innerHTML = emailLekareFinal;
        }else{
            shrnutiEmail.innerHTML = '<span style="color:red">Tohle není validní email!</span>'
        }
       
    }
    function zpracujTitulPred(e):void{
        arrTitulPredJmenem = [];
        const options = e.target.options
        for (let i = 0; i < options.length; i++) {
            if(options[i].selected){
                arrTitulPredJmenem.push(options[i].value);
            }
        }
        const shrnutiTitulPredZa:HTMLElement = document.getElementById("shrnutititulpred");
        let string:string = "";
        arrTitulPredJmenem.forEach((titul) => string+=`${titul} `);
        shrnutiTitulPredZa.innerHTML = string;
        arrTitulPredJmenemFinal = string;
    }
    function zpracujTitulZa(e):void{
        arrTitulZaJmenem = [];
        const options = e.target.options
        for (let i = 0; i < options.length; i++) {
            if(options[i].selected){
                arrTitulZaJmenem.push(options[i].value);
            }
        }
        const shrnutiTitulZa:HTMLElement = document.getElementById("shrnutititulza");
        let string:string = "";
        arrTitulZaJmenem.forEach((titul) => string+=`${titul} `);
        shrnutiTitulZa.innerHTML = string;
        arrTitulZaJmenemFinal = string;
    }
    function zpracujJmeno():void{
        const shrnutiJmena:HTMLElement = document.getElementById("shrnutijmeno");
        shrnutiJmena.innerHTML = jmenoLekareFinal;
    }
    function zpracujPrijmeni():void{
        const shrnutiPrijmeni:HTMLElement = document.getElementById("shrnutiprijmeni");
        shrnutiPrijmeni.innerHTML = prijmeniLekareFinal;
    }
    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
 })();

