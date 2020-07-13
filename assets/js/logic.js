var controller = new ScrollMagic.Controller();
var hookTrigger = 0.5;
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
btn1 = new ScrollMagic.Scene({triggerElement: "#pasar"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#btn-pasar').addClass('active')
                                    $('#btn-perkantoran').removeClass('active')
                                 })
                                 .on("leave",(e)=>{
                                    $('#btn-perkantoran').addClass('active')
                                    $('#btn-pasar').removeClass('active')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
btn2 = new ScrollMagic.Scene({triggerElement: "#ritel"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('#btn-ritel').addClass('active')
                                    $('#btn-pasar').removeClass('active')
                                 })
                                 .on("leave",(e)=>{
                                    $('#btn-pasar').addClass('active')
                                    $('#btn-ritel').removeClass('active')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);
end = new ScrollMagic.Scene({triggerElement: "#end"})
                                 .triggerHook(0.7)
                                 .on("enter",(e)=>{
                                    $('#btn-ritel').removeClass('active')
                                    $('.side-menu').addClass('hide-right').removeClass('show-left')
                                 })
                                 .on("leave",(e)=>{
                                    $('#btn-ritel').addClass('active')
                                    $('#btn-pasar').removeClass('active')
                                    $('.side-menu').removeClass('hide-right').addClass('show-left')
                                 })
                                 //  .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);