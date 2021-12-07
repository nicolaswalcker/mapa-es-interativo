import "./style.css";
const cities = document.getElementsByClassName("municipio");
const base = document.createElement("tooltip");
const fullMap = document.getElementById("svg-map");
for (let i = 0; i < cities.length; i++) {
  cities[i].addEventListener("click", (e) => {
    const city = cities[i];
    /* alert(city.getAttribute("name")); */
    let text = city.getAttribute("name");
    let tip = document.createTextNode(text);
    if ((text = !null)) {
      base.innerHTML = "";
      base.appendChild(tip);
      if (document.getElementsByTagName("tooltip")[0]) {
        document.getElementsByTagName("tooltip")[0].remove();
      }
      base.style.top = (e.clientY - 10) + "px";
      base.style.left = (e.clientX + 15) + "px";
      document.body.appendChild(base);
    }
    fullMap.addEventListener("mouseover", ()=>{
      if (document.getElementsByTagName("tooltip").length > 0) {
        document.getElementsByTagName("tooltip")[0].remove();
      }
    });
    city.addEventListener("mouseover", ()=>{
      if (document.getElementsByTagName("tooltip").length > 0) {
        document.getElementsByTagName("tooltip")[0].remove();
      }
    });
  });
}
