ScrollReveal().reveal('.page1 h1',{delay:500});
ScrollReveal().reveal('.page1 h2', { delay: 1500 });
ScrollReveal().reveal('.page1 p', { delay: 2500 });

gsap.to(".nav",{
    backgroundColor: "#000",
    height:"120px",
    duration: 0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"bottom -11%",
        scrub:1 
    }

})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from(".about-us img , #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})


gsap.from(".card",{
    // scale:0.8,
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})




gsap.from(".contact",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:3
    }
})

