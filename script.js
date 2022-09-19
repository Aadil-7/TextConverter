const text = document.getElementById(`textarea`)
const btn = document.getElementById(`capitalize`)

btn.onclick = () => {
    let textValue = text.value.split(' ')
    let capWords = []
    if (textValue[textValue.length - 1] === '') {
        textValue.pop()
        textValue.forEach(function (element) {
            capWords.push(element[0].toUpperCase() + element.slice(1, element.length))
            return capWords
        });
    } else {

        textValue.forEach(function (element) {
            capWords.push(element[0].toUpperCase() + element.slice(1, element.length).toLowerCase())
            return capWords
        });
    }
    text.value = capWords.join(' ')
}

const upperCase = document.getElementById(`uppercase`)
upperCase.onclick = ()=>{
    let textValue = text.value.toUpperCase()
    text.value = textValue
}

const lowerCase = document.getElementById(`lowercase`)
lowerCase.onclick = ()=>{
    let textValue = text.value.toLowerCase()
    text.value = textValue
}