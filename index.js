// // Initialize Lenis
// const lenis = new Lenis();

// // Listen for the scroll event and log the event data


// // Use requestAnimationFrame to continuously update the scroll
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
// function init() {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector(".main"),
//         smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(".main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//     });


//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();

// }
// init();


var tl = gsap.timeline({scrollTrigger:{
    trigger: '#page1',
    // scroller:".main",
    start: '50% 50%',
    end: '300% 50%',
    scrub: true,
    pin:true,
    markers: true
}})
tl.to(".row-div2",{
    marginTop:"-30%"
},"a")
tl.to(".row-div3",{
    marginTop:"-40%"
},"a")
tl.to(".row-div4",{
    marginTop:"-50%"
},"a")
tl.to(".row-div5",{
    marginTop:"-5"
},"a")
// tl.to("#rotate-div",{
//     rotate:-25,
//     scale:0.7
// },"a")