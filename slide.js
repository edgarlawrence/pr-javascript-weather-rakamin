function animatedWeather() {
$(document).ready(function() {
    $('#sunnyBtn').click(function() {
       $("#weatherForm").animate({
            left: '0%',
        }, 1500 )
    })     
})}

function animateTheme() {
    $(document).ready(function() {
        $('#themeBtn').click(function() {
           $("#colorForm").animate({
                right: '0%',
                left: '50%'
            }, 1500 )
        })     
    })}

document.getElementById("sunnyBtn").onclick = animatedWeather();
document.getElementById("themeBtn").onclick = animateTheme();