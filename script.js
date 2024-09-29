// // const myFunction = () => {
// //     console.log('First')
// //     console.log('Second')
// //     console.log('Third')
// //   }

// //   const myFunction = async () => {
// //     console.log('first')
// //     await axios.get('https://dog.ceo/api/breeds/list/all').then(function () {
// //       console.log('second')
// //     })
// //     console.log('third')
// //   }

// // myFunction ()

// const getBreeds = async()=> {
// const dogBreeds= await axios.get('https://dog.ceo/api/breeds/list/all')
// const breedArray =dogBreeds.data.message//making the const simplify the list
// console.log(breedArray)// calling the const made
// }

// //getBreeds()//call the function above

// //Getting 
// const button=document.querySelector(`#btn`)
// const breedInput=document.querySelector(`#searchBar`)
// const imageContainer = document.querySelector(`#imgContainer`)
//imgElement.src = pokemonSprite
// //settingconst imgElement = document.getElementById("pokemonSprite")

// button.addEventListener(`click`,async () => {
//     let breed=breedInput.value
//     console.log(breed)//used this to see what dot notation i would have to use for below
//     let response = await axios.get (`https://dog.ceo/api/breed/${breed}/images/random`)// what website you are pulling from
//     let dogPic=response.data.message// ran through console log to find the pictures being in the array  used dot notation to get to message down the line
//     imageContainer.setAttribute(`src`,dogPic) //setting it to bring up picture using src
//     imageContainer.setAttribute(`alt`,"dog-picture")
//     imageContainer.setAttribute (`class`,"dog-image")
//     console.log(dogPic)
// })


//Getting
const button= document.querySelector(`#btn`)
const pokemonInput=document.querySelector(`#pokemonName`)
const pokemonSprite=document.querySelector(`#pokemonSprite`)
const imgElement = document.getElementById("pokemonSprite")
const height = document.getElementById





    //Setting
     button.addEventListener(`click`, async () => {
     let pokemonName = pokemonInput.value
     let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
const pokemonSprite = response.data.sprites.front_default

       imgElement.setAttribute (`src`, pokemonSprite) 
        console.log(pokemonSprite)
     })

//  async function fetchData(){

//     try{

//         const pokemonName = document.getElementById("pokemonName").value
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

//         if(!response.ok){
//             throw new Error("Could not fetch resource")
//         }

//         const data = await response.json()
//         const pokemonSprite = data.sprites.front_default
//         

//         ;
//         imgElement.style.display = "block"
//     }
//     catch(error){
//         console.error(error)
//     }
// }



// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})  GET, PUT, DELETE(options)