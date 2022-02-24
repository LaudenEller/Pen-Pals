//change this form to represent acutal desired html output (add radio buttons/fields/dropdown boxes where applicable)
//Export a function that returns the letter form HTML
export const letterForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="letterForm">Letter</label>
    <input type="text" name="letterForm" class="input" />
    </div>
`

    return html
}