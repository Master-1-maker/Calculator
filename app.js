const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-allclear]')
const equalsButton = document.querySelector('[data-equals]')
const currentOperation = document.getElementById('operationCurrent')



numberButtons.forEach((button) => button.addEventListener('click', () => appendNumber(button.textContent))) 
operatorButtons.forEach((button) => button.addEventListener('click', () => appendOperator(button.textContent)))

deleteButton.addEventListener('click',delete1)
allClearButton.addEventListener('click',allclear)
equalsButton.addEventListener('click',setOperation)

function appendNumber(number){
    currentOperation.textContent += number
}
function appendOperator(operator) {
    currentOperation.textContent += operator
}

function setOperation() {
    try{
        currentOperation.textContent = eval(currentOperation.textContent)
    } catch{
        currentOperation.innerText = "Error mate!"
    }
}


function allclear() {
 currentOperation.textContent = ''
}

function delete1() {
    currentOperation.textContent = currentOperation.textContent.slice(0,-1);
}

