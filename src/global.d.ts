export {};

declare global {
  interface Window {
    fire?: any; // Thay 'any' bằng kiểu dữ liệu cụ thể nếu bạn biết
  }
}