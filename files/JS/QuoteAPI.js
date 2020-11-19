
//sending fetch request to local server for the json file
fetch('/quotes')
.then(response => response.json())
.then(function(data){
    let quotes = data;
    genQuotes(quotes);
});


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// function checkDupe(x, index){
//     //     if(quoteNumbers[index] == x) {
//     //         replaceDupe(x, index)
//     // }

//     for (let i = 0; i < 8; i++)
//     {
//         if (quoteNumbers[i] == x)
//         {
//             replaceDupe(x, index);
//             console.log(quoteNumbers[i], x)
//         }
//         else
//         {
//             quoteNumbers[i] = quoteNumbers[i]
//         }
//     }

//     console.log(quoteNumbers);
// }

// function replaceDupe(x, index) {
//     quoteNumbers[index] = randomInt(0,52);
//     console.log("DUPE")
// }

var quoteNumbers = [];

function genQuotes(quotes){

    for (let i = 0; i < 8; i++)
    {
        var temp = randomInt(0,52);

        quoteNumbers[i] = temp;

    }


    // quoteNumbers.forEach((x, index) => {
    //     checkDupe(x, index);
    // })

    
    $('#quote1').append(quotes[quoteNumbers[0]].text);
    $('#quote2').append(quotes[quoteNumbers[1]].text);
    $('#quote3').append(quotes[quoteNumbers[2]].text);
    $('#quote4').append(quotes[quoteNumbers[3]].text);
    $('#quote5').append(quotes[quoteNumbers[4]].text);
    $('#quote6').append(quotes[quoteNumbers[5]].text);
    $('#quote7').append(quotes[quoteNumbers[6]].text);
    $('#quote8').append(quotes[quoteNumbers[7]].text);
}