const tl = gsap.timeline();
const rule = CSSRulePlugin.getRule('.card:before')

if (window.innerWidth < 1200) {
    tl
        .set('.feature', { scale: 0.95 })
        .from('.heading-primary', { duration: 1, opacity: 0, x: 200, ease: 'power1.out' })
        .from('.heading-primary--light', { duration: 1, opacity: 0, x: -200, ease: 'power1.out' })
        .from('.paragraph', { duration: 1, opacity: 0, y: -200, ease: 'power1.out' })
        .from('.card', { duration: 1, y: 500, x: 700, opacity: 0, rotation: 360, stagger: 0.3, ease: 'power1.out' })
        .from(rule, { duration: 1, height: '100%', ease: 'power1.out' })
        .to('.feature', { duration: 1, scale: 1, ease: 'bounce' })
        .fromTo('.footer', { opacity: 0 }, { duration: 1, opacity: 1, ease: 'power1.out' });
}
else {
    tl
        .set('.feature', { scale: 0.95 })
        .from('.heading-primary', { duration: 1, opacity: 0, x: 200, ease: 'power1.out' })
        .from('.heading-primary--light', { duration: 1, opacity: 0, x: -200, ease: 'power1.out' })
        .from('.paragraph', { duration: 1, opacity: 0, y: -200, ease: 'power1.out' })
        .from('.card', { duration: 1, y: 500, x: 700, opacity: 0, rotation: 360, stagger: 0.3, ease: 'power1.out' })
        .fromTo('.card__group', { gap: '25rem' }, { duration: 1, gap: '2.5rem', ease: 'power1.out' })
        .from(rule, { duration: 1, height: '100%', ease: 'power1.out' })
        .to('.feature', { duration: 1, scale: 1, ease: 'bounce' })
        .fromTo('.footer', { opacity: 0 }, { duration: 1, opacity: 1, ease: 'power1.out' });
}