import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [blockSize, setBlockSize] = useState(20);
  const [blockMargin, setBlockMargin] = useState(5);

  useEffect(() => {
    const updateBlockSize = () => {
      if (window.innerWidth < 576) {
        setBlockSize(5);
        setBlockMargin(2);
      } else if (window.innerWidth < 768) {
        setBlockSize(10);
        setBlockMargin(3);
      } else if (window.innerWidth < 992) {
        setBlockSize(18);
        setBlockMargin(4);
      } else {
        setBlockSize(20);
        setBlockMargin(5);
      }
    };

    updateBlockSize(); // Set initial block size
    window.addEventListener("resize", updateBlockSize); // Update block size on resize

    return () => window.removeEventListener("resize", updateBlockSize); // Cleanup on unmount
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className={`project-heading`} style={{textAlign: "center"}}>
        Days Likhith Kanigolla <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="likhithkanigolla"
        blockSize={blockSize}
        blockMargin={blockMargin}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
