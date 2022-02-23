//import the letter form and letters
import { Letters } from "./Letters.js"
import { letterForm } from "./LetterForm.js"
import { Authors } from "./Authors.js"
import { Topics } from "./Topic.js"
import { Recipients } from "./Recipients.js"
import { sendLetter } from "./DataAccess.js"

//export a function that returns the letter form 
    //and letters functions within an HTML interpolated string
export const appHTML = () => {
    return `
    <h1>Pen Pals Society</h1>
    
    <section class="letterForm">

    <div class="author">
    <h2>Authors</h2>
    ${ Authors() }
    </div>

    <div class="letter">
    <h2>Letter</h2>
    ${ letterForm() }
    </div>

    <div class="topic">
    <h2>Topic</h2>
    ${ Topics() }
    </div>

    <div class="recipient">
    <h2>Recipient</h2>
    ${ Recipients() }
    </div>

    <div class="submit button">
    <button id="sendButton">Send Letter</button>
    </div>

    </section>

    <section class="letters">
    <h1>Letters</h2>
    ---Add Letter List---
    </section>
    `
}


//add event listener to the send letter button
const mainContainer = document.querySelector("#container")

//add event listener to the submit new request button
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendButton") {
        //get what the user typed into the form fields
        const userAuthorChoice = document.querySelector("input[id='authorSelectBox']").value
        const userLetter = document.querySelector("input[name='letterForm']").value
        const userTopicChoice = document.querySelector("input[class='topic']").value
        const userRecipientChoice = document.querySelector("input[name='recipientSelectBox']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            author: userAuthorChoice,
            letter: userLetter,
            topic: userTopicChoice,
            recipient: userRecipientChoice,
            date: date.now()
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)

        //announce a state change for entire document causing the DOM to rerender
        const rerender = new CustomEvent("stateChanged")
        document.dispatchEvent(rerender)
    }
})