//adding projects!
let id = 0;

function addProject(project){
    console.log(project);
    id++;
    document.body.innerHTML+=`
                <div class="project" id="${id}">
                <div class="textContainer">
                    <h1>${project.projectName}</h1>
                    <p>${project.projectDescription}</p>
                       <a href="${project.projectLink}" target="_blank">Link to Project!</a><br>
                </div>
                <div class="imageContainer">
                    <img src="${project.projectImg}">
                </div>
            </div>
    `;
}

addProject({
    projectName: "Calculator",
    projectDescription: "My first Javascript project!<br> Inspired by the apple calculator.",
    projectLink: "https://rawcdn.githack.com/TheBrainyCat/Portfolio/bf6d3253c710ff3bd5213e00d76fd67574725f8e/PortfolioWebsite/Projects/calculator/index.html",
    projectImg /*String of the file reference*/: "projectGIFS/calculatorGif.gif"
});
