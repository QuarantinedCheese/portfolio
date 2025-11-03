// THIS MODULE WILL MANAGE ALL FUNCTIONS RELATING TO PROJECTS.

// Eg. project details


// DISPLAYING PROJECT DETAILS


const projects = Array.from(document.querySelectorAll(".project"));

projects.forEach((project) => project.addEventListener("click", function() {
    // Set variables
    const multiSection = document.querySelector(".multiSection"); // Master container
    const projectSec = document.getElementById("projectSection") // Project container
    const projects = document.querySelector(".projects");

    let info = project.innerText.split("\n");

    const title = info[0]
    const summary = info[1]

    //Step one: Open expanded details menu and delete old menu if it exists.
    // If same button is pressed again, do not make a new div.
    const projDetails = document.createElement("div"); // Make div

    let panels = Array.from(multiSection.children)
    if(panels.length > 1) {
        console.log(panels[1].innerText)
        if(panels[1].innerText.split("\n")[0] == title) {
            //Delete menu and reset classes.
            projectSec.classList.add("wide");
            projects.classList.remove("details");
            panels[1].remove();
            return
        }
        panels[1].remove(); // Delete menu
    } 

    projDetails.classList.add("section"); // Style
    projDetails.classList.add("thin");

    multiSection.appendChild(projDetails); // Add


    //Step two: Remove wide class from project section and add details to projects.
    projectSec.classList.remove("wide");
    projects.classList.add("details");

    //Step three: Locate and Load important details
    
    // Fetch project details from elsewhere, then add after summary.
    // Add button that when clicked, can send the user to another page for the project.
    projDetails.innerHTML = `
        <h3>${title}</h3>
        <p>${summary}</p>
    `

}));