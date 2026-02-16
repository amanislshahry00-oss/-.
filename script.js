// البيانات
const azkarData = [
  {
    title: "أذكار الصباح",
    category: "الصباح",
    content: "أصبحنا وأصبح الملك لله، والحمد لله...",
    count: 0
  },
  {
    title: "أذكار المساء",
    category: "المساء",
    content: "أمسينا وأمسى الملك لله، والحمد لله...",
    count: 0
  },
  {
    title: "دعاء النوم",
    category: "النوم",
    content: "باسمك ربي وضعت جنبي، وبك أرفعه...",
    count: 0
  },
  {
    title: "دعاء الاستيقاظ",
    category: "الاستيقاظ",
    content: "الحمد لله الذي أحيانا بعد ما أماتنا...",
    count: 0
  }
];

function increment(index) {
  azkarData[index].count++;
  document.getElementById(`count-${index}`).innerText = azkarData[index].count;
}
// دالة عرض الأذكار
function displayAzkar(list) {
  container.innerHTML = "";
  list.forEach((zekr, index) => {
    container.innerHTML += `
      container.innerHTML +=
  '<div class="card">' +
    '<h3>' + zekr.title + '</h3>' +
    '<small>' + zekr.category + '</small>' +
    '<p>' + zekr.content + '</p>' +
    '<div class="counter">' +
      '<span>العدد: <strong id="count-' + index + '">' + zekr.count + '</strong></span>' +
      '<button onclick="increment(' + index + ')">➕</button>' +
    '</div>' +
  '</div>';


// دالة زيادة العداد
function increment(index) {
  azkarData[index].count++;
  document.getElementById(`count-${index}`).innerText = azkarData[index].count;
}

// بحث ذكي (يتجاهل الهمزات والحروف)
function normalizeText(text) {
  const map = { "أ":"ا", "إ":"ا", "آ":"ا", "ى":"ي", "ؤ":"و", "ئ":"ي", "ة":"ه" };
  return text.toLowerCase().replace(/[أإآىؤئة]/g, c => map[c] || c).trim();
}

function searchAzkar() {
  const value = normalizeText(document.getElementById("searchInput").value);
  const filtered = azkarData.filter(z => {
    return normalizeText(z.title).includes(value) ||
           normalizeText(z.content).includes(value) ||
           normalizeText(z.category).includes(value);
  });
  displayAzkar(filtered);
}

// تبديل الوضع الليلي
function toggleMode() {
  document.body.classList.toggle("dark");
}
// عرض الأذكار عند التحميل
displayAzkar(azkarData);












