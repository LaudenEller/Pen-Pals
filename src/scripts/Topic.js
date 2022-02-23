import { getTopics } from "./DataAccess.js";

const topics = getTopics()

export const Topics = () => {
    let html = `<ul class="topic">`
    topics.forEach(topic => {
        return `<li> <input type="radio" name="topics" id="tpoics--${topic.id}"/> ${topic.name} </li>`
    })
    html += topics
    html += `</ul>`
    return html
}