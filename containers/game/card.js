let current = document.getElementById("card--sub")
let urlApi = "https://rickandmortyapi.com/api/character/"

fetchData = async () => {
	try {
		const apidata = await fetch(urlApi)
		const api = await apidata.json()
		let map = api.results.map((nombre) => {
			return nombre.name
		})

		console.log(map)
		let printwrite = () => {
			for (let i = 0; i < map.length; i++) {
				current.innerHTML +=
					`<div class="cards--sub">
			 <img src="${api.results[i].image}" class="card-image"></img>
				<p class="card-text">${api.results[i].name}</p>
			</div>
			`
			}
		}
		printwrite()
	} catch (e) {
		console.log(e)
	}
}

fetchData()