import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/reviews-slider";
import "./scripts/parallax-mountain";
import "./scripts/parallax-budda";
import "./scripts/button-toggle";
//import "./scripts/form";
import "./scripts/works";
import "./scripts/scroll";

import Validate from "./scripts/form";

const form = document.querySelector(".js-form");

if (form) {
  const validate = new Validate ({
    element: ".js-form"
  });

  validate.init();
}
