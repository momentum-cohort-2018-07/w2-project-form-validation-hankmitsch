// Really Long Version variables
var nameField = document.getElementById('name')
// var carYear = document.getElementById('car-year')
// var carMake = document.getElementById('car-make')
// var carModel = document.getElementById('car-model')
// var startDate = document.getElementById('start-date')
// var days = document.getElementById('days')
// var cc = document.getElementById('credit-card')
// var cvv = document.getElementById('cvv')
// var exp = document.getElementById('expiration')

function showError (x) {
    x.parentElement.classList.add('input-invalid')
    x.parentElement.classList.remove('input-valid')
}
function carError (x) {
    x.parentElement.parentElement.classList.add('input-invalid')
    x.parentElement.parentElement.classList.remove('input-valid')
}

function missionComplete (x) {
    x.parentElement.classList.add('input-valid')
    x.parentElement.classList.remove('input-invalid')
}

function carComplete (x) {
    x.parentElement.parentElement.classList.add('input-valid')
    x.parentElement.parentElement.classList.remove('input-invalid')
}

function addMessage (x) {
    var messageDiv = document.createElement('div')
    messageDiv.classList.add('message')
    messageDiv.innerText = 'cannot be blank'
    nameField.parentElement.appendChild(messageDiv)

}

// for (content of inputField) {
//     clearErr(content)
// }





// var fields = [nameField, carYear, carMake, carModel, startDate, days, cc, cvv, exp]


// document.getElementById("parking-form").addEventListener("submit", function(e){
//     e.preventDefault()
   
   
// really long version functions
    // if (nameField.value.trim() === "") {
    //     showError(nameField)
    // } else {missionComplete(nameField)}
        

    // if (carYear.value.trim() === "") {
    //     carError(carYear)}  
    // if (carMake.value.trim() === "") {
    //     carError(carMake)} 
    // if (carModel.value.trim() === "") {
    //     carError(carModel) }    
       

    // if (startDate.value.trim() === "") {
    //     showError(startDate)} else {missionComplete(startDate)}
    // if (days.value.trim() === "") {
    //     showError(days)} else {missionComplete(days)}
    // if (cc.value.trim() === "") {
    //     showError(cc)}  else {missionComplete(cc)}
    // if (cvv.value.trim() === "") {
    //     showError(cvv)} else {missionComplete(cvv)}
    // if (exp.value.trim() === "") {
    //     showError(exp)} else {missionComplete(exp)}

// })

// //// Much Shorter Version

var fields = document.querySelectorAll('input')
var carYear = document.getElementById('car-year')
var carMake = document.getElementById('car-make')
var carModel = document.getElementById('car-model')

var carFields = [carYear, carMake, carModel]


document.getElementById("parking-form").addEventListener("submit", function(e){
    e.preventDefault()
 

    
    // var errorMsg = fields.parentElement.querySelector('.error-msg')
    // if (errorMsg) {
    //   errorMsg.remove()
    // }
 
    for (content of fields) {
        if (content.value.trim() === "") {
        showError(content)
        addMessage(content)
            } else {
        missionComplete(content)
            }
        }
    //  for car field
    for (content of carFields)
        if (content.value.trim() === "") {
        carError(content)
        } 

        if (carFields[0].value.trim() !== "" && 
            carFields[1].value.trim() !== "" &&
            carFields[2].value.trim() !== "") {
                carComplete(content)
            }
        
    
})
    


    // if (cvv.value.isNaN) {
    //     showError(document.getElementById('cvv'))
    // }
