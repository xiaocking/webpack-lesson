import _ from "loadsh";
import { add } from "./lib/utils";

const a = _.join([1, 2, 3, 4], "----");

console.log(add(2, 7));

// 同步代码 只要在 optimization中配置 splitChunks 的 chunks为 'all'
// 异步代码 自动就会做代码分割
