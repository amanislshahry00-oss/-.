function renderAzkar(){
const container=document.getElementById("categories");
container.innerHTML="";

let grouped={};

azkar.forEach((z,i)=>{
if(!grouped[z.category]){
grouped[z.category]=[];
}
grouped[z.category].push({...z,index:i});
});

for(let cat in grouped){
container.innerHTML+=<h2>${cat}</h2>;
grouped[cat].forEach(z=>{
let count=localStorage.getItem("counter"+z.index)||0;

container.innerHTML+=`
<div class="card">
<h3>${z.title}</h3>
<p>${z.text}</p>
<div class="counter">
📿 <span id="c${z.index}">${count}</span>
<button onclick="inc(${z.index})">+</button>
<button onclick="resetCount(${z.index})">إعادة</button>
</div>
</div>
`;
});
}
}

function inc(i){
let c=localStorage.getItem("counter"+i)||0;
c++;
localStorage.setItem("counter"+i,c);
document.getElementById("c"+i).innerText=c;
}

function resetCount(i){
localStorage.setItem("counter"+i,0);
document.getElementById("c"+i).innerText=0;
}

function searchAzkar(val){
let cards=document.querySelectorAll(".card");
cards.forEach(card=>{
card.style.display=card.innerText.includes(val)?"block":"none";
});
}

function toggleMode(){
document.body.classList.toggle("light");
}

renderAzkar();
