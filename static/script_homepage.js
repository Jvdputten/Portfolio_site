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

$('.content-wrapper').load('pages/publications.html')

$("#id-contact").click(function(){
    $(".content-wrapper").slideUp(function () {
        $('.content-wrapper').load('pages/contact.html', function () {
            $(".content-wrapper").slideDown();
        });
    });
});

$("#id-main").click(function(){
    $(".content-wrapper").slideUp(function () {
        $('.content-wrapper').load('pages/home.html', function () {
            $(".content-wrapper").slideDown();
        });
    });
});

$("#id-about").click(function(){
    $(".content-wrapper").slideUp(function () {
        $('.content-wrapper').load('pages/about.html', function () {
            $(".content-wrapper").slideDown();
        });
    });
});

$("#id-projects").click(function(){
    $(".content-wrapper").slideUp(function () {
        $('.content-wrapper').load('pages/projects.html', function () {
            $(".content-wrapper").slideDown();
        });
    });
});

$("#id-publications").click(function(){
    $(".content-wrapper").slideUp(function () {
        $('.content-wrapper').load('pages/publications.html', function () {
            $(".content-wrapper").slideDown();
        });
    });
});


