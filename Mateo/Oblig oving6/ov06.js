//Oppgave 1
document.getElementById("btn01").onclick = function(){
    let arr01 = [3, 8, 7, 3, 6, 2];

    for (let index = 0; index < arr01.length; index++) {
        document.getElementById("print01").innerText += arr01[index];
    }
}

//Oppgave 2
document.getElementById("btn02").onclick = function(){
    let varer = [];
    let input = document.getElementsByClassName("vare");

    for (let index = 0; index < input.length; index++) {
        varer.push(input[index].value);
    }

    for (let index = 0; index < varer.length; index++) {
        document.getElementById("print02").innerText += varer[index] + "\n";
    }
}

//Oppgave 3
document.getElementById("btn03").onclick = function(){
    let input = document.getElementsByClassName("pris");
    let pris = [];
    let sum = 0;

    for (let index = 0; index < input.length; index++) {
        pris.push(input[index].value);
    }

    let prislav = pris[0];
    let prishøy = pris[0];

    for (let index = 0; index < pris.length; index++) {

        sum += parseInt(pris[index]);

        if (parseInt(prislav) >= parseInt(pris[index])) {
            prislav = pris[index];
        }
        if (parseInt(prishøy) <= parseInt(pris[index])) {
            prishøy = pris[index];
        }
    }
    let gjennomsnitt = sum/pris.length;

    document.getElementById("print03").innerText = "Gjennomsnittet er " + gjennomsnitt + "\nSummen er " + sum + "\nLaveste prisen er " + prislav + "\nHøyeste prisen er " + prishøy;

}

//Oppgave 4
document.getElementById("btn04").onclick = function(){
    let varerin = document.getElementsByClassName("vare");
    let prisin = document.getElementsByClassName("pris");

    let varer = [];
    let pris = [];

    let input = document.getElementById("søk").value;

    for (let index = 0; index < varerin.length; index++) {
        varer.push(varerin[index].value);
    }
    for (let index = 0; index < prisin.length; index++) {
        pris.push(prisin[index].value);
    }

    if (varer.indexOf(input) < 0) {
        document.getElementById("print04").innerText = "Varen er ikke på lager. Prøv igjen.";
    }
    else {
        document.getElementById("print04").innerText = "Varen med navn " + input + " koster " + pris[varer.indexOf(input)];
    }
}

//Oppgave 5
document.getElementById("btn05").onclick = function(){

    let resultat = [];

    divisjontabell(resultat);
    print(resultat);

}
function divisjontabell(resultat){

    for (let index01 = 1; index01 < 11; index01++) {
        for (let index02 = 1; index02 < 11; index02++) {
            resultat.push(index01/index02);
        }
    }
    return resultat;

}
function print(resultat){
    let table = document.getElementById("mytable");
    let num01 = 0;

    table.insertRow(0)

    for (let index03 = 0; index03 < 11; index03++) {
        table.rows[0].insertCell(index03).innerText = index03;
    }

    for (let index = 1; index < 11; index++) {

        table.insertRow(index);
        table.rows[index].insertCell(0).innerText = index;

        for (let index02 = 1; index02 < 11; index02++) {

            table.rows[index].insertCell(index02).innerText = parseFloat(resultat[num01]).toFixed(2);
            num01++;

        }
    }
}

//Oppgave 6
document.getElementById("btn06").onclick = function(){
    let table = document.getElementById("mytable06");
    let resultat = [];
    let num01 = 0;

    for (let index = 1; index < 11; index++) {
        for (let index02 = 1; index02 < 11; index02++) {
            resultat.push(parseInt(index) + parseInt(index02))
        }
    }

    table.insertRow(0);

    for (let index03 = 0; index03 < 11; index03++) {
        table.rows[0].insertCell(index03).innerText = index03;
    }

    for (let index = 1; index < 11; index++) {

        table.insertRow(index);
        table.rows[index].insertCell(0).innerText = index;

        for (let index02 = 1; index02 < 11; index02++) {

            table.rows[index].insertCell(index02).innerText = parseFloat(resultat[num01]);
            num01++;

        }
    }
}