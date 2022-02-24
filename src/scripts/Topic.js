import { getTopics } from "./DataAccess.js";


export const Topics = () => {
    const topics = getTopics()
    let html = `<ul class="topic", style="list-style-type:none">`
    topics.forEach(topic => {
        html += `<li> <input type="radio" name="topics" id="topics--${topic.id}"/> ${topic.topic} </li>`
    })
    html += `</ul>`
    return html
}