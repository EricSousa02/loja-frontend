import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHome= () =>{
    gsap.to(".style_container",{
        yPercent:-100,
        scrollTrigger:{
            trigger:"home_content_container",
            start:"40% 30%",
            end:"center 30%",
            scrub:2,
        }
    })
    gsap.to(".home_circle",{
        yPercent:-100,
        scale:0.5,
        scrollTrigger:{
            trigger:"home_content_container",
            start:"35% 30%",
            end:"center 30%",
            scrub:1,
        }
    })
    gsap.from(".formal_image",{
        y:70,
        scrollTrigger:{
            trigger:".formal_image",
            start:"-80% center",
            end:"-60% center",
            scrub:1,
        }
    })
    gsap.from(".formal_title",{
        y:-70,
        scrollTrigger:{
            trigger:".formal_image",
            start:"-80% center",
            end:"-60% center",
            scrub:1,
        }
    })

    gsap.from(".casual_content",{
        y:50,
        scrollTrigger:{
            trigger:".casual_content",
            start:"-90% center",
            end:"-60% center",
            scrub:1,
        }
    })
    gsap.from(".vixen_image",{
        y:50,
        scrollTrigger:{
            trigger:".casual_content",
            start:"top center",
            end:"0% center",
            scrub:1,
        }
    })
    gsap.from(".vixen_image_text",{
        y:-70,
        scrollTrigger:{
            trigger:".casual_content",
            start:"top center",
            end:"0% center",
            scrub:1,
        }
    })
 
}   