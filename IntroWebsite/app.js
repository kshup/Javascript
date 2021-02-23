const tl = gsap.timeline({defualts:{ease: 'power.out'}});

tl.to('.text',{y:'0%',duration:1, stragger: 0.25});
tl.to('.slider',{y: "-200%", duration: 1.5,delay:0.5});
tl.to('.intro',{y: "-200%",duration:1},"-=1.2");
tl.fromTo('nav',{opacity:0}, {opacity:1 , duration:1})
tl.fromTo('.big-text',{opacity:0}, {opacity:1 , duration:1},"-=1")
