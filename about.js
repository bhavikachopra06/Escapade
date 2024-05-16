
ScrollReveal().reveal('.content h2', { delay: 500 });
ScrollReveal().reveal('.content p', { delay: 1500 });

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

gsap.from(".h1",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".h1",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})