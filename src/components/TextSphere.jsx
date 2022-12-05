import { useEffect } from "react";
import TagCloud from "TagCloud/dist/TagCloud.min.js";

// import {idk} from "TagCloud/dist/TagCloud";

import "../styles/TextSphere.scss";

const TextSphere = () => {
  useEffect(() => {
    const myWidth = window.innerWidth;

    // console.log(myWidth);

    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "JavaScript",
        "CSS",
        "SASS",
        "Tailwind",
        "React.js",
        "Firebase",
        "Next.js",
        "TypeScript",
        "GSAP",
        "Git",
        "Googling",
        "NPM",
        "JSON",
      ];

      // const myTags = [
      //   "HTML",
      //   "JavaScript",
      //   "CSS",
      //   "SASS",
      //   "Tailwind",
      //   "React.js",
      //   "Firebase",
      //   "Next.js",
      //   "TypeScript",
      //   "GSAP",
      //   "Git",
      //   "Googling",
      // ];

      // let tagCloud = idk(".tagCloud", myTags, {
      //   // radius in px
      //   radius: 300,

      //   // animation speed
      //   // slow, normal, fast
      //   maxSpeed: "fast",
      //   initSpeed: "fast",

      //   // 0 = top
      //   // 90 = left
      //   // 135 = right-bottom
      //   direction: 135,

      //   // interact with cursor move on mouse out
      //   keep: true,
      // });

      const options = {
        radius: myWidth < 300 ? 100 : myWidth < 600 ? 140 : 220,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className='text-shpere'>
        {/* span tag className must be "tagcloud"  */}
        <span className='tagcloud'></span>
      </div>
    </>
  );
};

export default TextSphere;
