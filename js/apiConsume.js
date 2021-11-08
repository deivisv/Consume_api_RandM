let linkApi = 'https://rickandmortyapi.com/api'

let dataContainer = document.querySelector("#charactersList")
var changePage = document.querySelector("#pages")

personajes = (page = 1, search = false) => {
    dataContainer.innerHTML = ''
    let inputSearch = document.querySelector("#searchCharacter").value
    let dataApi = fetch(linkApi)
    dataApi.then(res => res.json())
    .then(dataApi => {
            if (!search) {
                if (page == 1) {
                    var dataOne = dataApi.characters
                } else {
                    var dataOne = page
                }
            } else {
                var dataOne = 'https://rickandmortyapi.com/api/character?name=' + inputSearch
            }
            /* dataOne = (page == 1) ? dataApi.characters : page; */
            let dataCharacters = fetch(dataOne)
            dataCharacters.then(res2 => res2.json())
                .then(dataCharacters => {
                    for (const iterator of dataCharacters.results) {
                        if (iterator.status == 'Alive') {
                            state = "statusIconGreen";
                        } else if (iterator.status == 'Dead') {
                            state = "statusIconRed";
                        } else if (iterator.status == 'Unknown') {
                            state = "statusIconGray";
                        }
                        dataContainer.innerHTML += `
                                <div class="col">
                                    <div class="card h-100 text-white cardBackground">
                                        <img src="${iterator.image}" class="card-img-top">
                                        <div class="card-body">
                                            <h5 class="card-title fw-bold text-center">${iterator.name}</h5>
                                            <span class="d-flex align-items-center">
                                                <span class="justify-content-center ${state}"></span>
                                                ${iterator.status} - ${iterator.species}
                                            </span>
                                            <p class="card-text text-gray">Last known location:</p>
                                            <a class="card-text text-decoration-none link" href="${iterator.location.url}">${iterator.location.name}</a>
                                            <p class="card-text text-gray">Origin:</p>
                                            <a class="card-text text-decoration-none link" href="${iterator.origin.url}">${iterator.origin.name}</a>
                                            <span class="d-flex text-gray">Type: <span class="ps-1 text-white">${iterator.type}</span></span>
                                        </div>
                                    </div>
                                </div>
                        `
                        // console.log(iterator.episode[0])
                    }
                    var funcion = 'onefun'
                    var estadoNext = dataCharacters.info.next
                    var estadoPrev = dataCharacters.info.prev
                    botones(funcion, estadoPrev, estadoNext)
                })
    }).catch(error => console.log(error))
}

ubicaciones = (page = 1) => {
    dataContainer.innerHTML = ''
    let dataApi2 = fetch(linkApi)
    dataApi2.then(res3 => res3.json())
    .then(dataApi => {
            dataTwo = (page == 1) ? dataApi.locations : page;
            let dataLocations = fetch(dataTwo)
            dataLocations.then(res3 => res3.json())
                .then(dataLocations => {
                    for (const iteratorDos of dataLocations.results){
                        dataContainer.innerHTML += `
                        <div class="col">
                            <div class="card h-100 text-white cardBackground">
                                <img src="./img/fondo-planetas.jpg" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold text-center">${iteratorDos.name}</h5>
                                    <p class="card-text">Type:</p>
                                    <p class="card-text text-gray-dos">${iteratorDos.type}</p>
                                    <p class="card-text">Dimension:</p>
                                    <p class="card-text text-gray-dos">${iteratorDos.dimension}</p>
                                    <a class="card-text text-decoration-none link" href="${iteratorDos.url}">More info!</a>
                                </div>
                            </div>
                        </div>
                        `
                    }
                    var funcion = 'twofun'
                    var estadoNext = dataLocations.info.next
                    var estadoPrev = dataLocations.info.prev
                    botones(funcion, estadoPrev, estadoNext)
            })
    }).catch(error => console.log(error))
}

locaciones = (page = 1) => {
    dataContainer.innerHTML = ''
    let dataApi3 = fetch(linkApi)
    dataApi3.then(res3 => res3.json())
    .then(dataApi => {
            dataThree = (page == 1) ? dataApi.episodes : page;
            let dataEpisodes = fetch(dataThree)
            dataEpisodes.then(res3 => res3.json())
                .then(dataEpisodes => {
                    for (const iteratorTres of dataEpisodes.results){
                        dataContainer.innerHTML += `
                        <div class="col">
                            <div class="card h-100 text-white cardBackground">
                                <img src="./img/fondo-capitulos.jpg" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold text-center">${iteratorTres.name}</h5>
                                    <p class="card-text">Episodio:</p>
                                    <p class="card-text text-gray-dos">${iteratorTres.episode}</p>
                                    <p class="card-text">Fecha de Emision:</p>
                                    <p class="card-text text-gray-dos">${iteratorTres.air_date}</p>
                                    <a class="card-text text-decoration-none link" href="${iteratorTres.url}">More info!</a>
                                </div>
                            </div>
                        </div>
                `
                }
                var funcion = 'threefun'
                var estadoNext = dataEpisodes.info.next
                var estadoPrev = dataEpisodes.info.prev
                botones(funcion, estadoPrev, estadoNext)
            })
    }).catch(error => console.log(error))
}

botones = (funcionUse, estadoPrev, estadoNext) => {
    var funcionEscogida = ''
    switch (funcionUse) {
        case 'onefun':
            funcionEscogida = 'personajes'
            break;
        case 'twofun':
            funcionEscogida = 'ubicaciones'
            break;
        case 'threefun':
            funcionEscogida = 'locaciones'
            break;
    }
    
    let offPrev = ''
    let offNext = ''

    if (estadoPrev == null) {
        offPrev = `disabled`
    } else if (estadoNext == null) {
        offNext = `disabled`
    }

    changePage.innerHTML = `
        <button class="btn btn-light ${offPrev} fw-bold" onclick="${funcionEscogida}('${estadoPrev}')">Anterior</button>
        <button class="btn btn-light ${offNext} fw-bold" onclick="${funcionEscogida}('${estadoNext}')">Siguiente</button>
    `
}

personajes(1)