var controller = new ScrollMagic.Controller();
var hookTrigger = 0.7;
start = new ScrollMagic.Scene({triggerElement: "#perkantoran"})
                                 .triggerHook(0.5)
                                 .on("enter",(e)=>{
                                    $('.side-menu').removeClass('hide-right').addClass('show-left')
                                    $('.share-side').addClass('open').removeClass('close')
                                 })
                                 .on("leave",(e)=>{
                                    $('.side-menu').addClass('hide-right').removeClass('show-left')
                                    $('.share-side').addClass('close').removeClass('open')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
kantor1 = new ScrollMagic.Scene({triggerElement: "#kantor1"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageKantor1').addClass('bounceInDown').removeClass('hide')
                                    $('#descRightKantor1').addClass('slideInRight').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageKantor1').addClass('hide').removeClass('bounceInDown')
                                    $('#descRightKantor1').addClass('hide').removeClass('slideInRight')
                                 })
                                //  //  .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);
kantor2 = new ScrollMagic.Scene({triggerElement: "#kantor2"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageKantor2').addClass('bounceInDown').removeClass('hide')
                                    $('#descLeftKantor2').addClass('slideInLeft').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageKantor2').addClass('hide').removeClass('bounceInDown')
                                    $('#descLeftKantor2').addClass('hide').removeClass('slideInLeft')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
kantor3 = new ScrollMagic.Scene({triggerElement: "#kantor3"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageKantor3').addClass('bounceInDown').removeClass('hide')
                                    $('#descRightKantor3').addClass('slideInRight').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageKantor3').addClass('hide').removeClass('bounceInDown')
                                    $('#descRightKantor3').addClass('hide').removeClass('slideInRight')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
kantor4 = new ScrollMagic.Scene({triggerElement: "#kantor4"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageKantor4').addClass('bounceInDown').removeClass('hide')
                                    $('#descLeftKantor4').addClass('slideInLeft').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageKantor4').addClass('hide').removeClass('bounceInDown')
                                    $('#descLeftKantor4').addClass('hide').removeClass('slideInLeft')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
kantor5 = new ScrollMagic.Scene({triggerElement: "#kantor5"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageKantor5').addClass('bounceInDown').removeClass('hide')
                                    $('#descRightKantor5').addClass('slideInRight').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageKantor5').addClass('hide').removeClass('bounceInDown')
                                    $('#descRightKantor5').addClass('hide').removeClass('slideInRight')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
pasar1 = new ScrollMagic.Scene({triggerElement: "#pasar1"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imagePasar1').addClass('bounceInDown').removeClass('hide')
                                    $('#descRightPasar1').addClass('slideInRight').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imagePasar1').addClass('hide').removeClass('bounceInDown')
                                    $('#descRightPasar1').addClass('hide').removeClass('slideInRight')
                                 })
                                 //  .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);
pasar2 = new ScrollMagic.Scene({triggerElement: "#pasar2"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imagePasar2').addClass('bounceInDown').removeClass('hide')
                                    $('#descLeftPasar2').addClass('slideInLeft').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imagePasar2').addClass('hide').removeClass('bounceInDown')
                                    $('#descLeftPasar2').addClass('hide').removeClass('slideInLeft')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
pasar3 = new ScrollMagic.Scene({triggerElement: "#pasar3"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imagePasar3').addClass('bounceInDown').removeClass('hide')
                                    $('#descRightPasar3').addClass('slideInRight').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imagePasar3').addClass('hide').removeClass('bounceInDown')
                                    $('#descRightPasar3').addClass('hide').removeClass('slideInRight')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
pasar4 = new ScrollMagic.Scene({triggerElement: "#pasar4"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imagePasar4').addClass('bounceInDown').removeClass('hide')
                                    $('#descLeftPasar4').addClass('slideInLeft').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imagePasar4').addClass('hide').removeClass('bounceInDown')
                                    $('#descLeftPasar4').addClass('hide').removeClass('slideInLeft')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
pasar5 = new ScrollMagic.Scene({triggerElement: "#pasar5"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imagePasar5').addClass('bounceInDown').removeClass('hide')
                                    $('#descRightPasar5').addClass('slideInRight').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imagePasar5').addClass('hide').removeClass('bounceInDown')
                                    $('#descRightPasar5').addClass('hide').removeClass('slideInRight')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
ritel1 = new ScrollMagic.Scene({triggerElement: "#ritel1"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageRitel1').addClass('bounceInDown').removeClass('hide')
                                    $('#descRightRitel1').addClass('slideInRight').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageRitel1').addClass('hide').removeClass('bounceInDown')
                                    $('#descRightRitel1').addClass('hide').removeClass('slideInRight')
                                 })
                                 //  .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);
ritel2 = new ScrollMagic.Scene({triggerElement: "#ritel2"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageRitel2').addClass('bounceInDown').removeClass('hide')
                                    $('#descLeftRitel2').addClass('slideInLeft').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageRitel2').addClass('hide').removeClass('bounceInDown')
                                    $('#descLeftRitel2').addClass('hide').removeClass('slideInLeft')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
ritel3 = new ScrollMagic.Scene({triggerElement: "#ritel3"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageRitel3').addClass('bounceInDown').removeClass('hide')
                                    $('#descRightRitel3').addClass('slideInRight').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageRitel3').addClass('hide').removeClass('bounceInDown')
                                    $('#descRightRitel3').addClass('hide').removeClass('slideInRight')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
ritel4 = new ScrollMagic.Scene({triggerElement: "#ritel4"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageRitel4').addClass('bounceInDown').removeClass('hide')
                                    $('#descLeftRitel4').addClass('slideInLeft').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageRitel4').addClass('hide').removeClass('bounceInDown')
                                    $('#descLeftRitel4').addClass('hide').removeClass('slideInLeft')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
ritel5 = new ScrollMagic.Scene({triggerElement: "#ritel5"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageRitel5').addClass('bounceInDown').removeClass('hide')
                                    $('#descRightRitel5').addClass('slideInRight').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageRitel5').addClass('hide').removeClass('bounceInDown')
                                    $('#descRightRitel5').addClass('hide').removeClass('slideInRight')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
// restoran1 = new ScrollMagic.Scene({triggerElement: "#restoran1"})
//                                  .triggerHook(hookTrigger)
//                                  .on("enter",(e)=>{
//                                     $('#imageRestoran1').addClass('bounceInDown').removeClass('hide')
//                                     $('#descRightRestoran1').addClass('slideInRight').removeClass('hide')
//                                  })
//                                  .on("leave",(e)=>{
//                                     $('#imageRestoran1').addClass('hide').removeClass('bounceInDown')
//                                     $('#descRightRestoran1').addClass('hide').removeClass('slideInRight')
//                                  })
//                                  //  .addIndicators({name: "1 (duration: 0)"})
//                                  .addTo(controller);
restoran2 = new ScrollMagic.Scene({triggerElement: "#restoran2"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageRestoran2').addClass('bounceInDown').removeClass('hide')
                                    $('#descLeftRestoran2').addClass('slideInLeft').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageRestoran2').addClass('hide').removeClass('bounceInDown')
                                    $('#descLeftRestoran2').addClass('hide').removeClass('slideInLeft')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
restoran3 = new ScrollMagic.Scene({triggerElement: "#restoran3"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageRestoran3').addClass('bounceInDown').removeClass('hide')
                                    $('#descRightRestoran3').addClass('slideInRight').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageRestoran3').addClass('hide').removeClass('bounceInDown')
                                    $('#descRightRestoran3').addClass('hide').removeClass('slideInRight')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
restoran4 = new ScrollMagic.Scene({triggerElement: "#restoran4"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageRestoran4').addClass('bounceInDown').removeClass('hide')
                                    $('#descLeftRestoran4').addClass('slideInLeft').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageRestoran4').addClass('hide').removeClass('bounceInDown')
                                    $('#descLeftRestoran4').addClass('hide').removeClass('slideInLeft')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
restoran5 = new ScrollMagic.Scene({triggerElement: "#restoran5"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageRestoran5').addClass('bounceInDown').removeClass('hide')
                                    $('#descRightRestoran5').addClass('slideInRight').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageRestoran5').addClass('hide').removeClass('bounceInDown')
                                    $('#descRightRestoran5').addClass('hide').removeClass('slideInRight')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
restoran6 = new ScrollMagic.Scene({triggerElement: "#restoran6"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#imageRestoran6').addClass('bounceInDown').removeClass('hide')
                                    $('#descLeftRestoran6').addClass('slideInLeft').removeClass('hide')
                                 })
                                 .on("leave",(e)=>{
                                    $('#imageRestoran6').addClass('hide').removeClass('bounceInDown')
                                    $('#descLeftRestoran6').addClass('hide').removeClass('slideInLeft')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
btn1 = new ScrollMagic.Scene({triggerElement: "#ritel"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#btn-ritel').addClass('active')
                                    $('#btn-perkantoran').removeClass('active')
                                 })
                                 .on("leave",(e)=>{
                                    $('#btn-perkantoran').addClass('active')
                                    $('#btn-ritel').removeClass('active')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
btn2 = new ScrollMagic.Scene({triggerElement: "#pasar"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#btn-pasar').addClass('active')
                                    $('#btn-ritel').removeClass('active')
                                 })
                                 .on("leave",(e)=>{
                                    $('#btn-ritel').addClass('active')
                                    $('#btn-pasar').removeClass('active')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
btn3 = new ScrollMagic.Scene({triggerElement: "#restoran"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#btn-restoran').addClass('active')
                                    $('#btn-pasar').removeClass('active')
                                 })
                                 .on("leave",(e)=>{
                                    $('#btn-pasar').addClass('active')
                                    $('#btn-restoran').removeClass('active')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
end = new ScrollMagic.Scene({triggerElement: "#end"})
                                 .triggerHook(0.7)
                                 .on("enter",(e)=>{
                                    $('#btn-restoran').removeClass('active')
                                    $('.side-menu').addClass('hide-right').removeClass('show-left')
                                    $('.share-side').addClass('close').removeClass('open')
                                 })
                                 .on("leave",(e)=>{
                                    $('#btn-restoran').addClass('active')
                                    $('.side-menu').removeClass('hide-right').addClass('show-left')
                                    $('.share-side').addClass('open').removeClass('close')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
function changeLanguage(e) {
   var id = $(e).data('id')
   $('.country').attr('class','country')
   $('.id-content').hide()
   $('.en-content').hide()
   $('#'+id+'-country').attr('class','country active')
   $('.'+id+'-content').fadeIn('slow')
   window.history.pushState("", "", "hhttps://ginanjarpamungkas.github.io/akses/index.html?lg="+id+"");
   $('#id-country-dropdown').data('id',0)
   $('#en-country-dropdown').data('id',0)
   $('.fa-angle-up').attr('class','fa fa-angle-down')
   $('.dropdown').slideUp('slow');
}  
function dropdown(e) {
   if ($(e).data('id') != 1) {
      $('.dropdown').slideDown('slow');
      $(e).data('id',1)
      $('.fa-angle-down').attr('class','fa fa-angle-up')
   } else {
      $('.dropdown').slideUp('slow');
      $(e).data('id',0)
      $('.fa-angle-up').attr('class','fa fa-angle-down')
   }
}
$(document).ready(function() {
   var url = new URL(document.URL);
   var urlP = url.searchParams;
   var language = 'id';
   if (urlP.has('lg')) {
      language = urlP.get('lg')
   }
   $('.id-content').hide()
   $('.en-content').hide()
   $('#'+language+'-country').attr('class','country active')
   $('.'+language+'-content').fadeIn('slow')
   window.history.pushState("", "", "http://localhost/akses/index.html?lg="+language+"");
})

$(document).ready(function(){
	$('.burger-container').click(function(){
        $(this).toggleClass('open');
        $('.menu-navbar').toggleClass('open');
        $('body').toggleClass('scroll');
	});
});