const inputBox = document.getElementById('search')
const listItem = document.getElementById('listItem')
const inputBtn = document.getElementById('inputBtn')
const newPara = document.getElementById('newPara')

inputBtn.addEventListener('click', () => {
    if (inputBox.value === '') {
      newPara.textContent = "⚠️You can't add an empty task"
    } else {
        newPara.textContent = ''
        const li = document.createElement('li')
        li.innerHTML = inputBox.value
        listItem.appendChild(li)
        const span = document.createElement('span')
        span.innerHTML = 'X'
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData()
})

listItem.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem('data', listItem.innerHTML)
}
function showPreviousTask() {
    listItem.innerHTML = localStorage.getItem('data');
}
showPreviousTask()