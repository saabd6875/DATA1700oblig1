
ut += "<br/> Film : "+ document.getElementById("film").value;
document.getElementById("resultat").innerHTML=ut;

objArray= [];
function addToArray(){
    console.log("button clicked");
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phonenr = document.getElementById("phonenr").value;
    let mail = document.getElementById("mail").value;
    objArray.push({fnameKey : fname, lnameKey : lname, phonenrKey : phonenr, mailKey : mail})
    console.log(objArray);
    populateHTML(objArray);

}

function populateHTML(objArr){
    console.log("hey bro")
    let html = "<ol>";
    console.log(objArr)
    for (let i in objArr){
        console.log(objArr[i].fnameKey)
        html += "<li>" + objArr[i].fnameKey + " " + objArr[i].lnameKey + "</li>";
    }
    html += "</ol>"
    document.getElementById("resultObject").innerHTML = html;
    console.log(html)
}