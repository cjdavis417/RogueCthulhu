$(document).ready(function() {
    applyHeader();
})

/* Header functions */

function applyHeader() {
    $('.jumbotron').css({
        height: ($(window).height()) + 'px;'
    });
}


