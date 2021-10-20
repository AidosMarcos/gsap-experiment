gsap.registerPlugin(ScrollTrigger);

function init(){
    
    // gsap.to('#intro img', 
    // {
    //     opacity: 0, 
    //     scrollTrigger: {
    //         trigger: '#intro',
    //         start: 'top top',
    //         end: 'bottom center',
    //         scrub: true,
    //         // markers: true
    //     }
    // });

    gsap.to(['#intro h1', '#intro p'], {
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: '#intro .content',
            start: 'top top+=5%',
            pin: true,
            scrub: true,
            //markers: true
        }
    })

    gsap.set("#project02", {
        scrollTrigger: {
            trigger: '#project02',
            start: 'top bottom-=10%', //%
            end: 'bottom center-=150', //px
            toggleClass: 'active',
            //markers: true
        }
    })

    const parallaxTl = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '.bcg-parallax',
            start: 'top bottom',
            scrub: true
        }
    });

    parallaxTl
        .from('.content-wrapper', { duration: 0.4, autoAlpha: 0 }, 0.4)
        .from('.bcg', { duration: 2, y:'-30%' }, 0);

    
    const projects = document.getElementsByClassName('project');

    for (let i = 0; i < projects.length; i++) {
        
        gsap.from(projects[i], {
            opacity: 0,
            yPercent: 5,
            scrollTrigger: {
                trigger: projects[i].querySelector('img'),
                start: 'top bottom-=300',
                end: 'top center',
                toggleActions: 'play none none reverse',
                scrub: true,
                onUpdate: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
                markers: true
            }
        })
        
    }
}

window.addEventListener('load', function(){
    init();
});
