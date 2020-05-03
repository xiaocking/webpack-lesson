import "./index.scss";

import counter1 from "./counter1";
import counter2 from "./counter2";

counter1();
counter2();

if (module.hot) {
  // 模块热更新只更新修改的模块 不影响其他模块的展示
  module.hot.accept("./counter2.js", () => {
    document
      .getElementById("root")
      .removeChild(document.getElementById("number"));
    counter2();
  });
}
