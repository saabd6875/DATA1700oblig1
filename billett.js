
//ut += "<br/> Film : "+ document.getElementById("film").value;
//document.getElementById("resultat").innerHTML=ut;

let objArray= [];
function addToArray() {
    console.log("button clicked");
    let film = document.getElementById("film").value;
    let antall = document.getElementById("quantity").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phonenr = document.getElementById("phonenr").value;
    let mail = document.getElementById("mail").value;
    objArray.push({
        filmkey: film,
        antallkey: antall,
        fnameKey: fname,
        lnameKey: lname,
        phonenrKey: phonenr,
        mailKey: mail
    });
    console.log(objArray);
    populateHTML(objArray);


}
function populateHTML(objArr){
    console.log("array")
    let html = "<ol>";
    console.log(objArr)
    for (let i in objArr){
        console.log(objArr[i].fnameKey)
        html += "<li>" +  objArr[i].filmkey +" " + objArr[i].antallkey + " " +  objArr[i].fnameKey +
            " " + objArr[i].lnameKey + " " + objArr[i].phonenrKey + " " + objArr[i].mailKey + "</li>";
    }
    html += "</ol>"
    document.getElementById("resultObject").innerHTML = html;
    console.log(html)
}

function SlettArray(){
    objArray = [];
    populateHTML(objArray);
}