//import the HTML string function from AppHTML
import { appHTML } from "./AppHTML.js"
import { fetchLetters } from "./DataAccess.js"

//declare a querySelector that targets the main container
const mainContainer = document.querySelector("#container")

//declare a render function that renders the HTML to the DOM
//Declare a function that renders the HTML to the DOM
const render = () => {
    //Invoke fetches to update app stae from JSON
    fetchLetters()
    .then(fetchLetters)
    .then(
        () => {
            //Set the innerHTML of the main container to the SinkRepair function
            mainContainer.innerHTML = appHTML()
        }
    )
}

//invoke the render function
render()

//add event listener that invokes the render function when a user selects the send letter button

//Add event lisener that fetches latest data from JSON and rerenders the HTML once our customEvent is announced
mainContainer.addEventListener(
    "stateChanged",
    CustomEvent => {
        render()
    }
)