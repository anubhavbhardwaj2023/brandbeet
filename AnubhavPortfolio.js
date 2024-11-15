

function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init();

var tl0 = gsap.timeline()

tl0.to("#loader h1:nth-child(1)",{
    display:"block",
    duration:"0.2"
    
})
tl0.to("#loader h1:nth-child(1)",{
    display:"none",
     duration:"0.3"
    
})
tl0.to("#loader h1:nth-child(2)",{
    display:"block",
     duration:"0.2"
    
})
tl0.to("#loader h1:nth-child(2)",{
    display:"none",
     duration:"0.3"
    
})
tl0.to("#loader h1:nth-child(3)",{
    display:"block",
     duration:"0.2"
    
})
tl0.to("#loader h1:nth-child(3)",{
    display:"none",
    duration:"0.3"
    
    
})
tl0.to("#loader h1:nth-child(4)",{
    display:"block",
      duration:"0.2"
    
    
})
tl0.to("#loader h1:nth-child(4)",{
    display:"none",
      duration:"0.2"
    
    
})
tl0.to("#loader",{
    height:"0"
    
    
    
    
})


gsap.to("#nav ",{
    opacity:"1"
 })
var tl = gsap.timeline({scrollTrigger:{
    trigger: '#page1',
    scroller:".main",
    start: '50% 50%',
    end: '90% 50%',
    scrub: true,
    pin:true,
    
}})
tl.to("#nav ",{
    opacity:"1"
 })
tl.to("#overlay-div ",{
    backgroundColor: "#00000012"
},"b")
tl.to("#nav ",{
   opacity:"1"
},"b")

tl.to(".row-div2",{
    marginTop:"-6%"
},"a")
tl.to(".row-div3",{
    marginTop:"-9%"
},"a")
tl.to(".row-div4",{
    marginTop:"-14%"
},"a")
tl.to(".row-div5",{
    marginTop:"-20%"
},"a")

var tl1 = gsap.timeline({scrollTrigger:{
    trigger: '#page1',
    scroller:".main",
    start: '50.2% 50%',
    end: '250% 50%',
    scrub: true,
    pin:true,
    
}})
tl1.to("#rotate-div",{
        rotate:-10,
       scale:0.7
     },"b")

     tl1.to(".row-div2",{
        marginTop:"-45%"
    },"b")
    tl1.to(".row-div3",{
        marginTop:"-55%"
    },"b")
    tl1.to(".row-div4",{
        marginTop:"-70%"
    },"b")
    tl1.to(".row-div5",{
        marginTop:"-80%"
    },"b")
    tl1.to("#overlay-div ",{
        backgroundColor: "#000000b4"
    },"b")
    tl1.to("#overlay-div h1",{
        opacity:1,
        delay:-0.4
    })
 
    tl1.to("#scroll-p",{
        width:"100%"
       
    },"b")


    var tl2 = gsap.timeline({scrollTrigger:{
        trigger: '#page2',
        scroller:".main",
        start: '0% 70%',
        end: '70% 50%',
        scrub: true,
        // markers:true
       
        
    }})
    tl2.to("#rounded-div-wrapper",{
        height:0,
        marginTop:0
    })

    var tl3 = gsap.timeline({scrollTrigger:{
        trigger: '#page2',
        scroller:".main",
        start: '25% 50%',
        end: '70% 50%',
        scrub: true,
      
        
       
        
    }})
    tl3.to(".text-div-hover",{
       width:"100%"
    },"s")
   

     var tl4 = gsap.timeline({scrollTrigger:{
        trigger: '#page2',
        scroller:".main",
        start: '34% 50%',
        end: '90% 50%',
        scrub: true,
        
       
        
    }})
    tl4.to(".text-div-hover1",{
        
        width:"100%"
     })
     var tl5 = gsap.timeline({scrollTrigger:{
        trigger: '#page3',
        scroller:".main",
        start: '22% 50%',
        end: '200% 50%',
        
        scrub: true,
        pin:true,
        
       
        
    }})
    
   
    tl5.to(".p3rc1",{
        marginTop:"-20%",
        opacity:"1"
        
    },"p31")
    tl5.to(".p3rc2",{
        opacity:"1"
    },"p32")
    tl5.to(".p3rc1",{
        marginTop:"-65%",
        opacity:"0"
    },"p32")
    tl5.to(".p3rc3",{
        opacity:"1"
    },"p33")
    tl5.to(".p3rc2",{
        
       
        opacity:"0"
    },"p33")
    tl5.to(".p3rc1",{
        marginTop:"-115%",
    },"p33")
    tl5.to(".p3rc4",{
        opacity:"1"
    },"p34")
    tl5.to(".p3rc3",{
        
       
        opacity:"0"
    },"p34")
    tl5.to(".p3rc1",{
        marginTop:"-160%",
    },"p34")
    tl5.to(".p3rc5",{
        opacity:"1"
    },"p35")
    tl5.to(".p3rc4",{
        
       
        opacity:"0"
    },"p35")
    tl5.to(".p3rc1",{
        marginTop:"-210%",
    },"p35")
    tl5.to(".p3rc6",{
        opacity:"1"
    },"p36")
    tl5.to(".p3rc5",{
        
       
        opacity:"0"
    },"p36")
    tl5.to(".p3rc1",{
        marginTop:"-260%",
    },"p36")
    tl5.to(".p3rc1",{
        marginTop:"-300%",
    },"p37")
    tl5.to(".p3rc6",{
        
       
        opacity:"0"
    },"p37")
    tl5.to("#circ",{
        
       
        marginLeft:"135%",
        rotate:360
    },"p37")
    
    // var tl6 = gsap.timeline({scrollTrigger:{
    //     trigger: '#page3-middle',
    //     scroller:".main",
    //     start: '620% 50%',
    //     end: '880% 50%',
    //     scrub: true,
    //     markers:true
      
        
       
        
    // }})
    // tl6.to(".p3m-text-div-hover",{
    //    width:"100%"
    // })
   

    //  var tl7= gsap.timeline({scrollTrigger:{
    //     trigger: 'p3m-text-div',
    //     scroller:".main",
    //     start: '650% 50%',
    //     end: '1000% 90%',
    //     markers:true,
    //     scrub: true,
        
       
        
    // }})
    // tl7.to(".p3m-text-div-hover1",{
        
    //     width:"100%"
    //  })
    var tl7= gsap.timeline({scrollTrigger:{
        trigger: '#page4',
        scroller:".main",
        start: '-19% 50%',
        end: '15% 50%',
        // markers:true,
        scrub: true,
        
       
        
    }})
    tl7.to(".p3m-text-div-hover",{
        
        
        width:"100%"
     })
     var tl8= gsap.timeline({scrollTrigger:{
        trigger: '#page4',
        scroller:".main",
        start: '-14% 50%',
        end: '20% 50%',
        
        
        scrub: true,
        
       
        
    }})
    tl8.to(".p3m-text-div-hover1",{
        
        
        width:"100%"
     })
     var tl9 = gsap.timeline({scrollTrigger:{
        trigger: '#page4',
        scroller:".main",
        start: '-2% 50%',
        end: '10% 50%',
        scrub: true,
     
       
        
    }})
    tl9.to("#rounded-div-wrapper1",{
        height:0,
        marginTop:0
    })

    var tl10 = gsap.timeline({scrollTrigger:{
        trigger: '#page4',
        scroller:".main",
        start: '10% 70%',
        end: '30% 50%',
        scrub: true,
        // markers:true
       
        
    }})
    tl10.to(".p4m-text-div-hover1",{
        
        
        width:"100%"
     })
     var tl11 = gsap.timeline({scrollTrigger:{
        trigger: '#page4',
        scroller:".main",
        start: '5% 70%',
        end: '35% 50%',
        scrub: true,
        
       
        
    }})
    tl11.to(".p4m-text-div-hover",{
        
        
        width:"100%"
     })
     var tl12 = gsap.timeline({scrollTrigger:{
        trigger: '#page5',
        scroller:".main",
        start: '-25% 50%',
        end: '250% 50%',
        scrub: true,
        pin:true,
        // markers:true
       
        
    }})
    tl12.to("#page5 button",{
        
        
        bottom:"7%"
      },)
    tl12.to("#our-work-text-div",{
        
        
        height:"60vh"
     },'k')
     tl12.to("#our-work-txt",{
        
        
        height:"60vh"
     },"k")
     tl12.to("#our",{
        
        
       left:"0%"
     },"k")
     tl12.to("#work",{
        
        
        right:"0%"
      },"k")
      tl12.to("#scroll-img",{
        
        
        marginTop:"-300%"
      },)
    //   var tl13 = gsap.timeline({scrollTrigger:{
    //     trigger: '#page4-middle',
    //     scroller:".main",
    //     start: '-20% 50%',
    //     end: '15% 50%',
    //     // scrub: true,
       
    //     markers:true
       
        
    // }})
    // tl13.to("#p4m-part1 h1",{
    //     x:"-30%"
      
        
        
        
    //   },)
    
    