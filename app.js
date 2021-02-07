let submitBtn = document.getElementById('submit-btn');
let gamesDiv = document.getElementById('games');

submitBtn.addEventListener('click', addGame)

const currentTime = new Date();

function addGame(e) {
    e.preventDefault();

    if (confirm('Are you sure you want to add that game')) {
        let gameUrl = document.getElementById('game-url');
        let gameNameInput = document.getElementById('game-name');
        let creatorNameInput = document.getElementById('creator-name');
        let gameExpInput = document.getElementById('game-exp');

        let game = document.createElement('div');
        game.className = 'game';
        gamesDiv.appendChild(game);

        let gameSubDiv = document.createElement('div');
        gameSubDiv.className = 'game-subdiv';
        game.appendChild(gameSubDiv);

        let imageUrl = document.createElement('img');
        imageUrl.src = gameUrl.value;
        imageUrl.className = 'game-poster';
        gameSubDiv.appendChild(imageUrl);

        let gameRef = document.createElement('div');
        gameRef.className = 'game-ref';
        gameSubDiv.appendChild(gameRef);

        let gameName = document.createElement('h1');
        gameName.textContent = gameNameInput.value;
        gameName.className = 'game-name';
        gameRef.appendChild(gameName);

        let gameExp = document.createElement('p');
        gameExp.className = 'game-exp';
        gameExp.textContent = gameExpInput.value;
        gameRef.appendChild(gameExp);

        let datePosted = document.createElement('h5');
        datePosted.className = 'date-posted';
        datePosted.textContent = currentTime.getDate() + '-' + currentTime.getMonth() + '-' + currentTime.getFullYear();
        gameRef.appendChild(datePosted);

        let creatorName = document.createElement('h5');
        creatorName.className = 'game-creator';
        creatorName.textContent = creatorNameInput.value;
        gameRef.appendChild(creatorName);
    }


}







