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
        const variants = [...new Set(scenarios.map(s => s.gameVariant))]; // Unikalne nazwy gier
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

    // 3. Funkcja do wyświetlania danych na stronie
    function displayScenario(scenario) {
        scenarioDisplay.classList.remove('hidden');
        feedbackBox.classList.add('hidden');

        document.getElementById('scenario-title').textContent = scenario.title;
        document.getElementById('scenario-description').textContent = scenario.description;
        document.getElementById('pot-size').textContent = scenario.potSize;
        document.getElementById('hero-hand').textContent = scenario.heroHand;
        document.getElementById('board-cards').textContent = scenario.board;
        document.getElementById('action-history').textContent = scenario.actionHistory;

        // Wyczyść i stwórz przyciski decyzji
        decisionButtonsContainer.innerHTML = '';
        scenario.options.forEach(optionText => {
            const button = document.createElement('button');
            button.textContent = optionText;
            button.addEventListener('click', () => checkAnswer(optionText));
            decisionButtonsContainer.appendChild(button);
        });
    }

    // 4. Funkcja do sprawdzania odpowiedzi
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
