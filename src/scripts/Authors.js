import { getAuthors } from "./DataAccess.js";

const authors = getAuthors()

export const Authors = () => {
    let html = `<select id="authorSelectBox">
    <option value="0">Choose Author...</option>`
    const arrayOfAuthors = authors.map( (author) => {
        return `<option value="${author.id}">${author.name}</option>`
    })
    html =+ arrayOfAuthors.join("")
    html += `</select>`
    return html
}