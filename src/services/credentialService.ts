import { invoke } from '../modules/tauri_api.js';

export function normalizeApiKey(value: unknown): string {
    let key = String(value || '').trim();
    while (/^bearer(?:\s+|$)/i.test(key)) {
        key = key.replace(/^bearer\s*/i, '').trim();
    }
    return key;
}

export async function loadApiKey(provider?: string): Promise<string> {
    return await invoke<string>('load_api_key', { provider: provider || 'Google' });
}

export async function saveApiKey(provider: string, value: unknown): Promise<string> {
    return await invoke<string>('save_api_key', { provider, apiKey: normalizeApiKey(value) });
}
