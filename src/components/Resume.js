import React, { useEffect } from "react";
function Resume() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/Niveditha_Resume.pdf";
    link.setAttribute("download", "Niveditha_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "5rem", color: "white" }}>
      <h2>Thanks for downloading my resume!</h2>
    </div>
  );
}
export default Resume;
