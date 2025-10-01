// Czekamy, aż cała strona się załaduje, zanim uruchomimy skrypt
document.addEventListener('DOMContentLoaded', () => {

    // Nasza "baza danych" pytań. Możesz ją dowolnie rozbudowywać!
    const bazaPytan = {
        geografia: [
            "Wymień stolice państw w Afryce.",
            "Wymień państwa europejskie, które nie mają dostępu do morza.",
            "Podaj nazwy wszystkich województw w Polsce.",
            "Wymień najdłuższe rzeki na świecie.",
            "Wymień kraje, przez które przepływa Dunaj."
        ],
        pilka_nozna: [
            "Wymień wszystkich zwycięzców Ligi Mistrzów od 2000 roku.",
            "Wymień angielskich piłkarzy, którzy grają obecnie w hiszpańskiej La Liga.",
            "Podaj nazwy wszystkich klubów, w których grał Zlatan Ibrahimović.",
            "Wymień reprezentacje, które zdobyły Mistrzostwo Świata w piłce nożnej.",
            "Wymień polskich piłkarzy, którzy strzelili co najmniej 10 goli w reprezentacji."
        ],
        biologia: [
            "Wymień kości ludzkiej czaszki.",
            "Wymień gatunki drzew liściastych występujących w Polsce.",
            "Podaj nazwy organelli komórki eukariotycznej.",
            "Wymień etapy cyklu rozwojowego motyla.",
            "Wymień gatunki zwierząt objęte ścisłą ochroną w Polsce."
        ],
        dla_kobiet: [
            "Wymień znane polskie pisarki.",
            "Wymień popularne marki kosmetyków do makijażu dostępne w drogeriach.",
            "Wymień główne bohaterki z powieści Jane Austen.",
            "Podaj nazwy kultowych modeli torebek od znanych projektantów.",
            "Wymień aktorki, które zdobyły Oscara za najlepszą rolę pierwszoplanową w XXI wieku."
        ],
        polityka: [
            "Wymień wszystkich prezydentów Polski po 1989 roku.",
            "Wymień stałych członków Rady Bezpieczeństwa ONZ.",
            "Podaj nazwy wszystkich partii politycznych, które obecnie zasiadają w polskim Sejmie.",
            "Wymień kraje należące do Grupy G7.",
            "Wymień nazwiska wszystkich premierów Wielkiej Brytanii w XXI wieku."
        ]
    };

    // Pobieramy z HTML-a potrzebne elementy
    const przyciskiKategorii = document.querySelectorAll('.category-btn');
    const polePytania = document.getElementById('question-text');

    // Dodajemy "nasłuchiwanie" na kliknięcie do każdego przycisku
    przyciskiKategorii.forEach(button => {
        button.addEventListener('click', () => {
            const kategoria = button.dataset.category;
            let pulaPytan;

            if (kategoria === 'wszystko') {
                // Jeśli wybrano "Wszystko", łączymy pytania ze wszystkich kategorii w jedną dużą tablicę
                pulaPytan = Object.values(bazaPytan).flat();
            } else {
                // W przeciwnym razie bierzemy pytania tylko z wybranej kategorii
                pulaPytan = bazaPytan[kategoria];
            }

            // Losujemy pytanie
            const losowyIndex = Math.floor(Math.random() * pulaPytan.length);
            const wylosowanePytanie = pulaPytan[losowyIndex];

            // Wyświetlamy pytanie na stronie
            polePytania.textContent = wylosowanePytanie;
        });
    });
});