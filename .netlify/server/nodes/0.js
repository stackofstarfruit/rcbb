

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D7s1FI7C.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.-IlM_eug.js"];
export const stylesheets = ["_app/immutable/assets/0.S5iM2G2K.css"];
export const fonts = [];
