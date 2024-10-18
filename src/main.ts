import { myFunction } from './無題';

function main() {
  myFunction();
}

// globalに突っ込むおまじないが必要
(global as any).main = main;
/*
最終的には以下のようになる

let global = this;
function main() {
}
"use strict";(()=>{var o=()=>{console.log("hello world")};function n(){o()}global.main=n;})();
 */
