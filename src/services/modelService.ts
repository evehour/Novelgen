import { invoke } from '../modules/tauri_api.js';

export async function fetchModelNames(apiBase: string, apiKey?: string): Promise<string[]> {
    const models = await invoke<string[]>('fetch_models', { apiBase, apiKey: apiKey || '' });
    return Array.isArray(models) ? models : [];
}
