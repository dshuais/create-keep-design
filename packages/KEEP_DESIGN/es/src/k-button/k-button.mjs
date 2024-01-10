import { defineComponent as n, createVNode as t } from "vue";
import e from "./style/k-button.module.css";
const s = /* @__PURE__ */ n({
  name: "k-button",
  setup() {
    function o() {
      console.log("点击");
    }
    return () => t("button", {
      class: e["k-button"],
      onClick: o
    }, [t("slot", null, null)]);
  }
});
export {
  s as default
};
