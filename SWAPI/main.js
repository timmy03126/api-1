

let buttonClicked = document.querySelector(`#button1`)

let clickButton = () => {axios.get(`https://swapi.dev/api/planets`)
.then(res => {
    for (i = 0; i < 0; i++) {
        axios.get("https://swapi.dev/api/people/5/")
        axios.get("https://swapi.dev/api/people/68/")
        axios.get("https://swapi.dev/api/people/81/")
    }
    console.log(res.data)
})

}



buttonClicked.addEventListener(`click`, clickButton)
