var activeid="";

$(document).ready(function() { 
    var side_sec_h=$('#side').width();
    var side_sec_w=$('#side').height();
    $('.side-section').css({"height":side_sec_h, width:side_sec_w});
    
    $('.sidenav').sidenav({
        onOpenStart: function(){updateSideBarButton(open=false)},
        onCloseStart: function(){updateSideBarButton(open=true)},
    });
    
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.slider').slider({height:800});
   	$('.scrollspy').scrollSpy({
        getActiveElement: function (id) {
        if (activeid!=id){
        		animatetextchange(id);
            	activeid=id;
        	}                  
    	}
    });
    
    $('#side').click(function(){
     var elem=document.getElementById('sidenav-9');
     var instance = M.Sidenav.getInstance(elem);
     if(instance.isOpen==true){
         instance.close();
     }
     else{
      instance.open();   
     }
    });
                             
});

function animatetextchange(id){
    $('.side-section').animate({'opacity': 0}, 100, function () {
            $(this).text(id);}).animate({'opacity': 1}, 1000);
            
}

function updateSideBarButton(open){
    
    if (open==true){
        animatetextchange(activeid);
    }
    else{
    	animatetextchange("Menu");   
    }
    var butt=document.getElementById("butt");
    butt.classList.toggle('opened');
    butt.setAttribute('aria-expanded', butt.classList.contains('opened'))
}


window.onscroll = function() {updateProgress()};
function updateProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("pgbar").style.width = scrolled + "%";
}