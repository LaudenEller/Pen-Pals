import { getRecipients } from "./DataAccess.js";

const recipients = getRecipients()

export const Recipients = () => {
    let html = `<select id="recipientSelectBox">
    <option value="0">Choose Recipient...</option>`
    const arrayOfRecipients = recipients.map( (recipient) => {
        return `<option value="${recipient.id}">${recipient.name}</option>`
    })
    html =+ arrayOfRecipients.join("")
    html += `</select>`
    return html
}