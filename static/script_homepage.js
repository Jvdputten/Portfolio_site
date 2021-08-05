let theme = localStorage.getItem('theme')
if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

$(document).on('click', '.theme-dot', function () {
        let mode = this.dataset.mode
        setTheme(mode)
    });

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'static/default_homepage.css'
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'static/blue.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'static/green.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'static/purple.css'
    }

    localStorage.setItem('theme', mode)
}

$('.content-wrapper').load('pages/main.html')

$("#id-contact").click(function(){
    $(".content-wrapper").slideUp(function () {
        $('.content-wrapper').load('pages/contact.html', function () {
            $(".content-wrapper").slideDown();
        });
    });
});

$("#id-main").click(function(){
    $(".content-wrapper").slideUp(function () {
        $('.content-wrapper').load('pages/main.html', function () {
            $(".content-wrapper").slideDown();
        });
    });
});


