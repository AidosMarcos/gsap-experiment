const runStart = () => {
    console.log("onStart");
};

const runUpdate = () => {
    console.log("onUpdate");
};

const runComplete = () => {
    console.log("onComplete");
};

const timeline = gsap.timeline({
    duration: 1,
    paused: true,
    onStart: runStart,
    onComplete: runComplete, 
    onUpdate: runUpdate //60 frames per second - runs every tick 4secs = 240ticks
});

timeline
    .from('body', { 
        ease: "none", 
        backgroundColor: "#fff",
    })
    .fromTo(['h1', '.intro'],
        {
            opacity: 0,
            y: -20
        },
        { 
            y: 0,
            ease: 'power1.out',
            // delay: 1.5,
            opacity: 1,
            stagger: 0.2
        },
        '-=1'
    )
    .from(['img', 'h2'], { 
        // delay: 2.8,
        ease: 'none',
        opacity: 0,
    })
    .from('ul li', { 
        // delay: 3.4,
        opacity: 0,
        y: -20,
        ease: "power2.out",
        stagger: 0.1
    });

//no animation just sets position
//gsap.set()

const playButton = document.querySelector("#btnPlay");
const btnPause = document.querySelector("#btnPause");
const btnResume = document.querySelector("#btnResume");
const btnReverse = document.querySelector("#btnReverse");
const btnSpeedUp = document.querySelector("#btnSpeedUp");
const btnSlowDown = document.querySelector("#btnSlowDown");
const btnSeek = document.querySelector("#btnSeek");
const btnProgress = document.querySelector("#btnProgress");
const btnRestart = document.querySelector("#btnRestart");

playButton.addEventListener('click', () => { timeline.play() })

btnPause.addEventListener('click', () => { timeline.pause() })

btnResume.addEventListener('click', () => { timeline.resume() })

btnReverse.addEventListener('click', () => { timeline.reverse() })

btnSpeedUp.addEventListener('click', () => { timeline.timeScale(2) })

btnSlowDown.addEventListener('click', () => { timeline.timeScale(0.5) })

btnSeek.addEventListener('click', () => { timeline.seek(1) })

btnProgress.addEventListener('click', () => { timeline.progress(0.5)  }) //0 inicio - 1 fim

btnRestart.addEventListener('click', () => { timeline.restart() })
