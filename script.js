document.addEventListener('DOMContentLoaded', () => {

    // Referencje do elementów HTML
    const gameSelect = document.getElementById('game-variant-select');
    const generateBtn = document.getElementById('generate-scenario-btn');
    const scenarioDisplay = document.getElementById('scenario-display');
    const feedbackBox = document.getElementById('feedback');
    const feedbackText = document.getElementById('feedback-text');
    const decisionButtonsContainer = document.getElementById('decision-buttons');

    let currentScenario = null;

    // 1. Wypełnij listę gier na podstawie bazy
    function populateGameVariants() {
        const variants = [...new Set(scenarios.map(s => s.gameVariant))];
        variants.forEach(variant => {
            const option = document.createElement('option');
            option.value = variant;
            option.textContent = variant;
            gameSelect.appendChild(option);
        });
    }

    // 2. Funkcja do generowania i wyświetlania scenariusza
    function generateScenario() {
        const selectedVariant = gameSelect.value;
        const possibleScenarios = scenarios.filter(s => s.gameVariant === selectedVariant);
        
        if (possibleScenarios.length === 0) {
            alert("Brak scenariuszy dla tej gry!");
            return;
        }

        currentScenario = possibleScenarios[Math.floor(Math.random() * possibleScenarios.length)];
        displayScenario(currentScenario);
    }

    // 3. NOWA funkcja do wyświetlania danych na STOLE
    function displayScenario(scenario) {
        scenarioDisplay.classList.remove('hidden');
        feedbackBox.classList.add('hidden');

        // Wypełnij dane tekstowe
        document.getElementById('pot-size').textContent = scenario.potSize;
        document.getElementById('scenario-title').textContent = scenario.title;
        document.getElementById('scenario-description').textContent = scenario.description;
        document.getElementById('action-history').textContent = scenario.actionHistory;

        // Pobierz wszystkie miejsca na karty
        const heroCardSlots = document.querySelectorAll('.hero .card-slot');
        const opponentCardSlots = document.querySelectorAll('.opponent .card-slot');
        const boardCardSlots = document.querySelectorAll('.board .card-slot'); // Jeśli dodasz board w HTML

        // Wyczyść wszystkie miejsca na karty
        [...heroCardSlots, ...opponentCardSlots, ...boardCardSlots].forEach(slot => slot.innerHTML = '');

        // Wyświetl karty gracza (hero)
        if (scenario.heroHand && scenario.heroHand.length > 0) {
            scenario.heroHand.forEach((cardName, index) => {
                if (index < heroCardSlots.length) {
                    const img = document.createElement('img');
                    const holeCards = scenario.holeCardsCount || 0;
                    
                    if (index < holeCards) {
                        img.src = 'assets/images/cards/back.png';
                    } else {
                        img.src = `assets/images/cards/${cardName}.png`;
                    }
                    heroCardSlots[index].appendChild(img);
                }
            });
        }

        // Wyświetl karty przeciwnika
        if (scenario.opponentHand && scenario.opponentHand.length > 0) {
            scenario.opponentHand.forEach((cardName, index) => {
                if (index < opponentCardSlots.length && cardName) { // Sprawdza czy cardName nie jest pusty
                    const img = document.createElement('img');
                    if (cardName === '?') {
                        img.src = 'assets/images/cards/back.png';
                    } else {
                        img.src = `assets/images/cards/${cardName}.png`;
                    }
                    opponentCardSlots[index].appendChild(img);
                }
            });
        }
        
        // Wyświetl karty na stole (board) dla gier typu Hold'em/Omaha
        if (scenario.board && scenario.board.length > 0) {
             // W HTML musiałbyś dodać div dla boardu, aby to zadziałało
             // Na razie ten kod nie zostanie użyty, dopóki nie dodasz .board .card-slot
             scenario.board.forEach((cardName, index) => {
                if(index < boardCardSlots.length) {
                    const img = document.createElement('img');
                    img.src = `assets/images/cards/${cardName}.png`;
                    boardCardSlots[index].appendChild(img);
                }
             });
        }


        // Wyczyść i stwórz przyciski decyzji
        decisionButtonsContainer.innerHTML = '';
        scenario.options.forEach(optionText => {
            const button = document.createElement('button');
            button.textContent = optionText;
            button.addEventListener('click', () => checkAnswer(optionText));
            decisionButtonsContainer.appendChild(button);
        });
    }

    // 4. Funkcja do sprawdzania odpowiedzi (bez zmian)
    function checkAnswer(userChoice) {
        if (!currentScenario) return;

        if (userChoice === currentScenario.correctAnswer) {
            feedbackText.innerHTML = `<strong>Dobrze!</strong> ${currentScenario.explanation}`;
            feedbackBox.className = 'feedback correct';
        } else {
            feedbackText.innerHTML = `<strong>Niepoprawnie.</strong> Prawidłowa odpowiedź to: "${currentScenario.correctAnswer}".<br><br><strong>Wyjaśnienie:</strong> ${currentScenario.explanation}`;
            feedbackBox.className = 'feedback incorrect';
        }
        feedbackBox.classList.remove('hidden');
    }

    // Uruchomienie
    populateGameVariants();
    generateBtn.addEventListener('click', generateScenario);
});
