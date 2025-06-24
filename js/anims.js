gsap.registerPlugin(SplitText, ScrollTrigger);

console.clear();

gsap.set(".split", { opacity: 1 });

let default_scrolltrigger_opts = {
    trigger: 'body',
    markers: false,
    scrub: true,
    start: "clamp(top center)",
    end: "clamp(bottom center)"
}, about_hypertext

document.fonts.ready.then(() => {
    let containers = gsap.utils.toArray(".split-text-container");

    containers.forEach((container) => {
        let text = container.querySelector(".split");
        let animation;

        SplitText.create(text, {
            type: "words,lines",
            mask: "lines",
            linesClass: "line",
            autoSplit: true,
            onSplit: (instance) => {
                console.log("split")
                return gsap.from(instance.lines, {
                    yPercent: 120,
                    stagger: 0.1,
                    scrollTrigger: {
                        ...default_scrolltrigger_opts,
                        trigger: container
                    }
                });
            }
        });
    });

    about_hypertext = SplitText.create(".text", {
        type: "words, chars"
    })
    
    stats_timeline.fromTo(about_hypertext.chars,
    { scale: 1 },
    {
        duration: 1.5,
        delay: 10,
        scale: 1.5,
        opacity: 1,
        stagger: 0.05
    }).to(about_hypertext.chars, {
        duration: 1.5,
        scale: 1,
        stagger: 0.05
    })
});

let stats_timeline = gsap.timeline({
    scrollTrigger: {
        ...default_scrolltrigger_opts,
        trigger: '.about-section-container'
    }
}), services_timeline = gsap.timeline({
    scrollTrigger: {
        ...default_scrolltrigger_opts,
        trigger: '.services-container',
        end: '75% 100%'
    }
})

stats_timeline.addLabel("boxes-anim")
    .fromTo(".stat", {
        opacity: 0
    }, {
        opacity: 1,
        delay: 2,
        stagger: 0.75
    })

services_timeline.addLabel("services-boxes-anim")
    .fromTo(".service", {
        scale: 0.75
    }, {
        scale: 1,
        stagger: 0.1
    })
