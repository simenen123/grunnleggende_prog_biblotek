
function oppgave1() {
    let array1 = [3, 8, 7, 3, 6, 2];
    console.log(array1);
    document.getElementById('p1').innerText = array1;
}

let varer = [];
let varerpris = [];
let vi = 0; //varer sin teller i
let wi = 0; //varerpris sin teller i
let tekst = "";
let tabletype = "add";

function lesVarer() {
    if (vi < 5) {
        varer.push(document.getElementById('i2').value);
        vi++;
        console.log(varer);
        for (let i = 0; i < varer.length; i++) {
            document.getElementById('p2').innerText = varer.join(", ");

        }
    } else if (vi >= 5) {
        vi = 5;
        console.log(varer);
        document.getElementById('p2').innerText = varer.join(", ") + "\r Det var alt, takk.";
    }
    document.getElementById('p3').innerText = "Gi pris til: " + varer[wi];
    document.getElementById('i2').value = "";
}

function tomVarer(){
    varer = [];
    varerpris = [];
    document.getElementById('p2').innerText = varer;
    document.getElementById('p3').innerText = '';
    document.getElementById('p32').innerText = '';
    document.getElementById('p33').innerText = '';
}

function giPris() {
    let verdi = document.getElementById('i3').value;

    if (verdi < 0) {
        document.getElementById('p3').innerText = "Skjerpings."
    } else {
        if (wi < vi) {

            if (varer[wi + 1] === undefined) {
                document.getElementById('p3').innerText = "";

            } else {
                document.getElementById('p3').innerText = "Gi pris til: " + varer[wi + 1];
            }


            varerpris.push(verdi);
            wi++;
            console.log(varerpris);
            tekst = "";

            for (let i = 0; i < varerpris.length; i++) {
                tekst += varer[i] + ": " + varerpris[i] + " kr \r";


            }
            if (wi >= 5) {
                wi = 5;
                tekst = tekst + "\r Det var alt, takk."
            }
        } else if (vi < 5) {
            tekst = "Du må legge til flere varer før du kan sette priser."
        }
        document.getElementById('i3').value = "";

        document.getElementById('p32').innerText = tekst;
    }

    regnUt();
}

function regnUt() {
    let sum = 0;
    let avg = 0;
    let max = varerpris[0];
    let min = varerpris[0];
    for (let i = 0; i < varerpris.length; i++) {
        sum += varerpris[i] * 1;

        if (varerpris[i] * 1 > max) {
            max = varerpris[i] * 1;
        }

        if (varerpris[i] * 1 < min) {
            min = varerpris[i] * 1;
        }
    }

    avg = (sum / (varerpris.length));

    document.getElementById('p33').innerText =
        "Sum av alle prisene: " + sum + " kr" +
        "\r Gjennomsnitt av alle prisene: " + avg + " kr" +
        "\r Høyeste pris: " + max + " kr" +
        "\r Laveste pris: " + min + " kr" +
        "\r\r NB: Dersom flere varer koster det samme, blir kun den første største og første minste tatt med."
}

function sokVare() {
    sok = document.getElementById('i4').value;
    treff = "";
    nr = -1;

    for (let i = 0; i <= varer.length; i++) {
        if (varer[i] == sok) {
            treff = varer[i];
            nr = i;
        }
    }

    if (treff == "" || nr == -1) {
        svar = "Vi fant ikke dette produktet i vårt varelager.";
    } else {
        svar = "Produktet " + treff + " koster " + varerpris[nr] + " kr." + "\r\r NB: Dersom flere varer heter det samme, blir kun den siste tatt med."
            ;
    }

    document.getElementById('p4').innerText = svar;
}





let table = document.getElementById("table5");


function matteTabell() {

    let radio = document.getElementsByName('i5');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            tabletype = radio[i].value;
        }
    }


    let tabell = [];
    let rad = 10;
    let kol = 10;

    tabell[0] = [];
    for (let j = 0; j <= kol; j++) {
        tabell[0][j] = j; //første rad med 0-10
    }


    for (let i = 1; i <= rad; i++) {
        tabell[i] = [i]; //første kolonne i hver rad sier 0-10

        if (tabletype == "add") {
            for (let j = 1; j <= kol; j++) {
                tabell[i][j] = (i + j).toFixed(0);
            }
        } else if (tabletype == "mul") {
            for (let j = 1; j <= kol; j++) {
                tabell[i][j] = (i * j).toFixed(0);
            }
        } else if (tabletype == "div") {
            for (let j = 1; j <= kol; j++) {
                tabell[i][j] = (i / j).toFixed(2);
            }
        }

    }


    console.log(tabell)

    ///PRINT

    function generateTableHead(table) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    function generateTable(table, data) {
        for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }

    let data = Object.keys(tabell[0][0]);
    generateTable(table, tabell);
    generateTableHead(table, data);

}

function destruerTabell() {
    //console.log(table.children.length)
    // for (let i = 0; i < table.children.length; i++){
    let x = document.getElementById("table5").rows.length;
    console.log("x:" + x);

    if (x > 0) {
        for (let i = 0; i < x; i++) {
            console.log("i: " + i)
            document.getElementById("table5").deleteRow(0);
        }

    }

}


/* PRINT I P-TAG


let tabellVis = '';
for (let i = 0; i <= rad; i++) {
    for (let j = 0; j <= kol; j++) {
        tabellVis += tabell[i][j] + ' ';
    }
    tabellVis += '\n'; // Linjeskift etter hver rad
}

document.getElementById('p5').innerText = tabellVis;
} */


oppgave1();

document.getElementById('b2').onclick = () => {
    lesVarer();
}

document.getElementById('b22').onclick = () => {
    tomVarer();
}


document.getElementById('b3').onclick = () => {
    giPris();
}

document.getElementById('b4').onclick = () => {
    sokVare();
}

document.getElementById('b5').onclick = () => {
    destruerTabell();
    matteTabell();
}


/*
function lesVarer() {
    let varer = [];
    for (let i = 0; i <= 5; i++) {
        let inputid = 'i2' + i;
        let push = document.getElementById(inputid).value;
        varer.push(push);
    }
    console.log(varer);
    document.getElementById('p2').innerHTML = varer;
}
*/