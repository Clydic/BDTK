/**Get the storage in a cookie and return the value of the id.
 * @function getCookie
 * @returns Array
 */

function getCookie(name) {
    var arrCookie = document.cookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var cookiePair = arrCookie[i].split("=");
        if (name == cookiePair[0]) {
            return decodeURIComponent(cookiePair[1]);
        }
    }

}
/*-------------------List of Book-------------------------- */
/**
 * @function listOfBook
 * @param {Balise} tbody 
 * @param {Array} array 
 * 
 */
function listOfBook(tbody, array) {
    // We brow the Array array
    for (var index in array) {
        // Initialisation
        //We create HTMLElement tr
        var tr = document.createElement("tr");
        var titleOfAlbum = albums.get(array[index])["titre"];
        //We append tr in a HTMLElement tbody
        tbody.appendChild(tr);
        //On create attribute scope and set it with row
        tr.setAttribute("scope", "row");
        // We call functions makeTdCell who create cell with ref
        makeTdCell(tr, array[index]);
        // We call functions makeTdCell who create cell with Title of album
        makeTdCell(tr, titleOfAlbum);
        //We put in date a full date
        var date = fullDate();
        // We call functions makeTdCell who create cell with date
        makeTdCell(tr, date);
    }

}

/**Create an object date and return a string date with format dd/mm/yyyy
 * @function fullDate
 * @returns String
 */
function fullDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    // We control the number of digit in the day
    if (day < 10) {
        day = "0" + day;
    }
    // We control the number of digit in the month
    if (month < 10) {
        month = "0" + month;
    }
    return day + "/" + month + "/" + date.getFullYear();

}

/**
 *Make a cell and write date inner it. 
 * @param {HTMLElement} node 
 * @param {Any} data 
 */
function makeTdCell(node, data) {
    var td = document.createElement("td");
    td.innerHTML = data;
    node.appendChild(td);
}
/**-------------------------First letter display------------------------- */
/**
 * @function firstLetter
 * @param {HTMLElement} selector
 */
function firstLetter(id, selector) {
    //Get the first name of the ID
    var nameOfUser = users.get(id).firstname;
    // Search first letter of the first name
    var matches = nameOfUser.match(/\b(\w)/g);
    //Join the letter
    var acronym = matches.join("");
    //Write letter in a HTML balise

    selector.innerHTML = acronym;
}
/*-------------------------------Display the first name of user.---------------------------------- */
function personalizeTitle(id, selector) {
    selector.innerHTML = users.get(id)["firstname"];
}

function logOut() {
    document.cookie = "id=-100 ; samesite=lax";
    document.cookie = "connected=false";
}

function controlConnected() {
    document.querySelector("#wrapper").classList.add("d-none")
    var a = document.createElement("a")
    a.innerHTML = "Retour à la page d'accueil"
    a.setAttribute("class", "text-light");
    a.setAttribute("href", "../index.html")
    document.body.appendChild(a);
}