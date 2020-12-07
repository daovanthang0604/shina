$(document).ready(function(){
        $(".best_house__image").hover(function(){
            $(">.overlay_box",this).animate({
                height: "toggle"
            });
        });
   $(".gallery_grid").isotope({
     itemSelector: '.grid-item'
   });
   $(".gallery_filter button").on("click",function(){
     var type = $(this).attr('data-type');
     console.log(type);
     $(".gallery_filter button").removeClass("button-active");
     $(this).addClass(" button-active");
     type = '.'+type;
     $('.gallery_grid').isotope({
         filter:type
      });
      });
    });
