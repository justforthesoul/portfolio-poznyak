import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/reviews-slider";
import "./scripts/header";
import "./scripts/parallax-mountain";
import "./scripts/parallax-budda";
import "./scripts/button-toggle";
import "./scripts/form";
