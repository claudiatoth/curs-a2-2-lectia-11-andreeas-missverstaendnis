// ============================================
// EXERCIȚII - A2.2 Lecția 11: Reflexive Verben mit Bedeutungsänderung
// Claudia Toth · 5 exerciții cu rezolvări complete
// reflexivul mich/mir · sensul (cu/fără sich) · prepoziția fixă · traducere
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        // ü→u, ö→o, ä→a (vocală simplă, NU ue/oe/ae): accept-urile sunt scrise fără umlaut
        // și astfel acceptăm și tastarea pe mobil fără umlaut. NU schimba în ue/oe/ae fără a rescrie accept-urile!
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: Pronumele reflexiv (mich/mir/dich/dir/sich/uns/euch) (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', prompt: 'Ich verlasse ____ auf dich.', hint: 'eu, Akkusativ (sich verlassen)', correct: 'mich', accept: ['mich'] },
    { id: 'b', prompt: 'Kannst du ____ eine Reise vorstellen?', hint: 'tu, Dativ (sich etwas vorstellen = a imagina)', correct: 'dir', accept: ['dir'] },
    { id: 'c', prompt: 'Erinnerst du ____ an mich?', hint: 'tu, Akkusativ (sich erinnern)', correct: 'dich', accept: ['dich'] },
    { id: 'd', prompt: 'Wir treffen ____ am Bahnhof.', hint: 'noi (sich treffen)', correct: 'uns', accept: ['uns'] },
    { id: 'e', prompt: 'Ich entschuldige ____ bei dir.', hint: 'eu, Akkusativ (sich entschuldigen)', correct: 'mich', accept: ['mich'] },
    { id: 'f', prompt: 'Er fürchtet ____ vor Hunden.', hint: 'el (sich fürchten)', correct: 'sich', accept: ['sich'] },
    { id: 'g', prompt: 'Merk ____ das gut!', hint: 'tu, Dativ (sich etwas merken = a memora)', correct: 'dir', accept: ['dir'] },
    { id: 'h', prompt: 'Ich ziehe ____ schnell um.', hint: 'eu, Akkusativ (sich umziehen = a se schimba)', correct: 'mich', accept: ['mich'] },
    { id: 'i', prompt: 'Versteht ihr ____ gut?', hint: 'voi (sich verstehen)', correct: 'euch', accept: ['euch'] },
    { id: 'j', prompt: 'Kann ich ____ das leisten?', hint: 'eu, Dativ (sich etwas leisten = a-și permite)', correct: 'mir', accept: ['mir'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Completează cu pronumele reflexiv corect.</strong><br>
        Akkusativ: mich/dich/sich/uns/euch · Dativ: mir/dir/sich/uns/euch. Dativ apare la vorstellen/merken/leisten (când mai e un obiect).
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="mich / mir / dich / dir / sich...">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: Cu sich sau fără sich? (sensul) (8 itemi)
// ============================================
const ex2Data = [
    { id: 'a', text: 'Ich treffe mich mit Annika.', a: 'Mă întâlnesc (intenționat) cu Annika', b: 'O întâlnesc întâmplător pe Annika', correct: 'Mă întâlnesc (intenționat) cu Annika', expl: 'sich treffen mit = a se întâlni intenționat.' },
    { id: 'b', text: 'Anna hat Felix verlassen.', a: 'Anna se bazează pe Felix', b: 'Anna l-a părăsit pe Felix', correct: 'Anna l-a părăsit pe Felix', expl: 'verlassen (fără sich) = a părăsi.' },
    { id: 'c', text: 'Ich stelle mir ein Haus vor.', a: 'Îmi imaginez o casă', b: 'Prezint o casă', correct: 'Îmi imaginez o casă', expl: 'sich (Dat) vorstellen = a-și imagina.' },
    { id: 'd', text: 'Darf ich Ihnen meinen Kollegen vorstellen?', a: 'Vi-l prezint pe colegul meu', b: 'Mi-l imaginez pe colegul meu', correct: 'Vi-l prezint pe colegul meu', expl: 'vorstellen (fără sich) = a prezenta pe cineva.' },
    { id: 'e', text: 'Ich ziehe mich um.', a: 'Mă schimb (hainele)', b: 'Mă mut (locuința)', correct: 'Mă schimb (hainele)', expl: 'sich umziehen = a se schimba (hainele).' },
    { id: 'f', text: 'Ich ziehe nach Berlin um.', a: 'Mă mut la Berlin', b: 'Mă schimb la Berlin', correct: 'Mă mut la Berlin', expl: 'umziehen (fără sich) = a se muta (locuința).' },
    { id: 'g', text: 'Ich verlasse mich auf dich.', a: 'Mă bazez pe tine', b: 'Te părăsesc', correct: 'Mă bazez pe tine', expl: 'sich verlassen auf = a se baza pe.' },
    { id: 'h', text: 'Verstehst du den Akkusativ?', a: 'Înțelegi acuzativul?', b: 'Te înțelegi cu acuzativul?', correct: 'Înțelegi acuzativul?', expl: 'verstehen (fără sich) = a înțelege ceva.' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🔄 Ce înseamnă propoziția? Atenție la „sich"!</strong>
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="display:block; margin-bottom:5px;"><input type="radio" name="ex2-${it.id}" value="${it.a}"> ${it.a}</label>
                <label style="display:block;"><input type="radio" name="ex2-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex2-${it.id}"]:checked`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Prepoziția fixă (auf/an/vor/mit/bei) (8 itemi)
// ============================================
const ex3Data = [
    { id: 'a', prompt: 'Ich verlasse mich ____ dich.', hint: 'sich verlassen ___ + Akk', correct: 'auf', accept: ['auf'] },
    { id: 'b', prompt: 'Ich erinnere mich ____ den Sommer.', hint: 'sich erinnern ___ + Akk', correct: 'an', accept: ['an'] },
    { id: 'c', prompt: 'Er fürchtet sich ____ Spinnen.', hint: 'sich fürchten ___ + Dat', correct: 'vor', accept: ['vor'] },
    { id: 'd', prompt: 'Ich treffe mich ____ Freunden.', hint: 'sich treffen ___ + Dat', correct: 'mit', accept: ['mit'] },
    { id: 'e', prompt: 'Ich entschuldige mich ____ der Lehrerin.', hint: 'sich entschuldigen ___ + Dat', correct: 'bei', accept: ['bei'] },
    { id: 'f', prompt: 'Verstehst du dich gut ____ deinem Bruder?', hint: 'sich verstehen ___ + Dat', correct: 'mit', accept: ['mit'] },
    { id: 'g', prompt: 'Erinnerst du dich ____ deinen ersten Tag?', hint: 'sich erinnern ___ + Akk', correct: 'an', accept: ['an'] },
    { id: 'h', prompt: 'Ich verlasse mich ____ meine Familie.', hint: 'sich verlassen ___ + Akk', correct: 'auf', accept: ['auf'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🔗 Completează cu prepoziția fixă a verbului.</strong><br>
        sich verlassen <em>auf</em> · sich erinnern <em>an</em> · sich fürchten <em>vor</em> · sich treffen/verstehen <em>mit</em> · sich entschuldigen <em>bei</em>.
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="auf / an / vor / mit / bei">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Completează verbul la forma corectă (8 itemi)
// ============================================
const ex4Data = [
    { id: 'a', prompt: 'Ich ____ mich an meine Kindheit.', hint: 'a-și aminti (sich erinnern, forma ich)', correct: 'erinnere', accept: ['erinnere'] },
    { id: 'b', prompt: 'Ich ____ mich auf dich.', hint: 'a se baza (sich verlassen, forma ich)', correct: 'verlasse', accept: ['verlasse'] },
    { id: 'c', prompt: 'Er ____ sich bei mir.', hint: 'a-și cere scuze (sich entschuldigen, forma er)', correct: 'entschuldigt', accept: ['entschuldigt'] },
    { id: 'd', prompt: 'Wir ____ uns morgen.', hint: 'a se întâlni (sich treffen, forma wir)', correct: 'treffen', accept: ['treffen'] },
    { id: 'e', prompt: 'Ich ____ mir das gut vor.', hint: 'a-și imagina (sich vorstellen, forma ich — „vor" e deja la final)', correct: 'stelle', accept: ['stelle'] },
    { id: 'f', prompt: 'Sie ____ sich vor dem Hund.', hint: 'a se teme (sich fürchten, forma sie/ea)', correct: 'fürchtet', accept: ['fürchtet'] },
    { id: 'g', prompt: 'Ich ____ mich gut mit ihr.', hint: 'a se înțelege (sich verstehen, forma ich)', correct: 'verstehe', accept: ['verstehe'] },
    { id: 'h', prompt: 'Ich ____ mich schnell um.', hint: 'a se schimba (sich umziehen, forma ich — „um" e deja la final)', correct: 'ziehe', accept: ['ziehe'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🧩 Completează verbul reflexiv la forma corectă (conjugat).</strong>
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex4-${it.id}" placeholder="verb conjugat...">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Mă bazez pe tine.', correct: 'Ich verlasse mich auf dich.', accept: ['ich verlasse mich auf dich'] },
    { id: 'b', ro: 'Îmi amintesc de tine.', correct: 'Ich erinnere mich an dich.', accept: ['ich erinnere mich an dich'] },
    { id: 'c', ro: 'Îmi cer scuze.', correct: 'Ich entschuldige mich.', accept: ['ich entschuldige mich'] },
    { id: 'd', ro: 'Mă întâlnesc cu un prieten.', correct: 'Ich treffe mich mit einem Freund.', accept: ['ich treffe mich mit einem freund'] },
    { id: 'e', ro: 'Pot să mă prezint?', correct: 'Darf ich mich vorstellen?', accept: ['darf ich mich vorstellen', 'kann ich mich vorstellen'] },
    { id: 'f', ro: 'Îmi imaginez o vacanță.', correct: 'Ich stelle mir einen Urlaub vor.', accept: ['ich stelle mir einen urlaub vor'] },
    { id: 'g', ro: 'Mă schimb repede.', correct: 'Ich ziehe mich schnell um.', accept: ['ich ziehe mich schnell um'] },
    { id: 'h', ro: 'Mă mut la Berlin.', correct: 'Ich ziehe nach Berlin um.', accept: ['ich ziehe nach berlin um'] },
    { id: 'i', ro: 'Mi-e frică de păianjeni.', correct: 'Ich fürchte mich vor Spinnen.', accept: ['ich fürchte mich vor spinnen'] },
    { id: 'j', ro: 'Mă înțeleg bine cu sora mea.', correct: 'Ich verstehe mich gut mit meiner Schwester.', accept: ['ich verstehe mich gut mit meiner schwester'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Traduce în germană.</strong> Nu uita pronumele reflexiv (mich/mir) și prepoziția fixă!
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie traducerea în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
