// ================= البيانات =================
const azkarData = [
  { id:1, title:"أذكار الصباح", category:"أذكار الصباح", content:"أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، رب أسألك خير ما في هذا اليوم وخير ما بعده، وأعوذ بك من شر ما في هذا اليوم وشر ما بعده، رب أعوذ بك من الكسل وسوء الكِبَر، رب أعوذ بك من عذاب في النار وعذاب في القبر.", count:0 },

  { id:2, title:"أذكار المساء", category:"أذكار المساء", content:"أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، رب أسألك خير ما في هذه الليلة وخير ما بعدها، وأعوذ بك من شر ما في هذه الليلة وشر ما بعدها، رب أعوذ بك من الكسل وسوء الكِبَر، رب أعوذ بك من عذاب في النار وعذاب في القبر.", count:0 },

  { id:3, title:"دعاء النوم", category:"أذكار النوم", content:"باسمك ربي وضعت جنبي، وبك أرفعه، فإن أمسكت نفسي فارحمها، وإن أرسلتها فاحفظها بما تحفظ به عبادك الصالحين.", count:0 },

  { id:4, title:"دعاء الاستيقاظ", category:"أذكار الاستيقاظ", content:"الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور.", count:0 },

  { id:5, title:"الاستغفار بعد الصلاة", category:" ما تقوله بعد الصلاة", content:"أستغفر الله، أستغفر الله، أستغفر الله. اللهم أنت السلام، ومنك السلام، تباركت يا ذا الجلال والإكرام.", count:0 },

  { id:6, title:"لا إله إلا الله وحده لا شريك له", category:" ماتقوله بعد الصلاة", content:"لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير. اللهم لا مانع لما أعطيت، ولا معطي لما منعت، ولا ينفع ذا الجد منك الجد.", count:0 },

  { id:7, title:"آية الكرسي", category:"ما تقوله بعد الصلاة", content:"اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ.", count:0 }
];

// ================= عرض الواجهة =================
function displayLayout() {
  const container = document.getElementById("azkarContainer");

  container.innerHTML = `
    <div class="azkar-dashboard">
      <div class="azkar-sidebar" id="sidebar"></div>
      <div class="azkar-main" id="mainContent">
        <h2>اختر قسم من القائمة</h2>
      </div>
    </div>
  `;

  const sidebar = document.getElementById("sidebar");

  const categories = [...new Set(azkarData.map(z => z.category))];

  categories.forEach(cat => {
    sidebar.innerHTML += `
      <div class="category-item" onclick="showCategory('${cat}')">
        ${cat}
      </div>
    `;
  });
}

// ================= عرض أذكار القسم =================
function showCategory(categoryName) {
  const main = document.getElementById("mainContent");
  const list = azkarData.filter(z => z.category === categoryName);

  main.innerHTML = `<h2>${categoryName}</h2>`;

  list.forEach(zekr => {
    main.innerHTML += `
      <div class="zekr-card">
        <h3>${zekr.title}</h3>
        <p>${zekr.content}</p>
        <button onclick="increment(${zekr.id})">➕ ${zekr.count}</button>
      </div>
    `;
  });
}

// ================= العداد =================
function increment(id) {
  const zekr = azkarData.find(z => z.id === id);
  zekr.count++;
  showCategory(zekr.category);
}

// ================= تشغيل عند الفتح =================
window.onload = function() {
  displayLayout();
};

