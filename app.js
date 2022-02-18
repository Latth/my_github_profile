let apiLink = "https://api.github.com/users/Latth";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var result = JSON.parse(xhttp.responseText);
        document.getElementById('profile-pic').src = result.avatar_url;
        document.getElementById('name-surname').innerHTML = result.name;
        let myBio = result.bio.split('|');
        let resultBio = myBio[0];
        document.getElementById('job').innerHTML = resultBio;
        document.getElementById('location').innerHTML = result.location;


    }
};
xhttp.open("GET", apiLink, true);
xhttp.send();


function getRepos() {
    let apiLink = "https://api.github.com/users/Latth/repos";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(xhttp.responseText);
            document.getElementById('repo-title').innerHTML = "REPOS"+`(${result.length})`;
            function getReposActive() {
                let body = document.querySelector('.links-details');
                let i = 0;
                result.forEach(function () {
                    body.innerHTML += `
                    <div class="link">
                    <a href="${result[i].html_url}" target="_blank" class="link-content">
                    <i class="fa-solid fa-folder"></i>
                        <span>${result[i].name}</span>
                    </a>
                </div>
                    `

                    i++
                })
            }
            getReposActive()
        }
    };

    xhttp.open("GET", apiLink, true);
    xhttp.send();
}

getRepos()