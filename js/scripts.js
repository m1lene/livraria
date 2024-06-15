const changeThemeBtn = document.querySelector("#change-theme")

changeThemeBtn.addEventListener("change", function(){
    document.body.classList.toggle("dark");
})


$(function(){
    abrirJanela();
    verificarCliqueFechar();

    function abrirJanela(){
        $('.btn').click(function(e){
            e.stopImmediatePropagation();
            $('.bg').fadeIn();
        });
    }

    function verificarCliqueFechar(){
        var el = $('body,.closeBtn');

        el.click(function(){
            $('.bg').fadeOut();
        })
        
        $('.form').click(function(e){
            e.stopImmediatePropagation()
        })
    }
});
