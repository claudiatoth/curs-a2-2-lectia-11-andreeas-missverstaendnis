// ============================================
// FLASHCARDS - A2.2 Lecția 11: Reflexive Verben mit Bedeutungsänderung
// Claudia Toth · 32 carduri: concept + perechi cu/fără sich + prepoziții + fraze
// REGULĂ: NICIODATĂ ghilimele interne ASCII — emfază cu CAPS; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Concept (4) ===
    { de: "sich + Verb", ro: "sich schimbă sensul verbului (cu/fără sich)", audio: "audio/letters/konzept-sich.wav" },
    { de: "sich vorstellen ≠ vorstellen", ro: "a-și imagina ≠ a prezenta", audio: "audio/letters/konzept-vorstellen.wav" },
    { de: "sich verlassen auf ≠ verlassen", ro: "a se baza pe ≠ a părăsi", audio: "audio/letters/konzept-verlassen.wav" },
    { de: "mich (Akkusativ) / mir (Dativ)", ro: "pronumele reflexiv: Akk vs Dativ", audio: "audio/letters/konzept-mich-mir.wav" },

    // === Perechi verb (12) ===
    { de: "sich vorstellen", ro: "a-și imagina (+ Dativ: stell dir vor!)", audio: "audio/letters/v-sich-vorstellen.wav" },
    { de: "vorstellen", ro: "a prezenta (pe cineva)", audio: "audio/letters/v-vorstellen.wav" },
    { de: "sich verlassen auf", ro: "a se baza pe", audio: "audio/letters/v-sich-verlassen.wav" },
    { de: "verlassen", ro: "a părăsi / a pleca", audio: "audio/letters/v-verlassen.wav" },
    { de: "sich erinnern an", ro: "a-și aminti", audio: "audio/letters/v-erinnern.wav" },
    { de: "sich entschuldigen", ro: "a-și cere scuze (bei + Dat)", audio: "audio/letters/v-entschuldigen.wav" },
    { de: "sich treffen mit", ro: "a se întâlni cu cineva (intenționat)", audio: "audio/letters/v-treffen.wav" },
    { de: "sich umziehen", ro: "a se schimba (hainele)", audio: "audio/letters/v-sich-umziehen.wav" },
    { de: "umziehen", ro: "a se muta (locuința)", audio: "audio/letters/v-umziehen.wav" },
    { de: "sich fürchten vor", ro: "a se teme de", audio: "audio/letters/v-fuerchten.wav" },
    { de: "sich verstehen mit", ro: "a se înțelege cu (cineva)", audio: "audio/letters/v-verstehen.wav" },
    { de: "sich merken", ro: "a memora (+ Dativ: merk dir das!)", audio: "audio/letters/v-merken.wav" },

    // === Prepoziția fixă (4) ===
    { de: "sich verlassen AUF + Akk", ro: "a se baza pe", audio: "audio/letters/p-auf.wav" },
    { de: "sich erinnern AN + Akk", ro: "a-și aminti de", audio: "audio/letters/p-an.wav" },
    { de: "sich fürchten VOR + Dat", ro: "a se teme de", audio: "audio/letters/p-vor.wav" },
    { de: "sich entschuldigen BEI + Dat", ro: "a-și cere scuze față de", audio: "audio/letters/p-bei.wav" },

    // === Fraze model (12) ===
    { de: "Ich stelle mir eine Reise vor.", ro: "Îmi imaginez o călătorie.", audio: "audio/letters/s-vorstellen.wav" },
    { de: "Darf ich mich vorstellen?", ro: "Pot să mă prezint?", audio: "audio/letters/s-mich-vorstellen.wav" },
    { de: "Ich verlasse mich auf dich.", ro: "Mă bazez pe tine.", audio: "audio/letters/s-verlassen.wav" },
    { de: "Anna hat Felix verlassen.", ro: "Anna l-a părăsit pe Felix.", audio: "audio/letters/s-verlassen2.wav" },
    { de: "Erinnerst du dich an mich?", ro: "Îți amintești de mine?", audio: "audio/letters/s-erinnern.wav" },
    { de: "Ich entschuldige mich bei dir.", ro: "Îmi cer scuze față de tine.", audio: "audio/letters/s-entschuldigen.wav" },
    { de: "Ich treffe mich mit Annika.", ro: "Mă întâlnesc cu Annika.", audio: "audio/letters/s-treffen.wav" },
    { de: "Ich ziehe mich schnell um.", ro: "Mă schimb repede (hainele).", audio: "audio/letters/s-umziehen.wav" },
    { de: "Im Mai ziehe ich nach Berlin um.", ro: "În mai mă mut la Berlin.", audio: "audio/letters/s-umziehen2.wav" },
    { de: "Ich fürchte mich vor Spinnen.", ro: "Mi-e frică de păianjeni.", audio: "audio/letters/s-fuerchten.wav" },
    { de: "Ich verstehe mich gut mit ihr.", ro: "Mă înțeleg bine cu ea.", audio: "audio/letters/s-verstehen.wav" },
    { de: "Merk dir das gut!", ro: "Ține minte bine asta!", audio: "audio/letters/s-merken.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
