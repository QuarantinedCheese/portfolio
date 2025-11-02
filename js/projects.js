// THIS MODULE WILL MANAGE ALL FUNCTIONS RELATING TO PROJECTS.

// Eg. project details


// DISPLAYING PROJECT DETAILS


const projects = Array.from(document.querySelectorAll(".project"));

projects.forEach((project) => project.addEventListener("click", function() {
    // Set variables
    const multiSection = document.querySelector(".multiSection");
    const projects = document.getElementById("projectSection")

    //Step one: Open expanded details menu and restrict new menu opening.
    const projDetails = document.createElement("div"); // Make div
    if(Array.from(multiSection.children).length <= 1) { // Make sure no other panel exists

        projDetails.classList.add("section"); // Style
        projDetails.classList.add("thin");

        multiSection.appendChild(projDetails); // Add
    }

    //Step three: Remove wide class from projects and add thin.
    projects.classList.remove("wide");
    projects.classList.add("thin");
    projects.classList.add("details")

    //Step two: Locate and Load important details

}));