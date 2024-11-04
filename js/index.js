const requestURL = 'https://dragonball-api.com/api/characters?page=1&limit=100';

async function fetchCharacters() {
    try {
        const response = await fetch(requestURL);

        if(!response.ok) {
            throw new Error(`An error ocurred. API request failed ${response.status}`);
        }

        return await response.json();
    } catch(error) {
        console.error(`An error ocurred. Null JSON ${error}`);
        return null;
    }
}

async function displayCharacters() {
    const main = document.querySelector('main');
    const data = await fetchCharacters();

    if(data && data.items) {
        console.log(data.items);
    } else {
        main.innerHTML = `<p>Dragon Ball API couldn't load</p>`;
    }
}

displayCharacters();