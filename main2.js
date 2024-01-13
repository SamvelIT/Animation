console.clear();
gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger);
gsap.to("#container", {
  "--target": "0%",
  ease: "none",
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "+=1000",
    pin: true,
    scrub: 1
  }
});


const loading = document.getElementById('loading');
const content = document.getElementById('content');


setTimeout(() => {
    gsap.to(loading, {
        display: 'none', opacity: 0, duration: .5
    });
    document.body.classList.remove('body-without-scroll');
}, 3000)