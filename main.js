jQuery(function ($) {
    var date = new Date('November 8, 2020 14:20:00');
    var days = $('#days');
    var hours = $('#hours');
    var minutes = $('#minutes');
    var seconds = $('#seconds');

    setDate();
    function setDate() {
        var now = new Date();
        var s = ((now.getTime() - date.getTime()) / 1000);

        var d = Math.floor(s / 86400);
        days.html('<h2>'+ (d<0? 0 : d) +'</h2><p>J.</p>');
        s -= d *86400;

        var h = Math.floor(s / 3600);
        hours.html( '<h2>'+ (d<0? 0 : h) +'</h2><p>H.</p>');
        s -= h*3600;

        var m = Math.floor(s / 60);
        minutes.html('<h2>'+ (d<0? 0 : m) +'</h2><p>M.</p>');
        s -= m*60;

        s=Math.floor(s);
        seconds.html( '<h2>'+ (d<0? 0 : s) +'</h2><p>S.</p>');

        setTimeout(setDate,1000);
    }
});
