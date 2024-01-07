function smooth() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
smooth()
function navanimation() {
    gsap.from(".na", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger:0.2
    })
}
navanimation()

function heroanimation() {
    gsap.from(".hanimate", {
        y: 70,
        opacity: 0,
        duration: 2,
        ease: Power3,
        stagger: 0.2
    })
}
heroanimation()
function headinganimation() {
    Shery.textAnimate("#heading h1", {
        style: 1,
        y: 10,
        delay: 0.1,
        duration: 0.45,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
      });
}
headinganimation()
function imageanimation() {
    Shery.imageEffect("#sus-img img", {
        style: 4,
        config:{"a":{"value":7.1,"range":[0,30]},"b":{"value":1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7145499877929687},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        // debug:true
    })
    Shery.imageEffect(".k img", {
        style: 4,
        config:{"uColor":{"value":false},"uSpeed":{"value":1,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":3.89,"range":[0,5]},"uFrequency":{"value":5.04,"range":[0,10]},"geoVertex":{"range":[1,64],"value":36.11},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999724047586},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    })
    gsap.from("#img-text img",{
        z: -5,
        duration: 2,
        ease:Expo.easeInOut
    })
    Shery.imageEffect("#bimg", {
        style: 4,
        config: { "uColor": { "value": false }, "uSpeed": { "value": 0.6, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 1.5, "range": [0, 5] }, "uFrequency": { "value": 3.5, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 32 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.8045378713760067 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.18, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 1.76, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.6, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
    gooey:true
    })
}
imageanimation()
function videoAnimation() {
    document.querySelector("#ftxt button").addEventListener("mouseover", function () {
        gsap.to("#future video", {
            opacity: 1,
            duration: 1,
            ease:Power3
        })
    })
    document.querySelector("#ftxt button").addEventListener("mouseleave", function () {
        gsap.to("#future video", {
            opacity: 0,
            duration: 1,
            ease:Power3
        })
    })
}
videoAnimation()