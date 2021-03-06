//document = HTML
const $body = document.getElementsByTagName("body");
const $container=document.getElementsByClassName("container");
const $title=document.getElementById("title");
const $cityList= document.getElementById("cityList");
const $cityDiv=document.querySelector(".city");

// console.log($body[0].innerText);
//console.log($container[0].innerHTML);
// console.log($title);
// console.log($cities);

const $cities=$cityList.querySelectorAll("li");
$cities.forEach(city=>
    console.log(city));

// const newCities=[...$cities];
const newCities=Array.from($cities);
newCities.map((city)=>console.log(city.innerText));

$body[0].style.backgroundColor="teal";
$cityDiv.style.color="grey";

//Element----------
const worstCity=document.createElement("ul");
const worstCityDiv=document.createElement("div");
const worstCitySubTitle=document.createElement("h2");
const worstCityArr=["Cairo","London", "Risbon", "Sydney"];

worstCitySubTitle.innerText="<Worst 5>"; //-><h2><Worst 5></h2>
worstCityDiv.appendChild(worstCitySubTitle);

worstCityArr.map((city)=> {
        const worstCityItem=document.createElement("li"); //<li></li>
        worstCityItem.innerText=city;
        console.log(worstCityItem);
        worstCity.appendChild(worstCityItem);
    }
);
//list.map(()=>{})

worstCityDiv.appendChild(worstCity);
$container[0].appendChild(worstCityDiv);

// const worstCityList=`
//   <ul>
//     <li>Cairo</li>
//     <li>London</li>
//     <li>Risbon</li>
//     <li>Sydney</li>
//   </ul>
// `

// $cityDiv.insertAdjacentHTML('beforeend',worstCityList);

worstCityDiv.classList.add("city");
// worstCityDiv.classList.remove("city");

// console.log(worstCityDiv)
worstCity.setAttribute("name","worstCity");

console.log(worstCity);