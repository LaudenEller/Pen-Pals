//import authors and letters
import { getAuthors, getRecipients, getLetters, getTopics } from "./DataAccess.js"

//export a function that returns the letter object information in an HTML string
export const Letters = () => {
    const letters = getLetters()
    //use find on recipients to get matching recipient
    const html = `<ul>
    ${letters.map(letter => convertLettertoListElement(letter)).join("")}
    <ul`
    return html
}

const convertLettertoListElement = (letterObj) => {
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()
    
    //use find on authors to get matching author
    const foundAuthor = authors.find(author => {
        return author.id === letterObj.author
    })
    
    const foundRecipient = recipients.find(recipient => {
        return recipient.id === parseInt(letterObj.recipient)
    })

    const foundTopic = topics.find(topic => {
        return topic.id === parseInt(letterObj.topic)
    })

    let html = `<li style="list-style-type: none;">

    Dear ${foundAuthor.name} (${foundAuthor.email})
    
    ${letterObj.letter}
    
    Sincerely, ${foundRecipient.name} (${foundRecipient.email})
    ${letterObj.date}
    ${foundTopic.topic}
    </li>`
    return html
}