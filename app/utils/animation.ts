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
  gsap.to(".casual_content", {
    y: 50,
    scrollTrigger: {
      trigger: ".casual_content",
      start: "-80% center",
      end: "-40% center",
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
};
