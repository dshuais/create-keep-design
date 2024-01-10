import { defineComponent as r, createVNode as i } from "vue";
import { cln as l } from "../utils/create.mjs";
import "./style/index.css";
const s = /* @__PURE__ */ r({
  name: "k-button",
  props: {
    type: {
      type: String,
      required: !1
    }
  },
  emits: ["click"],
  setup(e, {
    emit: n,
    slots: t
  }) {
    const o = l("button", [e.type]);
    function c() {
      n("click");
    }
    return () => i("button", {
      class: o,
      onClick: c
    }, [t.default ? t.default() : "default"]);
  }
});
export {
  s as default
};
