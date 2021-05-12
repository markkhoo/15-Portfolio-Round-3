// Pointers
var reposContainer = document.getElementById("repos");

// Global Variables


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

