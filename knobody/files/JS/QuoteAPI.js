
//sending fetch request to local server for the json file
fetch('http://localhost:3000/quotes')
.then(response => response.json())
.then(function(data){
    console.log(data);
    let quotes = data;
    addtohtml(quotes);
});

function addtohtml(quotes){
    $('#quote1').append(quotes[0].test);
}