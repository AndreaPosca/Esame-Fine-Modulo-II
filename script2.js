const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]

  //INZIO L'ESERCIZIO 
  // inizializzo la funzione con i due paramentri richiesti
  function cercaLavoro(title, location){
    
    //creo un array di risultati vuoto
    let result = [];

    //rendo tutto minuscolo sia title che location
    let tuttoPiccoloTitle = title.toLowerCase();
    let tuttoPiccoloLocation = location.toLowerCase();

    //Creo un ciclo for each che mi verifichi se ciò che 
    //andremo ad inserire sia presente negli elementi (location o title) dell'array jobs
    jobs.forEach(function(job){
        const titleJob = job.title.toLocaleLowerCase();
        const locationJob = job.location.toLocaleLowerCase();
        if (titleJob.includes(tuttoPiccoloTitle) && locationJob.includes(tuttoPiccoloLocation)){
            
            // se la condizione è vera allora spingo nell'array vuoto il risultato
            result.push(job);
        }
    })

    //definisco il parametro lunghezza dell'array risultato
    let count = result.length

    return{
        result, 
        count
    }
  }

  //testo la funzione
  console.log(cercaLavoro("", "US"));



// INIZIO ESERCIZIO 2

document.getElementById("cerca").addEventListener('click',function takeFormData(){
    
    // inserirsco i valori degli input
    const location = document.getElementById('location').value;
    const lavoro = document.getElementById('titoloLavorativo').value;
    
    // do un nome al risultato della funzione cercoLavoro 
    //con i parametri ricavati dagli input in HTML
    const findJob = cercaLavoro(lavoro, location);
    const risultatiUl = document.getElementById('risultati');
    
    //ripulisco la ricerca dopo ogni click
    risultatiUl.innerHTML = '';

    // inizio il ciclo for per creare i risultati che poi verranno 
    //inseriti direttamente nell' HTML
    for (let i = 0; i < findJob.result.length; i++) {
        let li = document.createElement('li')
        li.textContent = `lavoro: ${findJob.result[i].title} luogo: ${findJob.result[i].location}`
        risultatiUl.appendChild(li);
    }
} )



// un grazie speciale ad Ilaria che mi ha salvato le chiappette <3 - Banane