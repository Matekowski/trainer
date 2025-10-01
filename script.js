document.addEventListener('DOMContentLoaded', () => {
const scenarios = [
    {
        id: 1,
        gameVariant: "No-Limit Hold'em",
        title: "Pre-flop: Obrona Blinda",
        description: "Jesteś na Big Blindzie. Gracz na pozycji Cutoff (agresywny) otwiera za 2.5BB. Wszyscy do Ciebie pasują. Masz 100BB stacka.",
        potSize: "3.5 BB",
        heroHand: "A♦️ 9♣️",
        board: "Brak",
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
        heroHand: "K♠️ K♦️",
        board: "J♠️ 8♣️ 3❤️ A♠️",
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
        potSize: "Zmienna (zależna od ante)",
        heroHand: "(A♠️ 2♠️) 3♠️", // W nawiasie karty zakryte
        board: "Twoja odkryta karta to 3♠️. U przeciwników widzisz: K♦️, 7♣️, Q❤️.",
        actionHistory: "Gracz z najniższą kartą (bring-in) wpłacił obowiązkowy zakład. Akcja dochodzi do Ciebie.",
        options: ["Spasuj", "Uzupełnij (Complete)", "Sprawdź (jeśli można)"],
        correctAnswer: "Uzupełnij (Complete)",
        explanation: "Poprawna odpowiedź to uzupełnienie (podbicie). Masz trzy karty do koloru, strita i najlepszego możliwego układu low (A-2-3). To jest premium ręka startowa w Stud8, którą należy rozgrywać agresywnie."
    }
    // ... dodaj więcej scenariuszy dla różnych gier!

});
