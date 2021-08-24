// Dynamic Service Box
let mouse = document.querySelector('header .mouse');
let serviceBox = document.querySelector('.service');

mouse.addEventListener('click', function(){
    serviceBox.style.paddingTop = mouse.clientHeight + 'px';
});

// Scroll Slide
let bodyScroll = document.querySelector('html,body');
let slideScroll = document.querySelector('.slide-scroll');

window.addEventListener('scroll',function(){
    if(bodyScroll.scrollTop > 100){
        slideScroll.style.display = "block";
    }else{
        slideScroll.style.display = "none";
    }
});

// Service Buttons
let hiddenParagraph = document.querySelectorAll('.service .service-box .hidden-paragraph');
let moreBtn = document.querySelectorAll('.service .service-box .service-button .more-btn');
let lessBtn = document.querySelectorAll('.service .service-box .service-button .less-btn');


// for(let i=0; i<moreBtn.length,hiddenParagraph.length,lessBtn.length; i++){
//     moreBtn[i].addEventListener('click',function(){
//         hiddenParagraph[i].style.display = 'block';
//         moreBtn[i].style.display = 'none';
//         lessBtn[i].style.display = 'block';
//         if( hiddenParagraph[i].style.display = 'block'){
//             lessBtn[i].addEventListener('click',function(){
//                 hiddenParagraph[i].style.display = 'none';
//                 moreBtn[i].style.display = 'block';
//                 lessBtn[i].style.display = 'none';
//             });
//         }
//     });
// }
for(let i=0; i<moreBtn.length; i++){
    for(let i=0; i<lessBtn.length; i++){
        for(let i=0; i<hiddenParagraph.length; i++){
            moreBtn[i].addEventListener('click',function(){
                    hiddenParagraph[i].style.display = 'block';
                    moreBtn[i].style.display = 'none';
                    lessBtn[i].style.display = 'block';
                    if( hiddenParagraph[i].style.display = 'block'){
                        lessBtn[i].addEventListener('click',function(){
                            hiddenParagraph[i].style.display = 'none';
                            moreBtn[i].style.display = 'block';
                            lessBtn[i].style.display = 'none';
                        });
                    }
            });
        }
    }
}

