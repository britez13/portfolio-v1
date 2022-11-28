import { useEffect } from "react";
import TagCloud from "TagCloud";

import "../styles/TextSphere.scss";

const TextSphere = () => {
  useEffect(() => {
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
      ];

      const options = {
        radius: 220,
        maxSpeed: "normal",
        initSpeed: "normal",
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
