import { defineComponent as r, computed as u, openBlock as a, createElementBlock as i, normalizeClass as m, renderSlot as p } from "vue";
import "./style/index.css";
const f = /* @__PURE__ */ r({
  name: "k-button",
  __name: "k-button",
  props: {
    type: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, o = n, c = u(() => ({ [`k-button--${t.type}`]: t.type }));
    function s() {
      o("click");
    }
    return (l, k) => (a(), i("button", {
      class: m(["k-button", c.value]),
      onClick: s
    }, [
      p(l.$slots, "default")
    ], 2));
  }
});
export {
  f as default
};
