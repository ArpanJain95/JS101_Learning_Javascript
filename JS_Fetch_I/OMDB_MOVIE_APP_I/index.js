const search = document.getElementById("searchBar");
const searchButton =  document.getElementById("searchButton");
const resetButton = document.getElementById("reset");
const rootElement = document.getElementById("root");
const omdbAPIKey = "216e1ec7";
let flag = false;

searchButton.addEventListener("click", fetchMovieData);

function fetchMovieData() {
    const searchValue = search.value;

    if (searchValue.trim() === "") {
        console.log("Add a movie name to search.");
        return;
    }
    if (flag == true){
        flag=false;
        rootElement.innerHTML = "";
    }
    if (!flag){
        fetch("https://www.omdbapi.com/?apikey=" + omdbAPIKey + "&s=" + searchValue)
        .then(function (response) {
            return response.json();
            })
            .then(function (movieDetails) {
                console.log(movieDetails.Search);
                printData(movieDetails.Search);
                flag=true;
            })
            .catch(function (err) {
                console.log("Error:", err);
            });
    }

}

function printData(movieData) {
    movieData.forEach(function(result){
        let card = document.createElement("div")
        card.classList.add("wholeCard")
    
        let image = document.createElement("img")
        image.src = result.Poster

        let name = document.createElement("h3")
        name.textContent = result.Title

        card.append(image, name)
        rootElement.append(card)
    })
}

resetButton.addEventListener("click", resetSearch);
function resetSearch(){
    search.value = "";
    rootElement.innerHTML = "";
}