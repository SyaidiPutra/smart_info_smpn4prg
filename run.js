const body = $('body')

var pageDefault = 'home.html'

$.get('app/id/home.html', function (view) {
    body.html(view)
});


function goPage(url) {
    console.log(url);
    $.ajax({
        url: 'app/id/' + url + '.html',
        type: "get",
        beforeSend: function(){
            body.html(`
            <div class="position-absolute vw-100 vh-100 bg-dark">
            <div class="position-absolute top-50 start-50 translate-middle">
                <img src="./assets/img/logo.png" alt="">
                <br>
                <div class="d-flex justify-content-center">
                    <div class="spinner-border text-light" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
            `)
        },
        success: function(data){
           body.html(data)
        },
        error: function () {
            body.html(`
            <div class="position-absolute vw-100 vh-100 bg-dark">
                <div class="position-absolute top-50 start-50 translate-middle">
                    <h1 class="text-white">Page Not Found</h1>
                </div>
            </div>
            `)
        }
    });
}
