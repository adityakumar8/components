var priceUpdate = document.querySelectorAll(".table-data")[0];

var serverURL = "https://jsonplaceholder.typicode.com/users";

function getPriceData(input) {
    return serverURL + "?" + "text" + input
}


function clickHandler() {
    var txtInput = document.querySelectorAll(".table-data")[1];
    console.log(txtInput);

    var data = txtInput.value;

    fetch(getPriceData('gh'))
    .then(response => response.json())
    .then(json => {
        console.log(json);
        var fetchedData = json.address.city;

        outputData.innerText = fetchedData;
    })
    
}

priceUpdate.addEventListener("click", clickHandler)

// priceUpdate.addEventListener("click", function eventHandler() {
//     console.log("clicked!");
// });


// function clickEventHandler() {
//     console.log("clicked!");
// }
// priceUpdate.addEventListener("click",clickEventHandler)
