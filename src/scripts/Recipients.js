import { getRecipients } from "./DataAccess.js";

export const Recipients = () => {
    const recipients = getRecipients()
    let html = `<select id="recipientSelectBox">
    <option value="0">Choose Recipient...</option>`
    for (const recipient of recipients) {
        html += `<option value="${recipient.id}">${recipient.name}</option>`
    }
    html += `</select>`
    return html
}