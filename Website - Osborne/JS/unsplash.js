//Access key: 8BjrXDzcvxDXgcdlDo7mgCAJHKP3BLDgKTlrWAwFsO8
//Private key: ZSQ4zxpRw7heN3bem88ObSVsJlfSgrkaKuvVtkXny6s


const api = 'https://api.unsplash.com/photos/?client_id=?8BjrXDzcvxDXgcdlDo7mgCAJHKP3BLDgKTlrWAwFsO8';


//audi = 'https://unsplash.com/photos/XqMiUqByyHA'
//BMW = 'https://unsplash.com/photos/17ibDRPPszE'
//focus = 'https://unsplash.com/photos/t1_slwbaBp8'

//audi= 'https://api.unsplash.com/photos/XqMiUqByyHA&client_id=9XxUx99pLLvdMrq1H2aJOedovrSUDNfc_GfTQIz0_zY'
//focus= 'https://api.unsplash.com/photos/t1_slwbaBp8&client_id=9XxUx99pLLvdMrq1H2aJOedovrSUDNfc_GfTQIz0_zY'


//BMW picture
const BMW = ('https://api.unsplash.com/photos/brblWfwRmtU?client_id=9XxUx99pLLvdMrq1H2aJOedovrSUDNfc_GfTQIz0_zY')

fetch(BMW)
    .then(bmwresponse => bmwresponse.json())
    .then(function(databmw){
        let bmwimage = databmw;
        renderimage(bmwimage);
    })

function renderimage(bmwimage){
    $('#bmw-pic').append('<img ' + 'src =' + bmwimage.urls.full + ' />');
}


const AUDI = ('https://api.unsplash.com/photos/XqMiUqByyHA?client_id=9XxUx99pLLvdMrq1H2aJOedovrSUDNfc_GfTQIz0_zY')

fetch(AUDI)
    .then(audiresponse => audiresponse.json())
    .then(function(dataaudi){
        let audiimage = dataaudi;
        console.log(dataaudi);
        renderimage2(audiimage);
    })

    function renderimage2(audiimage){
        $('#audi-pic').append('<img ' + 'src =' + audiimage.urls.full + ' />');
    }


    const FOCUS = ('https://api.unsplash.com/photos/t1_slwbaBp8?client_id=9XxUx99pLLvdMrq1H2aJOedovrSUDNfc_GfTQIz0_zY')

    fetch(FOCUS)
    .then (focusresponse => focusresponse.json())
    .then (function(datafocus){
        let focusimage = datafocus;
        console.log(focusimage);
        renderimage3(datafocus);
    })

    function renderimage3 (focusimage){
        $('#focus-pic').append('<img ' + 'src =' + focusimage.urls.full + ' />');
    }