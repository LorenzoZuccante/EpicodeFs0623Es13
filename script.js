document.addEventListener("DOMContentLoaded", () =>{
    const newAddButton = document.getElementById("addbutton")
    const clearButton = document.getElementById("clearbutton")
    const input = document.getElementById("taskbar")
    newAddButton.addEventListener("click", () =>{
        console.log("nuovo add")
    })
    clearButton.addEventListener("click", () =>{
        console.log("nuovo add")
    })
    input.addEventListener("keypress", (e) =>{
        console.log("nuovo add")
    })
})