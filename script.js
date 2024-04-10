const init = function(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init();

var menu = document.querySelector("#nav-prt2 i");
var full = document.querySelector("#full-scr-nav");
var h2 = document.querySelector("#nav h2");
var h3 = document.querySelector("#nav h3");
var i = document.querySelector("#nav i");

var flag = 0;
menu.addEventListener("click", function(){
    if(flag == 0){
        full.style.top = "0vh";
        full.style.opacity = "1";
        h2.style.color = "#232025";
        h3.style.color = "#232025";
        i.style.color = "#232025";
        flag = 1;
    }else{
        full.style.top = "-100vh";
        full.style.opacity = "0";
        h2.style.color = "#dadada";
        h3.style.color = "#dadada";
        i.style.color = "#dadada";
        flag = 0;
    }

});

var tl = gsap.timeline();
tl.from("#page1 h1", {
    y: 100,
    // x: -50,
    duration: 0.7,
    opacity: 0
})
.from("#page1 h2", {
    y: 50,
    duration: 0.7,
    opacity: 0,
    delay: "-0.2",
    // smooth: 100
})
.from("#page1 h3", {
    y: 50,
    duration: 0.7,
    opacity: 0,
    delay: "-0.3"
});
gsap.to("#page1 h1", {
    x: -700,
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top 15%",
        end: "top 0%",
        scrub: 3,

    }
});
gsap.to("#page1 h2", {
    x: -850,
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top 30%",
        end: "top 0%",
        scrub: 3,

    }
});
gsap.to("#page1 h3", {
    x: 500,
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top 30%",
        end: "top 0%",
        scrub: 3,

    }
});
gsap.to("#p1 img", {
    scale: "1.350",
    scrollTrigger: {
        trigger: "#p1 img",
        scroller: "#main",
        // markers: true,
        start: "top 100%",
        end: "top 50%",
        scrub: 4,

    }
});

gsap.to("#page2 h1", {
    y: 50,
    rotateX: "0",
    opacity: 1,
    scrollTrigger: {
        trigger: "#head1",
        scroller: "#main",
        // markers: true,
        start: "top 98%",
        end: "top 60%",
        scrub: 3,
    }
});
gsap.to("#page3 #line", {
    width: "100%",
    // y: 0,
    scrollTrigger: {
        trigger: "#page3 #line",
        scroller: "#main",
        // markers: true,
        start: "top 99%",
        end: "top 10%",
        scrub: 4,
    }
});
gsap.to("#page3 h1", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "#main",
        // markers: true,
        start: "top 10%",
        end: "top 0%",
        scrub: 1,
    }
});
gsap.to("#page3 i", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3 i",
        scroller: "#main",
        // markers: true,
        start: "top 10%",
        end: "top 0%",
        scrub: 1,
    }
});
gsap.to("#page4 h6", {
    y: -200,
    opacity: 1,
    scrollTrigger: {
        trigger: "#page4 h6",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 0%",
        scrub: 3,

    }
});
gsap.to("#page5-content h1", {
    y: -70,
    opacity: 1,
    scrollTrigger: {
        trigger: "#page5-content h1",
        scroller: "#main",
        // markers: true,
        start: "top 100%",
        end: "top 80%",
        scrub: 3,

    }
});
gsap.to("#page5-content h4", {
    y: -70,
    opacity: 1,
    scrollTrigger: {
        trigger: "#page5-content h4",
        scroller: "#main",
        // markers: true,
        start: "top 100%",
        end: "top 80%",
        scrub: 3,

    }
});
gsap.to("#page5-content img", {
    y: -70,
    opacity: 1,
    scrollTrigger: {
        trigger: "#page5-content img",
        scroller: "#main",
        // markers: true,
        start: "top 100%",
        end: "top 80%",
        scrub: 4,

    }
});
gsap.to("#page5-content img", {
    rotate: 360,
    repeat: -1,
    duration: 2,
    ease: Power0.easeNone
})
var slide1 = document.querySelectorAll("#page6 .slide1-of-h1 h1");
var slide2 = document.querySelectorAll("#page6 .slide2-of-h1 h1");
slide1.forEach(function(elem){
    gsap.to(elem, {
        transform: "translateX(-100%)",
        duration: 4,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            scrub: 5
        }
    })
});
slide2.forEach(function(elem){
    gsap.to(elem, {
        transform: "translateX(0%)",
        duration: 4,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            scrub: 5
        }
    })
});

var elem1 = document.querySelector("#element1");
var elem1Img = document.querySelector("#element1 img");
elem1.addEventListener("mousemove", function(axis){
    elem1Img.style.opacity = 1;
    elem1Img.style.left = `${axis.x -90}px`;
    elem1Img.style.top = `${axis.y -450}px`;
});
elem1.addEventListener("mouseleave", function(axis){
    elem1Img.style.opacity = 0;
});

var elem2 = document.querySelector("#element2");
var elem2Img = document.querySelector("#element2 img");
elem2.addEventListener("mousemove", function(axis){
    elem2Img.style.opacity = 1;
    elem2Img.style.left = `${axis.x -90}px`;
    elem2Img.style.top = `${axis.y -450}px`;
});
elem2.addEventListener("mouseleave", function(axis){
    elem2Img.style.opacity = 0;
});