const factEl = document.getElementById('fact')
const factBtn = document.getElementById('factBtn')

factBtn.addEventListener('click', generateFact)

generateFact()

function generateFact() {
    fetch('https://rest.blackhistoryapi.io/fact/random', {
        headers: {
            'Accept': 'application/json',
            'X-api-key': 'bW9uaWNhZG9sY2VtYXNjb2xvRnJpIE'
        }
    })
    .then((res) => res.json())
        .then((data) => {
        factEl.innerHTML = data.Results[0].text
        })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

}






// generateFact()

// function generateFact() {
//     fetch('https://rest.blackhistoryapi.io/fact/random', {
//         headers: {
//             'Accept': 'application/json',
//             'X-api-key': 'bW9uaWNhZG9sY2VtYXNjb2xvRnJpIE'
//         }
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         factEl.innerHTML = data.text
//     })
// }

// async function generateFact() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         },
//     }
//     const res = await fetch('https://rest.blackhistoryapi.io/fact/random?q={length}&apiKey={bW9uaWNhZG9sY2VtYXNjb2xvRnJpIE}', config)
    
//     const data = await res.json()

//     factEl.innerHTML = data.text
// }