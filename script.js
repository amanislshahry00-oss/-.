// ==========================
// البيانات
// ==========================
const azkarData = [
  { id:1, title:"أذكار الصباح", category:"أذكار الصباح", content:"أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، رب أسألك خير ما في هذا اليوم وخير ما بعده، وأعوذ بك من شر ما في هذا اليوم وشر ما بعده، رب أعوذ بك من الكسل وسوء الكِبَر، رب أعوذ بك من عذاب في النار وعذاب في القبر.", count:0 },

  { id:2, title:"أذكار المساء", category:"أذكار المساء", content:"أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، رب أسألك خير ما في هذه الليلة وخير ما بعدها، وأعوذ بك من شر ما في هذه الليلة وشر ما بعدها، رب أعوذ بك من الكسل وسوء الكِبَر، رب أعوذ بك من عذاب في النار وعذاب في القبر.", count:0 },

  { id:3, title:"دعاء النوم", category:"أذكارالنوم", content:"باسمك ربي وضعت جنبي، وبك أرفعه، فإن أمسكت نفسي فارحمها، وإن أرسلتها فاحفظها بما تحفظ به عبادك الصالحين.", count:0 },

  { id:4, title:"دعاء الاستيقاظ", category:"أذكار الاستيقاظ", content:"الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور.", count:0 },

  // =====  ماتقول بعد الصلاة =====
  { id:5, title:"الاستغفار بعد الصلاة", category:"بعد الصلاة", content:"أستغفر الله، أستغفر الله، أستغفر الله. اللهم أنت السلام، ومنك السلام، تباركت يا ذا الجلال والإكرام.", count:0 },
  { id:6, title:"لا إله إلا الله وحده لا شريك له", category:"بعد الصلاة", content:"لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير. اللهم لا مانع لما أعطيت، ولا معطي لما منعت، ولا ينفع ذا الجد منك الجد.", count:0 },
  { id:7, title:"آية الكرسي", category:"بعد الصلاة", content:"اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ.", count:0 },
  { id:8, title:"سورة الإخلاص", category:"بعد الصلاة", content:"قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ.", count:0 },
  { id:9, title:"سورة الفلق", category:"بعد الصلاة", content:"قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.", count:0 },
  { id:10, title:"سورة الناس", category:"بعد الصلاة", content:"قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ.", count:0 },
  { id:11, title:"التسبيح والتحميد والتكبير", category:"بعد الصلاة", content:"سبحان الله ثلاثاً وثلاثين مرة، الحمد لله ثلاثاً وثلاثين مرة، الله أكبر أربعاً وثلاثين مرة.", count:0 },
  { id:12, title:"اللهم أعني على ذكرك", category:"بعد الصلاة", content:"اللهم أعني على ذكرك وشكرك وحسن عبادتك.", count:0 },
  { id:13, title:"رب قني عذابك", category:"بعد الصلاة", content:"رب قني عذابك يوم تبعث عبادك.", count:0 }
];

// ==========================
// عرض الواجهة والقائمة الجانبية
// ==========================
function displayLayout() {
  const container = document.getElementById("azkarContainer");

 
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
 container.innerHTML = `
    <div class="azkar-dashboard">
      <div class="azkar-sidebar" id="sidebar"></div>
      <div class="azkar-main" id="mainContent">
      </div>
    </div>
  `;

// ==========================
// عرض أذكار القسم
// ==========================
function showCategory(categoryName) {
  const main = document.getElementById("mainContent");
  const list = azkarData.filter(z => z.category === categoryName);

  main.innerHTML = `<h2>${categoryName}</h2>`;

  if (categoryName === "بعد الصلاة") {
    // كل الأذكار في بطاقة واحدة
    main.innerHTML += `<div class="zekr-card">`;

    list.forEach(zekr => {
      main.innerHTML += `
        <h3>${zekr.title}</h3>
        <p>${zekr.content}</p>
        <button onclick="increment(${zekr.id})">➕ ${zekr.count}</button>
        <hr>
      `;
    });

    main.innerHTML += `</div>`;
  } else {
    // باقي الأقسام كل ذكر في بطاقة مستقلة
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
}

// ==========================
// العداد
// ==========================
function increment(id) {
  const zekr = azkarData.find(z => z.id === id);
  zekr.count++;
  showCategory(zekr.category);
}
function toggleMode() {
  document.body.classList.toggle("dark");
}

// ==========================
// تشغيل عند فتح الصفحة
// ==========================
window.onload = function() {
  displayLayout();
};




