function countdown(){
   const future = new Date("October 29, 2021, 00:00:00").getTime();
   const now = new Date().getTime();
    var gap = future - now;
    

    // How time works

    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Getting the countdown values

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textminute = Math.floor((gap % hour) / minute);
    const textsecond = Math.floor((gap % minute) / seconds);

    // Putting our values into the HTML file
    document.querySelector('.time-day').innerText = textDay;
    document.querySelector('.time-hour').innerText = textHour;
    document.querySelector('.time-minute').innerText = textminute;
    document.querySelector('.time-seconds').innerText = textsecond;
}


setInterval(countdown, 1000);