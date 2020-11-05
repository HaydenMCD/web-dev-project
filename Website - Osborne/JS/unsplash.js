//Access key: 8BjrXDzcvxDXgcdlDo7mgCAJHKP3BLDgKTlrWAwFsO8
//Private key: ZSQ4zxpRw7heN3bem88ObSVsJlfSgrkaKuvVtkXny6s


const api = 'https://api.unsplash.com/photos/?client_id=?8BjrXDzcvxDXgcdlDo7mgCAJHKP3BLDgKTlrWAwFsO8';


//const audi = 'https://unsplash.com/photos/XqMiUqByyHA'
//const BMW = 'https://unsplash.com/photos/17ibDRPPszE'
//const focus = 'https://unsplash.com/photos/t1_slwbaBp8'

//const audiDriver= 'https://unsplash.com/photos/ILip77SbmOE'
//const BWMDriver= 'https://api.unsplash.com/photos/brblWfwRmtU&client_id=9XxUx99pLLvdMrq1H2aJOedovrSUDNfc_GfTQIz0_zY'
//const focusDriver= 'https://unsplash.com/photos/VVEwJJRRHgk'



//BMW picture
const BMW = 'https://api.unsplash.com/photos/brblWfwRmtU?client_id=9XxUx99pLLvdMrq1H2aJOedovrSUDNfc_GfTQIz0_zY'

fetch(BMW)
    .then(response => response.json())
    .then(function(data){
        let image = data;
        renderimage(image);
    })

function renderimage(image){
    console.log(image);
    $('#bmw-pic').append('<img ' + 'src =' + image.urls.full + ' />');
}