//import authors and letters
import { getAuthors, getRecipients, getLetters } from "./DataAccess.js"

//export a function that returns the letter object information in an HTML string
export const Letters = () => {
    const letters = getLetters()
    //use find on recipients to get matching recipient
    const html = `<ul>
    ${letters.map(letter => convertLettertoListElement(letter)).joion("")}
    <ul`
    return html
}

const convertLettertoListElement = (letterObj) => {
    const authors = getAuthors()
    const recipients = getRecipients()
    
    //use find on authors to get matching author
    const foundAuthor = authors.find(author => {
        return author.name === letterObj.author
    })
    
    const foundRecipient = recipients.find(recipient => {
        return recipient.name === letterObj.recipient
    })

    let html = `<li style="list-style-type: none;">

    Dear ${foundAuthor.name} (${foundAuthor.email})
    
    ${letterObj.letter}
    
    Sincerely, ${foundRecipient.name} (${foundrecipient.email})
    ${letterObj.date}
    ${letterObj.topic}
    </li>`
    return html
}