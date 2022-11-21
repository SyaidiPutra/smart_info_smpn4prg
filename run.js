const body = $('body')

var pageDefault = 'home.html'

$.get('app/id/home.html', function (view) {
    body.html(view)
});

$('a').click(function (e) {
    e.preventDefault()
})