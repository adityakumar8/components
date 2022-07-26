let priceUpdate = document.querySelectorAll(".table-data")[3];

let serverURL = "https://jsonplaceholder.typicode.com/users";

function getPriceData(input) {
    return serverURL + "?" + "text" + input
}


function clickHandler() {
    fetch(getPriceData(data))
    .then(response => response.json())
    .then(json => {

    })
}
// priceUpdate.addEventListener("click", function eventHandler() {
//     console.log("clicked!");
// });


// function clickEventHandler() {
//     console.log("clicked!");
// }
// priceUpdate.addEventListener("click",clickEventHandler)
