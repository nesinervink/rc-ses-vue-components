declare class CookieStorage implements Storage {
    setItem(k: string, v: any): void;
    getItem(k: string): any;
    clear(): void;
    removeItem(k: string): void;
    get length(): number;
    key(index: number): string | null;
}
export default CookieStorage;
