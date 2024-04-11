

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DMF06Fq8.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.-IlM_eug.js","_app/immutable/chunks/entry.DrMI-2e7.js"];
export const stylesheets = [];
export const fonts = [];
