import { database } from "./Database.js"

//declare a querySelector that targets the main container
const mainContainer = document.querySelector("#container")

//declare application state object and add an array for each array in JSON
const applicationState = {
    letters: [],
    authors: [],
    topics: [],
    recipients: []
}

//export get functions that return appState
export const getAuthors = () => {
    return applicationState.authors.map(author => ({ ...author }))
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({ ...recipient }))
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({ ...letter }))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({ ...topic }))
}

//save JSON url in an API variable
const API = "http://localhost:8088"

// export fetch functions that use GET to fetch the JSON data and save it to appState
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
    .then(response => response.json())
    .then((authors) => {
        applicationState.authors = authors
    })
}
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
    .then(response => response.json())
    .then((recipients) => {
        applicationState.recipients = recipients
    })
}
export const fetchLetters = () => {
    return fetch(`${API}/letters`)
    .then(response => response.json())
    .then((letters) => {
        applicationState.letters = letters
    })
}
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then(response => response.json())
    .then((topics) => {
        applicationState.topics = topics
    })
}

//export a function that uses POST to add letters to the letters array in JSON
export const sendLetter = (letterObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(letterObj)
        }
        return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
    }