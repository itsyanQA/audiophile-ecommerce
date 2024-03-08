export class StorageService {
  static getItem(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key)!);
    } catch (e) {
      return null;
    }
  }

  static setItem(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static deleteItem(key: string) {
    localStorage.removeItem(key);
  }
}
