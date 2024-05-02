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

     
}   