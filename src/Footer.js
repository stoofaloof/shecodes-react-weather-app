import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="row">
        <div className="footer">
          <a
            href="https://github.com/stoofaloof/Final-Weather-App"
            className="codeLink"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Stephanie Chow
        </div>
      </div>
    </div>
  );
}
