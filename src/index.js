import _ from "loadsh";
import { addDiv } from "./about";

import "./index.scss";

addDiv();
const root = document.getElementById("root");
function getComponent() {
  return import(/* webpackChunkName:"loadsh" */ "loadsh").then(
    ({ default: _ }) => {
      const div = document.createElement("div");
      div.innerHTML = _.join(["hello", "world"], "==>");
      return div;
    }
  );
}
getComponent().then((ele) => {
  root.append(ele);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
