import "clsx";
function attr(name, value, is_boolean = false) {
  return "";
}
function Search($$payload) {
  $$payload.out += `<input class="text-black"${attr()}>`;
}
function _page($$payload) {
  $$payload.out += `<h1>Welcome to SipFlix!</h1> <div class="flex justify-center items-center gap-x-5">Search a movie:`;
  Search($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
