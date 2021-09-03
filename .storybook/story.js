import buildCSS from "./story.css";
import realCSS from "../src/stories/docs/components/styles.css";
const storyCssStyles = process.env.NODE_ENV === "production" ? buildCSS : realCSS;
export default storyCssStyles;
