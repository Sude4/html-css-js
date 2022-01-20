

function test(){
    document.getElementById("menu-acilir").classList.toggle("goster")
}

var counter=1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 4){
    counnter = 1;
}
}, 5000);
$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50){
            $(".yukari").fadeIn(500);
        }else{
            $(".yukari").fadeOut(500);
        }
    });
$(".yukari").click(function(){
    $("html, body").animate({ scrollTop: "0"}, 500);
});

});

