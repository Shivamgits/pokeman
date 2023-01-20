const cont = document.querySelector(".container");
const next = document .getElementById("next");
let url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
let res = null
let count = 0;
async function fetchapi(){
     let data = await fetch(url);
     res = await data.json();

    for(let i = 0; i < 19; i++){
        const url1 = `https://pokeapi.co/api/v2/pokemon/${count+1}`
    const data1 = await fetch(url1);
    count++;
    const res1 = await data1.json();
     //console.log(res1);
      const div = document.createElement("div")
      div.setAttribute("class", "container1");

      const innerdiv = document.createElement("div");
      innerdiv.setAttribute("class", "card");
      div.append(innerdiv);

      const hp = document.createElement("div")
      innerdiv.append(hp);
       hp.innerText= ` hp : ${res1.stats[0].base_stat}`
         
       const imageDiv = document.createElement("div")
      innerdiv.append(imageDiv);

      const img = document.createElement("img")
      img.setAttribute("class","image")
      imageDiv.append(img);
      img.src=res1.sprites.other.dream_world.front_default
     
      const name = document.createElement("div")
      innerdiv.append(name);
      name.setAttribute("class","name")
      name.innerText=res.results[i].name;

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
  
     // console.log(url)
    
}

async function nextPage(){
  for(let i = 0; i <19;i++){
    const outer = document.querySelector(".container1");
    outer.remove();
  }
 
  count=count+1;
  //console.log(count)
  url = res.next
 fetchapi()
}
async function previousPage(){
  for(let i = 0; i <19;i++){
    const outer = document.querySelector(".container1");
    outer.remove();
  }
  count=count-39;
  //console.log(count)
  url = res.previous;
 fetchapi()
}

fetchapi();
