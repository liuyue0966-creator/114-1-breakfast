export const NAV_ITEMS = [
  { path:"/", label: "首頁", icon: "🏠" },
  { path: "/menu", label: "點餐菜單", icon: "🍔" },
  { path: "/about", label: "關於我們", icon: "🧑‍🤝‍🧑" },
  { path: "/contact", label: "聯絡我們", icon: "📞" },
];

export const isPathActive = (currentPath, targetPath) => {
  // 1. 完全匹配：適用於所有非巢狀路徑 (例如：/menu, /about)
  if (currentPath === targetPath) {
      return true;
  }

  // 2. 嚴格的首頁檢查：如果目標路徑是首頁，並且當前路徑不是首頁，則不匹配
  if (targetPath === "/") {
      return false;
  }

  // 3. 巢狀路徑匹配：適用於有子頁面的情況，例如 /menu 匹配 /menu/item
  // 檢查當前路徑是否以目標路徑開頭，並且目標路徑後面必須是 '/'
  // 這樣可以避免 '/men' 匹配到 '/menu' 的錯誤情況
  return currentPath.startsWith(targetPath + "/");
};