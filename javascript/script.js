//Aynsc function to fetch the data from the json file
async function fetchData() {
    const requestURL = "../data.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

const promise = fetchData();
promise.then(data => {
    populateDOM(data);
})
.catch(error => {
    console.log(`Could not get data: ${error}`);
})

function populateDOM() {
    //Now, we just need to make the HTML elements with this data
    //Fun Fun and super fun
}