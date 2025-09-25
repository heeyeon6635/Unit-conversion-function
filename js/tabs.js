// ここからコードを書いてください

// 他のファイルからインポートできるように export
export function setupTabs() {
  // --- DOM 요소 가져오기 ---
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterLink = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  // --- 이벤트 처리 ---
  // 홈 링크 클릭 → 홈 섹션 표시, 변환기 섹션 숨기기
  homeLink.addEventListener("click", () => {
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  });

  // 단위변환 탭 클릭 → 변환기 섹션 표시, 홈 섹션 숨기기
  converterLink.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
  });
}
