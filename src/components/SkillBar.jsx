import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SkillBar = ({ name, level }) => {
  const [progress, setProgress] = useState(0);
  
  // threshold: 0.5 endral 50% bar screen-il theriyum pothu trigger aagum
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true, // Oru murai trigger aanal pothum
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        if (start <= level) {
          setProgress(start);
        } else {
          clearInterval(interval);
        }
      }, 15); // Speed-ai ungalukku thagundhapola maattralam
      return () => clearInterval(interval);
    }
  }, [inView, level]);

  return (
    <div className="skill" ref={ref}> {/* Intha ref thaan scroll-ai watch pannum */}
      <p>{name}</p>
      <div className="bar">
        <div className="fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;