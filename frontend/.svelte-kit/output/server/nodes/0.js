import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BKQ4xgDV.js","_app/immutable/chunks/disclose-version.0nJNXell.js","_app/immutable/chunks/runtime.Kh19ytKz.js","_app/immutable/chunks/legacy.CC3T_ZGA.js"];
export const stylesheets = ["_app/immutable/assets/0.Dti91jhY.css"];
export const fonts = [];
