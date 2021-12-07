import "./style.css";
const cities = document.getElementsByClassName("municipio");

for (let i = 0; i < cities.length; i++) {
  cities[i].onclick = ()=>{
    let city = cities[i];
    city.addEventListener("mouseover", ()=>{
      
    })
    alert(city.getAttribute("name"));
  }
}