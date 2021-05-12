// Pointers
var aboutContainer = document.getElementById("about");
var work_Container = document.getElementById("project");
var reposContainer = document.getElementById("repos");
var contaContainer = document.getElementById("contact");

// Global Variables


// Display for time since started coding
let timeSince = document.getElementById("time-since");
setInterval(function() {
    let time = dayjs().diff(dayjs(1615262400000),'day',true); // Days since March 8, 2020
    timeSince.innerText = time.toString().substring(0,10);
},50);

// Fetch and Display Repos
let requestURL = 'https://api.github.com/users/markkhoo/repos';
fetch(requestURL)
.then(response => {
    return response.json();
})
.then(function(data){
    reposContainer.innerHTML = "";
    if (data.length != 0) {
        for (let i = 0; i < data.length; i++) {
            let singleRepo = document.createElement("a");
            singleRepo.innerHTML = data[i].name;
            singleRepo.setAttribute("href", data[i].html_url);
            singleRepo.setAttribute("target","_blank");
            singleRepo.setAttribute("rel", "noreferrer noopener");

            reposContainer.appendChild(singleRepo);
        };
    } else {
        let noRepos = document.createElement("h4");
        noRepos.innerHTML = "No Public Repos";
        reposContainer.appendChild(noRepos);
    };
});

// INITIALIZE
function init () {
    aboutContainer.setAttribute("style", "display: none");
    work_Container.setAttribute("style", "display: none");
    reposContainer.setAttribute("style", "display: none");
    contaContainer.setAttribute("style", "display: none");
};
init();

// Click About Me
document.getElementById("click_about").addEventListener("click",function(){
    aboutContainer.setAttribute("style", "display: flex");
    work_Container.setAttribute("style", "display: none");
    reposContainer.setAttribute("style", "display: none");
    contaContainer.setAttribute("style", "display: none");
    document.getElementById("click_about").setAttribute("class", "selected");
    document.getElementById("click_work_").setAttribute("class", "not-selected");
    document.getElementById("click_repos").setAttribute("class", "not-selected");
    document.getElementById("click_conta").setAttribute("class", "not-selected");
});

// Click Work
document.getElementById("click_work_").addEventListener("click",function(){
    aboutContainer.setAttribute("style", "display: none");
    work_Container.setAttribute("style", "display: flex");
    reposContainer.setAttribute("style", "display: none");
    contaContainer.setAttribute("style", "display: none");
    document.getElementById("click_about").setAttribute("class", "not-selected");
    document.getElementById("click_work_").setAttribute("class", "selected");
    document.getElementById("click_repos").setAttribute("class", "not-selected");
    document.getElementById("click_conta").setAttribute("class", "not-selected");
});

// Click Github Repos
document.getElementById("click_repos").addEventListener("click",function(){
    aboutContainer.setAttribute("style", "display: none");
    work_Container.setAttribute("style", "display: none");
    reposContainer.setAttribute("style", "display: initial");
    contaContainer.setAttribute("style", "display: none");
    document.getElementById("click_about").setAttribute("class", "not-selected");
    document.getElementById("click_work_").setAttribute("class", "not-selected");
    document.getElementById("click_repos").setAttribute("class", "selected");
    document.getElementById("click_conta").setAttribute("class", "not-selected");
});

// Click Contact
document.getElementById("click_conta").addEventListener("click",function(){
    aboutContainer.setAttribute("style", "display: none");
    work_Container.setAttribute("style", "display: none");
    reposContainer.setAttribute("style", "display: none");
    contaContainer.setAttribute("style", "display: flex");
    document.getElementById("click_about").setAttribute("class", "not-selected");
    document.getElementById("click_work_").setAttribute("class", "not-selected");
    document.getElementById("click_repos").setAttribute("class", "not-selected");
    document.getElementById("click_conta").setAttribute("class", "selected");
});
