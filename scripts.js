$(".loader").hide();

function enlace(href){
    $(".loader").show();
    $("#section").fadeOut(1000,function(){
        $(this).load(href).fadeIn(2000);
    });
    return false;
}