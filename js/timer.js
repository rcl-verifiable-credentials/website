﻿function updateTimer() {
    try {
        future = Date.parse(document.getElementById("event-start-date").value);
        now = new Date();
        diff = future - now;

        if (diff < 0) {
            document.getElementById("event-start").style.display = 'block';
            document.getElementById("timer").style.display = 'none';
        }
        else {
            days = Math.floor(diff / (1000 * 60 * 60 * 24));
            hours = Math.floor(diff / (1000 * 60 * 60));
            mins = Math.floor(diff / (1000 * 60));
            secs = Math.floor(diff / 1000);

            d = days;
            h = hours - days * 24;
            m = mins - hours * 60;
            s = secs - mins * 60;

            document.getElementById("timer")
                .innerHTML =
                '<div>' + d + '<span>Days</span></div>' +
                '<div>' + h + '<span>Hours</span></div>' +
                '<div>' + m + '<span>Minutes</span></div>' +
                '<div>' + s + '<span>Seconds</span></div>';
        }
    }
    catch (e) { }
}
setInterval('updateTimer()', 1000);