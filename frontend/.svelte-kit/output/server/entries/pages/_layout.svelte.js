import { d as slot } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  $$payload.out += `<div class="bg-gray-800 h-screen text-white"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
