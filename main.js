        const apiKey = "309e68a3adb7fa3e7115e61c39b922eb";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector("#searchBox");
        const searchBtn = document.querySelector("#searchBtn");
        
        
        async function checkWeather(city) {
            const result = await fetch(apiUrl + city + `&appid=${apiKey}`);
            let data = await result.json();
            console.log(data)
            
            
            document.querySelector("#cityName").innerHTML = data.name;
            document.querySelector("#cityTemp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector("#cityHumidity").innerHTML = data.main.humidity + "%";
            document.querySelector("#cityWind").innerHTML = data.wind.speed + " Km/h";
            
        }
        
        searchBtn.addEventListener("click", (event)=> {
            event.preventDefault();
            checkWeather(searchBox.value);
            /* console.log(searchBox.value); */
        });