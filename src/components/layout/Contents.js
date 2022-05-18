import React from "react";

// {}는 props의 약식,
function Contents({ children }) {
  return <main id="main">{children}</main>;
}

export default Contents;
