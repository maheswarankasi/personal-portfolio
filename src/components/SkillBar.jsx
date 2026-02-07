import React, { useEffect, useState } from "react";

const SkillBar = ({ name, level }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start <= level) {
        setProgress(start);
      } else {
        clearInterval(interval);
      }
    }, 25);
  }, [level]);

  return (
    <div className="skill">
      <p>{name}</p>
      <div className="bar">
        <div className="fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
