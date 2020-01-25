//FetchAPI is a browser based API and is not part of JS
//Not accessible in nodeJS.


// const button = document.querySelector('#1')

// const messageOne = document.querySelector('#message-1')
// messageOne.textContent = 'Loading....'

// function display() {
//     messageOne.textContent = 'Hello'

//     fetch('/list').then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 messageOne.textContent = data.error
//             } else {
//                 messageOne.textContent = 'Hello'
//             }
//         })
//     })

// }

// button.addEventListener('click', (e) => {

//     messageOne.textContent = 'Loading....'


//     //to prevent from reloading the page when we click on button.
//     e.preventDefault()

//     //fetch data from the url and then process.
//     fetch('/list').then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 messageOne.textContent = data.error
//             } else {
//                 messageOne.textContent = data.location
//             }
//         })
//     })
// })