(function () {
    let jmenoLekareFinal:string = "";//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let prijmeniLekareFinal:string = "";
    let emailLekareFinal:string = "";
    let cisloCLKFinal:string = "";
    let titulPredFinal:string = "";
    let titulZaFinal:string = "";
    let vlastniTitulPredJmenem:string = "";
    let vlastniTitulZaJmenem:string = "";
    /**
     * Vlastní tituly před a za jménem
     */
    const inputVlastniTitulPredJmenem:any = document.getElementById("vlastni-titul-pred-jmenem");
    const shrnutisvehotitulupred:any = document.getElementById("shrnutisvehotitulupred");
    inputVlastniTitulPredJmenem.addEventListener("input",(e) => {
        vlastniTitulPredJmenem = e.target.value;
        shrnutisvehotitulupred.innerHTML = vlastniTitulPredJmenem;
    })
    const inputVlastniTitulzaJmenem:any = document.getElementById("vlastni-titul-za-jmenem");
    const shrnutisvehotituluza:any = document.getElementById("shrnutisvehotituluza");
    inputVlastniTitulzaJmenem.addEventListener("input",(e) => {
        vlastniTitulZaJmenem = e.target.value;
        shrnutisvehotituluza.innerHTML = vlastniTitulZaJmenem;
    })
    //Prevents form from reloading a page on submit
    const form:HTMLElement = document.getElementById("schizoform");
    form.addEventListener("submit", (e) => e.preventDefault());
    const mainSubmit = document.getElementById("finalCheck");
    mainSubmit.addEventListener("click", () => {
        vyrendrujFinalniOsloveni();
    })
    /**
     * ZPRACOVÁNÍ TITULŮ P5ED - NEBUDE TO PRDEL
     */
    const titulPredJmenem = document.getElementById("shrnutititulpred");
    const titulyPredClass:any = document.getElementsByClassName("the-title-before");
    let seznamTituluPredJmenem = {};
    for (let c = 0; c < titulyPredClass.length; c++) {
        seznamTituluPredJmenem[titulyPredClass[c].innerHTML] = false;
        titulyPredClass[c].addEventListener("click", (e):void => {
        
            if(e.target.getAttribute("clicked")=== "false"){
                e.target.style.background = "#088bd6"
                e.target.setAttribute("clicked", "true");
            }else{
                e.target.style.background = "white";
                e.target.setAttribute("clicked", "false");
            }
            const selectedTitul = e.target.innerHTML;
            seznamTituluPredJmenem[selectedTitul] = !seznamTituluPredJmenem[selectedTitul];
            vyrendrujTitulPred();
        }) 
       
    }
   function vyrendrujTitulPred(){
       titulPredFinal = "";
    for (const key in seznamTituluPredJmenem) {
       if(seznamTituluPredJmenem[key]){
          titulPredFinal += key +" "
       }
    }
    titulPredJmenem.innerHTML = titulPredFinal;
   }
 /**
     * ZPRACOVÁNÍ TITULŮ P5ED - NEBUDE TO PRDEL
     */
    const titulZaJmenem = document.getElementById("shrnutititulza");
    const titulyZaClass:any = document.getElementsByClassName("the-title-after");
    let seznamTituluZaJmenem = {};
    for (let c = 0; c < titulyZaClass.length; c++) {
        seznamTituluZaJmenem[titulyZaClass[c].innerHTML] = false;
        titulyZaClass[c].addEventListener("click", (e):void => {
        
            if(e.target.getAttribute("clicked")=== "false"){
                e.target.style.background = "#088bd6"
                e.target.setAttribute("clicked", "true");
            }else{
                e.target.style.background = "white";
                e.target.setAttribute("clicked", "false");
            }
            const selectedTitul = e.target.innerHTML;
            seznamTituluZaJmenem[selectedTitul] = !seznamTituluZaJmenem[selectedTitul];
            vyrendrujTitulZa();
        }) 
       
    }
   function vyrendrujTitulZa(){
       titulZaFinal = "";
    for (const key in seznamTituluZaJmenem) {
       if(seznamTituluZaJmenem[key]){
          titulZaFinal += key +" "
       }
    }
    titulZaJmenem.innerHTML = titulZaFinal;
   }
    /**
     * VARIABLES DECLARATION
    */
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

   
    /**
     * HANDLE FUNCTION LIST
     */
   function zpracujCisloClk():void{
       const shrnutiCislo:any = document.getElementById("shrnutiCLK");
      
   }
    function zpracujEmail(status:boolean):void{
        const shrnutiEmail:any = document.getElementById("shrnutiemailu");
        if(status){
            shrnutiEmail.innerHTML = ""
        }else{
            shrnutiEmail.innerHTML = '<span style="color:red">Tohle není validní email!</span>'
        }
       
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
    function vyrendrujFinalniOsloveni(){
        let finalniStringOsloveni: string = `${titulPredFinal} ${vlastniTitulPredJmenem} ${jmenoLekareFinal} ${prijmeniLekareFinal} ${vlastniTitulZaJmenem} ${titulZaFinal}`;

        console.log(finalniStringOsloveni.replace(/\s+/gi," "));

    }
 })();

