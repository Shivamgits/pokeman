const cont = document.querySelector(".container");
const next = document .querySelector(".next");
const prev = document .querySelector(".previous");
const searchBar = document.querySelector("#searchBar");
let url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
let res = null
let count = 0;
const bcol = {
  bug : "#26de81",
  dragon : "#ffeaa7",
  electric : "#fed330",
  fairy : "#FF0069",
  fighting : "#30336b",
  fire : "#f0932b", 
  flying : "#81ecec", 
  grass : "#00b894", 
  ground : "#EFB549", 
  ghost : "#a55eea", 
  ice : "#74b9ff", 
  normal : "#95afc0", 
  poison : "#6c5ce7", 
  psychic : "#a29bfe", 
  rock : "#2d3436", 
  water :"#0190FF"
}
let flag = 0;
async function fetchapi(){
     let data = await fetch(url);
     res = await data.json();
    //  console.log(res.previous);
     if(res.previous != null){
      prev.style.display = "initial";
    }

     if(res.previous == null){
        prev.style.display = 'none';
     }
     if(res.next != null){
      next.style.display = "initial";
    }
     
     if(res.next == null){
      next.style.display = 'none';
     }
    
    for(let i = 0; i < 19; i++){
        const url1 = `https://pokeapi.co/api/v2/pokemon/${count+1}`
    const data1 = await fetch(url1);
    count++;
    const res1 = await data1.json();
    const color=bcol[res1.types[0].type.name];
    //  console.log(res1);
      const div = document.createElement("div")
      div.setAttribute("class", "container1");
      div.style.background = `radial-gradient(circle at 50% 0%, ${color} 40%, #ffffff 36%)`

      const innerdiv = document.createElement("div");
      innerdiv.setAttribute("class", "card");
      div.append(innerdiv);

      const hp = document.createElement("div")
      innerdiv.append(hp);
       hp.innerText= ` hp : ${res1.stats[0].base_stat}`
       hp.setAttribute("class", "hp");

       const imageDiv = document.createElement("div")
      innerdiv.append(imageDiv);

      const img = document.createElement("img")
      img.setAttribute("class","image")
      imageDiv.append(img);
      img.src=res1.sprites.other.home.front_default
     
      const name = document.createElement("div")
      innerdiv.append(name);
      name.setAttribute("class","name")
      name.innerText=res.results[i].name;

      const type = document.createElement("div")
      innerdiv.append(type);
      type.setAttribute("class","type")
      //console.log(res1.types.length)

      for(let i=0;i<res1.types.length;i++){
        const types = document.createElement("div")
        type.append(types);
        types.setAttribute("class","types")
        types.innerText = res1.types[i].type.name
        types.style.background=color;
      }

       const stats = document.createElement("div")
       innerdiv.append(stats);
       stats.setAttribute("class","stats")

       const attack = document.createElement("div")
       stats.append(attack);
       attack.innerText= ` attack  ${res1.stats[1].base_stat}`

        const defence = document.createElement("div")
        stats.append(defence);
        defence.innerText= ` defence  ${res1.stats[2].base_stat}`

         const speed = document.createElement("div")
         stats.append(speed);
         speed.innerText= ` speed  ${res1.stats[5].base_stat}`
      
       cont.append(div)
    }  
   
}

async function nextPage(){
  for(let i = 0; i <19;i++){
    const outer = document.querySelector(".container1");
    outer.remove();
  }
 
  count=count+1;
  //console.log(count)
  url = res.next
 fetchapi(url)
}
async function previousPage(){
  for(let i = 0; i <19;i++){
    const outer = document.querySelector(".container1");
    outer.remove();
  }
  count=count-39;
  //console.log(count)
  url = res.previous;
 fetchapi(url)
}

 async function search(){
 
  if(flag == 0){
    for(let i = 0; i <19;i++){
      const outer = document.querySelector(".container1");
      outer.remove();
    }
  }
  next.style.display = "none";
  prev.style.display = "none";
 
  if(flag == 1){
    const outer = document.querySelector(".container1");
       outer.remove();   
  }
  flag =1;
  let u = `https://pokeapi.co/api/v2/pokemon/${searchBar.value}`;
    let data1 = await fetch(u);
   let  res3 = await data1.json();
      console.log(res3);

      const color=bcol[res3.types[0].type.name];
      const div = document.createElement("div")
      div.setAttribute("class", "container1");
      div.style.background = `radial-gradient(circle at 50% 0%, ${color} 40%, #ffffff 36%)`
      div.style.margin = "4rem auto"
      div.style.transform = "scale(1.3)"

      const innerdiv = document.createElement("div");
      innerdiv.setAttribute("class", "card");
      div.append(innerdiv);

      const hp = document.createElement("div")
      innerdiv.append(hp);
       hp.innerText= ` hp : ${res3.stats[0].base_stat}`
       hp.setAttribute("class", "hp");

       const imageDiv = document.createElement("div")
      innerdiv.append(imageDiv);

      const img = document.createElement("img")
      img.setAttribute("class","image")
      imageDiv.append(img);
      img.src=res3.sprites.other.home.front_default
     
      const name = document.createElement("div")
      innerdiv.append(name);
      name.setAttribute("class","name")
      name.innerText=res3.name;

      const type = document.createElement("div")
      innerdiv.append(type);
      type.setAttribute("class","type")
      //console.log(res1.types.length)

      for(let i=0;i<res3.types.length;i++){
        const types = document.createElement("div")
        type.append(types);
        types.setAttribute("class","types")
        types.innerText = res3.types[i].type.name
        types.style.background=color;
      }

       const stats = document.createElement("div")
       innerdiv.append(stats);
       stats.setAttribute("class","stats")

       const attack = document.createElement("div")
       stats.append(attack);
       attack.innerText= ` attack  ${res3.stats[1].base_stat}`

        const defence = document.createElement("div")
        stats.append(defence);
        defence.innerText= ` defence  ${res3.stats[2].base_stat}`

         const speed = document.createElement("div")
         stats.append(speed);
         speed.innerText= ` speed  ${res3.stats[5].base_stat}`
      
       cont.append(div)

 }
 
 function home(){
  count=0;
  url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
 
  if(flag == 0){
    for(let i = 0; i <19;i++){
      const outer = document.querySelector(".container1");
      outer.remove();
    }
  }
  if(flag == 1){
    const outer = document.querySelector(".container1");
       outer.remove();
      
  }
  flag=0;
  fetchapi()
}
fetchapi();
