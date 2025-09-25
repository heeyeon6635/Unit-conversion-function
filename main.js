// ここからコードを書いてください

// 1. tabs.js 에서 setupTabs 함수 import
import { setupTabs } from "./js/tabs.js";
import { setupConverter } from "./js/converter.js";

// 2. DOMContentLoaded 이벤트 발생 시 setupTabs 실행
// document.addEventListener("이벤트이름", 콜백함수);
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  setupConverter();
});
