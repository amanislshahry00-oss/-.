// البيانات
const azkarData = [
  { 
    title: "أذكار الصباح", 
    category: "الصباح", 
    content: "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، رب أسألك خير ما في هذا اليوم وخير ما بعده، وأعوذ بك من شر ما في هذا اليوم وشر ما بعده، رب أعوذ بك من الكسل وسوء الكبر، رب أعوذ بك من عذاب في النار وعذاب في القبر.", 
    count: 0
  },

  { 
    title: "أذكار المساء", 
    category: "المساء", 
    content: "أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، رب أسألك خير ما في هذه الليلة وخير ما بعدها، وأعوذ بك من شر ما في هذه الليلة وشر ما بعدها، رب أعوذ بك من الكسل وسوء الكبر، رب أعوذ بك من عذاب في النار وعذاب في القبر.", 
    count: 0
  },

  { 
    title: "دعاء النوم", 
    category: "النوم", 
    content: "باسمك ربي وضعت جنبي، وبك أرفعه، فإن أمسكت نفسي فارحمها، وإن أرسلتها فاحفظها بما تحفظ به عبادك الصالحين.", 
    count: 0
  },

  { 
    title: "دعاء الاستيقاظ", 
    category: "الاستيقاظ", 
    content: "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور.", 
    count: 0
  },
const azkarData = [
  // أذكار بعد الصلاة
  { 
    title: "الاستغفار بعد الصلاة", 
    category: "بعد الصلاة", 
    content: "أستغفر الله (3 مرات) — اللهم أنت السلام ومنك السلام، تباركت يا ذا الجلال والإكرام.", 
    count: 0
  },

  { 
    title: "لا إله إلا الله وحده لا شريك له", 
    category: "بعد الصلاة", 
    content: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير. اللهم لا مانع لما أعطيت، ولا معطي لما منعت، ولا ينفع ذا الجد منك الجد.", 
    count: 0
  },

  { 
    title: "آية الكرسي", 
    category: "بعد الصلاة", 
    content: "اللَّهُ لا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لا تَأْخُذُهُ سِنَةٌ وَلا نَوْمٌ ۚ لَهُ مَا فِي السَّمَوَاتِ وَمَا فِي الأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالأَرْضَ ۖ وَلا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ [البقرة:255]", 
    count: 0
  },

  { 
    title: "المعوذات", 
    category: "بعد الصلاة", 
    content: "قراءة سورة الإخلاص، وسورة الفلق، وسورة الناس (مرة واحدة بعد كل صلاة، وثلاث مرات بعد الفجر والمغرب).",  
    count: 0
  },

  { 
    title: "التسبيح بعد الصلاة", 
    category: "بعد الصلاة", 
    content: "سبحان الله (33 مرة) — الحمد لله (33 مرة) — الله أكبر (34 مرة).", 
    count: 0
  },

  { 
    title: "دعاء: اللهم أعني على ذكرك", 
    category: "بعد الصلاة", 
    content: "اللهم أعني على ذكرك وشكرك وحسن عبادتك.", 
    count: 0
  },

  { 
    title: "دعاء: رب قني عذابك", 
    category: "بعد الصلاة", 
    content: "رب قني عذابك يوم تبعث عبادك.", 
    count: 0
  }
];

// دالة زيادة العداد
function increment(index) {
  azkarData[index].count++;
  document.getElementById("count-" + index).innerText = azkarData[index].count;
}

// دالة عرض الأذكار
function displayAzkar(list) {
  const container = document.getElementById("azkarContainer");
  container.innerHTML = "";

  list.forEach((zekr, index) => {
    container.innerHTML += `
      <div class="card">
        <h3>${zekr.title}</h3>
        <small>${zekr.category}</small>
        <p>${zekr.content}</p>
        <div class="counter">
          <span>العدد: <strong id="count-${index}">${zekr.count}</strong></span>
          <button onclick="increment(${index})">➕</button>
        </div>
      </div>
    `;
  });
}

// بحث ذكي (يتجاهل الهمزات والحروف)
function normalizeText(text) {
  const map = { "أ":"ا", "إ":"ا", "آ":"ا", "ى":"ي", "ؤ":"و", "ئ":"ي", "ة":"ه" };
  return text.toLowerCase().replace(/[أإآىؤئة]/g, c => map[c] || c).trim();
}

// دالة البحث
function searchAzkar() {
  const value = normalizeText(document.getElementById("searchInput").value);
  const filtered = azkarData.filter(z => 
    normalizeText(z.title).includes(value) ||
    normalizeText(z.content).includes(value) ||
    normalizeText(z.category).includes(value)
  );
  displayAzkar(filtered);
}

// تبديل الوضع الليلي
function toggleMode() {
  document.body.classList.toggle("dark");
}


























