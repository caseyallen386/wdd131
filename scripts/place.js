
// In your JavaScript file, provide code to support the following requirements:

//     Use JavaScript to display the wind chill factor in the "Weather" section of the page as shown in the examples. The wind chill factor should be calculated and displayed when the page loads.
//     At this point in the course, you should define variables that use static values for the temperature and wind speed, matching the static, displayed values you have in your weather section content.

//     The next course will cover how to use third-party APIs to get real-time weather data.
//     Write a function named "calculateWindChill" that returns the wind chill factor when passed the necessary arguments (temperature and wind speed). The function should use one line of code that returns the result of the wind chill calculation. Your formula should be based upon the location's preferred units (°C or °F).

//     Using AI to help determine this formula might be a good approach.
//     Do not call the calculateWindChill function unless the following conditions are met:
//     Viable Wind Chill Calculations
//     	Metric 	Imperial (English)
//     Temperature 	<= 10 °C 	<= 50 °F
//     Wind speed 	> 4.8 km/h 	> 3 mph
//     If the conditions are not met, then display "N/A", which means "not applicable". 

function calculateWindChill(temp, windSpeed) {
    return 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16
}

(function(){
    const tempLabel       = document.getElementById('temp'),
          conditionLabel  = document.getElementById('conditions'),
          windLabel       = document.getElementById('wind'), 
          windChillLabel  = document.getElementById('wind-chill');

    let temp       = 50,
        wind       = 2,
        conditions = 'Clear',
        windChill  = null;

    if (temp <= 50 && wind > 3) {
        windChill = Math.round(calculateWindChill(temp, wind));
    }

    tempLabel.innerHTML = `${temp}&#176;F`;
    conditionLabel.innerHTML = conditions;
    windLabel.innerHTML = `${wind} mph`;
    windChillLabel.innerHTML = (windChill) ? `Feels like ${windChill}&#176;F` : 'N/A' 
    

})();