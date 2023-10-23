let pageCounter = 1;
while (pageCounter <= 53) {
    fetch(`https://www.balldontlie.io/api/v1/players?page=${pageCounter}&per_page=100`)
        .then(response => response.json())
        .then(object => object.data.filter(player => player.team.id === 13 && player.height_feet && player.height_inches).forEach(player => {
            console.log(player);
        }))
        .catch(error => console.error(error))
    pageCounter++;
}