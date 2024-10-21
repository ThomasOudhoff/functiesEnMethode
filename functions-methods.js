// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

const emailAdressSaved = "thomasoudhoff@live.nl";

function getEmailDomain(){
    searchDomain = emailAdressSaved.indexOf("@");
    //zoekt de @ in de string
    emailDomain = emailAdressSaved.slice(searchDomain + 1);
    //gaat na de @ 1 indexplaats opzij.
    return emailDomain;
    //return alles na de @
}
/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
//Array met email adressen
let emailAdresses = ["n.eeken@novi-education.nl","t.mellink@novi.nl","novi.nlaapjesk@outlook.com", "novi.nlaapjesk@outlook.com" ];
// Functie om het type e-mail te bepalen
function getEmail(email) {
    if (email.endsWith("@novi.nl")) {
        return "Medewerker"; //returned medewerker als adres eindigt op @novi.nl
    } else if (email.endsWith("@novi-education.nl")){ //returned student als adres eindigt op @novi-edu...
        return "Student";
    } else {
        return "Extern"; //in alle andere gevallen returned "extern"
    }
}
    function searchEmail() {
        for (let i = 0; i < emailAdresses.length; i++) {
            const result = getEmail(emailAdresses[i]);
            console.log(result);
        }
    }
    searchEmail();
/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
let emailAdressesValidity = ["n.eeken@novi-education.nl","t.mellink@novi.nl","n.eekenanovi.nl", "n.eeken@novinl.", "tessmellink@novi,nl"];
function checkEmailValidity(email){
    if (email.includes("@)")){
        return true;
    } if (email.includes(",")){
        return false;
    } if (email.endsWith(".")) {
        return false;
    }
    return true;
}
function checkEmail() {
    for (let i = 0; i < emailAdressesValidity.length; i++) {
        const result = checkEmailValidity(emailAdressesValidity[i]);
        console.log(result);
    }
}
checkEmail();