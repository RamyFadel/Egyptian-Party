// section one
$(".openNav").click(function () { 
$("#leftMenu").animate({width:"200px"},100)
$("#home-content").animate({marginLeft :'200px'},100)
$("#count").animate({marginLeft :'200px'},100)
$("#contact-us").animate({marginLeft :'200px'},100)
});

$(".closebtn").click(function () { 
    $("#leftMenu").animate({width:"0px"},100)
    $("#home-content").animate({marginLeft :'0px'},100)
    $("#sliderDown").animate({width:'50%'},100)
    $("#count").animate({marginLeft :'0px'},100)
    $("#contact-us").animate({marginLeft :'0px'},100)
        
    });

    $("#leftMenu a").click(function(){
    
        var sectionId= $(this).attr("href");
        
        var positionOfSection = $(sectionId).offset().top;
        
        $("html , body").animate({scrollTop:positionOfSection},900);
        
    })
    
    // section two
    $('#sliderDown .toggle').click(function() {
        $('.inner').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);

      });


      // section three

      function countdown(targetDate) {
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
        const mins = Math.floor(timeDifference / 1000 / 60) % 60;
        const secs = Math.floor(timeDifference / 1000) % 60;
       
        $(".days").html(`${days}D`)
        $(".hours").html(`${hours}h`)
        $(".minutes").html(`${mins}m`)
        $(".seconds").html(`${secs}s`)
        setInterval(function(){countdown(targetDate)},1000)
      }
      
      const targetDate = new Date("october 20, 2023").getTime();
countdown(targetDate);

      // section four
      let maxLength = 100;
$("#textUP").keyup(function(){
let length=$("#textUP").val().length
let difference= maxLength-length

if(difference<=0){
  $("#chars").text(`your available character finished`);

}else{
  $("#chars").text(`${difference}`);
}


})
