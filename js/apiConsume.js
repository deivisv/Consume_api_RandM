let linkApi = 'https://rickandmortyapi.com/api/character'
let dataApi = fetch(linkApi)

let dataContainer = document.querySelector("#charactersList")
var statusColor = document.querySelector("#statusPersonaje")
dataApi.then(res => res.json())
        .then(dataObject => {
            for (const iterator of dataObject.results) {
                dataContainer.innerHTML += `
                        <div class="col">
                            <div class="card h-100 text-white cardBackground">
                                <img src="${iterator.image}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold text-center">${iterator.name}</h5>
                                    <p class="card-text"><span id="statusPersonaje" class="statusIconRed"></span>${iterator.status} - ${iterator.species}</p>
                                    <p class="card-text text-gray">Last known location:</p>
                                    <a class="card-text text-decoration-none link" href="${iterator.location.url}">${iterator.location.name}</a>
                                    <p class="card-text text-gray">First seen in:</p>
                                    <a class="card-text text-decoration-none link" href="${iterator.episode}">${iterator.episode.name}</a>
                                </div>
                            </div>
                        </div>
                `
            }
            for (const iteratorDos of dataObject.results) {
                if(iteratorDos.status == 'Alive'){
                    statusColor.setAttribute("class", 'statusIconGreen');
                }
            }
    }).catch(error => console.log(error))