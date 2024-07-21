function getweather(){
    const api = '17241a4926cae80e7370f5f82cbb7b1e';
    const location = document.getElementById("location").value;
    const currentweather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api}`
    if(location==""){
        alert("Enter location!!..");
        document.getElementById("location").focus();
    }

    fetch(currentweather)
        .then(response=>response.json())
        .then(data=>{
            displayweather(data);
        })
        .catch(error=>{
            console.error('Error fetching weather :'+error);
        })
}

function displayweather(data){
    const temperature = document.getElementById("temperature");
    const weatherinfo = document.getElementById("weatherinfo");
    const weathericon = document.getElementById("weathericon");
    const forecast = document.getElementById("forecast");
    const cityname = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const iconcode = data.weather[0].icon;
    const icon = `http://openweathermap.org/img/wn/${iconcode}@2x.png`;

    temperature.innerHTML = `${temp}°C`;
    weatherinfo.innerHTML = `${description}, ${cityname}`;
    weathericon.src = icon;
    weathericon.alt = description;
    showimg()
}
function showimg(){
    const weathericon = document.getElementById("weathericon");
    weathericon.style.display='block';
}