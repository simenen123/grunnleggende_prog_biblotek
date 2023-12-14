
//oppgave 1
function regn_ut(){
	let verdier = {
	"toyota": 400,
	"BMW": 600,
	"audi": 500,
	"porsche": 750
	} 
	let valgt_bil = document.getElementById("valgt_bil").value
	let antall_dager = document.getElementById("antall_dager_leid").value
	let alder = document.getElementById("alder").value
    let pris = 0
    if (antall_dager != "" && alder != ""){
        for (let element in verdier){
            if (element == valgt_bil){
                if (alder > 25 && element != "porsche"){
                    pris = verdier[element] * antall_dager * 0.9
                } else{
                    pris = verdier[element] * antall_dager
                }
            }
        }
    }
    document.getElementById("oppgave_1_output").innerText = `prisen din er ${pris}`
}
let bestill_btn = document.getElementById("bestill")
bestill_btn.addEventListener("click", regn_ut)

//oppgave 2

let navn = ["Kaviar", "Cola", "Melk"];
let antall = [2, 8, 3];
let pris = [19.50, 12.90, 11.00];
let neste = navn.length - navn.length

let handlekurv = {
}
function update_index(){
    if (neste != navn.length){
        //kode som velger en vare
        neste = neste + 1
    }
}
function regn_ut_vare_pris(vare, pris){
    sum =  vare * pris
    return sum
}

function regn_ut_handlekurv(handlekurv){
    let sum = 0
    for (element in handlekurv){
        sum = sum + handlekurv[element]
    }
}


//oppgave 3

let mouseX
let mouseY

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
})

function lag_knapp(){
    let left_position = 50
    let top_position = 50
    let created_button = document.createElement("button")
    created_button.innerText = "here!"
    document.body.appendChild(created_button);
    created_button.style.position = "absolute"
    created_button.style.left = left_position + "px";
    created_button.style.top = top_position + "px";
    created_button.style.display = "none"
    setTimeout(() => {
        created_button.style.display = "block"
    }, 2000);


    created_button.onclick = () => {
        created_button.style.left = 100 + "px";
        created_button.style.top = 100 + "px";
        document.getElementById("mouse_position").innerText = `mouse position = ${mouseX}x and ${mouseY}y `
    }

    //lagd_knapp.addEventListener("click", console.log("hello"))
}
lag_knapp()

setInterval(() => {
    let random_blue = Math.random() * 255
    document.body.style.backgroundColor = `rgb(0, 0, ${random_blue})` 
}, 1000)


//oppgave 4

let v = [2, 4, 6]

console.log("add 2 to each element of v:", v.map(e => e + 2))

console.log("add 2 to each element of v:", v.map(e => e / 2))

console.log("add 2 to each element of v:", v.map(e => e + v.indexOf(e)))


console.log(v.reduce((sum, e) => sum + (e*2), 0));


let students = [{ name: 'Ola', age: 20 }, { name: 'Kari', age: 25 }, { name: 'Knut', age: 30 }];

console.log(students.reduce((sum, e) => (sum + e.age), 0) /students.length);

console.log(students.filter((e) => e.name[0] == 'K'));

let is_pos = students.find(students => students.name == 'Ola') ? 'true' : 'false'
console.log(is_pos)

let everyone_legal = ""
//console.log(students.reduce((e) => e.age < 22), everyone_legal = "no");

console.log(students.some((students) => students.age < 22), "no")



// function lag_knapp(){
//     let left_position = 50
//     let top_position = 50
//     let button = document.createElement("button")
//     document.body.appendChild(button)
//     let lagd_knapp = false
//     interval = setInterval(() => {
//         let button = document.createElement("button")
//         document.body.appendChild(button)
//         lagd_knapp = true
//         if (lagd_knapp){
//             clearInterval(interval)
//         }
//     }, 2000
//     )

//     lagd_knapp.addEventListener("click", console.log("hello"))
// }
