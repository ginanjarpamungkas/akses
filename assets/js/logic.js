var controller = new ScrollMagic.Controller();
var hookTrigger = 0.7;
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
                                 .addIndicators({name: "1 (duration: 0)"})
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
                                 .addIndicators({name: "2 (duration: 0)"})
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
                                 .addIndicators({name: "2 (duration: 0)"})
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
                                 .addIndicators({name: "2 (duration: 0)"})
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
                                 .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);