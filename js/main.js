let sections = document.querySelectorAll(".section");
let images = document.querySelectorAll(".bg");
let headings = document.querySelectorAll(".headings");
let animating = false;
let currentIndex = -1;
let wrap = gsap.utils.wrap(0, sections?.length);


const goToSection = (i, direction) => {
    const index = wrap(i);
    console.log("🚀 ~ file: main.js:11 ~ goToSection ~ index :", index )
    // const fromTop = direction === 1;
    // const dFactor = fromTop ? -1 : 1;
    // let tl = gsap.timeline({
    //     defaults: { duration: 1.25, ease: "power1.inOut" },
    //     onComplete: () => animating = false
    // });

    // if (currentIndex >= 0) {
    //     // The first time this function runs, current is -1
    //     gsap.set(sections[currentIndex], { zIndex: 0 });
    //     tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(sections[currentIndex], { autoAlpha: 0 });
    // }

}


Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () => !animating && goToSection(currentIndex - 1, -1),
    onUp: () => !animating && goToSection(currentIndex - 1, 1),
    tolerance: 10,
    preventDefault: true
});
  

gsap.registerPlugin(Observer);