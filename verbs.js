// ============================================
// VERB-KONJUGATION - A2.2 Lecția 11: Reflexive Verben mit Bedeutungsänderung
// 6 verbe: sich vorstellen · sich verlassen · sich erinnern · sich entschuldigen · sich treffen · sich umziehen
// ============================================

const verbsData = [
    {
        inf: 'sich vorstellen', ro: 'a-și imagina (+ Dativ)', typ: 'regulat / TRENNBAR', aux: 'haben', part: 'vorgestellt',
        praes: [
            ['ich','stelle mir vor','îmi imaginez'],['du','stellst dir vor','îți imaginezi'],['er/sie/es','stellt sich vor','își imaginează'],
            ['wir','stellen uns vor','ne imaginăm'],['ihr','stellt euch vor','vă imaginați'],['sie/Sie','stellen sich vor','își imaginează / imaginați']
        ],
        praet: [
            ['ich','stellte mir vor','îmi imaginam'],['du','stelltest dir vor','îți imaginai'],['er/sie/es','stellte sich vor','își imagina'],
            ['wir','stellten uns vor','ne imaginam'],['ihr','stelltet euch vor','vă imaginați'],['sie/Sie','stellten sich vor','își imaginau']
        ],
        perf: [
            ['ich','habe mir vorgestellt','mi-am imaginat'],['du','hast dir vorgestellt','ți-ai imaginat'],['er/sie/es','hat sich vorgestellt','și-a imaginat'],
            ['wir','haben uns vorgestellt','ne-am imaginat'],['ihr','habt euch vorgestellt','v-ați imaginat'],['sie/Sie','haben sich vorgestellt','și-au imaginat']
        ],
        note: '🚨 DATIV reflexiv (mir/dir) — pentru că mai e un obiect: sich (Dat) etwas vorstellen = a-și imagina. TRENNBAR (vor- la final). FĂRĂ sich = vorstellen = a prezenta!'
    },
    {
        inf: 'sich verlassen (auf)', ro: 'a se baza pe', typ: 'tare / untrennbar', aux: 'haben', part: 'verlassen',
        praes: [
            ['ich','verlasse mich','mă bazez'],['du','verlässt dich','te bazezi'],['er/sie/es','verlässt sich','se bazează'],
            ['wir','verlassen uns','ne bazăm'],['ihr','verlasst euch','vă bazați'],['sie/Sie','verlassen sich','se bazează / bazați']
        ],
        praet: [
            ['ich','verließ mich','mă bazam'],['du','verließt dich','te bazai'],['er/sie/es','verließ sich','se baza'],
            ['wir','verließen uns','ne bazam'],['ihr','verließt euch','vă bazați'],['sie/Sie','verließen sich','se bazau']
        ],
        perf: [
            ['ich','habe mich verlassen','m-am bazat'],['du','hast dich verlassen','te-ai bazat'],['er/sie/es','hat sich verlassen','s-a bazat'],
            ['wir','haben uns verlassen','ne-am bazat'],['ihr','habt euch verlassen','v-ați bazat'],['sie/Sie','haben sich verlassen','s-au bazat']
        ],
        note: '🚨 TARE (a→ä: du verlässt) + prefix NESEPARABIL ver- → FĂRĂ ge- (verlassen). Cere AUF + Akk. FĂRĂ sich = verlassen = a părăsi! (Anna hat Felix verlassen.)'
    },
    {
        inf: 'sich erinnern (an)', ro: 'a-și aminti', typ: 'regulat', aux: 'haben', part: 'erinnert',
        praes: [
            ['ich','erinnere mich','îmi amintesc'],['du','erinnerst dich','îți amintești'],['er/sie/es','erinnert sich','își amintește'],
            ['wir','erinnern uns','ne amintim'],['ihr','erinnert euch','vă amintiți'],['sie/Sie','erinnern sich','își amintesc / amintiți']
        ],
        praet: [
            ['ich','erinnerte mich','îmi aminteam'],['du','erinnertest dich','îți aminteai'],['er/sie/es','erinnerte sich','își amintea'],
            ['wir','erinnerten uns','ne aminteam'],['ihr','erinnertet euch','vă aminteați'],['sie/Sie','erinnerten sich','își aminteau']
        ],
        perf: [
            ['ich','habe mich erinnert','mi-am amintit'],['du','hast dich erinnert','ți-ai amintit'],['er/sie/es','hat sich erinnert','și-a amintit'],
            ['wir','haben uns erinnert','ne-am amintit'],['ihr','habt euch erinnert','v-ați amintit'],['sie/Sie','haben sich erinnert','și-au amintit']
        ],
        note: '🚨 Regulat, prefix NESEPARABIL er- → FĂRĂ ge- (erinnert). Cere AN + Akk: Ich erinnere mich an dich. FĂRĂ sich = erinnern + A + an = a-i reaminti cuiva.'
    },
    {
        inf: 'sich entschuldigen', ro: 'a-și cere scuze', typ: 'regulat', aux: 'haben', part: 'entschuldigt',
        praes: [
            ['ich','entschuldige mich','îmi cer scuze'],['du','entschuldigst dich','îți ceri scuze'],['er/sie/es','entschuldigt sich','își cere scuze'],
            ['wir','entschuldigen uns','ne cerem scuze'],['ihr','entschuldigt euch','vă cereți scuze'],['sie/Sie','entschuldigen sich','își cer scuze / cereți']
        ],
        praet: [
            ['ich','entschuldigte mich','îmi ceream scuze'],['du','entschuldigtest dich','îți cereai scuze'],['er/sie/es','entschuldigte sich','își cerea scuze'],
            ['wir','entschuldigten uns','ne ceream scuze'],['ihr','entschuldigtet euch','vă cereați scuze'],['sie/Sie','entschuldigten sich','își cereau scuze']
        ],
        perf: [
            ['ich','habe mich entschuldigt','mi-am cerut scuze'],['du','hast dich entschuldigt','ți-ai cerut scuze'],['er/sie/es','hat sich entschuldigt','și-a cerut scuze'],
            ['wir','haben uns entschuldigt','ne-am cerut scuze'],['ihr','habt euch entschuldigt','v-ați cerut scuze'],['sie/Sie','haben sich entschuldigt','și-au cerut scuze']
        ],
        note: '🚨 Regulat, prefix NESEPARABIL ent- → FĂRĂ ge- (entschuldigt). Cere BEI + Dat: Ich entschuldige mich bei dir. „Entschuldigung!" = Scuze!'
    },
    {
        inf: 'sich treffen (mit)', ro: 'a se întâlni (intenționat)', typ: 'tare (neregulat)', aux: 'haben', part: 'getroffen',
        praes: [
            ['ich','treffe mich','mă întâlnesc'],['du','triffst dich','te întâlnești'],['er/sie/es','trifft sich','se întâlnește'],
            ['wir','treffen uns','ne întâlnim'],['ihr','trefft euch','vă întâlniți'],['sie/Sie','treffen sich','se întâlnesc / întâlniți']
        ],
        praet: [
            ['ich','traf mich','mă întâlneam'],['du','trafst dich','te întâlneai'],['er/sie/es','traf sich','se întâlnea'],
            ['wir','trafen uns','ne întâlneam'],['ihr','traft euch','vă întâlneați'],['sie/Sie','trafen sich','se întâlneau']
        ],
        perf: [
            ['ich','habe mich getroffen','m-am întâlnit'],['du','hast dich getroffen','te-ai întâlnit'],['er/sie/es','hat sich getroffen','s-a întâlnit'],
            ['wir','haben uns getroffen','ne-am întâlnit'],['ihr','habt euch getroffen','v-ați întâlnit'],['sie/Sie','haben sich getroffen','s-au întâlnit']
        ],
        note: '🚨 TARE (e→i: du triffst, er trifft; Prät traf → Part getroffen). Cere MIT + Dat: Ich treffe mich mit Annika (intenționat). FĂRĂ sich = treffen = a întâlni întâmplător.'
    },
    {
        inf: 'sich umziehen', ro: 'a se schimba (hainele)', typ: 'tare / TRENNBAR', aux: 'haben', part: 'umgezogen',
        praes: [
            ['ich','ziehe mich um','mă schimb'],['du','ziehst dich um','te schimbi'],['er/sie/es','zieht sich um','se schimbă'],
            ['wir','ziehen uns um','ne schimbăm'],['ihr','zieht euch um','vă schimbați'],['sie/Sie','ziehen sich um','se schimbă / schimbați']
        ],
        praet: [
            ['ich','zog mich um','mă schimbam'],['du','zogst dich um','te schimbai'],['er/sie/es','zog sich um','se schimba'],
            ['wir','zogen uns um','ne schimbam'],['ihr','zogt euch um','vă schimbați'],['sie/Sie','zogen sich um','se schimbau']
        ],
        perf: [
            ['ich','habe mich umgezogen','m-am schimbat'],['du','hast dich umgezogen','te-ai schimbat'],['er/sie/es','hat sich umgezogen','s-a schimbat'],
            ['wir','haben uns umgezogen','ne-am schimbat'],['ihr','habt euch umgezogen','v-ați schimbat'],['sie/Sie','haben sich umgezogen','s-au schimbat']
        ],
        note: '🚨 TARE (ziehen→zog) + TRENNBAR (um- la final). Perfekt: um + ge + zogen = umgezogen. CU sich = a se schimba (hainele). FĂRĂ sich = umziehen = a se muta (locuința)!'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#5A5147;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe reflexive cu schimbare de sens</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb. Reține pronumele: <strong>mich</strong> (Akk) la cele mai multe, <strong>mir</strong> (Dativ) la <em>sich vorstellen</em> (a imagina).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Fiecare verb aici își schimbă sensul FĂRĂ sich: <strong>sich verlassen auf</strong> (te bazezi) vs <strong>verlassen</strong> (părăsești); <strong>sich umziehen</strong> (te schimbi) vs <strong>umziehen</strong> (te muți). Iar <strong>sich vorstellen</strong> cere Dativ (mir), nu Akkusativ! 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
