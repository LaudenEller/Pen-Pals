import { getAuthors } from "./DataAccess.js";

export const Authors = () => {
    const authors = getAuthors()
    let html = `<select id="authorSelectBox">
    <option value="0">Choose Author...</option>`
    for (const author of authors) {
        html += `<option value="${author.id}">${author.name}</option>`
    }
    html += `</select>`
    return html
}