const scenarios = [
    {
        id: 1,
        gameVariant: "No-Limit Hold'em",
        title: "Pre-flop: Obrona Blinda",
        description: "Jesteś na Big Blindzie. Gracz na pozycji Cutoff (agresywny) otwiera za 2.5BB. Wszyscy do Ciebie pasują. Masz 100BB stacka.",
        potSize: "3.5 BB",
        heroHand: ['Ad', '9c'],
        holeCardsCount: 2,
        opponentHand: [],
        board: [],
        actionHistory: "Cutoff podbija do 2.5 BB. Button pasuje. Small Blind pasuje.",
        options: ["Spasuj", "Sprawdź", "3-bet do 9 BB"],
        correctAnswer: "3-bet do 9 BB",
        explanation: "Poprawna odpowiedź to 3-bet. A9s jest zbyt silne na sam call z tej pozycji przeciwko agresywnemu graczowi z Cutoff. 3-bet pozwala przejąć inicjatywę i często wygrać pulę od razu."
    },
    {
        id: 2,
        gameVariant: "No-Limit Hold'em",
        title: "Turn: Scare card",
        description: "Gra cashowa, stacki po 100BB. Podbiłeś pre-flop z UTG, jeden gracz sprawdził na Buttonie.",
        potSize: "17.5 BB",
        heroHand: ['Ks', 'Kd'],
        holeCardsCount: 2,
        opponentHand: [],
        board: ['Js', '8c', '3h', 'As'],
        actionHistory: "Na flopie (J-8-3) zabetowałeś, a przeciwnik sprawdził. Na turnie spada As.",
        options: ["Check", "Bet 1/3 puli", "Bet 2/3 puli"],
        correctAnswer: "Check",
        explanation: "Poprawna odpowiedź to check. As jest 'straszną kartą' (scare card), która trafia w dużą część zakresu przeciwnika, który sprawdzał na flopie. Dalsze betowanie byłoby ryzykowne. Check pozwala na kontrolę puli i ewentualne złapanie blefu."
    },
    {
        id: 3,
        gameVariant: "Stud8 (Hi-Lo)",
        title: "Third Street: Startowa ręka",
        description: "Otrzymujesz pierwsze trzy karty. Jesteś na środkowej pozycji.",
        potSize: "Ante",
        heroHand: ['As', '2s', '3s'],
        holeCardsCount: 2,
        opponentHand: ['?', '?', 'Kd', '', '?', '?', '7c', '', '?', '?', 'Qh'], // Używamy pustych stringów dla pustych miejsc
        board: [],
        actionHistory: "Gracz z najniższą kartą (bring-in) wpłacił obowiązkowy zakład. Akcja dochodzi do Ciebie.",
        options: ["Spasuj", "Uzupełnij (Complete)", "Sprawdź (jeśli można)"],
        correctAnswer: "Uzupełnij (Complete)",
        explanation: "Poprawna odpowiedź to uzupełnienie (podbicie). Masz trzy karty do koloru, strita i najlepszego możliwego układu low (A-2-3). To jest premium ręka startowa w Stud8, którą należy rozgrywać agresywnie."
    },
    {
        id: 4,
        gameVariant: "Pot-Limit Omaha",
        title: "Flop: Silny draw",
        description: "Gra cashowa PLO100, stacki po 100BB. Jesteś na Buttonie.",
        potSize: "13.5 BB",
        heroHand: ['As', 'Ks', 'Td', '9d'],
        holeCardsCount: 4,
        opponentHand: [],
        board: ['Qs', 'Js', '5d'],
        actionHistory: "Gracz z pozycji UTG zagrał check. Gracz z MP również czeka.",
        options: ["Check", "Bet 1/2 puli", "Bet całą pulę"],
        correctAnswer: "Bet całą pulę",
        explanation: "Poprawna odpowiedź to bet za pulę. Masz potężne combo draw: nut flush draw i gutshot do nut straight (potrzebujesz króla). W PLO takie ręce rozgrywa się bardzo agresywnie, aby budować pulę i maksymalizować equity. Check jest zbyt pasywny."
    },
    {
        id: 5,
        gameVariant: "Stud8 (Hi-Lo)",
        title: "Fifth Street: Podwójne wysokie stawki",
        description: "Masz A-2-3-7-8, czyli gotowy układ Lo. Przeciwnik ma parę króli (K-K-5).",
        potSize: "12 małych stawek",
        heroHand: ['Ac', '2d', '3c', '7d', '8s'],
        holeCardsCount: 2,
        opponentHand: ['?', '?', 'Kd', 'Kc', '5s'],
        board: [],
        actionHistory: "Przeciwnik zagrywa bet. Od tej ulicy stawki są podwójne.",
        options: ["Spasuj", "Sprawdź", "Podbij"],
        correctAnswer: "Podbij",
        explanation: "Masz już gotowy, bardzo silny układ Lo i jesteś faworytem do wygrania połowy puli. Przeciwnik ma tylko parę króli. Podbicie jest konieczne, aby budować pulę i maksymalizować zysk z układu Lo. Sprawdzenie byłoby zbyt pasywne."
    },
    // Upewnij się, że wszystkie 24 scenariusze są tutaj w nowym formacie.
    // Poniżej przykłady, jak przekonwertować resztę:
    {
        id: 14,
        gameVariant: "Stud8 (Hi-Lo)",
        title: "Seventh Street: Blef catch z asem high",
        description: "Dobierałeś do Lo i koloru, ale nic nie trafiłeś. Przeciwnik też nic nie pokazał.",
        potSize: "10 dużych stawek",
        heroHand: ['As', '2s', '6s', '8d', 'Qc', 'Kh', '4d'],
        holeCardsCount: 2,
        opponentHand: ['?', '?', '3c', '5d', 'Td', 'Jc', '?'],
        board: [],
        actionHistory: "Przeciwnik, który nie pokazał ani pary, ani drawu do Lo, zagrywa bet.",
        options: ["Spasuj", "Sprawdź"],
        correctAnswer: "Sprawdź",
        explanation: "To klasyczny 'bluff catch'. Żaden z was nie pokazuje siły. Twój układ Hi to tylko As-high. Jednak board przeciwnika jest równie słaby. Jego bet na river w tak dużą pulę, bez reprezentowania czegokolwiek, wygląda na czysty blef. Sprawdzenie z Asem-high jest tutaj często opłacalne."
    }
    // ...i tak dalej dla wszystkich pozostałych scenariuszy.
];
