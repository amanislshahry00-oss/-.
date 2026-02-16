const container = document.getElementById("azkarContainer");
let azkarData = [];

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    azkarData = data;
    displayAzkar(azkarData);
  });

function displayAzkar(list) {
  container.innerHTML = "";
  list.forEach(zekr => {
    container.innerHTML += `
      <div class="card">
        <h3>${zekr.title}</h3>
        <small>${zekr.category}</small>
        <p>${zekr.content}</p>
      </div>
    `;
  });
}

function searchAzkar() {
  const value = document.getElementById("searchInput").value;
  const filtered = azkarData.filter(z =>
    z.title.includes(value) || 
    z.content.includes(value) ||
    z.category.includes(value)
  );
  displayAzkar(filtered);
}

function toggleMode() {
  document.body.classList.toggle("dark");
}
