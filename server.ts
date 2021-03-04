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
    inputVlastniTitulPredJmenem.addEventListener("input",(e:any):void => {
        vlastniTitulPredJmenem = e.target.value;
        shrnutisvehotitulupred.innerHTML = vlastniTitulPredJmenem;
        vyrendrujFinalniOsloveni();
    })
    const inputVlastniTitulzaJmenem:any = document.getElementById("vlastni-titul-za-jmenem");
    const shrnutisvehotituluza:any = document.getElementById("shrnutisvehotituluza");
    inputVlastniTitulzaJmenem.addEventListener("input",(e:any):void => {
        vlastniTitulZaJmenem = e.target.value;
        shrnutisvehotituluza.innerHTML = vlastniTitulZaJmenem;
        vyrendrujFinalniOsloveni();
    })
    //Prevents form from reloading a page on submit
    const form:any = document.getElementById("schizoform");
    form.addEventListener("submit", (e:any):void => e.preventDefault());
    const mainSubmit:any = document.getElementById("finalCheck");
    mainSubmit.addEventListener("click", () => {
        vyrendrujFinalniOsloveni();
    })
    /**
     * ZPRACOVÁNÍ TITULŮ P5ED - NEBUDE TO PRDEL
     */
    const titulPredJmenem:any = document.getElementById("shrnutititulpred");
    const titulyPredClass:any = document.getElementsByClassName("the-title-before");
    let seznamTituluPredJmenem:any = {};
    for (let c = 0; c < titulyPredClass.length; c++) {
        seznamTituluPredJmenem[titulyPredClass[c].innerHTML] = false;
        titulyPredClass[c].addEventListener("click", (e:any):void => {
        
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
    vyrendrujFinalniOsloveni();
   }
 /**
     * ZPRACOVÁNÍ TITULŮ P5ED - NEBUDE TO PRDEL
     */
    const titulZaJmenem:any = document.getElementById("shrnutititulza");
    const titulyZaClass:any = document.getElementsByClassName("the-title-after");
    let seznamTituluZaJmenem:any = {};
    for (let c = 0; c < titulyZaClass.length; c++) {
        seznamTituluZaJmenem[titulyZaClass[c].innerHTML] = false;
        titulyZaClass[c].addEventListener("click", (e:any):void => {
        
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
    vyrendrujFinalniOsloveni();
   }
    /**
     * VARIABLES DECLARATION
    */
   const jmenoLekare:any = document.getElementById("jmeno");
    jmenoLekare.addEventListener("input", ({target}:any) => {
        jmenoLekareFinal = target.value;
        jmenoLekareFinal = jmenoLekareFinal.charAt(0).toUpperCase() + jmenoLekareFinal.slice(1);
        zpracujJmeno();
    });
    const prijmeniLekare:any = document.getElementById("prijmeni");
    prijmeniLekare.addEventListener("input", ({target}:any) => {
        prijmeniLekareFinal = target.value;
        prijmeniLekareFinal = prijmeniLekareFinal.charAt(0).toUpperCase() + prijmeniLekareFinal.slice(1);
        zpracujPrijmeni();
    });
    const emailLekare:any = document.getElementById("email");
    emailLekare.addEventListener("input", (e:any) => {
        emailLekareFinal = e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/gi, "");;
        
        if(validateEmail(emailLekareFinal)){
            zpracujEmail(true);
        }else{
            zpracujEmail(false);
        } 
    })
    const shrnutiCislo:any = document.getElementById("shrnutiCLK");
    const cisloCLK:any = document.getElementById("clk");
   
    cisloCLK.addEventListener("input", ({target}:any) => {
       let cislo = target.value.toString();
      
        if(cislo.length > 10){
            console.log("Špatný")
            cisloCLK.value = cislo.slice(0,10);
            shrnutiCislo.innerHTML = `<span">Maximum je 10 čísel</span>`
          }else if(cislo.length < 11){
              console.log("Dobrý")
            cisloCLKFinal = target.value;
          }
          shrnutiCislo.innerHTML = `<span">${cisloCLKFinal.length}/10</span>`;
          
    });

   
    /**
     * HANDLE FUNCTION LIST
     */
  
    function zpracujEmail(status:boolean):void{
        const shrnutiEmail:any = document.getElementById("shrnutiemailu");
        if(status){
            shrnutiEmail.innerHTML = ""
        }else{
            shrnutiEmail.innerHTML = '<span style="color:red">Tohle není validní email!</span>'
        }
       
    }
   
    function zpracujJmeno():void{
        const shrnutiJmena:any = document.getElementById("shrnutijmeno");
        shrnutiJmena.innerHTML = jmenoLekareFinal;
        vyrendrujFinalniOsloveni();
    }
    function zpracujPrijmeni():void{
        const shrnutiPrijmeni:any = document.getElementById("shrnutiprijmeni");
        shrnutiPrijmeni.innerHTML = prijmeniLekareFinal;
        vyrendrujFinalniOsloveni();
    }
    function validateEmail(email:string) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    const formSeShrnutim:any = document.getElementById("osloveniFinal");
    const vtipnahlaska:any = document.getElementById("vtipnahlaska");
    function vyrendrujFinalniOsloveni(){
        let finalniStringOsloveni: string = `${titulPredFinal} ${vlastniTitulPredJmenem} ${jmenoLekareFinal} ${prijmeniLekareFinal} ${vlastniTitulZaJmenem} ${titulZaFinal}`;
      console.log(finalniStringOsloveni.length);
      if(finalniStringOsloveni.length > 40 && finalniStringOsloveni.length <=60){
          console.log("Aktivuji pravidlo pro 40")
        formSeShrnutim.style.fontSize = "12px";
        vtipnahlaska.innerHTML = "";
      }
       else if(finalniStringOsloveni.length > 60 && finalniStringOsloveni.length <= 85){
        formSeShrnutim.style.fontSize = "8px";
        vtipnahlaska.innerHTML = "";
      }
      else if(finalniStringOsloveni.length > 85){
        formSeShrnutim.style.fontSize = "5px";
        vtipnahlaska.innerHTML = `<span style="color:red;font-size:12px">A není těch titulů málo, Antone Pavloviči? :-)</span>`
      }
      else{
        formSeShrnutim.style.fontSize = "16px";
        vtipnahlaska.innerHTML = "";
      }
        finalniStringOsloveni.replace(/\s+/gi," "); //Rozmrdá všechna nadbytečná oslovení!

    }
 })();

