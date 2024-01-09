import * as o from "./src/index.mjs";
import { KButton as s } from "./src/k-button/index.mjs";
import { KTypewriter as p } from "./src/k-typewriter/index.mjs";
const e = {
  install: (t) => {
    for (const r in o)
      t.use(o[r]);
  }
};
export {
  s as KButton,
  p as KTypewriter,
  e as default
};
