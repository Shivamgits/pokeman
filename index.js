const cont = document.querySelector(".container");

async function fetchapi(){
    const url = "https://pokeapi.co/api/v2/pokemon"
    const data = await fetch(url);
    const res = await data.json();
    console.log(res.results[0]);

    console.log(res.results[15].name)
    for(let i = 0; i < 19; i++){
        const url1 = `https://pokeapi.co/api/v2/pokemon/${i+1}`
    const data1 = await fetch(url1);
    const res1 = await data1.json();
    console.log(res1);
      const div = document.createElement("div")
      div.setAttribute("class", "container1");

      const innerdiv = document.createElement("div");
      innerdiv.setAttribute("class", "card");
      div.append(innerdiv);

      const img = document.createElement("img")
      img.setAttribute("class","image")
      innerdiv.append(img);
      img.src=res1.sprites.other.dream_world.front_default
     
      const div1 = document.createElement("div")
      innerdiv.append(div1);
       div1.innerText=res.results[i].name;
      
       cont.append(div)
    }
} 
fetchapi();