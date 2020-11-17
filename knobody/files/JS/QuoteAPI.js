
//sending fetch request to local server for the json file
fetch('http://localhost:3000/quotes')
.then(response => response.json())
.then(function(data){
    console.log(data);
    let quotes = data;
    genQuotes(quotes);
});

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function genQuotes(quotes){

    var quoteNumbers = [];

    for (let i = 0; i < 8; i++)
    {
        quoteNumbers.push(randomInt(0,52));
    }

    var noDouble = quoteNumbers.reduce(function(a,b){
        if (a.indexOf(b) < 0) a.push(b)
        {
            return 0;
        }
    },[]);

    $('#quote1').append(quotes[noDouble[0]].text);
    $('#quote2').append(quotes[noDouble[1]].text);
    $('#quote3').append(quotes[noDouble[2]].text);
    $('#quote4').append(quotes[noDouble[3]].text);
    $('#quote5').append(quotes[noDouble[4]].text);
    $('#quote6').append(quotes[noDouble[5]].text);
    $('#quote7').append(quotes[noDouble[6]].text);
    $('#quote8').append(quotes[noDouble[7]].text);
}