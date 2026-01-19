
function add(){
    const n = document.getElementById("name");
    const nameValue = n.value
    const nameOutput = document.getElementById("output")
    console.log(typeof nameValue)
    nameOutput.innerHTML = " Name : " + nameValue 
    n.value=""
}