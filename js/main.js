async function fetchData(e) {
    if(e.key == 'Enter' ){
        const inputValue = document.getElementById('buscar').value.toLowerCase();
        const data = await fetch (`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
        const json = await data.json();

        console.log(data)
        

        document.getElementById('pokemonId').innerText = json.name
        document.getElementById('imagen').src = json.sprites.front_default;

         console.log(json)
        
    }if(e.key == 'Enter' == true){
        document.getElementById('buscar').value = ""
    }

}

const input = document.getElementById('buscar')
input.addEventListener('keypress', e => fetchData(e))