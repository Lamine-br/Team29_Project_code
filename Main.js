/*------------------------- Déclaration du Processeur -------------------------*/

class Processeur {
    #Num 
    #Processus
    #Temps_utilisation

    /* Constructeur */
    constructor(num , processus , Temps){
        this.#Num = num ;
        this.#Processus = processus ;
        this.#Temps_utilisation = Temps ;
    }

    /* Getters */
    getNum = function() {
        return this.#Num ;
    }
    getProcessus = function() {
        return this.#Processus ;
    }
    getTempsUtilisation = function() {
        return this.#Temps_utilisation ;
    }

    /* Setters */
    setNum = function(num) {
        this.#Num = num ;
    }
    setProcessus = function(processus) {
        this.#Processus = processus ;
    }
    setTempsUtilisation = function(temps) {
        this.#Temps_utilisation = temps ;
    }

    /* Méthodes */
    ProcesseurActif = function() {
        if(this.#Processus === undefined){
            return false ;
        }else{
            return true ;
        }
    }
    // Des méthodes d'affichage
    afficher = function() {
        console.log("\n----------- Processeur -----------") ;
        console.log("Num : "+this.#Num) ;
        console.log("Processus ID : "+this.#Processus.getPCB().getPID()) ;
        console.log("Contexte du processus : "+this.#Processus.getPCB().getContexte()) ;
        console.log("Temps d'utilisation : "+this.#Temps_utilisation +"s") ; 
        console.log("----------------------------------") ;
    }

    bloquer = function() {

    }

    activer =function() {

    }
}

/*------------------------- Déclaration d'un Processus -------------------------*/

class Processus {

    #PCB;
    #TempsArrive;
    #TempsExecution;
    #TempsRestant;
    #Priorite;
    #Interruptions;
    #TempsAttente ;
    #TempsSejour ;
    #TempsReponse ;

    /* Constructeur */
    constructor(pcb,T1,T2,prio,It)
    {
        this.#PCB = pcb ;
        this.#TempsArrive = T1 ;
        this.#TempsExecution = T2 ;
        this.#TempsRestant = T2 ;
        this.#Priorite = prio ;
        this.#Interruptions = [] ;
        this.#Interruptions = It ;
        this.#TempsAttente = 0 ;
        this.#TempsSejour = 0 ;
        this.#TempsReponse = 0 ;
    }; 

    /* Getters */

    getPCB = function(){
        return this.#PCB ;
    }
    getTempsArrive = function(){
        return this.#TempsArrive ;
    }
    getTempsExecution = function(){
        return this.#TempsExecution ;
    }
    getTempsRestant = function(){
        return this.#TempsRestant ;
    }
    getPriorite = function(){
        return this.#Priorite ;
    }
    getInterruptions = function(){
        return this.#Interruptions ;
    }
    getTempsAttente = function(){
        return this.#TempsAttente ;
    }
    getTempsSejour = function(){
        return this.#TempsSejour ;
    }
    getTempsReponse = function(){
        return this.#TempsReponse ;
    }

    /* Setters */

    setPCB = function(pcb){
        this.#PCB = pcb ;
    }
    setTempsArrive = function(T) {
        this.#TempsArrive = T ;
    }
    setTempsExecution = function(T){
        this.#TempsExecution = T ;
    }
    setTempsRestant = function(T){
        this.#TempsRestant = T ;
    }
    setPriorite = function(P){
        this.#Priorite = P ;
    }
    setInterruptions = function(It){
        this.#Interruptions = It ;
    }
    setTempsAttente = function(t){
        this.#TempsAttente = t ;
    }
    setTempsSejour = function(t){
        this.#TempsSejour = t ;
    }
    setTempsReponse = function(t){
        this.#TempsReponse = t ;
    }

    /* ----------------------------- */
    DetruireInterruption(pos){
        delete(this.#Interruptions.splice(pos, 1)) ;
    }

    /* Affichage */
    afficher = function(){
        console.log("\n**************** Processus ****************") ;
        this.#PCB.afficher();
        console.log("Temps d'arrivée : "+this.#TempsArrive) ;
        console.log("Temps d'exécution : "+this.#TempsExecution) ;
        console.log("Temps restant d'exécution : "+this.#TempsRestant) ;
        console.log("Priorité : "+this.#Priorite) ;
        console.log("Interruptions : "+this.#Interruptions.length) ;
        for (let i=0 ; i<this.#Interruptions.length ; i++){
            this.#Interruptions[i].afficher() ;
        }   
        console.log("Temps d'attente : "+this.#TempsAttente) ;
        console.log("Temps de séjour : "+this.#TempsSejour) ;
        console.log("Temps de réponse : "+this.#TempsReponse) ;
        console.log("\n*******************************************") ;
    }
}

/*------------------------- Déclaration du PCB d'un processus -------------------------*/

class PCB {
    #PID 
    #Etat
    #Contexte

    /* Constructeur */
    constructor(pid , etat , contexte) {
        this.#PID = pid ;
        this.#Etat = etat ;
        this.#Contexte = contexte ;
    }

    /* Getters */
    getPID = function() {
        return this.#PID ;
    }
    getEtat = function() {
        return this.#Etat ;
    }
    getContexte = function() {
        return this.#Contexte ;
    }

    /* Setters */
    setPID = function(pid){
        this.#PID = pid ;
    }
    setEtat = function(etat) {
        this.#Etat = etat ;
    }
    setContexte = function(contexte) {
        this.#Contexte = contexte ;
    }

    /* Affichage */
    afficher = function() {
        console.log("\n----------- PCB -----------") ;
        console.log("PID : ",this.#PID) ;
        console.log("Etat : ",this.#Etat) ;
        console.log("Contexte : ",this.#Contexte) ;
        console.log("---------------------------") ;
    }
}

/*------------------------- Déclaration d'une Interruption -------------------------*/

class Interruption {
    #Type
    #Temps_blocage
    #Temps_declenchement

    /*Constructeur */
    constructor(type , t1 , t2) {
        this.#Type = type ;
        this.#Temps_blocage = t1 ;
        this.#Temps_declenchement = t2 ;
     }

    /* Getters */
    getType = function() {
        return this.#Type ;
    }
    getTempsBlocage = function() {
        return this.#Temps_blocage ;
    }
    getTempsDeclenchement = function() {
        return this.#Temps_declenchement ;
    }

    /* Setters */
    setType = function(type) {
        this.#Type = type ;
    }
    setTempsBlocage = function(temps) {
        this.#Temps_blocage = temps ;
    }
    setTempsDeclenchement = function(temps) {
        this.#Temps_declenchement = temps ;
    }

    /* Affichage */
    afficher = function(){
        console.log("\n--------------- Interruption ---------------") ;
        console.log("Type : "+this.#Type) ;
        console.log("Temps de blocage : "+this.#Temps_blocage) ;
        console.log("Temps de déclenchement : "+this.#Temps_declenchement ) ;
        console.log("-------------------------------------------") ;
    }
}

/*------------------------- Déclaration d'une File -------------------------*/

class File {
    #file
    #Tete
    #Queue
   
   /* Constructeur */
   constructor(){
       this.#file = new Array() ;
       this.#Tete = -1 ;
       this.#Queue = -1 ;
   }

   /* Getters */
    getFile = function(){
        return this.#file ;
    }
    getTete = function(){
        return this.#Tete ;
    }
    getQueue = function(){
        return this.#Queue ;
    }

   FileVide = function (){
   if ( this.#file.length === 0) {
       return(true);
   }else{
       return(false);
   }
   }
   
   Enfiler = function (processus) {
        this.#Queue += 1 ;
        if (this.FileVide()){
            this.#Tete += 1 ;
        }
        this.#file.push(processus) ;
        return (true);
       }
   
   Defiler = function (processus) {
   if (this.FileVide()){
       console.log('done') ;
       return false ;
   } else{
       let b = this.#file.shift() ;
       processus.setPCB(b.getPCB()) ;
       processus.setTempsArrive(b.getTempsArrive()) ;
       processus.setTempsExecution(b.getTempsExecution()) ;
       processus.setTempsRestant(b.getTempsRestant()) ;
       processus.setPriorite(b.getPriorite()) ;
       processus.setInterruptions(b.getInterruptions()) ;
       processus.setTempsSejour(b.getTempsSejour()) ;
       processus.setTempsAttente(b.getTempsAttente()) ;
       processus.setTempsReponse(b.getTempsReponse()) ;
       this.#Queue -= 1;
       if ( this.FileVide()){
           this.#Tete -= 1;
       }
       return true;
   }
   }

   Permut(pos1 , pos2) {
        let p1 = new Processus() ;
        p1 = this.#file[pos1] ;
        this.#file[pos1] = this.#file[pos2] ;
        this.#file[pos2] = p1 ;
   }
   
   /*Ordonnanceur_FIFO() */
 ordonnanceur_FIFO()
{
    if(this.#file.length > 1 ) /// si la file n'est pas vide et il y a plus d'un processus dedans
    {
     for (var i = 0; i < this.#file.length-2; i++) 
     {
         for(var j=i+1;j<this.#file.length-1;j++)
         {
             if(this.#file[i].getTempsArrivee() > this.#file[j].getTempsArrivee())
             {
                 this.Permut(i,j);
             }
         }
     }
  } 
}
/*-----------------------------------------------------------------------------------------------------*/
   /*Ordonnanceur_SJF() */
    ordonnanceur_sjf()
{
    if(this.#file.length > 1 ) /// si la file n'est pas vide et il y a plus d'un processus dedans
    {
     for (var i = 0; i < this.#file.length-2; i++) 
     {
         for(var j=i+1;j<this.#file.length-1;j++)
         {
             if(this.#file[i].getTempsExecution() > this.#file[j].getTempsExecution())
             {
                 this.Permut(i,j);
             }
         }
     }
  } 
 }
}
   
/*------------------------- Déclaration d'une File d'Attente -------------------------*/
   /* Héritage de la classe File */
   
   class  File_Attente extends File {
       #Priorite;
       #Quantum;

       /* Constructeur */ 
       constructor(P , Q){
           super() ;
           this.#Priorite = P ;
           this.#Quantum = Q ;
       }

       /* Getters */ 
       getPriorite = function(){
           return this.#Priorite ;
       }
       getQuantum = function(){
           return this.#Quantum ;
       }

       /* Setters */
       setPriorite = function(p){
           this.#Priorite = p ;
       }
       setQuantum = function(q){
           this.#Quantum = q ;
       }
   
   /*Ordonnanceur_RR()*/
   /*Ordonnanceur_Prio()*/

   }

/*------------------------- Déclaration d'une File Multiniveaux -------------------------*/
 
   class File_Multiniveaux {
    #files ;
    
    /* Constructeur */
    constructor(nombre_files){
        this.#files = new Array(nombre_files) ;
        for(let i=0 ; i<nombre_files ; i++){
            this.#files[i] = new File_Attente() ;
        }
    }

    /* Getters */
    getFiles(){
        return this.#files ;
    }
    getFile(nb){
        return this.#files[nb] ;
    }

    /* Setters */
    setFiles(files){
        this.#files = files ;
    }

    setFile(nb , file){
        this.#files[nb] = file ;
    }
   
   /*Ordonnanceur_FMAR() */
   Ordonnanceur_FMAR(){
        let i = 0;
        for( i=0 ; i < this.#files.length ; i++){
            if(this.#files[i].FileVide()){
                continue ;
            }else{
                return i ;
            }
        }
        return -1 ;
        
   }
   
   /*Ordonnanceur_Prio()*/
   Ordonnanceur_PRIOS()
   {
        let pos = 0 , min = 0 ;
        if(this.#files[0].getFile().length > 0){
            min = this.#files[0].getFile()[0].getPriorite() ;
            pos = 0 ;
            for(let i=0 ; i<this.#files[0].getFile().length ; i++){
                if(this.#files[0].getFile()[i].getPriorite() < min){
                    pos = i ;
                }
            }
            this.#files[0].Permut(0 , pos) ;
            return 0 ;
        }else{
            return -1 ;
        }
   }
   /*Ordonnanceur_FMSR() */
   }

/*------------------------- Déclaration du Dispatcher -------------------------*/

class Dispatcher {
    #PCB_processus ;
    #NbChangementContexte ;
    #Signal 

    /* Constructeur */
    constructor() {
        this.#PCB_processus = [] ;
        this.#NbChangementContexte = 0 ;
        this.#Signal = true ;
    }

    /* Getters */
    getPCB_Processus = function(){
        return this.#PCB_processus ;
    }
    getNbChangementContexte = function(){
        return this.#NbChangementContexte ;
    }
    getSignal = function(){
        return this.#Signal ;
    }

    /* Setters */
    setPCB_processus = function(tab) {
        this.#PCB_processus = tab ;    
    }
    setNbChangementContexte = function(nb){
        this.#NbChangementContexte = nb ;
    }
    setSignal = function(etat) {
        this.#Signal = etat ;
    }

    /* Méthodes */
    AjouterPCB = function(pcb) {
        this.#PCB_processus.push(pcb) ;
        return true ;
    }
    SupprimerPCB = function(pcb) {
        this.#PCB_processus.splice(this.#PCB_processus.indexOf(pcb),1) ;
        return true ;
    }
    IncrementerNb = function() {
        this.#NbChangementContexte ++ ;
        return true ;
    }
}

/*------------------------- Déclaration d'une classe globale --------------------------*/

class Scheduler {
    #processeur ;
    #dispatcher ;
    #files ;
    #fileBloquee ;
    #processus ;

    /* Constructeur */
    constructor(processeur, dispatcher , files , fileBloquee , processus){
        this.#processeur = processeur ;
        this.#dispatcher = dispatcher ;
        this.#files = files ;
        this.#fileBloquee = fileBloquee ;
        this.#processus = processus ;
    }

    /* Getters */
    getFiles = function(){
        return this.#files ;
    }
    getProcesseur = function(){
        return this.#processeur ;
    }
    getProcessus = function(){
        return this.#processus ;
    }
    getDispatcher = function(){
        return this.#dispatcher ;
    }
    getFileBloquee = function(){
        return this.#fileBloquee ;
    }

    /* Setters */
    setProcesseur = function(processeur){
        this.#processeur = processeur ;
    }
    setDispatcher = function(dispatcher){
        this.#dispatcher = dispatcher ;
    }
    setFiles = function(files){
        this.#files = files ;
    }
    setFileBloquee = function(file){
        this.#fileBloquee = file ;
    }
    setProcessus = function(processus){
        this.#processus = processus ;
    }

    // Rajoute le processus dans le tableau en le gardant tjrs trié
    AjouterProcessus(process){
        let t = process.getTempsArrive() ;
        let min = 0 ;
        let max = this.#processus.length - 1 ;
        let stop = false ; 
        let j = 0 ;
        if(this.#processus.length === 0){
            j = 0 ;
        }else{
            while(min <= max && !stop){
                j = Math.trunc((min + max) / 2)  ;
                if(t = this.#processus[j].getTempsArrive())
                {
                    stop = true ;
                }else
                {
                    if(t < this.#processus[j].getTempsArrive()){
                        max = j - 1 ;
                    }else{
                        min = j + 1 ;
                    }
                }
            }
            if (min > max){
                j = min ;
            }
        }
        this.#processus.splice(j , 0 , process) ;
        /************************************/
        let tbody = document.querySelector('table.tableau tbody') ;
        let tds = tbody.querySelectorAll('td') ;
        let noeud = tds[j] ;
        let td = document.createElement('td') ;
        td.className = 'tableau' ;
        td.textContent = 'processus'+process.getPCB().getPID() ;
        tbody.insertBefore(td , noeud) ;
        let th = document.querySelector('table.tableau thead th') ;
        th.setAttribute('colspan',''+tbody.querySelectorAll('td').length) ;
    }

    // position : sa position dans la tableau de processus[]
    // num_file : numero de la file ou le mettre (0 dans les cas à file simple)
    CreerProcessus(position , num_file){
        let process = new Processus() ;
        process.setPCB(this.#processus[position].getPCB()) ;
        process.setTempsArrive(this.#processus[position].getTempsArrive()) ;
        process.setTempsExecution(this.#processus[position].getTempsExecution()) ;
        process.setTempsRestant(this.#processus[position].getTempsRestant()) ;
        process.setPriorite(this.#processus[position].getPriorite()) ;
        process.setInterruptions(this.#processus[position].getInterruptions()) ;
        this.#processus.splice(position,1) ;
        this.#dispatcher.AjouterPCB(process.getPCB()) ;
        this.#files.getFile(num_file).Enfiler(process) ;
        /***********************************/
        let tbody = document.querySelector('table.tableau tbody') ;
        let tbody1 = document.querySelector('table.fileAttente') ;
        let tds = tbody.querySelectorAll('td') ;
        let td = tds[position] ;
        td.className = 'fileAttente' ;
        tbody1.insertBefore(td , tbody1.children[0]) ;
        let th = document.querySelector('table.fileAttente thead th') ;
        th.setAttribute('colspan',''+tbody1.querySelectorAll('td').length) ;
    }

    // num_file : numero de la file d'ou défiler le processus en question
    ActiverProcessus(num_file){
        let process = new Processus() ;
        this.#files.getFile(num_file).Defiler(process) ;
        console.log(process) ;
        this.#processeur.setProcessus(process) ;
        this.#dispatcher.setSignal(false) ;
        process.getPCB().setEtat("Actif") ;
    }

    // num_file : numero de la file ou enfiler le processus
    DesactiverProcessus(num_file){

        // Changement de Contexte
        this.#processeur.getProcessus().getPCB().setEtat("Pret") ;
        let a = this.#processeur.getProcessus().getPCB().getContexte() ;
        let b = a [4] ;
        this.#processeur.getProcessus().getPCB().setContexte('Tour'+String.fromCharCode(b.charCodeAt()+1)) ;

        this.#files.getFile(num_file).Enfiler(this.#processeur.getProcessus()) ;
        this.#processeur.setProcessus(undefined) ;
        this.#dispatcher.setSignal(true) ;
    }

    BloquerProcessus(){

        // Changement de Contexte
        this.#processeur.getProcessus().getPCB().setEtat("Bloque") ;
        let a = this.#processeur.getProcessus().getPCB().getContexte() ;
        let b = a [4] ;
        this.#processeur.getProcessus().getPCB().setContexte('Tour'+String.fromCharCode(b.charCodeAt()+1)) ; 

        this.#fileBloquee.Enfiler(this.#processeur.getProcessus()) ;
        this.#processeur.setProcessus(undefined) ;
        this.#dispatcher.setSignal(true) ;
    }

    // num_file : numero de la file ou enfiler le processus
    // pos : position du processus dans la file des processus bloqués
    ReveillerProcessus(position , num_file){
        let process = new Processus() ;
        this.#fileBloquee.Permut(0 , position) ;
        this.#fileBloquee.Defiler(process) ;
        this.#files.getFile(num_file).Enfiler(process) ;
        process.getPCB().setEtat("Pret") ;
    }

    DetruireProcessus(){
        delete (this.#processeur.getProcessus()) ;
        this.#processeur.setProcessus(undefined) ;
        this.#dispatcher.setSignal(true) ;
    }

/***********************************Ordonnanceur FIFO***************************************************/
         Ordonnanceur_FIFO(){
        let i = this.#processus.length , j = 0 , t = 0 , h = 0 ,  arret = false , cpt = 0 , num_file = 0 ;
        while(j !== i){
            // Vérifier les Temps d'arrivée des processus 
             while(h < this.#processus.length){
                if(this.#processus[h].getTempsArrive() === t){
                    console.log('t = '+t+' : '+'Création du processus'+this.#processus[h].getPCB().getPID()) ;
                    this.CreerProcessus(h , 0) ;
    
                }else{
                    if(this.#processus[h].getTempsArrive() > t){
                        break ;
                    }
                    h++ ;
                }
            }
            h = 0 ;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true){
                 this.#files.getFile(0).ordonnanceur_FIFO() ;
                if(num_file !== -1){
                    this.ActiverProcessus(num_file) ;
                    this.#dispatcher.IncrementerNb() ;
                    console.log('t = '+t+' : '+'Activation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                    if(this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()){
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente()) ;
                        console.log("Temps de reponse = "+ this.#processeur.getProcessus().getTempsReponse()) ;
                    }
                    this.#dispatcher.setSignal(false) ;
                }else{
                    console.log('t = '+t+' : '+'Aucun processus à activer !') ;
                }
            }
            else{ //Si le processeur est actif
                if(this.#processeur.ProcesseurActif()){
                    if(this.#processeur.getProcessus().getTempsRestant() === 0){
                        console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        console.log("Temps de sejour : "+this.#processeur.getProcessus().getTempsSejour()) ;
                        console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                        this.DetruireProcessus() ;
                        j++ ;
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                    }
                    else{
                            if(this.#processeur.getProcessus().getInterruptions().length > 0){
                                if(this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()){
                                    this.#processeur.getProcessus().setPriorite(num_file) ;
                                    console.log('t = '+t+' : '+'Bloquage du processus'+this.#processeur.getProcessus().getPCB().getPID()+': Interruption') ;
                                    this.BloquerProcessus() ;
                                    cpt = 0 ;
                                    this.#dispatcher.setSignal(true) ;
                                    arret = true ;
                                }
                             }
                        }
                    }
                }
            
            if (!arret){
                for (let j = 0 ; j<this.#fileBloquee.getFile().length ; j++){
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0){
                        console.log('t = '+(t)+' : '+'Réveil du processus'+this.#fileBloquee.getFile()[j].getPCB().getPID()) ;
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0) ;
                        this.ReveillerProcessus(j , this.#fileBloquee.getFile()[j].getPriorite()) ;
                        arret = true ;
                    }
                }
                if(!arret){
                    for (let j = 0 ;j<this.#fileBloquee.getFile().length ; j++){
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1) ;
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1) ;
                    }
                    for(let j = 0 ; j<this.#files.getFiles().length ; j++){
                        for(let k = 0 ; k<this.#files.getFile(j).getFile().length ; k++){
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente()+1) ;
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour()+1) ;
                            console.log("Processus"+this.#files.getFile(j).getFile()[k].getPCB().getPID()+" --> "+"Temps d'attente : "+this.#files.getFile(j).getFile()[k].getTempsAttente()+ "  ,  Temps de sejour : "+this.#files.getFile(j).getFile()[k].getTempsSejour()) ;
                        }
                    }
                    if(this.#processeur.ProcesseurActif()){
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1) ;
                    }
                }
            }
            if(!arret){
                if(this.#processeur.ProcesseurActif()){
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1) ;
                    cpt++ ;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation()+1) ;
                }
                t++ ;
            }else{
                arret = false ;
            }
        }
        console.log('Nombre de changements de contexte : '+this.#dispatcher.getNbChangementContexte()) ;
        console.log("\n--------Fin de l'éxecution---------") ;
    }
    
       /***********************************Ordonnanceur SJF***************************************************/
         Ordonnanceur_SJF(){
        let i = this.#processus.length , j = 0 , t = 0 , h = 0 ,  arret = false , cpt = 0 , num_file = 0 ;
        while(j !== i){
            // Vérifier les Temps d'arrivée des processus 
             while(h < this.#processus.length){
                if(this.#processus[h].getTempsArrive() === t){
                    console.log('t = '+t+' : '+'Création du processus'+this.#processus[h].getPCB().getPID()) ;
                    this.CreerProcessus(h , 0) ;
    
                }else{
                    if(this.#processus[h].getTempsArrive() > t){
                        break ;
                    }
                    h++ ;
                }
            }
            h = 0 ;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true){
                 this.#files.getFile(0).ordonnanceur_sjf() ;
                if(num_file !== -1){
                    this.ActiverProcessus(num_file) ;
                    this.#dispatcher.IncrementerNb() ;
                    console.log('t = '+t+' : '+'Activation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                    if(this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()){
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente()) ;
                        console.log("Temps de reponse = "+ this.#processeur.getProcessus().getTempsReponse()) ;
                    }
                    this.#dispatcher.setSignal(false) ;
                }else{
                    console.log('t = '+t+' : '+'Aucun processus à activer !') ;
                }
            }
            else{ //Si le processeur est actif
                if(this.#processeur.ProcesseurActif()){
                    if(this.#processeur.getProcessus().getTempsRestant() === 0){
                        console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        console.log("Temps de sejour : "+this.#processeur.getProcessus().getTempsSejour()) ;
                        console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                        this.DetruireProcessus() ;
                        j++ ;
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                    }
                    else{
                            if(this.#processeur.getProcessus().getInterruptions().length > 0){
                                if(this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()){
                                    this.#processeur.getProcessus().setPriorite(num_file) ;
                                    console.log('t = '+t+' : '+'Bloquage du processus'+this.#processeur.getProcessus().getPCB().getPID()+': Interruption') ;
                                    this.BloquerProcessus() ;
                                    cpt = 0 ;
                                    this.#dispatcher.setSignal(true) ;
                                    arret = true ;
                                }
                             }
                        }
                    }
                }
            
            if (!arret){
                for (let j = 0 ; j<this.#fileBloquee.getFile().length ; j++){
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0){
                        console.log('t = '+(t)+' : '+'Réveil du processus'+this.#fileBloquee.getFile()[j].getPCB().getPID()) ;
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0) ;
                        this.ReveillerProcessus(j , this.#fileBloquee.getFile()[j].getPriorite()) ;
                        arret = true ;
                    }
                }
                if(!arret){
                    for (let j = 0 ;j<this.#fileBloquee.getFile().length ; j++){
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1) ;
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1) ;
                    }
                    for(let j = 0 ; j<this.#files.getFiles().length ; j++){
                        for(let k = 0 ; k<this.#files.getFile(j).getFile().length ; k++){
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente()+1) ;
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour()+1) ;
                            console.log("Processus"+this.#files.getFile(j).getFile()[k].getPCB().getPID()+" --> "+"Temps d'attente : "+this.#files.getFile(j).getFile()[k].getTempsAttente()+ "  ,  Temps de sejour : "+this.#files.getFile(j).getFile()[k].getTempsSejour()) ;
                        }
                    }
                    if(this.#processeur.ProcesseurActif()){
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1) ;
                    }
                }
            }
            if(!arret){
                if(this.#processeur.ProcesseurActif()){
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1) ;
                    cpt++ ;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation()+1) ;
                }
                t++ ;
            }else{
                arret = false ;
            }
        }
        console.log('Nombre de changements de contexte : '+this.#dispatcher.getNbChangementContexte()) ;
        console.log("\n--------Fin de l'éxecution---------") ;
    }
    

         /*************************Ordonnanceur Round Robin*************************/
    Ordonnanceur_RR(){
        let i = this.#processus.length , j = 0 , t = 0 , h = 0 , quantum = 0 , arret = false , cpt = 0 , num_file = 0 ;
        while(j !== i){
            // Vérifier les Temps d'arrivée des processus 
             while(h < this.#processus.length){
                if(this.#processus[h].getTempsArrive() === t){
                    console.log('t = '+t+' : '+'Création du processus'+this.#processus[h].getPCB().getPID()) ;
                    this.CreerProcessus(h , 0) ;

                }else{
                    if(this.#processus[h].getTempsArrive() > t){
                        break ;
                    }
                    h++ ;
                }
            }
            h = 0 ;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true){
                if(num_file !== -1){
                    this.ActiverProcessus(0) ;
                    this.#dispatcher.setNbChangementContexte(this.#dispatcher.getNbChangementContexte()+1) ;
                    console.log('t = '+t+' : '+'Activation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                    if(this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()){
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente()) ;
                        console.log("Temps de reponse = "+ this.#processeur.getProcessus().getTempsReponse()) ;
                    }
                    quantum = this.#files.getFile(0).getQuantum() ;
                    this.#dispatcher.setSignal(false) ;
                }else{
                    console.log('t = '+t+' : '+'Aucun processus à activer !') ;
                }
            }else{ //Si le processeur est actif
                if(this.#processeur.ProcesseurActif()){
                    if(this.#processeur.getProcessus().getTempsRestant() === 0){
                        console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        this.#processeur.getProcessus().afficher() ;
                        this.DetruireProcessus() ;
                        j++ ;
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                    }else{
                        if(cpt === quantum){
                        console.log('t = '+t+' : '+'Désactivation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        this.DesactiverProcessus(0) ;                       
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                        }else{
                            if(this.#processeur.getProcessus().getInterruptions().length > 0){
                                if(this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()){
                                    console.log('t = '+t+' : '+'Bloquage du processus'+this.#processeur.getProcessus().getPCB().getPID()+': Interruption') ;
                                    this.BloquerProcessus() ;
                                    cpt = 0 ;
                                    this.#dispatcher.setSignal(true) ;
                                    arret = true ;
                                }
                             }
                        }
                    }
                }
            }
            if (!arret){
                for (let j = 0 ; j<this.#fileBloquee.getFile().length ; j++){
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0){
                        console.log('t = '+(t)+' : '+'Réveil du processus'+this.#fileBloquee.getFile()[j].getPCB().getPID()) ;
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0) ;
                        this.ReveillerProcessus(j , 0) ;
                        arret = true ;
                    }
                }
                if(!arret){
                    for (let j = 0 ;j<this.#fileBloquee.getFile().length ; j++){
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1) ;
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1) ;
                    }
                    for(let j = 0 ; j<this.#files.getFiles().length ; j++){
                        for(let k = 0 ; k<this.#files.getFile(j).getFile().length ; k++){
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente()+1) ;
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour()+1) ;
                            console.log("Processus"+this.#files.getFile(j).getFile()[k].getPCB().getPID()+" --> "+"Temps d'attente : "+this.#files.getFile(j).getFile()[k].getTempsAttente()+ "  ,  Temps de sejour : "+this.#files.getFile(j).getFile()[k].getTempsSejour()) ;
                        }
                    }
                    if(this.#processeur.ProcesseurActif()){
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1) ;
                    }
                }
            }
            if(!arret){
                if(this.#processeur.ProcesseurActif()){
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1) ;
                    cpt++ ;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation()+1) ;
                }
                t++ ;
            }else{
                arret = false ;
            }
        }
        console.log('Nombre de changements de contexte : '+this.#dispatcher.getNbChangementContexte()) ;
        console.log("\n--------Fin de l'éxecution---------") ;
    }
           

/*****************Ordonnanceur Par Priorite Statique*****************/ 
    Ordonnanceur_PRIOS_NonPreemptif()
    {
        let i = this.#processus.length , j = 0 , t = 0 , h = 0 , quantum = 0 , arret = false , cpt = 0 , num_file = 0 ;
        while(j !== i){
            // Vérifier les Temps d'arrivée des processus 
             while(h < this.#processus.length){
                if(this.#processus[h].getTempsArrive() === t){
                    console.log('t = '+t+' : '+'Création du processus'+this.#processus[h].getPCB().getPID()) ;
                    this.CreerProcessus(h , 0) ;
                }else{
                    if(this.#processus[h].getTempsArrive() > t){
                        break ;
                    }
                    h++ ;
                }
            }
            h = 0 ;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true){
                num_file = this.#files.Ordonnanceur_PRIOS() ;
                if(num_file !== -1){
                    this.ActiverProcessus(num_file) ;
                    this.#dispatcher.IncrementerNb() ;
                    console.log('t = '+t+' : '+'Activation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                    if(this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()){
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente()) ;
                        console.log("Temps de reponse = "+ this.#processeur.getProcessus().getTempsReponse()) ;
                    }
                    this.#dispatcher.setSignal(false) ;
                }else{
                    console.log('t = '+t+' : '+'Aucun processus à activer !') ;
                }
            }else{ //Si le processeur est actif
                if(this.#processeur.ProcesseurActif()){
                    if(this.#processeur.getProcessus().getTempsRestant() === 0){
                        console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        console.log("Temps de sejour : "+this.#processeur.getProcessus().getTempsSejour()) ;
                        console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                        this.DetruireProcessus() ;
                        j++ ;
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                    }else{
                        if(this.#processeur.getProcessus().getInterruptions().length !== 0){
                            if(this.#processeur.getProcessus().getInterruptions().length > 0){
                                if(this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()){
                                    console.log('t = '+t+' : '+'Bloquage du processus'+this.#processeur.getProcessus().getPCB().getPID()+': Interruption') ;
                                    this.BloquerProcessus() ;
                                    cpt = 0 ;
                                    this.#dispatcher.setSignal(true) ;
                                    arret = true ;
                                }
                             }
                        }
                    }
                }
            }
            if (!arret){
                for (let j = 0 ; j<this.#fileBloquee.getFile().length ; j++){
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0){
                        console.log('t = '+(t)+' : '+'Réveil du processus'+this.#fileBloquee.getFile()[j].getPCB().getPID()) ;
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0) ;
                        this.ReveillerProcessus(j , 0) ;
                        arret = true ;
                    }
                }
                if(!arret){
                    for (let j = 0 ;j<this.#fileBloquee.getFile().length ; j++){
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1) ;
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1) ;
                    }
                    for(let j = 0 ; j<this.#files.getFiles().length ; j++){
                        for(let k = 0 ; k<this.#files.getFile(j).getFile().length ; k++){
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente()+1) ;
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour()+1) ;
                            console.log("Processus"+this.#files.getFile(j).getFile()[k].getPCB().getPID()+" --> "+"Temps d'attente : "+this.#files.getFile(j).getFile()[k].getTempsAttente()+ "  ,  Temps de sejour : "+this.#files.getFile(j).getFile()[k].getTempsSejour()) ;
                        }
                    }
                    if(this.#processeur.ProcesseurActif()){
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1) ;
                    }
                }
            }
            if(!arret){
                if(this.#processeur.ProcesseurActif()){
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1) ;
                    cpt++ ;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation()+1) ;
                }
                t++ ;
            }else{
                arret = false ;
            }
        }
        console.log('Nombre de changements de contexte : '+this.#dispatcher.getNbChangementContexte()) ;
        console.log("\n--------Fin de l'éxecution---------") ;
    }
                
    
/*****************Ordonnanceur Par Priorite Statique*****************/ 
Ordonnanceur_PRIOS_Preemptif()
{
    let i = this.#processus.length , j = 0 , t = 0 , h = 0 , quantum = 0 , arret = false , cpt = 0 , num_file = 0 ;
    while(j !== i){
        // Vérifier les Temps d'arrivée des processus 
         while(h < this.#processus.length){
            if(this.#processus[h].getTempsArrive() === t){
                console.log('t = '+t+' : '+'Création du processus'+this.#processus[h].getPCB().getPID()) ;
                if(this.#processeur.ProcesseurActif()){
                    if(this.#processus[h].getPriorite() < this.#processeur.getProcessus().getPriorite()){
                        console.log('t = '+t+' : '+'Désactivation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        this.DesactiverProcessus(0) ;
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                    }
                }
                this.CreerProcessus(h , 0) ;
            }else{
                if(this.#processus[h].getTempsArrive() > t){
                    break ;
                }
                h++ ;
            }
        }
        h = 0 ;
        // Si le processeur n'est pas actif
        if (this.#dispatcher.getSignal() === true){
            num_file = this.#files.Ordonnanceur_PRIOS() ;
            if(num_file !== -1){
                this.ActiverProcessus(num_file) ;
                this.#dispatcher.IncrementerNb() ;
                console.log('t = '+t+' : '+'Activation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                if(this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()){
                    this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente()) ;
                    console.log("Temps de reponse = "+ this.#processeur.getProcessus().getTempsReponse()) ;
                }
                this.#dispatcher.setSignal(false) ;
            }else{
                console.log('t = '+t+' : '+'Aucun processus à activer !') ;
            }
        }else{ //Si le processeur est actif
            if(this.#processeur.ProcesseurActif()){
                if(this.#processeur.getProcessus().getTempsRestant() === 0){
                    console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                    console.log("Temps de sejour : "+this.#processeur.getProcessus().getTempsSejour()) ;
                    console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                    this.DetruireProcessus() ;
                    j++ ;
                    this.#dispatcher.setSignal(true) ;
                    cpt = 0 ;
                    arret = true ;
                }else{
                    if(this.#processeur.getProcessus().getInterruptions().length !== 0){
                        if(this.#processeur.getProcessus().getInterruptions().length > 0){
                            if(this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()){
                                console.log('t = '+t+' : '+'Bloquage du processus'+this.#processeur.getProcessus().getPCB().getPID()+': Interruption') ;
                                this.BloquerProcessus() ;
                                cpt = 0 ;
                                this.#dispatcher.setSignal(true) ;
                                arret = true ;
                            }
                         }
                    }
                }
            }
        }
        if (!arret){
            for (let j = 0 ; j<this.#fileBloquee.getFile().length ; j++){
                if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0){
                    console.log('t = '+(t)+' : '+'Réveil du processus'+this.#fileBloquee.getFile()[j].getPCB().getPID()) ;
                    this.#fileBloquee.getFile()[j].DetruireInterruption(0) ;
                    if(this.#processeur.ProcesseurActif()){
                        if(this.#fileBloquee.getFile()[j].getPriorite() < this.#processeur.getProcessus().getPriorite()){
                            console.log('t = '+t+' : '+'Désactivation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                            this.DesactiverProcessus(0) ;
                            this.#dispatcher.setSignal(true) ;
                            cpt = 0 ;
                            arret = true ;
                        }
                    }
                    this.ReveillerProcessus(j , 0) ;
                    arret = true ;
                }
            }
            if(!arret){
                for (let j = 0 ;j<this.#fileBloquee.getFile().length ; j++){
                    this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1) ;
                    this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1) ;
                }
                for(let j = 0 ; j<this.#files.getFiles().length ; j++){
                    for(let k = 0 ; k<this.#files.getFile(j).getFile().length ; k++){
                        this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente()+1) ;
                        this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour()+1) ;
                        console.log("Processus"+this.#files.getFile(j).getFile()[k].getPCB().getPID()+" --> "+"Temps d'attente : "+this.#files.getFile(j).getFile()[k].getTempsAttente()+ "  ,  Temps de sejour : "+this.#files.getFile(j).getFile()[k].getTempsSejour()) ;
                    }
                }
                if(this.#processeur.ProcesseurActif()){
                    this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1) ;
                }
            }
        }
        if(!arret){
            if(this.#processeur.ProcesseurActif()){
                this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1) ;
                cpt++ ;
                this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation()+1) ;
            }
            t++ ;
        }else{
            arret = false ;
        }
    }
    console.log('Nombre de changements de contexte : '+this.#dispatcher.getNbChangementContexte()) ;
    console.log("\n--------Fin de l'éxecution---------") ;
}

    /*****************Ordonnanceur Files Multiniveaux Avec Recyclage*****************/
    Ordonnanceur_FMAR(){
        let i = this.#processus.length , j = 0 , t = 0 , h = 0 , quantum = 0 , arret = false , cpt = 0 , num_file = 0 ;
        while(j !== i){
            // Vérifier les Temps d'arrivée des processus 
             while(h < this.#processus.length){
                if(this.#processus[h].getTempsArrive() === t){
                    console.log('t = '+t+' : '+'Création du processus'+this.#processus[h].getPCB().getPID()) ;
                    this.CreerProcessus(h , 0) ;

                }else{
                    if(this.#processus[h].getTempsArrive() > t){
                        break ;
                    }
                    h++ ;
                }
            }
            h = 0 ;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true){
                num_file = this.#files.Ordonnanceur_FMAR() ;
                if(num_file !== -1){
                    this.ActiverProcessus(num_file) ;
                    this.#dispatcher.IncrementerNb() ;
                    console.log('t = '+t+' : '+'Activation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                    if(this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()){
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente()) ;
                        console.log("Temps de reponse = "+ this.#processeur.getProcessus().getTempsReponse()) ;
                    }
                    quantum = this.#files.getFile(num_file).getQuantum() ;
                    this.#dispatcher.setSignal(false) ;
                }else{
                    console.log('t = '+t+' : '+'Aucun processus à activer !') ;
                }
            }else{ //Si le processeur est actif
                if(this.#processeur.ProcesseurActif()){
                    if(this.#processeur.getProcessus().getTempsRestant() === 0){
                        console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        console.log("Temps de sejour : "+this.#processeur.getProcessus().getTempsSejour()) ;
                        console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                        this.DetruireProcessus() ;
                        j++ ;
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                    }else{
                        if(cpt === quantum){
                        if(num_file < this.#files.getFiles().length - 1){
                            console.log('t = '+t+' : '+'Désactivation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                            this.DesactiverProcessus(num_file + 1) ;
                        }else{
                            console.log('t = '+t+' : '+'Désactivation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                            this.DesactiverProcessus(num_file) ;
                        }
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                        }else{
                            if(this.#processeur.getProcessus().getInterruptions().length > 0){
                                if(this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()){
                                    this.#processeur.getProcessus().setPriorite(num_file) ;
                                    console.log('t = '+t+' : '+'Bloquage du processus'+this.#processeur.getProcessus().getPCB().getPID()+': Interruption') ;
                                    this.BloquerProcessus() ;
                                    cpt = 0 ;
                                    this.#dispatcher.setSignal(true) ;
                                    arret = true ;
                                }
                             }
                        }
                    }
                }
            }
            if (!arret){
                for (let j = 0 ; j<this.#fileBloquee.getFile().length ; j++){
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0){
                        console.log('t = '+(t)+' : '+'Réveil du processus'+this.#fileBloquee.getFile()[j].getPCB().getPID()) ;
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0) ;
                        this.ReveillerProcessus(j , this.#fileBloquee.getFile()[j].getPriorite()) ;
                        arret = true ;
                    }
                }
                if(!arret){
                    for (let j = 0 ;j<this.#fileBloquee.getFile().length ; j++){
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1) ;
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1) ;
                    }
                    for(let j = 0 ; j<this.#files.getFiles().length ; j++){
                        for(let k = 0 ; k<this.#files.getFile(j).getFile().length ; k++){
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente()+1) ;
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour()+1) ;
                            console.log("Processus"+this.#files.getFile(j).getFile()[k].getPCB().getPID()+" --> "+"Temps d'attente : "+this.#files.getFile(j).getFile()[k].getTempsAttente()+ "  ,  Temps de sejour : "+this.#files.getFile(j).getFile()[k].getTempsSejour()) ;
                        }
                    }
                    if(this.#processeur.ProcesseurActif()){
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1) ;
                    }
                }
            }
            if(!arret){
                if(this.#processeur.ProcesseurActif()){
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1) ;
                    cpt++ ;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation()+1) ;
                }
                t++ ;
            }else{
                arret = false ;
            }
        }
        console.log('Nombre de changements de contexte : '+this.#dispatcher.getNbChangementContexte()) ;
        console.log("\n--------Fin de l'éxecution---------") ;
    }
}

/*---------------------------------------------------------------------------*/
/* Main */

let pcb1 = new PCB(1 , "Pret" , "Tour1") ;
let pcb2 = new PCB(2 , "Pret" , "Tour1") ;
let pcb3 = new PCB(3 , "Pret" , "Tour1") ;
let pcb4 = new PCB(4 , "Pret" , "Tour1") ;
let pcb5 = new PCB(5 , "Pret" , "Tour1") ;
let it1 = new Interruption("Lecture Disque" , 5 , 2) ;
let It1 = [it1] ;
let it2 = new Interruption("Lecture Mémoire" , 4 , 2) ;
let it3 = new Interruption("Lecture Mémoire" , 2 , 19) ;
let It2 = [it2,it3] ;
let process1 = new Processus(pcb1 , 4 , 20 , 2 , It1) ;
let process2 = new Processus(pcb2 , 3 , 30 , 3 , It2) ;
let process3 = new Processus(pcb3 , 2 , 10 , 0 , []) ;
let process4 = new Processus(pcb4 , 1 , 10 , 0 , []) ;

let files = new File_Multiniveaux(3) ;
let processeur = new Processeur() ;
let dispatcher = new Dispatcher() ;
let tab = [pcb1 , pcb2] ;
dispatcher.setPCB_processus(tab) ;
let fileBloquee = new File() ;
let processus = [] ;

let scheduler = new Scheduler(processeur , dispatcher , files , fileBloquee , processus) ;
scheduler.AjouterProcessus(process1) ;
scheduler.AjouterProcessus(process2) ;
setTimeout(function(){
    scheduler.Ordonnanceur_FMAR() ;
}, 2000) ;
console.log(scheduler.getProcessus()) ;







