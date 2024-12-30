export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CAbWq8Kn.js","app":"_app/immutable/entry/app.Dt8n3IAw.js","imports":["_app/immutable/entry/start.CAbWq8Kn.js","_app/immutable/chunks/entry.BAG54JqI.js","_app/immutable/chunks/runtime.Kh19ytKz.js","_app/immutable/chunks/index-client.BzJCu_CY.js","_app/immutable/entry/app.Dt8n3IAw.js","_app/immutable/chunks/runtime.Kh19ytKz.js","_app/immutable/chunks/render.JW_cZ7Yk.js","_app/immutable/chunks/events.CL4lJWCx.js","_app/immutable/chunks/disclose-version.0nJNXell.js","_app/immutable/chunks/index-client.BzJCu_CY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
