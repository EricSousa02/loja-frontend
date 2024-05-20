import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHome = () => {
  gsap.to(".style_container", {
    yPercent: -100,
    scrollTrigger: {
      trigger: "home_content_container",
      start: "40% 30%",
      end: "center 30%",
      scrub: 2,
    },
  });
  gsap.to(".home_circle", {
    yPercent: -100,
    scale: 0.5,
    scrollTrigger: {
      trigger: "home_content_container",
      start: "35% 30%",
      end: "center 30%",
      scrub: 1,
    },
  });
  gsap.from(".formal_image", {
    y: 70,
    scrollTrigger: {
      trigger: ".formal_image",
      start: "-80% center",
      end: "-60% center",
      scrub: 1,
    },
  });
  gsap.to(".formal_title", {
    y: -70,
    scrollTrigger: {
      trigger: ".formal_image",
      start: "-80% center",
      end: "-60% center",
      scrub: 1,
    },
  });

  gsap.to(".vixen_image", {
    y: 50,
    scrollTrigger: {
      trigger: ".casual_content",
      start: "top center",
      end: "0% center",
      scrub: 1,
    },
  });
  gsap.to(".vixen_image_text", {
    y: -70,
    scrollTrigger: {
      trigger: ".casual_content",
      start: "top center",
      end: "0% center",
      scrub: 1,
    },
  });

  gsap.to(".products_container", {
    y: -510,
    opacity: 1,
    scrollTrigger: {
      trigger: ".casual_content",
      start: "center center",
      end: "bottom center",
      scrub: 1,
    },
  });
  gsap.to(".new_collection-hl", {
    xPercent: -50,
    scrollTrigger: {
      trigger: ".new_collection",
      start: "-40% center",
      end: "-20% center",
      scrub: 1,
    },
  });
  gsap.to(".new_collection_image",{
    yPercent:20,
    scrollTrigger: {
        trigger: ".new_collection",
        start: "-40% center",
        end: "-20% center",
        scrub: 1,
    }
  })
  gsap.to(".date h3",{
    y:150,
    duration:5,
    ease:"circ.in",
    stagger:1,
    opacity:1,
    scrollTrigger:{
      trigger:".on_sale",
      start:"-290px center",
      end:"-290px 100px",
      scrub:true,
    }
  })
  gsap.to(".banner_container",{
    y:50,
    scrollTrigger:{
      trigger:".on_sale",
      start:"-290px center",
      end:"-290px 100px",
      scrub:1,
    }
  })
  gsap.to(".banner",{
    y:30,
    scrollTrigger:{
      trigger:".on_sale",
      start:"-290px center",
      end:"-290px 100px",
      scrub:1,
    }
  })
  gsap.to(".on_sale_text",{
    y:20,
    scrollTrigger:{
      trigger:".on_sale",
      start:"-300px center",
      end:"-300px 100px",
      scrub:1,
    }
  })
  gsap.to(".on_sale_text h1",{
   opacity:1,
   stagger:1,
   duration:3,
    scrollTrigger:{
      trigger:".on_sale",
      start:"-350px center",
      end:"-350px 100px",
      scrub:1,
    }
  })
};
